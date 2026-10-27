import {esc,safeUrl,dateLabel,todayISO,upcomingNodes,isConferenceDate,eventStatuses,hasEuropeanSite,filterEvents} from './core.mjs?v=20261027-statuses-final';

const $=id=>document.getElementById(id);
let catalogue={events:[],watchlist:[],metadata:{},updates:[]};
let config={emailRemindersEnabled:false,emailReminderUrl:''};
let catalogueError=false;
let catalogueDay=todayISO();
let catalogueStatusSignature='';
function anchor(url,label,cls=''){const href=safeUrl(url);return href?`<a class="${esc(cls)}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`:'';}
function shortTime(value){if(!value)return 'Not yet checked';const d=new Date(value);return Number.isFinite(d.getTime())?d.toLocaleString('en-GB',{dateStyle:'medium',timeStyle:'short'}):String(value);}
function emailUrl(id){if(!config.emailRemindersEnabled)return '';try{const u=new URL(config.emailReminderUrl);if(u.protocol!=='https:'||u.hostname!=='script.google.com'||!u.pathname.endsWith('/exec'))return '';if(id)u.searchParams.set('eventId',id);else u.searchParams.set('view','request-manage');return u.href;}catch{return '';}}
function nodeText(m){if(m.status==='conflict')return 'Conflicting dates — check official sources';if(!m.date)return 'Date not yet verified';return `${dateLabel(m.date)}${m.time?' · '+m.time:''}${m.timezone?' ('+m.timezone+')':''}${m.precision==='date'?' · time not announced':''}${m.status==='unknown'?' · provisional / unverified':''}`;}
function card(e){
  const upcoming=upcomingNodes(e);
  const next=upcoming.find(m=>!isConferenceDate(m));
  const watch=!e.start;
  const phases=eventStatuses(e);
  const check=e.check||{};
  const checkState={not_checked:'Awaiting automated check',checked:'Source check completed',review_required:'Source needs review',failed:'Source check failed'}[check.status]||'Awaiting automated check';
  const hasConflict=(e.milestones||[]).some(m=>m.status==='conflict');
  const region=e.region==='UK'?'United Kingdom':e.region==='Europe'?'Europe':hasEuropeanSite(e)?'Worldwide · Paris option':'Worldwide';
  const email=e.reminders_paused?'':emailUrl(e.id);
  const dates=e.start?dateLabel(e.start)+(e.end&&e.end!==e.start?' – '+dateLabel(e.end):''):'Dates to be announced';
  const sources=[...new Set([e.url,...(e.sources||[])])].filter(safeUrl);
  return `<article class="conference${watch?' watchlist':''}" id="event-${esc(e.id)}"><div class="card-top"><span class="badge${watch||hasConflict?' warn':''}">${esc(watch?'Watchlist · '+region:region)}</span><span class="activity">${esc(e.type)}</span></div><div class="phase-line" role="list" aria-label="Conference statuses">${statusBadges(phases)}</div><h3>${esc(e.name)}</h3><p class="event-date">${esc(dates)}</p><p class="location">${esc(e.location||'Location to be announced')}</p><div class="tags">${(e.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><p class="event-status">${esc(e.status)}${e.reminders_paused?' Reminder scheduling is paused while an official change is reviewed.':''}</p>${next?`<p class="deadline-preview"><b>${esc(next.label)}</b><br>${esc(nodeText(next))}</p>`:hasConflict?'<p class="deadline-preview">Some dates conflict. See the evidence before planning.</p>':''}<details class="card-details"><summary>Dates, research fit &amp; sources</summary><p>${esc(e.note)}</p>${e.deadline?`<p><b>Published deadlines &amp; availability</b><br>${esc(e.deadline)}</p>`:''}${e.deadline_notes?`<p><b>Initial research notes (may include superseded dates)</b><br>${esc(e.deadline_notes)}</p>`:''}${e.date&&e.date!==`${e.start} — ${e.end}`?`<p>${esc(e.date)}</p>`:''}<ul class="milestones">${(e.milestones||[]).map(m=>`<li><b>${esc(m.label)}</b><br>${esc(nodeText(m))}${m.evidence?`<br>${esc(m.evidence)}`:''}${m.candidates?.length?`<br>Candidates: ${m.candidates.map(c=>esc(typeof c==='string'?c:(c.date||c.raw||JSON.stringify(c)))).join(' / ')}`:''}${m.source?`<br>${anchor(m.source,'Date source ↗')}`:''}</li>`).join('')}</ul>${e.evidence?`<p>${esc(e.evidence)}</p>`:''}<b>Official sources</b><ul class="source-links">${sources.map((url,i)=>`<li>${anchor(url,`${i+1}. ${new URL(url).hostname} ↗`)}</li>`).join('')}</ul><p>Initial research / latest supported-fact verification: ${esc(shortTime(check.last_verified_at||e.verified_on))}</p>${check.message?`<p>${esc(check.message)}</p>`:''}</details><p class="check">${esc(checkState)} · ${esc(shortTime(check.last_checked_at))}</p><div class="card-actions">${email?anchor(email,'Send reminder ↗','button'):'<button class="secondary" disabled title="Email reminders are not currently available for this conference">Send reminder</button>'}${anchor(e.url,'Official website ↗','button secondary')}</div></article>`;
}
function statusBadges(phases){return phases.map(phase=>`<span role="listitem" class="phase-badge" data-phase="${esc(phase.key)}"${phase.availability?` data-availability="${esc(phase.availability)}"`:""} title="${esc(phase.help)}" aria-label="Status: ${esc(phase.label)}">${esc(phase.label)}</span>`).join('');}
function statusSignature(){return JSON.stringify([...catalogue.events,...catalogue.watchlist].map(e=>[e.id,eventStatuses(e)]));}
function renderCatalogue(){
  if(catalogueError)return;
  const f={search:$('search').value,region:$('region').value,topic:$('topic').value,type:$('type').value,year:$('year').value,stage:$('stage').value,sort:$('sort').value,showPast:$('show-past').checked};
  const events=filterEvents([...catalogue.events,...catalogue.watchlist],f);
  const watch=events.filter(e=>!e.start).length;
  $('result-count').textContent=`${events.length-watch} scheduled · ${watch} awaiting dates`;
  catalogueStatusSignature=statusSignature();
  $('catalogue-list').innerHTML=events.length?events.map(card).join(''):'<div class="empty">No conferences match these filters.<br>Try another topic or explore worldwide.</div>';
}
function refreshPhases(){
  if(statusSignature()!==catalogueStatusSignature)renderCatalogue();
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
for(const id of ['search','region','topic','type','year','sort','show-past'])$(id).addEventListener(id==='search'?'input':'change',renderCatalogue);
$('stage').onchange=()=>{if($('stage').value==='finished')$('show-past').checked=true;renderCatalogue();};
$('reset-filters').onclick=()=>{$('search').value='';$('region').value='Europe-group';for(const id of ['topic','type','year','stage'])$(id).value='all';$('sort').value='date';$('show-past').checked=false;renderCatalogue();};
function tick(){const day=todayISO();if(day!==catalogueDay){catalogueDay=day;renderCatalogue();}else refreshPhases();}
async function loadCatalogue(){try{const response=await fetch('./data/conferences.json',{cache:'no-store'});if(!response.ok)throw new Error('Catalogue unavailable');const data=await response.json();if(!Array.isArray(data.events)||!Array.isArray(data.watchlist))throw new Error('Invalid catalogue');catalogue=data;const all=[...data.events,...data.watchlist];for(const [id,values] of [['topic',all.flatMap(e=>e.tags||[])],['type',all.map(e=>e.type)],['year',all.map(e=>e.start?.slice(0,4)||e.name.match(/20\d{2}/)?.[0]).filter(Boolean)]]){for(const value of [...new Set(values)].sort()){const option=document.createElement('option');option.value=value;option.textContent=value;$(id).append(option);}}renderHealth();renderCatalogue();}catch{catalogueError=true;$('source-health').textContent='The catalogue could not be loaded. Please try reloading.';$('catalogue-list').innerHTML='<p class="empty">The conference collection is temporarily unavailable. Please try reloading.</p>';$('result-count').textContent='Catalogue unavailable';}}
async function loadConfig(){try{const r=await fetch('./config.json',{cache:'no-store'});if(r.ok)config=await r.json();if(emailUrl()){$('email-status').innerHTML='<b>Set your own email reminders.</b> Choose “Send reminder” on a conference, select dates and 1 day / 3 days / 1 week, then verify your email. Reminders arrive even when this page is closed. No Google sign-in is required. '+anchor(emailUrl(),'Manage my email reminders ↗');renderCatalogue();}else{$('email-status').textContent='Email reminders are temporarily unavailable. Please check back later.';}}catch{$('email-status').textContent='Email reminder availability could not be checked. Please try reloading.';}}
tick();setInterval(tick,15000);loadCatalogue();loadConfig();
