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
    nextDeadline: (event, sort) => core.nextDeadline(event, sort, today, now),
    eventStatuses: (event) => core.eventStatuses(event, today, now),
    filterEvents: (events, filters) => core.filterEvents(events, filters, today, now),
    timelineEntries: (events, stage) => core.timelineEntries(events, stage, today, now),
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
  assert.deepEqual([...h.elements.get('catalogue-stats').innerHTML.matchAll(/<b>(\d+)<\/b>/g)].map((m) => Number(m[1])), [100, 23, 42, 6]);
  assert.equal(h.elements.get('result-count').textContent, '100 scheduled · 6 dates pending / unconfirmed');
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
  const all = [...catalogue.events, ...catalogue.watchlist];
  const needs = all.filter((e) => e.check.status === 'review_required');
  const failed = all.filter((e) => e.check.status === 'failed');
  const blocked = all.filter((e) => e.check.status === 'unverifiable');
  const h = await harness();
  h.set('search', 'unmatched query');
  const shortcuts = h.elements.get('source-shortcuts').children;
  const expectedLabels = [];
  if (needs.length) expectedLabels.push(`Sources to review (${needs.length})`);
  if (failed.length) expectedLabels.push(`Source errors (${failed.length})`);
  if (blocked.length) expectedLabels.push(`Sources not automatically checkable (${blocked.length})`);
  assert.deepEqual(shortcuts.map((button) => button.textContent), expectedLabels);
  shortcuts[0].click();
  assert.equal(h.elements.get('region').value, 'all');
  assert.equal(h.elements.get('search').value, '');
  assert.equal(h.elements.get('advanced-filters').open, true);
  assert.equal(shortcuts[0].attributes['aria-pressed'], 'true');
  assert.equal((h.list().match(/<article /g) || []).length, needs.length);
  h.set('topic', 'MOFs, COFs & Porous Materials');
  const expected = needs.filter((e) => core.eventTopics(e).includes('MOFs, COFs & Porous Materials'));
  assert.equal((h.list().match(/<article /g) || []).length, expected.length);
  assert.equal(h.elements.get('advanced-count').textContent, '(2 selected)');
  const errorButton = shortcuts.find((button) => button.textContent.startsWith('Source errors'));
  if (errorButton) {
    errorButton.click();
    assert.equal((h.list().match(/<article /g) || []).length, failed.length);
  }
  h.elements.get('reset-filters').click();
  assert.equal(h.elements.get('source-check').value, 'all');
  assert.equal(h.elements.get('topic').value, 'all');
  assert.equal(h.elements.get('advanced-count').textContent, '');
  assert.equal(h.elements.get('advanced-filters').open, false);
  assert.equal(shortcuts[1].attributes['aria-pressed'], 'false');
  assert.equal(h.elements.get('result-count').textContent, '66 scheduled · 4 dates pending / unconfirmed');
});

test('loading retains its loading state even if email configuration arrives first', async () => {
  const h = await harness({ delayed: true });
  assert.match(h.list(), /Loading the conference collection/);
  assert.equal(h.elements.get('result-count').textContent, '');
  h.release(); await h.settle();
  assert.match(h.list(), /<article /);
});

test('fully booked cards disable reminders and deadline text marks passed dates', async () => {
  const h = await harness();
  const card = h.list().match(/<article[^>]*id="event-chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning"[\s\S]*?<\/article>/)?.[0];
  assert.ok(card);
  assert.match(card, /disabled[^>]*>Attendance full<\/button>/);
  assert.doesNotMatch(card, /script\.google\.com/);
  assert.match(card, /Poster abstracts: 20 Aug 2026 · has passed/);
});

test('a failed catalogue cannot turn into a misleading empty search result', async () => {
  const h = await harness({ failed: true });
  h.set('search', 'MOF');
  assert.match(h.list(), /temporarily unavailable/);
  assert.equal(h.elements.get('result-count').textContent, 'Catalogue unavailable');
});

test('timeline links follow every visible card through combined filters and reset', async () => {
  const h = await harness();
  const linkedIds = () => new Set([...h.elements.get('timeline-list').innerHTML.matchAll(/href="#event-([^"]+)"/g)].map(m => decodeURIComponent(m[1])));
  const cardIds = () => new Set([...h.list().matchAll(/id="event-([^"]+)"/g)].map(m => m[1]));
  assert.equal(h.elements.get('conference-timeline').hidden, false);
  assert.deepEqual(linkedIds(), cardIds());
  h.set('stage', 'registration'); h.set('region', 'UK');
  assert.match(h.elements.get('timeline-count').textContent, /^Registration dates/);
  assert.ok(linkedIds().size > 0);
  assert.deepEqual(linkedIds(), cardIds());
  h.set('topic', 'MOFs, COFs & Porous Materials');
  assert.deepEqual(linkedIds(), cardIds());
  h.set('search', 'no matching conference');
  assert.equal(linkedIds().size, 0);
  assert.match(h.elements.get('timeline-hint').textContent, /No activities match/);
  h.elements.get('reset-filters').click();
  assert.deepEqual(linkedIds(), cardIds());
  assert.match(h.list(), /tabindex="-1"/);
  assert.doesNotMatch(h.elements.get('timeline-list').innerHTML, /target="_blank"/);
});

test('unchanged renders preserve timeline scrolling while new results reset it', async () => {
  const h = await harness();
  h.elements.get('timeline-scroll').scrollTop = 120;
  h.set('search', '');
  assert.equal(h.elements.get('timeline-scroll').scrollTop, 120);
  h.set('region', 'UK');
  assert.equal(h.elements.get('timeline-scroll').scrollTop, 0);
});

test('deadline sort choices show their matching deadline on the conference card', async () => {
  const h = await harness();
  h.set('search', 'SSCG2026');
  h.set('sort', 'registration_deadline');
  const preview = () => h.list().match(/<p class="deadline-preview">[\s\S]*?<\/p>/)?.[0];
  assert.match(preview(), /<b>Registration<\/b><br>25 Nov 2026/);
  h.set('sort', 'submission_deadline');
  assert.match(preview(), /<b>Oral and poster abstracts<\/b><br>30 Oct 2026/);
  assert.equal((h.list().match(/<article /g) || []).length, 1);
});

test('topic choices and card badges use seven groups while details retain the research keywords', async () => {
  const h = await harness();
  const choices = h.elements.get('topic').children.map(option => option.value);
  assert.deepEqual(choices, [
    'AI & Machine Learning',
    'AI for Materials & Chemistry',
    'Adsorption & Separations',
    'Automation & Digital Chemistry',
    'MOFs, COFs & Porous Materials',
    'Materials & Characterisation',
    'Simulation & Theory'
  ]);
  h.set('search', 'SSCG2026');
  assert.match(h.list(), /<div class="tags"><span class="tag">AI for Materials &amp; Chemistry<\/span><span class="tag">MOFs, COFs &amp; Porous Materials<\/span><span class="tag">Materials &amp; Characterisation<\/span><\/div>/);
  assert.match(h.list(), /<b>Research topics<\/b>[\s\S]*Porous Materials · AI for Materials · Materials Chemistry/);
});

test('grouped topic changes keep the timeline aligned with combined card filters and keyword search', async () => {
  const h = await harness();
  h.set('region', 'UK'); h.set('stage', 'registration');
  h.set('topic', 'MOFs, COFs & Porous Materials');
  const cardIds = () => new Set([...h.list().matchAll(/id="event-([^"]+)"/g)].map(match => match[1]));
  const timelineIds = () => new Set([...h.elements.get('timeline-list').innerHTML.matchAll(/href="#event-([^"]+)"/g)].map(match => decodeURIComponent(match[1])));
  assert.equal(cardIds().size, 4);
  assert.deepEqual(timelineIds(), cardIds());
  h.set('region', 'all'); h.set('stage', 'all');
  h.set('topic', 'AI for Materials & Chemistry'); h.set('search', 'GNN');
  assert.equal(cardIds().size, 1);
  assert.deepEqual(timelineIds(), cardIds());
  assert.match(h.list(), /CaMML 2027/);
  h.elements.get('reset-filters').click();
  assert.equal(h.elements.get('topic').value, 'all');
  assert.deepEqual(timelineIds(), cardIds());
});
