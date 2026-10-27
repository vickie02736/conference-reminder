import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync(new URL('../google-apps-script/Index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const flush = () => new Promise(setImmediate);

class Node {
  constructor(tag) { this.tag = tag; this.children = []; this.attributes = {}; this.listeners = {}; this.ownText = ''; this.disabled = false; this.checked = false; this.hidden = false; this.value = ''; }
  get textContent() { return this.ownText + this.children.map((child) => child.textContent).join(''); }
  set textContent(value) { this.ownText = String(value); this.children = []; }
  append(...children) { children.forEach((child) => { child.parent = this; this.children.push(child); }); }
  replaceChildren(...children) { this.ownText = ''; this.children = []; this.append(...children); }
  setAttribute(key, value) { this.attributes[key] = String(value); if (key === 'value') this.value = String(value); if (key === 'hidden') this.hidden = true; }
  removeAttribute(key) { delete this.attributes[key]; if (key === 'hidden') this.hidden = false; }
  setCustomValidity(value) { this.validationMessage = value; }
  addEventListener(name, listener) { (this.listeners[name] ||= []).push(listener); }
  async dispatch(name) { await Promise.all((this.listeners[name] || []).map((listener) => listener({ preventDefault() {} }))); await flush(); }
  all(predicate) { return [this, ...this.children.flatMap((child) => child.all(() => true))].filter(predicate); }
}

function eventDetails(zone = 'Europe/London') {
  return { emailEnabled: true, event: {
    id: 'event-one', name: 'A materials conference', url: 'https://example.org/conference',
    start: '2026-10-29', end: '2026-10-30', enabled: true,
    milestones: [
      { id: 'start', kind: 'conference_start', label: 'Conference starts', date: '2026-10-29', precision: 'date', available: zone !== 'Asia/Shanghai', unavailableReason: 'past' },
      { id: 'end', kind: 'conference_end', label: 'Conference ends', date: '2026-10-30', precision: 'date', available: true }
    ]
  } };
}

async function harness({ action = 'subscribe', view = '', eventId = 'event-one', defaultZone = 'Asia/Shanghai', handlers = {} } = {}) {
  const nodes = Object.fromEntries(['content', 'heading', 'status'].map((id) => [id, new Node('div')]));
  const calls = [];
  const api = {
    getEventDetails: ({ timeZone }) => eventDetails(timeZone),
    subscribe: () => ({ message: 'Confirmation sent.' }),
    updateSubscription: () => ({ message: 'Preferences saved.' }),
    unsubscribe: () => ({ message: 'Subscription cancelled.' }),
    ...handlers
  };
  const google = { script: {} };
  Object.defineProperty(google.script, 'run', { get() {
    let success, failure;
    const runner = new Proxy({}, { get(_, name) {
      if (name === 'withSuccessHandler') return (fn) => { success = fn; return runner; };
      if (name === 'withFailureHandler') return (fn) => { failure = fn; return runner; };
      return (input) => {
        calls.push({ name, input });
        Promise.resolve().then(() => {
          if (!api[name]) throw new Error('Unexpected RPC: ' + name);
          return api[name](input);
        }).then(success, failure);
      };
    } });
    return runner;
  } });
  const localIntl = {
    DateTimeFormat: function (...args) {
      return args.length ? new Intl.DateTimeFormat(...args) : { resolvedOptions: () => ({ timeZone: defaultZone }) };
    },
    supportedValuesOf: Intl.supportedValuesOf
  };
  const context = vm.createContext({ document: { getElementById: (id) => nodes[id], createElement: (tag) => new Node(tag) }, google, Intl: localIntl });
  const bootstrap = { action, view, eventId, token: 'private-test-token' };
  await vm.runInContext(script.replace('<?!= bootstrapJson ?>', JSON.stringify(bootstrap)), context);
  const find = (predicate) => nodes.content.all(predicate)[0];
  const input = (value) => find((node) => node.tag === 'input' && node.value === value);
  const button = (text) => find((node) => node.tag === 'button' && node.textContent === text);
  const zone = () => find((node) => node.tag === 'label' && node.ownText === 'Your time zone').children[0];
  const form = () => find((node) => node.tag === 'form');
  return { ...nodes, calls, api, find, input, button, zone, form };
}

test('changing a subscription time zone refreshes dates, keeps valid choices and sends the new zone', async () => {
  const h = await harness();
  const send = h.button('Send confirmation email');
  assert.equal(h.input('start').disabled, true);
  assert.equal(send.disabled, true);
  h.input('end').checked = true;
  await h.input('end').dispatch('change');
  assert.equal(send.disabled, false);
  h.zone().value = 'Europe/London';
  await h.zone().dispatch('input');
  assert.equal(send.disabled, true);
  await h.form().dispatch('submit');
  assert.equal(h.calls.some((call) => call.name === 'subscribe'), false);
  await h.zone().dispatch('change');
  assert.equal(h.input('start').disabled, false);
  assert.equal(h.input('end').checked, true);
  assert.equal(send.disabled, false);
  h.input('start').checked = true;
  await h.input('start').dispatch('change');
  await h.form().dispatch('submit');
  const request = h.calls.find((call) => call.name === 'subscribe');
  assert.equal(request.input.timeZone, 'Europe/London');
  assert.deepEqual(Array.from(request.input.milestoneIds), ['start', 'end']);
});

test('out-of-order time-zone responses cannot restore stale date availability', async () => {
  const pending = {};
  const h = await harness();
  h.api.getEventDetails = ({ timeZone }) => new Promise((resolve) => { pending[timeZone] = resolve; });
  h.zone().value = 'Europe/London';
  const london = h.zone().dispatch('change');
  await flush();
  h.zone().value = 'Asia/Shanghai';
  const shanghai = h.zone().dispatch('change');
  await flush();
  pending['Asia/Shanghai'](eventDetails('Asia/Shanghai'));
  await shanghai;
  assert.equal(h.input('start').disabled, true);
  pending['Europe/London'](eventDetails('Europe/London'));
  await london;
  assert.equal(h.input('start').disabled, true);
  assert.equal(h.zone().value, 'Asia/Shanghai');
});

test('invalid zones and failed refreshes block submission and a retry restores the form', async () => {
  const h = await harness({ defaultZone: 'Europe/London' });
  h.input('end').checked = true;
  await h.input('end').dispatch('change');
  const count = h.calls.length;
  h.zone().value = 'Invalid/Zone';
  await h.zone().dispatch('change');
  assert.equal(h.calls.length, count);
  assert.match(h.zone().validationMessage, /valid IANA time zone/);
  assert.equal(h.button('Send confirmation email').disabled, true);
  h.api.getEventDetails = () => { throw new Error('Catalogue temporarily unavailable.'); };
  h.zone().value = 'Asia/Shanghai';
  await h.zone().dispatch('change');
  assert.equal(h.button('Retry date check').hidden, false);
  assert.equal(h.button('Send confirmation email').disabled, true);
  h.api.getEventDetails = ({ timeZone }) => eventDetails(timeZone);
  await h.button('Retry date check').dispatch('click');
  assert.equal(h.button('Retry date check').hidden, true);
  assert.equal(h.input('end').checked, true);
  assert.equal(h.button('Send confirmation email').disabled, false);
});

test('management time-zone changes drop unavailable choices and retain independent choices', async () => {
  const h = await harness({ action: 'manage', defaultZone: 'Europe/London', handlers: {
    getManagementDetails: () => ({ email: 'reader@example.com', catalogueAvailable: true, subscriptions: [{
      subscription: { id: 'sub-one', eventId: 'event-one', status: 'active', milestoneIds: ['start', 'end'], leadDays: [3], timeZone: 'Europe/London' },
      event: eventDetails().event
    }] })
  } });
  assert.equal(h.button('Save preferences').disabled, false);
  h.zone().value = 'Asia/Shanghai';
  await h.zone().dispatch('change');
  assert.equal(h.input('start').disabled, true);
  assert.equal(h.input('start').checked, false);
  assert.equal(h.input('end').checked, true);
  await h.form().dispatch('submit');
  const request = h.calls.find((call) => call.name === 'updateSubscription');
  assert.deepEqual(Array.from(request.input.milestoneIds), ['end']);
  assert.equal(request.input.timeZone, 'Asia/Shanghai');
});

test('an unavailable catalogue still renders functional unsubscribe controls', async () => {
  const h = await harness({ action: 'unsubscribe', handlers: {
    getManagementDetails: () => ({ email: 'reader@example.com', catalogueAvailable: false, subscriptions: [{
      subscription: { id: 'sub-one', eventId: 'event-one', status: 'active' }, event: null
    }] })
  } });
  assert.match(h.content.textContent, /You can still unsubscribe/);
  assert.equal(h.button('Unsubscribe from all conferences').disabled, false);
  assert.equal(h.button('Save preferences'), undefined);
  await h.button('Unsubscribe from this conference').dispatch('click');
  assert.equal(h.calls.find((call) => call.name === 'unsubscribe').input.subscriptionId, 'sub-one');
  assert.match(h.content.textContent, /Subscription cancelled/);
});

test('the manage-reminders view opens the management form without asking for a conference card', async () => {
  const h = await harness({ view: 'request-manage', eventId: '' });
  assert.match(h.content.textContent, /Enter the email address you used for reminders/);
  assert.doesNotMatch(h.content.textContent, /Open Send reminder from a conference card/);
  const details = h.find((node) => node.tag === 'details');
  assert.equal(details.attributes.open, '');
  assert.equal(h.button('Email my management link').disabled, false);
});

test('subscribe form dates use readable English rather than ISO', async () => {
  const h = await harness({ defaultZone: 'Europe/London' });
  assert.match(h.content.textContent, /29 Oct 2026/);
  assert.doesNotMatch(h.find((node) => node.tag === 'small').textContent, /^2026-10-29/);
});

test('watchlist details explain why reminders are unavailable without a sign-up form', async () => {
  const h = await harness({ handlers: { getEventDetails: () => {
    const result = eventDetails();
    result.event.awaitingDates = true;
    result.event.enabled = false;
    return result;
  } } });
  assert.match(h.content.textContent, /Dates awaiting confirmation/);
  assert.match(h.content.textContent, /Email reminders will become available once its dates are confirmed/);
  assert.equal(h.button('Send confirmation email'), undefined);
  assert.equal(h.calls.some((call) => call.name === 'subscribe'), false);
});
