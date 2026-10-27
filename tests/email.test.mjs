import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';

const source = fs.readFileSync(new URL('../google-apps-script/Code.gs', import.meta.url), 'utf8');
const catalogue = () => ({ metadata: { schema_version: 1 }, events: [{
  id: 'event-one', name: 'Materials <AI> conference', url: 'https://example.org/conference',
  status: 'Abstract submissions closed; the conference has not yet taken place.',
  milestones: [{ id: 'abstract', kind: 'abstract', label: 'Abstract deadline', date: '2026-11-05',
    time: null, timezone: null, precision: 'date', status: 'verified',
    source: 'https://example.org/dates', version: 1 }]
}], watchlist: [], updates: [] });

function harness() {
  const emptyCalls = () => ({ openById: 0, sheetLookups: 0, lastRow: 0, reads: [], writes: [] });
  const state = { now: Date.parse('2026-10-27T12:00:00Z'), catalog: catalogue(), properties: {},
    sheets: new Map(), mails: [], triggers: [], quota: 100, flushes: 0, locked: false,
    httpStatus: 200, sendFailure: false, onSend: null, active: 'owner@gmail.com', bootstrap: '', calls: emptyCalls() };
  class Clock extends Date { constructor(...args) { super(...(args.length ? args : [state.now])); } static now() { return state.now; } }
  class Sheet {
    constructor(name) { this.name = name; this.rows = []; }
    getLastRow() { state.calls.lastRow++; return this.rows.length; }
    setFrozenRows() {}
    getRange(row, column, height, width) {
      return {
        getValues: () => {
          state.calls.reads.push({ sheet: this.name, row, column, height, width });
          return Array.from({ length: height }, (_, i) => Array.from({ length: width }, (_, j) => this.rows[row + i - 1]?.[column + j - 1] ?? ''));
        },
        setValues: (values) => {
          state.calls.writes.push({ sheet: this.name, row, column, height, width });
          values.forEach((valuesRow, i) => {
            this.rows[row + i - 1] ??= [];
            valuesRow.forEach((value, j) => { this.rows[row + i - 1][column + j - 1] = value; });
          });
        }
      };
    }
  }
  const book = { getId: () => 'private-sheet-id', getUrl: () => 'https://docs.google.com/spreadsheets/d/private-sheet-id/edit',
    getSheetByName: (name) => { state.calls.sheetLookups++; return state.sheets.get(name); },
    insertSheet: (name) => { const sheet = new Sheet(name); state.sheets.set(name, sheet); return sheet; } };
  const props = { getProperty: (key) => state.properties[key] ?? null,
    getProperties: () => ({ ...state.properties }), deleteProperty: (key) => { delete state.properties[key]; },
    setProperty: (key, value) => { state.properties[key] = value; },
    setProperties: (values) => Object.assign(state.properties, values) };
  const api = {
    Date: Clock, console: { log() {}, warn() {} },
    PropertiesService: { getScriptProperties: () => props },
    SpreadsheetApp: { create: () => book, openById: () => { state.calls.openById++; return book; }, flush: () => { state.flushes++; } },
    Session: { getActiveUser: () => ({ getEmail: () => state.active }), getEffectiveUser: () => ({ getEmail: () => 'owner@gmail.com' }) },
    ScriptApp: { getService: () => ({ getUrl: () => 'https://script.google.com/macros/s/deployed-id/exec' }),
      getProjectTriggers: () => state.triggers,
      newTrigger: (name) => ({ timeBased() { return this; }, everyMinutes(n) { assert.equal(n, 15); return this; },
        create() { state.triggers.push({ getHandlerFunction: () => name }); } }) },
    LockService: { getScriptLock: () => ({ tryLock() { if (state.locked) return false; state.locked = true; return true; }, releaseLock() { state.locked = false; } }) },
    Utilities: { DigestAlgorithm: { SHA_256: 'sha256' }, Charset: { UTF_8: 'utf8' }, getUuid: () => crypto.randomUUID(),
      computeDigest: (_, value) => [...crypto.createHash('sha256').update(value).digest()],
      formatDate: (date, timeZone) => {
        const parts = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date);
        const part = (name) => parts.find((p) => p.type === name).value;
        return `${part('year')}-${part('month')}-${part('day')}T${part('hour')}:${part('minute')}`;
      } },
    UrlFetchApp: { fetch: () => ({ getResponseCode: () => state.httpStatus, getContentText: () => JSON.stringify(state.catalog) }) },
    MailApp: { getRemainingDailyQuota: () => state.quota,
      sendEmail: (mail) => { if (state.onSend) state.onSend(mail); state.mails.push(mail); state.quota--; if (state.sendFailure) throw new Error('Provider outcome unknown'); } },
    HtmlService: { createTemplateFromFile: () => {
      const template = { bootstrapJson: '', evaluate() { state.bootstrap = template.bootstrapJson; return { setTitle: () => ({ html: true }) }; } };
      return template;
    } }
  };
  const app = vm.createContext(api);
  vm.runInContext(source, app, { filename: 'Code.gs' });
  app.setup();
  state.properties.EMAIL_ENABLED = 'true';
  const records = (table) => state.sheets.get(table).rows.slice(1).filter((row) => row[0]).map((row) => JSON.parse(row[1]));
  const preferences = (overrides = {}) => ({ email: 'reader@example.com', eventId: 'event-one', milestoneIds: ['abstract'], leadDays: [3], timeZone: 'Europe/London', company: '', ...overrides });
  const subscribe = (overrides = {}) => {
    app.subscribe(preferences(overrides));
    return state.mails.at(-1).body.match(/token=([a-f0-9]{64})/)[1];
  };
  const activate = (overrides = {}) => { const token = subscribe(overrides); app.verifySubscription({ token }); return token; };
  return { app, state, records, preferences, subscribe, activate, resetCalls: () => { state.calls = emptyCalls(); } };
}

test('setup is idempotent, private by default, and never enables email or sends', () => {
  const h = harness();
  h.state.properties.EMAIL_ENABLED = 'false';
  h.app.setup();
  assert.equal(h.state.triggers.length, 1);
  assert.equal(h.state.properties.EMAIL_ENABLED, 'false');
  assert.equal(h.state.mails.length, 0);
  assert.throws(() => h.app.subscribe(h.preferences()), /not been activated/);
  h.state.active = '';
  assert.throws(() => h.app.setup(), /editor as the owner/);
  assert.throws(() => h.app.enableEmailSending(), /editor as the owner/);
});

test('conference start and end reminders retain calendar dates and describe unpublished event times', () => {
  const h = harness(); const event = h.state.catalog.events[0];
  Object.assign(event, { start: '2027-07-04', end: '2027-07-07', type: 'Conference' });
  const base = event.milestones[0];
  event.milestones = [
    { ...base, id: 'start', kind: 'conference_start', label: 'Conference starts', date: event.start },
    { ...base, id: 'end', kind: 'conference_end', label: 'Conference ends', date: event.end }
  ];
  const details = h.app.getEventDetails({ eventId: event.id, timeZone: 'Europe/London' }).event;
  assert.equal(details.start, event.start); assert.equal(details.end, event.end);
  assert.ok(details.milestones.every((m) => m.available));
  h.activate({ milestoneIds: ['start', 'end'], leadDays: [3] });
  const rows = h.records('Deliveries');
  assert.deepEqual(rows.map((r) => new Date(r.dueAt).toISOString()), ['2027-07-01T08:00:00.000Z', '2027-07-04T08:00:00.000Z']);
  const mail = h.app.reminderMessage_(rows, 'example-token');
  assert.match(mail.text, /2027-07-04 — start time not published/);
  assert.match(mail.html, /2027-07-07 — end time not published/);
  assert.doesNotMatch(mail.text, /deadline time/);
});

test('confirmation requires explicit RPC and raw tokens are never stored in the sheet', () => {
  const h = harness(); const token = h.subscribe();
  assert.equal(h.records('Subscriptions')[0].status, 'pending');
  assert.ok(!JSON.stringify(h.records('Tokens')).includes(token));
  h.app.doGet({ parameter: { action: 'verify', token } });
  h.app.getVerificationDetails({ token });
  assert.equal(h.records('Subscriptions')[0].status, 'pending');
  h.app.dispatchReminders_();
  assert.equal(h.state.mails.length, 1);
  h.app.verifySubscription({ token });
  assert.equal(h.records('Subscriptions')[0].status, 'active');
  assert.equal(h.records('Deliveries').length, 1);
  assert.throws(() => h.app.verifySubscription({ token }), /invalid or expired/);
});

test('expired or invalid token cannot activate a subscription', () => {
  const h = harness(); const token = h.subscribe();
  h.state.now += 25 * 60 * 60 * 1000;
  assert.throws(() => h.app.verifySubscription({ token }), /invalid or expired/);
  assert.throws(() => h.app.verifySubscription({ token: 'a'.repeat(64) }), /invalid or expired/);
  assert.equal(h.records('Subscriptions')[0].status, 'pending');
});

test('confirmation revalidates paused, conflicting, removed or elapsed choices without consuming the token', () => {
  const changes = [
    (h) => { h.state.catalog.events[0].reminders_paused = true; },
    (h) => { h.state.catalog.events[0].disabled = true; },
    (h) => { h.state.catalog.events[0].milestones[0].status = 'conflict'; },
    (h) => { h.state.catalog.events[0].milestones = []; },
    (h) => { h.state.catalog.events = []; },
    (h) => { h.state.now = Date.parse('2026-10-28T10:00:00Z'); }
  ];
  for (const change of changes) {
    const h = harness();
    h.state.catalog.events[0].milestones[0].date = '2026-10-29';
    const token = h.subscribe({ leadDays: [1] });
    change(h);
    assert.throws(() => h.app.verifySubscription({ token }), /no longer available.*Open Send reminder again/);
    assert.equal(h.records('Subscriptions')[0].status, 'pending');
    assert.equal(h.records('Tokens').find((row) => row.purpose === 'verify').usedAt, null);
    assert.equal(h.records('Deliveries').length, 0);
  }
});

test('event detail availability uses the visitor time zone at a date-only reminder boundary', () => {
  const h = harness(); h.state.now = Date.parse('2026-11-04T08:30:00Z');
  const london = h.app.getEventDetails({ eventId: 'event-one', timeZone: 'Europe/London' });
  const shanghai = h.app.getEventDetails({ eventId: 'event-one', timeZone: 'Asia/Shanghai' });
  assert.equal(london.event.milestones[0].available, true);
  assert.equal(shanghai.event.milestones[0].available, false);
  assert.equal(shanghai.event.milestones[0].unavailableReason, 'past');
  assert.throws(() => h.app.getEventDetails({ eventId: 'event-one', timeZone: 'Invalid/Zone' }), /valid IANA time zone/);
});

test('watchlist announcements have a useful detail page and cannot schedule reminders', () => {
  const h = harness();
  const announcement = { ...structuredClone(h.state.catalog.events[0]), id: 'pending-conference', start: '2027-07-04' };
  h.state.catalog.watchlist.push(announcement);
  const details = h.app.getEventDetails({ eventId: announcement.id, timeZone: 'Europe/London' });
  assert.equal(details.event.name, announcement.name);
  assert.equal(details.event.awaitingDates, true);
  assert.equal(details.event.enabled, false);
  assert.ok(details.event.milestones.every((m) => !m.available));
  assert.throws(() => h.app.subscribe(h.preferences({ eventId: announcement.id })), /not accepting reminders/);
  assert.equal(h.records('Subscriptions').length, 0);
  assert.equal(h.state.mails.length, 0);

  const published = JSON.parse(fs.readFileSync(new URL('../data/conferences.json', import.meta.url), 'utf8'));
  h.state.catalog = published;
  for (const event of published.watchlist) {
    const result = h.app.getEventDetails({ eventId: event.id, timeZone: 'Europe/London' }).event;
    assert.equal(result.awaitingDates, true, event.id);
    assert.equal(result.enabled, false, event.id);
  }
});

test('validates canonical IDs, verified dates, email, lead times, zone and honeypot', () => {
  const h = harness();
  for (const input of [
    { eventId: 'attacker-event' }, { milestoneIds: ['attacker-node'] }, { leadDays: [2] },
    { timeZone: 'Invalid/Zone' }, { email: 'victim@example.com,other@example.com' }, { company: 'filled' }
  ]) assert.throws(() => h.app.subscribe(h.preferences(input)));
  h.state.catalog.events[0].milestones[0].status = 'conflict';
  assert.throws(() => h.app.subscribe(h.preferences()), /verified date/);
  assert.equal(h.state.mails.length, 0);
});

test('date-only reminders retain 09:00 visitor time across DST; exact times use source zone', () => {
  const h = harness();
  const event = h.state.catalog.events[0];
  event.milestones[0].date = '2027-03-30';
  const sub = { id: 'sub', email: 'reader@example.com', milestoneIds: ['abstract'], leadDays: [1, 3], timeZone: 'Europe/London' };
  let plans = h.app.planDeliveries_(sub, event, h.state.now);
  assert.deepEqual(Array.from(plans, (p) => new Date(p.dueAt).toISOString()), ['2027-03-29T08:00:00.000Z', '2027-03-27T09:00:00.000Z']);
  Object.assign(event.milestones[0], { precision: 'datetime', time: '12:00', timezone: 'Europe/London' });
  plans = h.app.planDeliveries_({ ...sub, timeZone: 'Asia/Shanghai' }, event, h.state.now);
  assert.deepEqual(Array.from(plans, (p) => new Date(p.dueAt).toISOString()), ['2027-03-29T11:00:00.000Z', '2027-03-27T12:00:00.000Z']);
});

test('ambiguous/nonexistent published clock times are not guessed; AoE works', () => {
  const { app } = harness();
  assert.equal(app.zonedTime_('2027-03-28', '01:30', 'Europe/London'), null);
  assert.equal(app.zonedTime_('2027-10-31', '01:30', 'Europe/London'), null);
  assert.equal(new Date(app.zonedTime_('2027-11-10', '23:59', 'Etc/GMT+12')).toISOString(), '2027-11-11T11:59:00.000Z');
  assert.equal(app.zonedTime_('2027-02-30', '09:00', 'UTC'), null);
});

test('a past lead time is skipped, while a future selected lead time is scheduled', () => {
  const h = harness(); h.state.now = Date.parse('2026-11-03T12:00:00Z');
  assert.throws(() => h.app.subscribe(h.preferences({ leadDays: [3, 7] })), /already passed/);
  h.activate({ leadDays: [1, 3, 7] });
  assert.deepEqual(h.records('Deliveries').map((p) => p.leadDays), [1]);
});

test('auth mail quota, per-email cooldown, and reminder reserve apply', () => {
  const h = harness(); h.subscribe();
  assert.throws(() => h.app.subscribe(h.preferences()), /sent no email.*saved no new reminder choices.*wait 300 more seconds/);
  assert.equal(h.state.mails.length, 1);
  h.state.now += 6 * 60 * 1000;
  h.state.quota = 10;
  assert.throws(() => h.app.subscribe(h.preferences()), /sign-up limit/);
  h.state.quota = 100;
  h.state.properties.AUTH_WINDOW_COUNT = '20';
  assert.throws(() => h.app.subscribe(h.preferences({ email: 'another@example.com' })), /sign-up limit/);
  h.state.now += 24 * 60 * 60 * 1000;
  h.app.subscribe(h.preferences({ email: 'another@example.com' }));
  assert.equal(h.state.mails.length, 2);
});

test('cooldown rejects a second conference without changing pending choices; exact-boundary retry and other emails work', () => {
  const h = harness();
  h.state.catalog.events.push({ ...structuredClone(h.state.catalog.events[0]), id: 'event-two', name: 'Second conference' });
  const firstToken = h.subscribe();
  const original = h.records('Subscriptions')[0];
  const originalTokens = h.records('Tokens');
  const firstRequestAt = h.state.now;
  h.state.now += 60 * 1000;
  assert.throws(() => h.app.subscribe(h.preferences({ eventId: 'event-two', leadDays: [1] })),
    /sent no email.*saved no new reminder choices.*wait 240 more seconds.*existing subscriptions are unchanged/);
  assert.deepEqual(h.records('Subscriptions'), [original]);
  assert.deepEqual(h.records('Tokens'), originalTokens);
  assert.equal(h.records('Deliveries').length, 0);
  assert.equal(h.state.mails.length, 1);
  assert.equal(h.state.quota, 99);
  assert.equal(h.state.properties.AUTH_WINDOW_COUNT, '1');
  assert.equal(h.state.properties['AUTH_LAST_' + h.app.hash_('reader@example.com')], String(firstRequestAt));

  h.activate({ email: 'other@example.com', eventId: 'event-two', leadDays: [7], timeZone: 'UTC' });
  assert.equal(h.state.mails.length, 2);
  assert.equal(h.records('Subscriptions').find((sub) => sub.email === 'other@example.com').status, 'active');
  assert.deepEqual(h.records('Subscriptions').find((sub) => sub.id === original.id), original);

  h.state.now = firstRequestAt + 5 * 60 * 1000;
  const secondToken = h.subscribe({ eventId: 'event-two', leadDays: [1], timeZone: 'Asia/Shanghai' });
  h.app.verifySubscription({ token: secondToken });
  const second = h.records('Subscriptions').find((sub) => sub.email === 'reader@example.com' && sub.eventId === 'event-two');
  assert.equal(second.status, 'active');
  assert.deepEqual(second.leadDays, [1]);
  assert.equal(second.timeZone, 'Asia/Shanghai');
  assert.deepEqual(h.records('Subscriptions').find((sub) => sub.id === original.id), original);
  h.app.verifySubscription({ token: firstToken });
  assert.equal(h.records('Subscriptions').find((sub) => sub.id === original.id).status, 'active');
  assert.equal(h.state.mails.length, 3);
  assert.equal(h.state.properties.AUTH_WINDOW_COUNT, '3');
});

test('management cooldown gives identical explicit feedback for existing and nonexistent accounts', () => {
  const h = harness(); h.subscribe();
  const unknown = { email: 'unknown@example.com', company: '' };
  const accepted = h.app.requestManagementLink(unknown);
  assert.match(accepted.message, /If eligible/);
  assert.equal(h.state.mails.length, 1);
  assert.equal(h.state.properties.AUTH_WINDOW_COUNT, '2');
  const rejected = (email) => {
    let message;
    assert.throws(() => h.app.requestManagementLink({ email, company: '' }), (error) => {
      message = error.message;
      return /sent no email.*saved no new reminder choices.*wait 300 more seconds/.test(message);
    });
    return message;
  };
  assert.equal(rejected('reader@example.com'), rejected('unknown@example.com'));
  assert.equal(h.state.mails.length, 1);
  assert.equal(h.state.properties.AUTH_WINDOW_COUNT, '2');
  assert.equal(h.records('Subscriptions').length, 1);
  h.state.now += 5 * 60 * 1000 - 1;
  assert.throws(() => h.app.requestManagementLink(unknown), /wait 1 more second before/);
  h.state.now++;
  assert.match(h.app.requestManagementLink(unknown).message, /If eligible/);
  assert.equal(h.state.properties.AUTH_WINDOW_COUNT, '3');
  assert.equal(h.state.mails.length, 1);
});

test('canonical titles are escaped and arbitrary user content cannot enter an email', () => {
  const h = harness(); h.subscribe({ title: '<script>attacker</script>', url: 'https://attacker.invalid' });
  const mail = h.state.mails[0];
  assert.ok(mail.htmlBody.includes('Materials &lt;AI&gt; conference'));
  assert.ok(!mail.htmlBody.includes('attacker'));
  assert.ok(!mail.body.includes('reader@example.com'));
});

test('a date change cancels old pending tasks and reschedules without needing a version bump', () => {
  const h = harness(); h.activate();
  const old = h.records('Deliveries')[0];
  h.state.catalog.events[0].milestones[0].date = '2026-11-07';
  h.app.dispatchReminders_();
  const deliveries = h.records('Deliveries');
  assert.equal(deliveries.find((p) => p.id === old.id).status, 'cancelled');
  assert.equal(deliveries.filter((p) => p.status === 'pending').length, 1);
  assert.equal(deliveries.find((p) => p.status === 'pending').date, '2026-11-07');
});

test('source conflict or explicit event cancellation cancels pending tasks; a closed CFP does not', () => {
  const h = harness(); h.activate();
  assert.equal(h.records('Deliveries')[0].status, 'pending');
  h.state.catalog.events[0].milestones[0].status = 'conflict';
  h.app.dispatchReminders_();
  assert.equal(h.records('Deliveries')[0].status, 'cancelled');
  h.state.catalog.events[0].milestones[0].status = 'verified';
  h.state.catalog.events[0].status = 'cancelled';
  h.app.dispatchReminders_();
  assert.ok(!h.records('Deliveries').some((p) => p.status === 'pending'));
});

test('an unresolved official postponement pauses existing and new email reminders', () => {
  const h = harness(); h.activate();
  h.state.catalog.events[0].reminders_paused = true;
  h.state.catalog.events[0].reminders_pause_reason = 'Official rescheduling requires date verification.';
  h.app.dispatchReminders_();
  assert.equal(h.records('Deliveries')[0].status, 'cancelled');
  assert.throws(() => h.app.subscribe(h.preferences({ email: 'new@example.com' })), /not accepting reminders/);
  assert.equal(h.app.getEventDetails({ eventId: 'event-one' }).event.enabled, false);
});

test('changing the visitor time zone after a send does not send the same reminder twice', () => {
  const h = harness(); h.activate();
  h.state.now = h.records('Deliveries')[0].dueAt + 5 * 60 * 1000;
  h.app.dispatchReminders_();
  const token = h.state.mails.at(-1).body.match(/token=([a-f0-9]{64})/)[1];
  const sub = h.records('Subscriptions')[0];
  h.app.updateSubscription({ token, subscriptionId: sub.id, milestoneIds: ['abstract'], leadDays: [1, 3], timeZone: 'America/New_York' });
  h.state.now += 5 * 60 * 60 * 1000;
  h.app.dispatchReminders_();
  assert.equal(h.state.mails.length, 2);
  assert.equal(h.records('Deliveries').filter((p) => p.leadDays === 3).length, 1);
});

test('catalogue fetch failure freezes dispatch, including already queued reminders', () => {
  const h = harness(); h.activate(); const before = h.records('Deliveries');
  h.state.now = before[0].dueAt + 5 * 60 * 1000; h.state.httpStatus = 503;
  assert.equal(h.app.dispatchReminders_().status, 'catalog_unavailable');
  assert.deepEqual(h.records('Deliveries'), before);
  assert.equal(h.state.mails.length, 1);
});

test('same-email due nodes are grouped and durable sent records prevent duplicates', () => {
  const h = harness();
  h.state.catalog.events[0].milestones.push({ ...h.state.catalog.events[0].milestones[0], id: 'poster', label: 'Poster deadline' });
  h.activate({ milestoneIds: ['abstract', 'poster'] });
  h.state.now = h.records('Deliveries')[0].dueAt + 5 * 60 * 1000;
  h.state.onSend = () => assert.ok(h.records('Deliveries').every((row) => row.status === 'sending'));
  assert.equal(h.app.dispatchReminders_().messages, 1);
  assert.equal(h.records('Deliveries').filter((row) => row.status === 'sent').length, 2);
  assert.ok(h.state.mails[1].body.includes('Abstract deadline'));
  assert.ok(h.state.mails[1].body.includes('Poster deadline'));
  assert.equal(h.app.dispatchReminders_().messages, 0);
  assert.equal(h.state.mails.length, 2);
});

function seedVerifiedSubscriptions(h, count) {
  for (let index = 0; index < count; index++) {
    h.app.saveRecord_('Subscriptions', { id: 'verified-' + index, email: 'reader' + index + '@example.com',
      eventId: 'event-one', milestoneIds: ['abstract'], leadDays: [3], timeZone: 'UTC',
      status: 'active', createdAt: h.state.now, updatedAt: h.state.now, verifiedAt: h.state.now });
  }
  h.app.reconcile_(h.state.catalog, h.state.now);
}

test('100 simultaneous reminders use the available quota within four 15-minute checks', () => {
  const h = harness(); seedVerifiedSubscriptions(h, 100);
  const dueAt = h.records('Deliveries')[0].dueAt;
  for (let interval = 1; interval <= 4; interval++) {
    h.state.now = dueAt + interval * 15 * 60 * 1000;
    h.app.dispatchReminders_();
  }
  assert.equal(h.state.mails.length, 100);
  assert.equal(h.state.quota, 0);
  assert.equal(h.records('Deliveries').filter((row) => row.status === 'sent').length, 100);
  assert.equal(h.records('Deliveries').filter((row) => row.status === 'expired').length, 0);
});

test('the runtime guard leaves unclaimed messages pending for the next trigger', () => {
  const h = harness(); seedVerifiedSubscriptions(h, 6);
  h.state.now = h.records('Deliveries')[0].dueAt + 5 * 60 * 1000;
  h.state.onSend = () => { h.state.now += 125 * 1000; };
  const result = h.app.dispatchReminders_();
  assert.equal(result.status, 'runtime_budget');
  assert.equal(h.state.mails.length, 2);
  assert.equal(h.records('Deliveries').filter((row) => row.status === 'pending').length, 4);
  assert.equal(h.records('Deliveries').filter((row) => row.status === 'sending').length, 0);
  h.state.onSend = null;
  h.app.dispatchReminders_();
  assert.equal(h.state.mails.length, 6);
});

test('uncertain MailApp outcomes are never automatically retried', () => {
  const h = harness(); h.activate();
  h.state.now = h.records('Deliveries')[0].dueAt + 5 * 60 * 1000; h.state.sendFailure = true;
  assert.equal(h.app.dispatchReminders_().status, 'send_uncertain');
  assert.equal(h.records('Deliveries')[0].status, 'uncertain');
  h.state.sendFailure = false;
  h.app.dispatchReminders_();
  assert.equal(h.state.mails.length, 2);
});

test('an orphaned sending claim is quarantined, not retried after process termination', () => {
  const h = harness(); h.activate();
  const row = h.app.readRecords_('Deliveries')[0]; row.status = 'sending'; row.attemptedAt = h.state.now;
  h.app.saveRecord_('Deliveries', row);
  h.state.now = row.dueAt + 5 * 60 * 1000;
  h.app.dispatchReminders_();
  assert.equal(h.records('Deliveries')[0].status, 'uncertain');
  assert.equal(h.state.mails.length, 1);
});

test('reminders more than one hour late expire instead of becoming misleading catch-up mail', () => {
  const h = harness(); h.activate();
  h.state.now = h.records('Deliveries')[0].dueAt + 61 * 60 * 1000;
  h.app.dispatchReminders_();
  assert.equal(h.records('Deliveries')[0].status, 'expired');
  assert.equal(h.state.mails.length, 1);
});

test('unsubscribe GET is safe; explicit cancellation cancels pending jobs and verification', () => {
  const h = harness(); h.activate();
  h.state.now += 6 * 60 * 1000; h.app.requestManagementLink({ email: 'reader@example.com', company: '' });
  const token = h.state.mails.at(-1).body.match(/token=([a-f0-9]{64})/)[1];
  h.app.doGet({ parameter: { action: 'unsubscribe', token } }); h.app.getManagementDetails({ token });
  assert.equal(h.records('Subscriptions')[0].status, 'active');
  h.app.unsubscribe({ token, subscriptionId: 'all' });
  assert.equal(h.records('Subscriptions')[0].status, 'cancelled');
  assert.equal(h.records('Deliveries')[0].status, 'cancelled');
});

test('management token is scoped to its email and updates cannot edit another subscriber', () => {
  const h = harness(); h.activate(); h.activate({ email: 'other@example.com' });
  h.state.now += 6 * 60 * 1000; h.app.requestManagementLink({ email: 'reader@example.com', company: '' });
  const token = h.state.mails.at(-1).body.match(/token=([a-f0-9]{64})/)[1];
  const other = h.records('Subscriptions').find((sub) => sub.email === 'other@example.com');
  assert.throws(() => h.app.updateSubscription({ token, subscriptionId: other.id, milestoneIds: ['abstract'], leadDays: [1], timeZone: 'UTC' }), /active subscription/);
  const own = h.records('Subscriptions').find((sub) => sub.email === 'reader@example.com');
  h.app.updateSubscription({ token, subscriptionId: own.id, milestoneIds: ['abstract'], leadDays: [1, 7], timeZone: 'Asia/Shanghai' });
  assert.deepEqual(h.records('Subscriptions').find((sub) => sub.id === own.id).leadDays, [1, 7]);
});

test('catalogue failure preserves private management and cancellation without allowing edits', () => {
  const h = harness(); h.activate(); h.activate({ email: 'other@example.com' });
  h.state.now += 6 * 60 * 1000; h.app.requestManagementLink({ email: 'reader@example.com', company: '' });
  const token = h.state.mails.at(-1).body.match(/token=([a-f0-9]{64})/)[1];
  const own = h.records('Subscriptions').find((sub) => sub.email === 'reader@example.com');
  const other = h.records('Subscriptions').find((sub) => sub.email === 'other@example.com');
  const emailCount = h.state.mails.length;
  h.state.httpStatus = 503;
  const details = h.app.getManagementDetails({ token });
  assert.equal(details.catalogueAvailable, false);
  assert.equal(details.email, own.email);
  assert.equal(details.subscriptions.length, 1);
  assert.equal(details.subscriptions[0].subscription.id, own.id);
  assert.equal(details.subscriptions[0].event, null);
  assert.throws(() => h.app.getManagementDetails({ token: 'a'.repeat(64) }), /invalid or expired/);
  assert.throws(() => h.app.updateSubscription({ token, subscriptionId: own.id, milestoneIds: ['abstract'], leadDays: [1], timeZone: 'UTC' }), /catalogue.*unavailable/);
  h.app.unsubscribe({ token, subscriptionId: 'all' });
  assert.equal(h.records('Subscriptions').find((sub) => sub.id === own.id).status, 'cancelled');
  assert.equal(h.records('Subscriptions').find((sub) => sub.id === other.id).status, 'active');
  assert.ok(h.records('Deliveries').filter((row) => row.subscriptionId === own.id).every((row) => row.status === 'cancelled'));
  assert.ok(h.records('Deliveries').filter((row) => row.subscriptionId === other.id).every((row) => row.status === 'pending'));
  assert.equal(h.state.mails.length, emailCount);
});

test('lock contention prevents duplicate mutations and send attempts', () => {
  const h = harness(); h.state.locked = true;
  assert.throws(() => h.app.subscribe(h.preferences()), /service is busy/);
  assert.equal(h.records('Subscriptions').length, 0);
  assert.equal(h.state.mails.length, 0);
});

test('only the owner can queue a delivery smoke test, and no recipient argument is accepted', () => {
  const h = harness();
  h.state.properties.EMAIL_ENABLED = 'false';
  assert.throws(() => h.app.scheduleOwnerDeliverySmokeTest(), /not been activated/);
  h.state.properties.EMAIL_ENABLED = 'true'; h.state.active = '';
  assert.throws(() => h.app.scheduleOwnerDeliverySmokeTest(), /editor as the owner/);
  h.state.active = 'someone@example.com';
  assert.throws(() => h.app.scheduleOwnerDeliverySmokeTest(), /editor as the owner/);
  assert.throws(() => h.app.cancelOwnerDeliverySmokeTest(), /editor as the owner/);
  h.state.active = 'owner@gmail.com';
  const result = h.app.scheduleOwnerDeliverySmokeTest({ email: 'attacker@example.com', title: 'arbitrary content' });
  const row = h.records('Deliveries')[0];
  assert.equal(row.email, 'owner@gmail.com');
  assert.equal(row.id, result.id);
  assert.equal(row.ownerSmokeTest, true);
  assert.equal(h.state.mails.length, 0);
  assert.equal(h.state.quota, 100);
});

test('the owner smoke test is one-shot and uses the normal trigger dispatcher and durable ledger', () => {
  const h = harness(); const originalCatalog = JSON.stringify(h.state.catalog);
  const queued = h.app.scheduleOwnerDeliverySmokeTest();
  const duplicate = h.app.scheduleOwnerDeliverySmokeTest();
  assert.equal(duplicate.id, queued.id);
  assert.equal(h.records('Deliveries').length, 1);
  assert.equal(h.records('Subscriptions').length, 0);
  assert.equal(h.state.mails.length, 0);
  h.state.now += 15 * 60 * 1000;
  h.state.onSend = () => assert.equal(h.records('Deliveries')[0].status, 'sending');
  assert.equal(h.app.dispatchReminders_().messages, 1);
  const mail = h.state.mails[0];
  assert.equal(mail.to, 'owner@gmail.com');
  assert.match(mail.subject, /^\[TEST\]/);
  assert.ok(mail.body.includes(queued.id));
  assert.ok(mail.body.includes('Time Driven'));
  assert.ok(mail.body.includes('No conference, subscription or official deadline was changed'));
  const sent = h.records('Deliveries')[0];
  assert.equal(sent.status, 'sent');
  assert.ok(sent.groupId && sent.attemptedAt && sent.sentAt);
  assert.equal(h.records('Tokens').length, 0);
  assert.equal(h.app.dispatchReminders_().messages, 0);
  assert.equal(h.state.mails.length, 1);
  assert.equal(h.state.quota, 99);
  assert.equal(JSON.stringify(h.state.catalog), originalCatalog);
  assert.equal(h.state.triggers.length, 1);
});

test('the owner can cancel an unclaimed smoke test without sending anything', () => {
  const h = harness(); h.app.scheduleOwnerDeliverySmokeTest();
  assert.equal(h.app.cancelOwnerDeliverySmokeTest().status, 'cancelled');
  h.state.now += 15 * 60 * 1000;
  h.app.dispatchReminders_();
  assert.equal(h.records('Deliveries')[0].status, 'cancelled');
  assert.equal(h.state.mails.length, 0);
});

test('a forged smoke record cannot send to a non-owner address', () => {
  const h = harness(); h.app.scheduleOwnerDeliverySmokeTest();
  const row = h.app.readRecords_('Deliveries')[0]; row.email = 'attacker@example.com';
  h.app.saveRecord_('Deliveries', row);
  h.state.now += 15 * 60 * 1000;
  h.app.dispatchReminders_();
  assert.equal(h.records('Deliveries')[0].status, 'cancelled');
  assert.equal(h.state.mails.length, 0);
});

test('the smoke test stays separate from real reminders for the same owner email', () => {
  const h = harness(); h.activate({ email: 'owner@gmail.com' });
  h.state.now = h.records('Deliveries')[0].dueAt + 5 * 60 * 1000;
  h.app.scheduleOwnerDeliverySmokeTest();
  assert.equal(h.app.dispatchReminders_().messages, 2);
  const messages = h.state.mails.slice(1);
  assert.equal(messages.filter((mail) => mail.subject.startsWith('[TEST]')).length, 1);
  assert.equal(messages.filter((mail) => mail.subject.startsWith('Conference reminder:')).length, 1);
  assert.ok(messages.every((mail) => mail.to === 'owner@gmail.com'));
  assert.equal(h.records('Subscriptions').length, 1);
});

test('the smoke test observes catalogue failures and uncertain send handling', () => {
  const h = harness(); h.app.scheduleOwnerDeliverySmokeTest();
  h.state.httpStatus = 503;
  assert.equal(h.app.dispatchReminders_().status, 'catalog_unavailable');
  assert.equal(h.records('Deliveries')[0].status, 'pending');
  h.state.httpStatus = 200; h.state.sendFailure = true;
  assert.equal(h.app.dispatchReminders_().status, 'send_uncertain');
  assert.equal(h.records('Deliveries')[0].status, 'uncertain');
  h.state.sendFailure = false;
  h.app.dispatchReminders_();
  assert.equal(h.state.mails.length, 1);
});

test('JSON-only cells preserve plus-prefixed email strings without spreadsheet formulas', () => {
  const h = harness(); h.subscribe({ email: '+reader@example.com' });
  const rows = h.state.sheets.get('Subscriptions').rows.slice(1);
  assert.ok(rows.every((row) => /^[A-Za-z0-9]/.test(row[0]) && row[1].startsWith('{')));
  assert.equal(h.records('Subscriptions')[0].email, '+reader@example.com');
});

test('the published catalogue matches backend validation and all source dates remain schedulable', () => {
  const h = harness();
  h.state.catalog = JSON.parse(fs.readFileSync(new URL('../data/conferences.json', import.meta.url), 'utf8'));
  const result = h.app.fetchCatalog_();
  assert.equal(result.events.length, h.state.catalog.events.length);
  assert.ok(result.events.length > 0);
  const verifiedDates = result.events.flatMap((event) => event.milestones).filter((m) => m.status === 'verified' && m.precision === 'date');
  assert.ok(verifiedDates.length > 0);
  assert.ok(verifiedDates.every((m) => h.app.schedulable_(m)));
});

test('initial synchronization of 325 milestones uses a single batch write and spreadsheet lookup', () => {
  const h = harness();
  const base = h.state.catalog.events[0].milestones[0];
  h.state.catalog.events[0].milestones = Array.from({ length: 325 }, (_, index) => ({ ...base, id: 'milestone-' + index }));
  h.resetCalls();
  h.app.syncMilestones_(h.state.catalog, h.state.now);
  assert.equal(h.state.calls.openById, 1);
  assert.equal(h.state.calls.sheetLookups, 1);
  assert.equal(h.state.calls.lastRow, 1);
  assert.equal(h.state.calls.reads.length, 0);
  assert.deepEqual(h.state.calls.writes, [{ sheet: 'Milestones', row: 2, column: 1, height: 325, width: 2 }]);
  assert.equal(h.records('Milestones').length, 325);
  assert.ok(h.records('Milestones').every((row) => !('_row' in row)));
});

test('unchanged milestone synchronization performs one read and no writes or timestamp churn', () => {
  const h = harness(); h.app.syncMilestones_(h.state.catalog, h.state.now);
  const before = JSON.stringify(h.state.sheets.get('Milestones').rows);
  h.resetCalls();
  h.app.syncMilestones_(h.state.catalog, h.state.now + 1000);
  assert.equal(h.state.calls.openById, 1);
  assert.equal(h.state.calls.sheetLookups, 1);
  assert.equal(h.state.calls.reads.length, 1);
  assert.equal(h.state.calls.writes.length, 0);
  assert.equal(JSON.stringify(h.state.sheets.get('Milestones').rows), before);
});

test('sparse milestone changes batch adjacent rows and preserve unchanged and removed history rows', () => {
  const h = harness();
  const event = h.state.catalog.events[0]; const base = event.milestones[0];
  event.milestones = ['a', 'b', 'c', 'd', 'e', 'f'].map((id) => ({ ...base, id }));
  h.app.syncMilestones_(h.state.catalog, h.state.now);
  const before = h.state.sheets.get('Milestones').rows.map((row) => JSON.stringify(row));
  event.milestones = event.milestones.filter((m) => m.id !== 'c');
  event.milestones.forEach((m) => { if (['b', 'd', 'e'].includes(m.id)) m.date = '2026-11-07'; });
  event.milestones.push({ ...base, id: 'g' }, { ...base, id: 'h' });
  h.resetCalls();
  h.app.syncMilestones_(h.state.catalog, h.state.now + 1000);
  assert.equal(h.state.calls.openById, 1);
  assert.equal(h.state.calls.sheetLookups, 1);
  assert.equal(h.state.calls.reads.length, 1);
  assert.deepEqual(h.state.calls.writes.map(({ row, height }) => [row, height]), [[3, 1], [5, 2], [8, 2]]);
  const rows = h.state.sheets.get('Milestones').rows;
  for (const index of [0, 1, 3, 6]) assert.equal(JSON.stringify(rows[index]), before[index]);
  assert.equal(h.records('Milestones').find((row) => row.id === 'event-one:b').milestone.date, '2026-11-07');
  assert.equal(h.records('Milestones').find((row) => row.id === 'event-one:c').updatedAt, h.state.now);
  assert.equal(h.records('Milestones').length, 8);
});

test('doGet honours the manage-reminders view used by the public website', () => {
  const h = harness();
  h.app.doGet({ parameter: { view: 'request-manage' } });
  const boot = JSON.parse(h.state.bootstrap);
  assert.equal(boot.view, 'request-manage');
  assert.equal(boot.action, 'subscribe');
  assert.equal(boot.eventId, '');
  h.app.doGet({ parameter: { eventId: 'event-one' } });
  assert.equal(JSON.parse(h.state.bootstrap).view, '');
  assert.equal(JSON.parse(h.state.bootstrap).eventId, 'event-one');
});
