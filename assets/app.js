import {STORAGE_KEY,esc,safeUrl,dateLabel,todayISO,upcomingNodes,isConferenceDate,hasEuropeanSite,filterEvents,normalizeSaved,isDuplicate,localInput,milestoneInstant,calendarFile} from './core.mjs';

const $=id=>document.getElementById(id);
let catalogue={events:[],watchlist:[],metadata:{},updates:[]};
let config={emailRemindersEnabled:false,emailReminderUrl:''};
let meetings=[];
let selectedEvent=null;
let catalogueError=false;
try {meetings=normalizeSaved(JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'));} catch {$('status').textContent='Could not load saved reminders. Your browser storage may be unavailable.';}
const status=message=>{$('status').textContent=message;};
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(meetings));return true;}catch{status('Storage is unavailable. Export your reminder to keep a copy.');return false;}}
function anchor(url,label,cls=''){const href=safeUrl(url);return href?`<a class="${esc(cls)}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`:'';}
function shortTime(value){if(!value)return 'Not yet checked';const d=new Date(value);return Number.isFinite(d.getTime())?d.toLocaleString('en-GB',{dateStyle:'medium',timeStyle:'short'}):String(value);}
function emailUrl(id){if(!config.emailRemindersEnabled)return '';try{const u=new URL(config.emailReminderUrl);if(u.protocol!=='https:'||u.hostname!=='script.google.com'||!u.pathname.endsWith('/exec'))return '';if(id)u.searchParams.set('eventId',id);else u.searchParams.set('view','request-manage');return u.href;}catch{return '';}}
function nodeText(m){if(m.status==='conflict')return 'Conflicting dates — check official sources';if(!m.date)return 'Date not yet verified';return `${dateLabel(m.date)}${m.time?' · '+m.time:''}${m.timezone?' ('+m.timezone+')':''}${m.precision==='date'?' · time not announced':''}${m.status==='unknown'?' · provisional / unverified':''}`;}
function card(e){
  const upcoming=upcomingNodes(e);
  const next=upcoming.find(m=>!isConferenceDate(m));
  const watch=!e.start;
  const check=e.check||{};
  const checkState={not_checked:'Awaiting automated check',checked:'Source check completed',review_required:'Source needs review',failed:'Source check failed'}[check.status]||'Awaiting automated check';
  const hasConflict=(e.milestones||[]).some(m=>m.status==='conflict');
  const region=e.region==='UK'?'United Kingdom':e.region==='Europe'?'Europe':hasEuropeanSite(e)?'Worldwide · Paris option':'Worldwide';
  const email=e.reminders_paused?'':emailUrl(e.id);
  const dates=e.start?dateLabel(e.start)+(e.end&&e.end!==e.start?' – '+dateLabel(e.end):''):'Dates to be announced';
  const sources=[...new Set([e.url,...(e.sources||[])])].filter(safeUrl);
  return `<article class="conference${watch?' watchlist':''}" id="event-${esc(e.id)}"><div class="card-top"><span class="badge${watch||hasConflict?' warn':''}">${esc(watch?'Watchlist · '+region:region)}</span><span class="activity">${esc(e.type)}</span></div><h3>${esc(e.name)}</h3><p class="event-date">${esc(dates)}</p><p class="location">${esc(e.location||'Location to be announced')}</p><div class="tags">${(e.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><p class="event-status">${esc(e.status)}${e.reminders_paused?' Reminder scheduling is paused while an official change is reviewed.':''}</p>${next?`<p class="deadline-preview"><b>${esc(next.label)}</b><br>${esc(nodeText(next))}</p>`:hasConflict?'<p class="deadline-preview">Some dates conflict. See the evidence before planning.</p>':''}<details class="card-details"><summary>Dates, research fit &amp; sources</summary><p>${esc(e.note)}</p>${e.deadline?`<p><b>Published deadlines &amp; availability</b><br>${esc(e.deadline)}</p>`:''}${e.deadline_notes?`<p><b>Initial research notes (may include superseded dates)</b><br>${esc(e.deadline_notes)}</p>`:''}${e.date&&e.date!==`${e.start} — ${e.end}`?`<p>${esc(e.date)}</p>`:''}<ul class="milestones">${(e.milestones||[]).map(m=>`<li><b>${esc(m.label)}</b><br>${esc(nodeText(m))}${m.evidence?`<br>${esc(m.evidence)}`:''}${m.candidates?.length?`<br>Candidates: ${m.candidates.map(c=>esc(typeof c==='string'?c:(c.date||c.raw||JSON.stringify(c)))).join(' / ')}`:''}${m.source?`<br>${anchor(m.source,'Date source ↗')}`:''}</li>`).join('')}</ul>${e.evidence?`<p>${esc(e.evidence)}</p>`:''}<b>Official sources</b><ul class="source-links">${sources.map((url,i)=>`<li>${anchor(url,`${i+1}. ${new URL(url).hostname} ↗`)}</li>`).join('')}</ul><p>Initial research / latest supported-fact verification: ${esc(shortTime(check.last_verified_at||e.verified_on))}</p>${check.message?`<p>${esc(check.message)}</p>`:''}</details><p class="check">${esc(checkState)} · ${esc(shortTime(check.last_checked_at))}</p><div class="card-actions">${anchor(e.url,'Official website ↗','button')}<button class="secondary" data-track="${esc(e.id)}">Track a date</button>${email?anchor(email,'Send reminder ↗','button secondary'):'<button class="secondary" disabled title="Email reminders are not available yet">Send reminder</button>'}</div></article>`;
}
function renderCatalogue(){
  if(catalogueError)return;
  const f={search:$('search').value,region:$('region').value,topic:$('topic').value,type:$('type').value,year:$('year').value,sort:$('sort').value,showPast:$('show-past').checked};
  const events=filterEvents([...catalogue.events,...catalogue.watchlist],f);
  const watch=events.filter(e=>!e.start).length;
  $('result-count').textContent=`${events.length-watch} scheduled · ${watch} awaiting dates`;
  $('catalogue-list').innerHTML=events.length?events.map(card).join(''):'<div class="empty">No conferences match these filters.<br>Try another topic or explore worldwide.</div>';
}
function renderHealth(){
  const all=[...catalogue.events,...catalogue.watchlist];
  $('catalogue-stats').innerHTML=[[catalogue.events.length,'scheduled activities'],[catalogue.events.filter(e=>e.region==='UK').length,'in the UK'],[catalogue.events.filter(e=>e.region==='Europe').length,'elsewhere in Europe'],[catalogue.watchlist.length,'awaiting dates']].map(([n,label])=>`<div class="stat"><b>${n}</b><span>${label}</span></div>`).join('');
  const latest=catalogue.metadata.last_checked_at || all.map(e=>e.check?.last_checked_at).filter(Boolean).sort().at(-1);
  const needs=all.filter(e=>e.check?.status==='review_required').length, failed=all.filter(e=>e.check?.status==='failed').length;
  const stale=!latest||Date.now()-new Date(latest).getTime()>48*3600000;
  $('source-health').textContent=`Initial research: ${dateLabel(catalogue.metadata.verified_on || '2026-10-27')}. Latest automated check: ${shortTime(latest)}.${stale?' Check overdue or not yet run.':''}${needs?' '+needs+' activities need review.':''}${failed?' '+failed+' activities have source-check errors.':''} Individual facts retain their own verification dates.`;
  const updates=catalogue.updates||[];
  $('update-list').innerHTML=updates.length?updates.slice(0,15).map(u=>`<div class="update-entry"><b>${esc(u.event_name||u.event_id||u.eventId||u.name||'Official-source update')}</b> · ${esc(shortTime(u.checked_at||u.timestamp||u.at||u.time))}<br>${esc(u.message||u.summary||u.field||u.type||'Source data changed')}${u.previous!==undefined||u.value!==undefined?`<br>${esc(typeof u.previous==='object'?JSON.stringify(u.previous):u.previous)} → ${esc(typeof u.value==='object'?JSON.stringify(u.value):u.value)}`:''}${u.source?` · ${anchor(u.source,'Source ↗')}`:''}</div>`).join(''):'<p class="fine">No automated changes recorded yet. The catalogue keeps the initial source-verified research snapshot.</p>';
}
function renderPersonal(){
  const sorted=[...meetings].sort((a,b)=>a.time-b.time);
  $('total').textContent=sorted.filter(m=>m.time>Date.now()).length+' upcoming dates';
  $('list').innerHTML=sorted.length?sorted.map(m=>{const delta=m.time-Date.now(),minutes=Math.ceil(delta/60000);const count=delta<0?'Deadline passed':minutes<60?minutes+' min left':minutes<1440?Math.floor(minutes/60)+'h '+minutes%60+' min left':Math.floor(minutes/1440)+' days left';return `<article class="meeting"><span class="badge">${delta<0?'Past date':'Tracked date'}</span><span class="count">${esc(count)}</span><h3>${esc(m.title)}</h3><div class="meta">${esc(m.deadlineLabel||'Submission deadline')}: ${esc(new Date(m.time).toLocaleString('en-GB',{dateStyle:'full',timeStyle:'short'}))}<br>Conference starts: ${esc(m.conferenceDate?dateLabel(m.conferenceDate):'Date to be announced')}<br>Location: ${esc(m.place||'Location to be announced')}<br>Reminder: ${esc(m.reminder/1440)} days before</div><p>${anchor(m.website,'Conference website ↗')}</p><div class="actions"><button class="secondary" data-export="${esc(m.id)}">Export to calendar ↗</button><button class="secondary" data-delete="${esc(m.id)}">Remove</button></div></article>`;}).join(''):'<div class="empty">A good opportunity deserves a place in your calendar.<br>Choose “Track a date” on a conference or add your own.</div>';
}
function selectNode(){
  const m=selectedEvent?.milestones?.find(m=>m.id===$('milestone').value);
  $('date').value='';
  if(!m){$('deadlineLabel').value='Submission deadline';$('milestone-hint').textContent='Enter a deadline and confirm its time from the official website.';return;}
  $('deadlineLabel').value=m.label;
  const time=milestoneInstant(m);
  if(time!==null)$('date').value=localInput(time);
  $('milestone-hint').textContent=`Published: ${nodeText(m)}. ${time===null?'Enter the confirmed date and time in your device’s local time; no time has been assumed.':'Converted to your device’s local time. Please confirm before saving.'}`;
}
function track(id){
  selectedEvent=[...catalogue.events,...catalogue.watchlist].find(e=>e.id===id);if(!selectedEvent)return;
  const e=selectedEvent;
  $('title').value=e.name;$('place').value=e.location||'';$('website').value=safeUrl(e.url);$('conferenceDate').value=e.start||'';
  const nodes=upcomingNodes(e);
  $('milestone-wrap').hidden=false;
  $('milestone').innerHTML='<option value="">Enter another date…</option>'+nodes.map(m=>`<option value="${esc(m.id)}">${esc(m.label)} · ${esc(m.date)}</option>`).join('');
  $('milestone').value=(nodes.find(m=>m.kind==='conference_start')||nodes[0])?.id||'';selectNode();
  $('form').scrollIntoView({behavior:'smooth',block:'center'});$('title').focus({preventScroll:true});
  status('Conference details filled in. Confirm the selected date and its local time before saving.');
}
$('catalogue-list').addEventListener('click',e=>{const button=e.target.closest('[data-track]');if(button)track(button.dataset.track);});
for(const id of ['search','region','topic','type','year','sort','show-past'])$(id).addEventListener(id==='search'?'input':'change',renderCatalogue);
$('reset-filters').onclick=()=>{$('search').value='';$('region').value='Europe-group';for(const id of ['topic','type','year'])$(id).value='all';$('sort').value='date';$('show-past').checked=false;renderCatalogue();};
$('milestone').onchange=selectNode;
$('clear-form').onclick=()=>{$('form').reset();selectedEvent=null;$('milestone-wrap').hidden=true;};
$('form').onsubmit=e=>{
  e.preventDefault();const website=$('website').value.trim();if(website&&!safeUrl(website)){status('Use an http:// or https:// conference website URL.');return;}
  const title=$('title').value.trim(),time=new Date($('date').value).getTime(),deadlineLabel=$('deadlineLabel').value.trim();
  if(!title||!deadlineLabel||!Number.isFinite(time)||time<=Date.now()){status('Enter a conference name, a node label and a future deadline.');return;}
  const candidate={id:crypto.randomUUID(),title,time,place:$('place').value.trim(),conferenceDate:$('conferenceDate').value,website,reminder:Number($('reminder').value),notified:false,deadlineLabel};
  if(selectedEvent){candidate.catalogId=selectedEvent.id;candidate.milestoneId=$('milestone').value;}
  if(isDuplicate(meetings,candidate)){status('This date is already in your reminders.');return;}
  meetings.push(candidate);const stored=save();renderPersonal();$('clear-form').click();if(stored)status('Reminder saved on this device. Export it to your calendar for reminders when the page is closed.');
};
$('notify').onclick=async()=>{if(!('Notification'in window)){status('Browser notifications are not supported here. Export your dates to a calendar.');return;}try{const permission=await Notification.requestPermission();status(permission==='granted'?'Browser reminders enabled. Keep this page open to receive them.':'Browser reminders were not allowed. Calendar reminders are still available.');tick();}catch{status('Could not enable browser notifications. Export your dates to a calendar.');}};
$('list').onclick=e=>{const b=e.target.closest('button');if(!b)return;const remove=b.dataset.delete,exportId=b.dataset.export;if(remove){meetings=meetings.filter(m=>m.id!==remove);save();renderPersonal();}if(exportId){const m=meetings.find(m=>m.id===exportId);if(!m)return;const url=URL.createObjectURL(new Blob([calendarFile(m)],{type:'text/calendar;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='conference-reminder.ics';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}};
function tick(){for(const m of meetings){if(!m.notified&&m.time>Date.now()&&m.time-Date.now()<=m.reminder*60000&&'Notification'in window&&Notification.permission==='granted'){try{new Notification(`${m.deadlineLabel||'Submission deadline'}: ${m.title}`,{body:new Date(m.time).toLocaleString()+' '+(m.place||'')});m.notified=true;save();}catch{}}}renderPersonal();}
async function loadCatalogue(){try{const response=await fetch('./data/conferences.json',{cache:'no-store'});if(!response.ok)throw new Error('Catalogue unavailable');const data=await response.json();if(!Array.isArray(data.events)||!Array.isArray(data.watchlist))throw new Error('Invalid catalogue');catalogue=data;const all=[...data.events,...data.watchlist];for(const [id,values] of [['topic',all.flatMap(e=>e.tags||[])],['type',all.map(e=>e.type)],['year',all.map(e=>e.start?.slice(0,4)||e.name.match(/20\d{2}/)?.[0]).filter(Boolean)]]){for(const value of [...new Set(values)].sort()){const option=document.createElement('option');option.value=value;option.textContent=value;$(id).append(option);}}renderHealth();renderCatalogue();}catch{catalogueError=true;$('source-health').textContent='The catalogue could not be loaded. Your personal reminders and manual entry still work.';$('catalogue-list').innerHTML='<p class="empty">The conference collection is temporarily unavailable. Please try reloading.</p>';$('result-count').textContent='Catalogue unavailable';}}
async function loadConfig(){try{const r=await fetch('./config.json',{cache:'no-store'});if(r.ok)config=await r.json();if(emailUrl()){$('email-status').innerHTML='Email reminders are available. Choose “Send reminder”, select your dates, and verify your email. '+anchor(emailUrl(),'Manage email reminders ↗');renderCatalogue();}}catch{/* Local and calendar reminders remain available. */}}
renderPersonal();tick();setInterval(tick,15000);loadCatalogue();loadConfig();
