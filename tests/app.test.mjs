import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as core from '../assets/core.mjs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const source = fs.readFileSync(new URL('../assets/app.js', import.meta.url), 'utf8').replace(/^import .*?;\n/, '');
const catalogue = JSON.parse(fs.readFileSync(new URL('../data/conferences.json', import.meta.url), 'utf8'));
const config = JSON.parse(fs.readFileSync(new URL('../config.json', import.meta.url), 'utf8'));
const today = '2026-10-27', now = Date.parse('2026-10-27T18:00:00Z');

class Element {
  constructor() { this.value = ''; this.textContent = ''; this.innerHTML = ''; this.checked = false; this.open = false; this.children = []; this.attributes = {}; this.listeners = {}; }
  append(child) { this.children.push(child); }
  replaceChildren(...children) { this.children = children; }
  setAttribute(name, value) { this.attributes[name] = value; }
  addEventListener(name, callback) { (this.listeners[name] ??= []).push(callback); }
  dispatch(name) { this['on' + name]?.({ target: this }); for (const callback of this.listeners[name] || []) callback({ target: this }); }
  click() { this.dispatch('click'); }
}

async function harness({ delayed = false, failed = false } = {}) {
  const elements = new Map([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => [match[1], new Element()]));
  for (const match of html.matchAll(/<select id="([^"]+)"[^>]*>\s*<option value="([^"]+)"/g)) elements.get(match[1]).value = match[2];
  elements.get('catalogue-list').innerHTML = 'Loading the conference collection…';
  let release;
  const response = { ok: !failed, json: async () => structuredClone(catalogue) };
  const catalogueResponse = delayed ? new Promise((resolve) => { release = () => resolve(response); }) : Promise.resolve(response);
  const context = vm.createContext({
    ...core, URL, Date, console,
    todayISO: () => today,
    upcomingNodes: (event) => core.upcomingNodes(event, today, now),
    eventStatuses: (event) => core.eventStatuses(event, today, now),
    filterEvents: (events, filters) => core.filterEvents(events, filters, today, now),
    document: { getElementById: (id) => elements.get(id), createElement: () => new Element() },
    setInterval: () => 1,
    fetch: (url) => url.includes('conferences.json') ? catalogueResponse : Promise.resolve({ ok: true, json: async () => config })
  });
  vm.runInContext(source, context, { filename: 'assets/app.js' });
  const settle = () => new Promise(setImmediate);
  await settle();
  const set = (id, value) => { elements.get(id).value = value; elements.get(id).dispatch(id === 'search' ? 'input' : 'change'); };
  return { elements, set, settle, release, list: () => elements.get('catalogue-list').innerHTML };
}

test('global totals and provisional cards use the same scheduled/watchlist classification', async () => {
  const h = await harness(); h.set('region', 'all');
  assert.deepEqual([...h.elements.get('catalogue-stats').innerHTML.matchAll(/<b>(\d+)<\/b>/g)].map((m) => Number(m[1])), [96, 22, 41, 6]);
  assert.equal(h.elements.get('result-count').textContent, '96 scheduled · 6 dates pending / unconfirmed');
  for (const event of catalogue.watchlist) {
    const card = h.list().match(new RegExp('<article[^>]*id="event-' + event.id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, event.id);
    assert.match(card, /class="conference watchlist"/);
    assert.match(card, /disabled[^>]*>Dates not confirmed<\/button>/);
    assert.doesNotMatch(card, /script\.google\.com/);
    if (event.start) assert.match(card, /Provisional:/);
  }
});

test('source shortcuts reveal all affected activities and the source filter combines with topics', async () => {
  const h = await harness();
  h.set('search', 'unmatched query');
  const shortcuts = h.elements.get('source-shortcuts').children;
  assert.deepEqual(shortcuts.map((button) => button.textContent), ['Sources to review (85)', 'Source errors (12)']);
  shortcuts[0].click();
  assert.equal(h.elements.get('region').value, 'all');
  assert.equal(h.elements.get('search').value, '');
  assert.equal(h.elements.get('advanced-filters').open, true);
  assert.equal(shortcuts[0].attributes['aria-pressed'], 'true');
  assert.equal((h.list().match(/<article /g) || []).length, 85);
  h.set('topic', 'MOF');
  const expected = [...catalogue.events, ...catalogue.watchlist].filter((e) => e.check.status === 'review_required' && e.tags?.includes('MOF'));
  assert.equal((h.list().match(/<article /g) || []).length, expected.length);
  assert.equal(h.elements.get('advanced-count').textContent, '(2 selected)');
  shortcuts[1].click();
  assert.equal((h.list().match(/<article /g) || []).length, 12);
  h.elements.get('reset-filters').click();
  assert.equal(h.elements.get('source-check').value, 'all');
  assert.equal(h.elements.get('topic').value, 'all');
  assert.equal(h.elements.get('advanced-count').textContent, '');
  assert.equal(h.elements.get('advanced-filters').open, false);
  assert.equal(shortcuts[1].attributes['aria-pressed'], 'false');
  assert.equal(h.elements.get('result-count').textContent, '64 scheduled · 4 dates pending / unconfirmed');
});

test('loading retains its loading state even if email configuration arrives first', async () => {
  const h = await harness({ delayed: true });
  assert.match(h.list(), /Loading the conference collection/);
  assert.equal(h.elements.get('result-count').textContent, '');
  h.release(); await h.settle();
  assert.match(h.list(), /<article /);
});

test('a failed catalogue cannot turn into a misleading empty search result', async () => {
  const h = await harness({ failed: true });
  h.set('search', 'MOF');
  assert.match(h.list(), /temporarily unavailable/);
  assert.equal(h.elements.get('result-count').textContent, 'Catalogue unavailable');
});
