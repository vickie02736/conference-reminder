export const STORAGE_KEY = 'academic-conferences-v1';
export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeUrl(value) { try { const u = new URL(value); return ['http:', 'https:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } }
export function dateLabel(value) { return value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T12:00:00Z`).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}) : 'Date to be announced'; }
export function todayISO(now = new Date()) { return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; }
export const isConferenceDate = m => ['conference_start','conference_end'].includes(m.kind);
const submissionKinds = new Set(['abstract','paper','poster']);
const phaseClauses = text => String(text || '').toLowerCase().split(/[.;]|\bbut\b/).map(s=>s.trim()).filter(Boolean);
const closure = /\b(?:closed|ended|passed|no longer (?:open|available)|not open)\b/;
const closedClause = clause => closure.test(clause) && !/\bnot\s+(?:yet\s+)?(?:closed|ended|passed)\b/.test(clause);
function phaseChannel(node) {
  if (submissionKinds.has(node.kind) || (node.kind === 'other' && /proposal/i.test(node.label))) return 'submission';
  if (node.kind === 'application') return 'application';
  if (['registration','early_registration'].includes(node.kind)) return 'registration';
  return null;
}
function phaseLabel(node) {
  if (/recent reports/i.test(node.label)) return 'Recent Reports submission';
  if (/journal.to.conference/i.test(node.label)) return 'Journal-to-Conference submission';
  if (node.kind === 'poster') return 'Poster submission';
  if (node.kind === 'paper') return /full paper.*(?:required|oral presentation)/i.test(node.label) ? 'Full paper submission' : 'Paper submission';
  if (node.kind === 'abstract') return 'Abstract submission';
  if (/proposal/i.test(node.label)) return 'Symposium proposals';
  return node.kind === 'application' ? 'Applications' : 'Registration';
}
function channelText(clause, channel) {
  return (channel === 'submission' ? /\b(?:abstracts?|papers?|posters?|submissions?|calls?|proposals?)\b/ : channel === 'application' ? /\bapplications?\b/ : /\b(?:registration|bookings?|attendance)\b/).test(clause);
}
function channelClosed(clauses, channel, node) {
  return clauses.some(clause=>{
    if (!closedClause(clause) || !channelText(clause,channel)) return false;
    if (channel === 'submission' && node) {
      // A closed regular/main round does not close a separately published route.
      if (/\b(?:regular|main)\b/.test(clause) && /recent reports|journal.to.conference|breaking news|late poster|round 2/i.test(node.label)) return false;
      if (/\bposters?\b/.test(clause) && !/\b(?:abstracts?|papers?|submissions?)\b/.test(clause) && node.kind !== 'poster') return false;
      if (/\bpapers?\b/.test(clause) && !/\b(?:abstracts?|posters?|submissions?)\b/.test(clause) && node.kind !== 'paper') return false;
    }
    return true;
  });
}
function channelSoon(clauses, channel) {
  return clauses.some(clause=>channelText(clause,channel) && /not (?:yet )?open|opens? soon|opening soon|will open|forthcoming|in preparation/.test(clause));
}
function channelOffered(clauses, channel) {
  return clauses.some(clause=>channelText(clause,channel) && !closedClause(clause) && !channelSoon([clause],channel) && /\b(?:open|opened|offered|available|invited|possible)\b/.test(clause));
}
/** A phase describes the available route; a future cutoff alone never asserts it is open. */
export function eventPhase(event, today = todayISO(), now = Date.now()) {
  const nodes=event.milestones || [], clauses=phaseClauses(event.status);
  const text=clauses.join('; '), state=String(event.eventStatus || '').split('/').at(-1).toLowerCase();
  const phase=(key,label,help,node)=>({key,label,help,...(node?{milestoneId:node.id,date:node.date}: {})});
  const cancelled=state==='eventcancelled' || clauses.some(c=>/^(?:cancelled|canceled)\b/.test(c) || /\b(?:event|conference|meeting|workshop|school|activity)\b.{0,25}\b(?:cancelled|canceled)\b/.test(c) && !/\bnot\s+(?:cancelled|canceled)\b/.test(c));
  if (cancelled) return phase('cancelled','Cancelled','The published event status reports cancellation.');
  if (event.reminders_paused || event.disabled || state==='eventpostponed' || state==='eventrescheduled' || /\b(?:event|conference|meeting|workshop|school)\b.{0,25}\b(?:postponed|rescheduled)\b/.test(text) || /^(?:postponed|rescheduled)\b/.test(text)) return phase('paused','Dates need confirmation',event.reminders_pause_reason || 'An official change is unresolved; reminder scheduling is paused.');
  if (!event.start) return phase('awaiting_dates','Awaiting dates','The edition is listed, but exact conference dates are not verified.');
  const uncertainStart=nodes.find(m=>m.kind==='conference_start' && m.status!=='verified');
  if (uncertainStart) return phase('needs_review','Dates unverified','The announced conference dates still require confirmation.',uncertainStart);
  if (event.end && event.end < today) return phase('finished','Finished','The published conference end date has passed.');
  if (event.start <= today && (event.end || event.start) >= today) return phase('ongoing','Happening now','Today falls within the published conference dates.');
  if (/waiting list only|waitlist only/.test(text)) return phase('fully_booked','Waiting list only','The event is full; the organiser offers a waiting list.');
  if (/fully booked|^full(?:\s*[-–:]|;|$)|(?:event|places|school|conference)\s+(?:is|are)\s+full\b|sold out/.test(text)) return phase('fully_booked','Fully booked','The organiser reports that attendance places are full.');
  if (/invitation.based|invitation.only|invited participants? only/.test(text)) return phase('invitation_only','Invitation only','Attendance requires an invitation or the organiser’s approval.');
  if (/not open general registration|selected.{0,30}(?:presenters|authors)|restricted attendance/.test(text)) return phase('restricted','Restricted attendance','Attendance is restricted; this is not general open registration.');
  const conflict=nodes.find(m=>m.status==='conflict');
  if (conflict) return phase('needs_review','Deadline needs confirmation','Official sources disagree about a date; check the evidence before planning.',conflict);
  const invalidClock=nodes.find(m=>m.status==='verified' && m.precision==='datetime' && m.date>=today && milestoneInstant(m)===null);
  if (invalidClock) return phase('needs_review','Deadline time unverified','The published clock time does not identify one valid instant; confirm it with the organiser.',invalidClock);
  if (/closure is not asserted|(?:submission|registration).{0,30}(?:closure|status).{0,20}(?:uncertain|not certain)/.test(text)) return phase('needs_review','Availability needs confirmation','A published deadline has passed, but the official source leaves late availability uncertain.');

  const future=upcomingNodes(event,today,now).filter(m=>phaseChannel(m));
  const past=nodes.filter(m=>m.status==='verified' && m.date && phaseChannel(m) && !future.includes(m));
  const candidates=channel=>future.filter(m=>phaseChannel(m)===channel && !channelClosed(clauses,channel,m));
  const nextCall=candidates('submission')[0], nextApplication=candidates('application')[0], nextRegistration=candidates('registration')[0];
  const opening=channel=>nodes.find(m=>m.status==='verified' && m.date && m.date>today && m.kind==='other' && /open/i.test(m.label) && channelText(String(m.label).toLowerCase(),channel));
  const relevantPast=channel=>past.some(m=>phaseChannel(m)===channel && (channel!=='submission' || submissionKinds.has(m.kind)));
  const soon=channel=>!!opening(channel) || (channelSoon(clauses,channel) && (!relevantPast(channel) || future.some(m=>phaseChannel(m)===channel)));
  const describe=(channel,node)=>{
    const offered=channelOffered(clauses,channel);
    const help=(node?.date?`Published cutoff: ${dateLabel(node.date)}. `:'No verified closing date is published. ')+(offered?'The published status offers this route; confirm current availability with the organiser.':'The opening status is not confirmed; a future deadline does not establish that the platform is open.')+(channel==='submission' && channelClosed(clauses,'registration')?' Registration is closed; confirm attendance eligibility before submitting.':'');
    return phase(channel,node?phaseLabel(node):channel==='submission'?'Submission dates':channel==='application'?'Applications':'Registration',help,node);
  };
  if (nextCall && !soon('submission')) return describe('submission',nextCall);
  if (nextApplication && !soon('application')) return describe('application',nextApplication);
  // An announced call opening takes precedence over registration of unknown availability.
  if (soon('submission') && !(channelOffered(clauses,'registration') && !soon('registration') && !channelClosed(clauses,'registration'))) return phase('opening_soon','Submission opening soon','The submission platform or call is not yet open; published deadlines remain planning dates.',opening('submission'));
  if (nextRegistration && !soon('registration')) return describe('registration',nextRegistration);
  for (const channel of ['registration','application','submission']) {
    if (channelOffered(clauses,channel) && !channelClosed(clauses,channel) && !relevantPast(channel)) return describe(channel,nodes.find(m=>phaseChannel(m)===channel));
  }
  if (soon('application')) return phase('opening_soon','Applications opening soon','The application route is not yet open.',opening('application'));
  if (soon('registration')) return phase('opening_soon','Registration opening soon','Registration is not yet open.',opening('registration'));
  if (nodes.some(m=>m.status==='unknown' && m.date) || /(?:deadline|submission|registration|application).{0,35}(?:not verified|unverified|could not be verified)/.test(text)) return phase('needs_review','Deadlines unverified','Conference dates are announced, but the relevant deadlines still require confirmation.');
  for (const [channel,label] of [['registration','Registration closed'],['application','Applications closed'],['submission','Submissions closed']]) {
    if (channelClosed(clauses,channel) || relevantPast(channel)) return phase('closed',label,'The published deadline or availability status is closed; confirm any late or alternative route directly with the organiser.');
  }
  return phase('upcoming','Upcoming','Conference dates are announced; a current submission or registration stage is not verified.');
}
export function upcomingNodes(event, today = todayISO(), now = Date.now()) { if (event.reminders_paused) return []; return (event.milestones || []).filter(m => { if (m.status !== 'verified' || !m.date) return false; const instant = milestoneInstant(m); return m.precision === 'datetime' ? instant !== null && instant > now : m.date >= today; }).sort((a,b) => a.date.localeCompare(b.date)); }
export function hasEuropeanSite(event) { return event.region === 'UK' || event.region === 'Europe' || (/neurips/i.test(event.name) && /Paris/i.test(`${event.location} ${event.note}`)); }
export function filterEvents(events, filters, today = todayISO(), now = Date.now()) {
  const search=(filters.search || '').toLowerCase().trim();
  return events.filter(e => {
    if (!filters.showPast && e.end && e.end < today) return false;
    if (filters.region === 'Europe-group' && !hasEuropeanSite(e)) return false;
    if (filters.region && !['all','Europe-group'].includes(filters.region) && e.region !== filters.region) return false;
    if (filters.topic && filters.topic !== 'all' && !(e.tags || []).includes(filters.topic)) return false;
    if (filters.type && filters.type !== 'all' && e.type !== filters.type) return false;
    if (filters.year && filters.year !== 'all' && !(e.start || e.name || '').includes(filters.year)) return false;
    if (search && ![e.name,e.location,e.note,...(e.tags||[])].join(' ').toLowerCase().includes(search)) return false;
    return true;
  }).sort((a,b) => {
    if (filters.sort === 'name') return a.name.localeCompare(b.name);
    if (filters.sort === 'priority') return (a.priority || 99) - (b.priority || 99) || (a.start || '9999').localeCompare(b.start || '9999');
    if (filters.sort === 'deadline') return (upcomingNodes(a,today,now).find(m=>!isConferenceDate(m))?.date || '9999').localeCompare(upcomingNodes(b,today,now).find(m=>!isConferenceDate(m))?.date || '9999') || (a.start || '9999').localeCompare(b.start || '9999');
    return (a.start || '9999').localeCompare(b.start || '9999') || a.name.localeCompare(b.name);
  });
}
export function normalizeSaved(value) { return Array.isArray(value) ? value.filter(m=>m && typeof m.id==='string' && typeof m.title==='string' && Number.isFinite(m.time) && m.time > 0 && Number.isFinite(m.reminder) && m.reminder > 0).map(m=>({...m,deadlineLabel:m.deadlineLabel || 'Submission deadline'})) : []; }
export function isDuplicate(meetings, candidate) { return meetings.some(m => m.time===candidate.time && ((candidate.catalogId && m.catalogId===candidate.catalogId && m.milestoneId===candidate.milestoneId) || (m.title===candidate.title && (m.deadlineLabel || 'Submission deadline')===candidate.deadlineLabel))); }
export function localInput(time) { const d=new Date(time); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}T${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
export function milestoneInstant(m) {
  if (m.status!=='verified' || m.precision!=='datetime' || !m.date || !m.time || !m.timezone) return null;
  const wall=Date.parse(`${m.date}T${m.time}:00Z`); if (!Number.isFinite(wall)) return null;
  try {
    const f=new Intl.DateTimeFormat('en-GB',{timeZone:m.timezone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
    const format=instant=>{const p=Object.fromEntries(f.formatToParts(new Date(instant)).filter(p=>p.type!=='literal').map(p=>[p.type,p.value]));return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}`;};
    const offsets=new Set([-36,-24,-12,0,12,24,36].map(h=>{const instant=wall+h*3600000;return Date.parse(format(instant)+'Z')-instant;}));
    const matches=[...offsets].map(offset=>wall-offset).filter(instant=>format(instant)===`${m.date}T${m.time}:00`);
    return matches.length===1?matches[0]:null;
  } catch {return null;}
}
export const icsText = s => String(s ?? '').replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');
const stamp = t => new Date(t).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
export function calendarFile(m, now = Date.now()) {
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//ConferenceReminder//Academic Deadlines//EN','BEGIN:VEVENT','UID:'+icsText(m.id)+'@conference-reminder','DTSTAMP:'+stamp(now),'DTSTART:'+stamp(m.time),'DTEND:'+stamp(m.time+3600000),'SUMMARY:'+icsText((m.deadlineLabel || 'Submission deadline')+': '+m.title),'DESCRIPTION:'+icsText('Conference starts: '+(m.conferenceDate||'TBA')+'; Website: '+(safeUrl(m.website)||'Not provided')),'LOCATION:'+icsText(m.place),'BEGIN:VALARM','TRIGGER:-PT'+m.reminder+'M','ACTION:DISPLAY','DESCRIPTION:Conference deadline reminder','END:VALARM','END:VEVENT','END:VCALENDAR'];
  return lines.map(line=>{const chunks=[];let chunk='';for(const character of line){if(new TextEncoder().encode(chunk+character).length>73){chunks.push(chunk);chunk=' '+character;}else chunk+=character;}chunks.push(chunk);return chunks.join('\r\n');}).join('\r\n')+'\r\n';
}
