export const STORAGE_KEY = 'academic-conferences-v1';
export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeUrl(value) { try { const u = new URL(value); return ['http:', 'https:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } }
export function dateLabel(value) { return value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T12:00:00Z`).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}) : 'Date to be announced'; }
export function todayISO(now = new Date()) { return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; }
export const isConferenceDate = m => ['conference_start','conference_end'].includes(m.kind);
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
