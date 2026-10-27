/* Conference Reminder: Google Apps Script V8, deployed as the owner.
 * Public RPC functions validate all arguments; helpers end in _ and are not RPCs.
 */
const CR_ = Object.freeze({
  catalogUrl: 'https://vickie02736.github.io/conference-reminder/data/conferences.json',
  tables: ['Subscriptions', 'Tokens', 'Milestones', 'Deliveries'],
  authDailyCap: 20,
  authReserve: 10,
  authCooldownMs: 5 * 60 * 1000,
  verifyLifetimeMs: 24 * 60 * 60 * 1000,
  manageLifetimeMs: 90 * 24 * 60 * 60 * 1000,
  maxLatenessMs: 60 * 60 * 1000,
  maxMessagesPerRun: 30,
  maxRunMs: 4 * 60 * 1000,
  dayMs: 24 * 60 * 60 * 1000
});

/** Run in the Apps Script editor as the owner. Creates no emails. */
function setup() {
  const owner = requireOwner_();
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('SPREADSHEET_ID')) {
    const book = SpreadsheetApp.create('Conference Reminder — private subscriptions');
    props.setProperty('SPREADSHEET_ID', book.getId());
  }
  if (!props.getProperty('PUBLIC_CATALOG_URL')) props.setProperty('PUBLIC_CATALOG_URL', CR_.catalogUrl);
  if (!props.getProperty('EMAIL_ENABLED')) props.setProperty('EMAIL_ENABLED', 'false');
  props.setProperty('OWNER_ACCOUNT', owner);
  const book = database_();
  CR_.tables.forEach(function (name) {
    const sheet = book.getSheetByName(name) || book.insertSheet(name);
    sheet.getRange(1, 1, 1, 2).setValues([['key', 'record_json']]);
    sheet.setFrozenRows(1);
  });
  if (!ScriptApp.getProjectTriggers().some(function (trigger) {
    return trigger.getHandlerFunction() === 'dispatchReminders_';
  })) {
    ScriptApp.newTrigger('dispatchReminders_').timeBased().everyMinutes(15).create();
  }
  const result = { spreadsheetUrl: book.getUrl(), emailEnabled: emailEnabled_() };
  console.log(JSON.stringify(result));
  return result;
}

/** Run only after checking the public /exec deployment in an incognito window. */
function enableEmailSending() {
  requireOwner_();
  const props = PropertiesService.getScriptProperties();
  database_();
  appUrl_();
  fetchCatalog_();
  props.setProperty('EMAIL_ENABLED', 'true');
  return 'Email sending is enabled. Existing pending subscriptions still require email verification.';
}

function disableEmailSending() {
  requireOwner_();
  PropertiesService.getScriptProperties().setProperty('EMAIL_ENABLED', 'false');
  return 'Email sending is disabled. Stored subscriptions can still be cancelled.';
}

function doGet(e) {
  const args = e && e.parameter || {};
  const action = ['verify', 'manage', 'unsubscribe'].indexOf(args.action) >= 0 ? args.action : 'subscribe';
  const bootstrap = {
    action: action,
    eventId: validId_(args.eventId) ? args.eventId : '',
    token: validToken_(args.token) ? args.token : ''
  };
  const template = HtmlService.createTemplateFromFile('Index');
  template.bootstrapJson = JSON.stringify(bootstrap).replace(/</g, '\\u003c');
  return template.evaluate().setTitle('Conference Reminder');
}

function getEventDetails(input) {
  const event = findEvent_(fetchCatalog_(), input && input.eventId);
  return {
    event: publicEvent_(event, input && input.timeZone),
    emailEnabled: emailEnabled_(),
    dailySignUpLimit: CR_.authDailyCap
  };
}

function subscribe(input) {
  rejectHoneypot_(input);
  requireEnabled_();
  const email = normalizeEmail_(input && input.email);
  const event = findEvent_(fetchCatalog_(), input && input.eventId);
  const prefs = validatePreferences_(input, event);
  const now = Date.now();
  return withLock_(function () {
    const subscriptions = readRecords_('Subscriptions');
    let sub = subscriptions.find(function (row) { return row.email === email && row.eventId === event.id; });
    if (!reserveAuthEmail_(email, now)) return authMessage_();
    if (sub && sub.status === 'active') {
      sendManagementMail_(email, now);
      return authMessage_();
    }
    if (!sub) sub = { id: newId_(), email: email, eventId: event.id, createdAt: now };
    sub.milestoneIds = prefs.milestoneIds;
    sub.leadDays = prefs.leadDays;
    sub.timeZone = prefs.timeZone;
    sub.status = 'pending';
    sub.updatedAt = now;
    saveRecord_('Subscriptions', sub);
    invalidateVerificationTokens_(sub.id, now);
    const token = createToken_('verify', email, sub.id, now, CR_.verifyLifetimeMs);
    SpreadsheetApp.flush();
    const url = tokenUrl_('verify', token);
    sendMail_(email, 'Confirm your conference reminders',
      'Confirm your reminders for ' + event.name + ':\n' + url +
      '\n\nThis link expires in 24 hours. Open it and press Confirm to activate your subscription.' +
      '\nIf you did not request this, ignore this email. No reminders are active yet.',
      '<p>Confirm your reminders for <strong>' + escapeHtml_(event.name) + '</strong>.</p>' +
      '<p><a href="' + escapeHtml_(url) + '">Review and confirm reminders</a></p>' +
      '<p>This link expires in 24 hours. Opening the link alone does not activate anything.</p>' +
      '<p>If you did not request this, ignore this email. No reminders are active yet.</p>');
    return authMessage_();
  });
}

function requestManagementLink(input) {
  rejectHoneypot_(input);
  requireEnabled_();
  const email = normalizeEmail_(input && input.email);
  return withLock_(function () {
    const now = Date.now();
    if (!reserveAuthEmail_(email, now)) return authMessage_();
    const exists = readRecords_('Subscriptions').some(function (sub) { return sub.email === email; });
    if (exists) sendManagementMail_(email, now);
    return authMessage_();
  });
}

function getVerificationDetails(input) {
  const record = readToken_(input && input.token, ['verify'], Date.now());
  const sub = readRecords_('Subscriptions').find(function (row) { return row.id === record.subscriptionId; });
  if (!sub || sub.status !== 'pending') throw new Error('This confirmation link is no longer active. Request a new subscription.');
  const event = findEvent_(fetchCatalog_(), sub.eventId);
  return { event: publicEvent_(event, sub.timeZone), preferences: publicSubscription_(sub), emailEnabled: emailEnabled_() };
}

function verifySubscription(input) {
  requireEnabled_();
  const catalog = fetchCatalog_();
  return withLock_(function () {
    const now = Date.now();
    const token = readToken_(input && input.token, ['verify'], now);
    const sub = readRecords_('Subscriptions').find(function (row) { return row.id === token.subscriptionId; });
    if (!sub || sub.status !== 'pending') throw new Error('This confirmation link is no longer active.');
    try {
      const event = findEvent_(catalog, sub.eventId);
      validatePreferences_(sub, event);
    } catch (error) {
      throw new Error('These reminder choices are no longer available. ' + error.message +
        ' Open Send reminder again to choose currently available dates.');
    }
    sub.status = 'active';
    sub.verifiedAt = now;
    sub.updatedAt = now;
    saveRecord_('Subscriptions', sub);
    token.usedAt = now;
    saveRecord_('Tokens', token);
    reconcile_(catalog, now);
    SpreadsheetApp.flush();
    return { message: 'Email confirmed. Your selected future reminders are active. Reminder times that have already passed are skipped.' };
  });
}

function getManagementDetails(input) {
  const token = readToken_(input && input.token, ['manage'], Date.now());
  const catalog = fetchCatalog_();
  const subscriptions = readRecords_('Subscriptions').filter(function (sub) { return sub.email === token.email; });
  return {
    email: token.email,
    subscriptions: subscriptions.map(function (sub) {
      const event = catalog.events.find(function (item) { return item.id === sub.eventId; });
      return { subscription: publicSubscription_(sub), event: event ? publicEvent_(event, sub.timeZone) : null };
    })
  };
}

function updateSubscription(input) {
  const catalog = fetchCatalog_();
  return withLock_(function () {
    const now = Date.now();
    const token = readToken_(input && input.token, ['manage'], now);
    const sub = readRecords_('Subscriptions').find(function (row) { return row.id === input.subscriptionId && row.email === token.email; });
    if (!sub || sub.status !== 'active') throw new Error('Only an active subscription can be edited. Use Send reminder to subscribe again.');
    const event = findEvent_(catalog, sub.eventId);
    const prefs = validatePreferences_(input, event);
    sub.milestoneIds = prefs.milestoneIds;
    sub.leadDays = prefs.leadDays;
    sub.timeZone = prefs.timeZone;
    sub.updatedAt = now;
    saveRecord_('Subscriptions', sub);
    reconcile_(catalog, now);
    SpreadsheetApp.flush();
    return { message: 'Preferences saved. Future reminders have been updated.' };
  });
}

function unsubscribe(input) {
  return withLock_(function () {
    const now = Date.now();
    const token = readToken_(input && input.token, ['manage'], now);
    const id = input && input.subscriptionId;
    if (id !== 'all' && !validId_(id)) throw new Error('Choose a subscription to cancel.');
    readRecords_('Subscriptions').forEach(function (sub) {
      if (sub.email !== token.email || (id !== 'all' && sub.id !== id)) return;
      sub.status = 'cancelled';
      sub.updatedAt = now;
      saveRecord_('Subscriptions', sub);
      invalidateVerificationTokens_(sub.id, now);
      readRecords_('Deliveries').forEach(function (delivery) {
        if (delivery.subscriptionId === sub.id && delivery.status === 'pending') {
          delivery.status = 'cancelled';
          delivery.updatedAt = now;
          saveRecord_('Deliveries', delivery);
        }
      });
    });
    SpreadsheetApp.flush();
    return { message: id === 'all' ? 'All conference email subscriptions have been cancelled.' : 'This conference email subscription has been cancelled.' };
  });
}

/** Installed clock trigger. Never exposed to google.script.run. */
function dispatchReminders_() {
  const startedAt = Date.now();
  if (!emailEnabled_()) return { status: 'disabled', messages: 0 };
  let catalog;
  try { catalog = fetchCatalog_(); }
  catch (error) {
    console.warn('Catalogue unavailable; no reminder was dispatched.');
    return { status: 'catalog_unavailable', messages: 0 };
  }
  return withLock_(function () {
    const now = Date.now();
    const deliveries = reconcile_(catalog, now);
    // A previous execution can terminate after the provider accepted an email.
    // MailApp has no idempotency key or send ID. Never automatically retry it.
    deliveries.forEach(function (row) {
      if (row.status === 'sending') {
        row.status = 'uncertain';
        row.error = 'Previous attempt ended without a confirmed result; not automatically retried.';
        row.updatedAt = now;
        saveRecord_('Deliveries', row);
      }
    });
    const groups = {};
    deliveries.filter(function (row) {
      return row.status === 'pending' && row.dueAt <= now && now - row.dueAt <= CR_.maxLatenessMs;
    }).forEach(function (row) { (groups[row.email] || (groups[row.email] = [])).push(row); });
    let count = 0;
    const emails = Object.keys(groups).sort();
    for (let index = 0; index < emails.length && count < CR_.maxMessagesPerRun; index++) {
      if (Date.now() - startedAt >= CR_.maxRunMs) break;
      if (MailApp.getRemainingDailyQuota() < 1) break;
      const email = emails[index];
      const rows = groups[email];
      const token = createToken_('manage', email, '', now, CR_.manageLifetimeMs);
      const message = reminderMessage_(rows, token);
      // Leave unclaimed jobs pending if catalogue/database work used the budget.
      // A later trigger can resume them; never claim a job we will not attempt.
      if (Date.now() - startedAt >= CR_.maxRunMs) break;
      const groupId = newId_();
      rows.forEach(function (row) {
        row.status = 'sending';
        row.groupId = groupId;
        row.attemptedAt = now;
        row.updatedAt = now;
        saveRecord_('Deliveries', row);
      });
      SpreadsheetApp.flush();
      try {
        sendMail_(email, message.subject, message.text, message.html);
      } catch (error) {
        rows.forEach(function (row) {
          row.status = 'uncertain';
          row.error = 'MailApp did not confirm the outcome; not automatically retried.';
          row.updatedAt = now;
          saveRecord_('Deliveries', row);
        });
        SpreadsheetApp.flush();
        // A quota or provider failure can affect the remaining groups too.
        return { status: 'send_uncertain', messages: count };
      }
      rows.forEach(function (row) {
        row.status = 'sent';
        row.sentAt = Date.now();
        row.updatedAt = row.sentAt;
        saveRecord_('Deliveries', row);
      });
      SpreadsheetApp.flush();
      count++;
    }
    return { status: Date.now() - startedAt >= CR_.maxRunMs ? 'runtime_budget' : 'ok', messages: count };
  });
}

function reconcile_(catalog, now) {
  const subscriptions = readRecords_('Subscriptions');
  const deliveries = readRecords_('Deliveries');
  const byKey = {};
  deliveries.forEach(function (row) { byKey[row.id] = row; });
  const plans = {};
  subscriptions.filter(function (sub) { return sub.status === 'active'; }).forEach(function (sub) {
    const event = catalog.events.find(function (item) { return item.id === sub.eventId; });
    if (!event || !eventEnabled_(event)) return;
    planDeliveries_(sub, event, now).forEach(function (plan) { plans[plan.id] = plan; });
  });
  deliveries.forEach(function (row) {
    if (row.status !== 'pending') return;
    const plan = plans[row.id];
    if (!plan) row.status = 'cancelled';
    else if ((row.dueAt !== plan.dueAt && plan.dueAt <= now) || now - plan.dueAt > CR_.maxLatenessMs || plan.deadlineAt <= now) row.status = 'expired';
    if (row.status !== 'pending') {
      row.updatedAt = now;
      saveRecord_('Deliveries', row);
    } else {
      let changed = false;
      ['eventName', 'eventUrl', 'milestoneLabel', 'source', 'timeZone', 'dueAt', 'deadlineAt'].forEach(function (field) {
        if (row[field] !== plan[field]) { row[field] = plan[field]; changed = true; }
      });
      if (changed) { row.updatedAt = now; saveRecord_('Deliveries', row); }
    }
  });
  Object.keys(plans).forEach(function (key) {
    const plan = plans[key];
    const previous = byKey[key];
    if (plan.dueAt <= now) return; // Do not create catch-up reminders.
    if (previous) {
      if (['cancelled', 'expired'].indexOf(previous.status) < 0 || previous.attemptedAt) return;
      plan._row = previous._row;
    }
    saveRecord_('Deliveries', plan);
    if (previous) deliveries[deliveries.indexOf(previous)] = plan;
    else deliveries.push(plan);
  });
  syncMilestones_(catalog, now);
  return deliveries;
}

function planDeliveries_(sub, event, now) {
  const plans = [];
  (event.milestones || []).filter(function (milestone) {
    return sub.milestoneIds.indexOf(milestone.id) >= 0 && schedulable_(milestone);
  }).forEach(function (milestone) {
    const dateOnly = milestone.precision === 'date';
    const zone = dateOnly ? sub.timeZone : milestone.timezone;
    const publishedTime = dateOnly ? '09:00' : milestone.time;
    const deadlineAt = dateOnly
      ? zonedTime_(shiftDate_(milestone.date, 1), '00:00', zone)
      : zonedTime_(milestone.date, milestone.time, zone);
    if (deadlineAt === null || deadlineAt <= now) return;
    const version = milestoneVersion_(milestone);
    sub.leadDays.forEach(function (lead) {
      const dueAt = zonedTime_(shiftDate_(milestone.date, -lead), publishedTime, zone);
      if (dueAt === null) return;
      const id = hash_([sub.id, milestone.id, version, lead].join('|'));
      plans.push({
        id: id, subscriptionId: sub.id, email: sub.email, eventId: event.id,
        eventName: event.name, eventUrl: safeUrl_(event.url), milestoneId: milestone.id,
        milestoneLabel: milestone.label || milestone.kind || 'Conference milestone',
        date: milestone.date, time: dateOnly ? null : milestone.time,
        deadlineTimeZone: dateOnly ? null : zone, precision: milestone.precision,
        source: safeUrl_(milestone.source), version: version, leadDays: lead,
        timeZone: sub.timeZone, dueAt: dueAt, deadlineAt: deadlineAt,
        status: 'pending', createdAt: now, updatedAt: now
      });
    });
  });
  return plans;
}

function reminderMessage_(rows, token) {
  const manage = tokenUrl_('manage', token);
  const cancel = tokenUrl_('unsubscribe', token);
  const lines = rows.map(function (row) {
    const date = row.date + (row.time ? ' ' + row.time + ' (' + row.deadlineTimeZone + ')' : ' — deadline time not published');
    return row.eventName + '\n' + row.milestoneLabel + ': ' + date + '\n' + row.leadDays +
      ' calendar day(s) before this milestone.\nOfficial website: ' + row.eventUrl +
      (row.source ? '\nDate source: ' + row.source : '');
  });
  const html = rows.map(function (row) {
    const date = row.date + (row.time ? ' ' + row.time + ' (' + row.deadlineTimeZone + ')' : ' — deadline time not published');
    return '<li><strong>' + escapeHtml_(row.eventName) + '</strong><br>' +
      escapeHtml_(row.milestoneLabel) + ': ' + escapeHtml_(date) + '<br>' +
      escapeHtml_(row.leadDays) + ' calendar day(s) before this milestone. ' +
      '<a href="' + escapeHtml_(row.eventUrl) + '">Official website</a>' +
      (row.source ? ' · <a href="' + escapeHtml_(row.source) + '">Date source</a>' : '') + '</li>';
  }).join('');
  return {
    subject: rows.length === 1 ? 'Conference reminder: ' + rows[0].eventName : rows.length + ' conference reminders',
    text: lines.join('\n\n') + '\n\nCheck the official website before making plans.' +
      '\nManage reminders: ' + manage + '\nUnsubscribe: ' + cancel,
    html: '<p>Your selected conference reminders:</p><ul>' + html + '</ul>' +
      '<p>Check the official website before making plans.</p><p><a href="' + escapeHtml_(manage) +
      '">Manage reminders</a> · <a href="' + escapeHtml_(cancel) + '">Unsubscribe</a></p>'
  };
}

function syncMilestones_(catalog, now) {
  const existing = readRecords_('Milestones');
  const byId = {};
  existing.forEach(function (row) { byId[row.id] = row; });
  catalog.events.forEach(function (event) {
    (event.milestones || []).forEach(function (milestone) {
      if (!validId_(milestone.id)) return;
      const id = event.id + ':' + milestone.id;
      const signature = hash_(JSON.stringify([event.name, event.url, event.status, event.disabled, milestone]));
      if (byId[id] && byId[id].signature === signature) return;
      const row = { id: id, eventId: event.id, eventName: event.name, milestone: milestone, signature: signature, updatedAt: now };
      if (byId[id]) row._row = byId[id]._row;
      saveRecord_('Milestones', row);
    });
  });
}

function fetchCatalog_() {
  const url = PropertiesService.getScriptProperties().getProperty('PUBLIC_CATALOG_URL') || CR_.catalogUrl;
  if (!/^https:\/\/[a-z0-9.-]+\//i.test(url)) throw new Error('The public catalogue URL must use HTTPS.');
  let response;
  try { response = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true }); }
  catch (error) { throw new Error('The conference catalogue could not be checked. Please try again later.'); }
  if (response.getResponseCode() !== 200) throw new Error('The conference catalogue is temporarily unavailable.');
  let catalog;
  try { catalog = JSON.parse(response.getContentText()); }
  catch (error) { throw new Error('The conference catalogue could not be read.'); }
  if (!catalog || !Array.isArray(catalog.events) || !catalog.metadata || catalog.events.length > 10000) {
    throw new Error('The conference catalogue is not ready.');
  }
  const ids = {};
  catalog.events.forEach(function (event) {
    if (!validId_(event.id) || typeof event.name !== 'string' || !safeUrl_(event.url) || ids[event.id]) {
      throw new Error('The conference catalogue contains an invalid event.');
    }
    ids[event.id] = true;
    if (!Array.isArray(event.milestones)) event.milestones = [];
    const milestoneIds = {};
    event.milestones.forEach(function (milestone) {
      if (!validId_(milestone.id) || milestoneIds[milestone.id]) throw new Error('The conference catalogue contains an invalid milestone.');
      milestoneIds[milestone.id] = true;
    });
  });
  return catalog;
}

function publicEvent_(event, timeZone) {
  const zone = validTimeZone_(timeZone) ? timeZone : 'Europe/London';
  return {
    id: event.id, name: event.name, url: safeUrl_(event.url), enabled: eventEnabled_(event),
    milestones: (event.milestones || []).map(function (m) {
      const valid = schedulable_(m);
      const due = valid ? zonedTime_(shiftDate_(m.date, -1), m.precision === 'date' ? '09:00' : m.time, m.precision === 'date' ? zone : m.timezone) : null;
      return { id: m.id, label: m.label || m.kind, kind: m.kind, date: m.date || null,
        time: m.time || null, timezone: m.timezone || null, precision: m.precision,
        status: m.status, source: safeUrl_(m.source), available: eventEnabled_(event) && valid && due !== null && due > Date.now(),
        unavailableReason: valid && due !== null && due <= Date.now() ? 'past' : 'unverified' };
    })
  };
}

function publicSubscription_(sub) {
  return { id: sub.id, eventId: sub.eventId, milestoneIds: sub.milestoneIds, leadDays: sub.leadDays,
    timeZone: sub.timeZone, status: sub.status };
}

function validatePreferences_(input, event) {
  if (!eventEnabled_(event)) throw new Error('This conference is not accepting reminders.');
  if (!input || !Array.isArray(input.milestoneIds) || input.milestoneIds.length > 30 ||
    !Array.isArray(input.leadDays) || input.leadDays.length > 3) throw new Error('Select the important dates and reminder lead times.');
  const ids = unique_(input && input.milestoneIds);
  const days = unique_(input && input.leadDays);
  const timeZone = input && input.timeZone;
  if (!ids.length || ids.length > 30 || ids.some(function (id) {
    return !event.milestones.some(function (m) { return m.id === id && schedulable_(m); });
  })) throw new Error('Select at least one milestone with a verified date.');
  if (!days.length || days.some(function (day) { return typeof day !== 'number' || [1, 3, 7].indexOf(day) < 0; })) {
    throw new Error('Choose 1 day, 3 days, or 1 week before the milestone.');
  }
  if (!validTimeZone_(timeZone)) throw new Error('Choose a valid IANA time zone, for example Europe/London.');
  const prefs = { id: 'preview', email: 'preview@example.invalid', milestoneIds: ids, leadDays: days, timeZone: timeZone };
  if (!planDeliveries_(prefs, event, Date.now()).some(function (plan) { return plan.dueAt > Date.now(); })) {
    throw new Error('The selected reminder times have already passed. Choose a later milestone or a shorter lead time.');
  }
  return prefs;
}

function schedulable_(milestone) {
  if (!milestone || milestone.status !== 'verified' || !validDate_(milestone.date) || !safeUrl_(milestone.source)) return false;
  if (milestone.precision === 'date') return true;
  return milestone.precision === 'datetime' && /^([01]\d|2[0-3]):[0-5]\d$/.test(milestone.time || '') && validTimeZone_(milestone.timezone);
}

function eventEnabled_(event) {
  return event.disabled !== true && event.reminders_paused !== true && ['cancelled', 'canceled', 'disabled', 'conflict'].indexOf(String(event.status || '').toLowerCase()) < 0;
}

function findEvent_(catalog, id) {
  if (!validId_(id)) throw new Error('Open Send reminder from a conference card.');
  const event = catalog.events.find(function (item) { return item.id === id; });
  if (!event) throw new Error('This conference is no longer in the published catalogue.');
  return event;
}

function milestoneVersion_(milestone) {
  return String(milestone.version || 1) + ':' + hash_(JSON.stringify([
    milestone.date, milestone.time || null, milestone.timezone || null, milestone.precision, milestone.status
  ])).slice(0, 16);
}

// Resolve local calendar time to one unambiguous instant, including DST changes.
// Unknown/ambiguous published times are not guessed.
function zonedTime_(date, time, zone) {
  if (!validDate_(date) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time) || !validTimeZone_(zone)) return null;
  const target = date + 'T' + time;
  const naive = Date.parse(target + ':00Z');
  const offsets = {};
  [-36, -24, -12, 0, 12, 24, 36].forEach(function (hours) {
    const instant = naive + hours * 60 * 60 * 1000;
    const local = Utilities.formatDate(new Date(instant), zone, "yyyy-MM-dd'T'HH:mm");
    offsets[Date.parse(local + ':00Z') - instant] = true;
  });
  const matches = Object.keys(offsets).map(function (offset) { return naive - Number(offset); }).filter(function (instant) {
    return Utilities.formatDate(new Date(instant), zone, "yyyy-MM-dd'T'HH:mm") === target;
  });
  return matches.length === 1 ? matches[0] : null;
}

function shiftDate_(date, days) {
  return new Date(Date.parse(date + 'T12:00:00Z') + days * CR_.dayMs).toISOString().slice(0, 10);
}

function validDate_(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !isNaN(Date.parse(value + 'T12:00:00Z')) && new Date(value + 'T12:00:00Z').toISOString().slice(0, 10) === value;
}

function validTimeZone_(zone) {
  if (typeof zone !== 'string' || zone.length > 80 || !/^[A-Za-z][A-Za-z0-9_+\-/]+$/.test(zone)) return false;
  try { new Intl.DateTimeFormat('en', { timeZone: zone }).format(new Date()); return true; }
  catch (error) { return false; }
}

function reserveAuthEmail_(email, now) {
  const props = PropertiesService.getScriptProperties();
  const all = props.getProperties();
  Object.keys(all).forEach(function (key) {
    if (key.indexOf('AUTH_LAST_') === 0 && now - Number(all[key]) >= CR_.dayMs) props.deleteProperty(key);
  });
  const lastKey = 'AUTH_LAST_' + hash_(email);
  const last = Number(props.getProperty(lastKey) || 0);
  if (last && now - last < CR_.authCooldownMs) return false;
  let start = Number(props.getProperty('AUTH_WINDOW_START') || 0);
  let count = Number(props.getProperty('AUTH_WINDOW_COUNT') || 0);
  if (!start || now - start >= CR_.dayMs) { start = now; count = 0; }
  if (count >= CR_.authDailyCap || MailApp.getRemainingDailyQuota() <= CR_.authReserve) {
    throw new Error('Today’s email sign-up limit has been reached. Please try again later.');
  }
  props.setProperties({ AUTH_WINDOW_START: String(start), AUTH_WINDOW_COUNT: String(count + 1) });
  props.setProperty(lastKey, String(now));
  return true;
}

function sendManagementMail_(email, now) {
  const token = createToken_('manage', email, '', now, CR_.manageLifetimeMs);
  SpreadsheetApp.flush();
  const url = tokenUrl_('manage', token);
  sendMail_(email, 'Manage your conference reminders', 'Manage or cancel your conference reminders:\n' + url +
    '\n\nThis private link expires in 90 days. If you did not request it, ignore this email.',
    '<p><a href="' + escapeHtml_(url) + '">Manage or cancel your conference reminders</a></p>' +
    '<p>This private link expires in 90 days. If you did not request it, ignore this email.</p>');
}

function createToken_(purpose, email, subscriptionId, now, lifetime) {
  const token = (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, '').toLowerCase();
  saveRecord_('Tokens', { id: newId_(), hash: hash_(token), purpose: purpose, email: email,
    subscriptionId: subscriptionId, expiresAt: now + lifetime, createdAt: now, usedAt: null });
  return token;
}

function readToken_(token, purposes, now) {
  if (!validToken_(token)) throw new Error('This private link is invalid or expired. Request a new link.');
  const digest = hash_(token);
  const record = readRecords_('Tokens').find(function (row) { return constantEqual_(row.hash, digest); });
  if (!record || purposes.indexOf(record.purpose) < 0 || record.usedAt || record.expiresAt <= now) {
    throw new Error('This private link is invalid or expired. Request a new link.');
  }
  return record;
}

function invalidateVerificationTokens_(subscriptionId, now) {
  readRecords_('Tokens').forEach(function (token) {
    if (token.purpose === 'verify' && token.subscriptionId === subscriptionId && !token.usedAt) {
      token.usedAt = now;
      saveRecord_('Tokens', token);
    }
  });
}

function tokenUrl_(action, token) { return appUrl_() + '?action=' + action + '&token=' + encodeURIComponent(token); }

function appUrl_() {
  const url = PropertiesService.getScriptProperties().getProperty('PUBLIC_APP_URL') || ScriptApp.getService().getUrl();
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url || '')) {
    throw new Error('The owner must configure the deployed public /exec URL first.');
  }
  return url;
}

function sendMail_(email, subject, text, html) {
  requireEnabled_();
  MailApp.sendEmail({ to: normalizeEmail_(email), name: 'Conference Reminder', subject: subject, body: text, htmlBody: html });
}

function requireOwner_() {
  const active = Session.getActiveUser().getEmail();
  const effective = Session.getEffectiveUser().getEmail();
  const configured = PropertiesService.getScriptProperties().getProperty('OWNER_ACCOUNT');
  if (!active || active !== effective || (configured && configured !== effective)) {
    throw new Error('Run this setup function in the Apps Script editor as the owner.');
  }
  return effective;
}

function emailEnabled_() { return PropertiesService.getScriptProperties().getProperty('EMAIL_ENABLED') === 'true'; }
function requireEnabled_() { if (!emailEnabled_()) throw new Error('Email reminders have not been activated by the website owner yet.'); }
function authMessage_() { return { message: 'If eligible, a confirmation or management email will arrive shortly. Check your spam folder. Please wait five minutes before requesting another.' }; }
function rejectHoneypot_(input) { if (!input || typeof input !== 'object' || input.company) throw new Error('The request could not be accepted.'); }
function validId_(id) { return typeof id === 'string' && /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,180}$/.test(id); }
function validToken_(token) { return typeof token === 'string' && /^[a-f0-9]{64}$/.test(token); }
function unique_(value) { return Array.isArray(value) ? value.filter(function (item, i) { return value.indexOf(item) === i; }) : []; }
function normalizeEmail_(value) {
  if (typeof value !== 'string') throw new Error('Enter a valid email address.');
  const email = value.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@<>,;:"\\]+@[^\s@<>,;:"\\]+\.[^\s@<>,;:"\\]+$/.test(email)) throw new Error('Enter a valid email address.');
  return email;
}
function safeUrl_(value) { return typeof value === 'string' && /^https?:\/\/[^\s<>"']+$/i.test(value) ? value : ''; }
function escapeHtml_(value) { return String(value).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function newId_() { return Utilities.getUuid(); }
function hash_(value) { return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(value), Utilities.Charset.UTF_8).map(function (b) { return ('0' + ((b + 256) % 256).toString(16)).slice(-2); }).join(''); }
function constantEqual_(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}
function database_() {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('The owner must run setup() before accepting subscriptions.');
  return SpreadsheetApp.openById(id);
}
function readRecords_(name) {
  const sheet = database_().getSheetByName(name);
  if (!sheet) throw new Error('The subscription database is not initialized.');
  const last = sheet.getLastRow();
  if (last < 2) return [];
  return sheet.getRange(2, 1, last - 1, 2).getValues().map(function (row, index) {
    if (!row[0]) return null;
    const record = JSON.parse(row[1]);
    record._row = index + 2;
    return record;
  }).filter(function (row) { return row !== null; });
}
function saveRecord_(name, record) {
  const sheet = database_().getSheetByName(name);
  const clean = Object.assign({}, record);
  delete clean._row;
  // JSON cells always start with "{"; user strings cannot become Sheet formulas.
  const values = [[String(record.id), JSON.stringify(clean)]];
  if (record._row) sheet.getRange(record._row, 1, 1, 2).setValues(values);
  else {
    record._row = sheet.getLastRow() + 1;
    sheet.getRange(record._row, 1, 1, 2).setValues(values);
  }
}
function withLock_(callback) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('The reminder service is busy. Please try again shortly.');
  try { return callback(); }
  finally { SpreadsheetApp.flush(); lock.releaseLock(); }
}
