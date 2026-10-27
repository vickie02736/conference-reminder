import {esc,safeUrl,dateLabel,todayISO,upcomingNodes,nextDeadline,eventStatuses,hasEuropeanSite,filterEvents,deadlineSummary,timelineEntries} from './core.mjs?v=20261027-deadline-sorts';

const $=id=>document.getElementById(id);
let catalogue={events:[],watchlist:[],metadata:{},updates:[]};
let config={emailRemindersEnabled:false,emailReminderUrl:''};
let catalogueError=false;
let catalogueLoaded=false;
let watchlistIds=new Set();
const sourceButtons=new Map();
let catalogueDay=todayISO();
let catalogueStatusSignature='';
let timelineMarkup='';
function anchor(url,label,cls=''){const href=safeUrl(url);return href?`<a class="${esc(cls)}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`:'';}
function shortTime(value){if(!value)return 'Not yet checked';const d=new Date(value);return Number.isFinite(d.getTime())?d.toLocaleString('en-GB',{dateStyle:'medium',timeStyle:'short'}):String(value);}
function emailUrl(id){if(!config.emailRemindersEnabled)return '';try{const u=new URL(config.emailReminderUrl);if(u.protocol!=='https:'||u.hostname!=='script.google.com'||!u.pathname.endsWith('/exec'))return '';if(id)u.searchParams.set('eventId',id);else u.searchParams.set('view','request-manage');return u.href;}catch{return '';}}
function nodeText(m){if(m.status==='conflict')return 'Conflicting dates — check official sources';if(!m.date)return 'Date not yet verified';return `${dateLabel(m.date)}${m.time?' · '+m.time:''}${m.timezone?' ('+m.timezone+')':''}${m.status==='unknown'?' · provisional / unverified':''}`;}
// Collection membership also covers announced dates whose evidence is still provisional.
function isWatchlist(e){return watchlistIds.has(e.id)||!e.start||(e.milestones||[]).some(m=>m.kind==='conference_start'&&m.date===e.start&&m.status!=='verified');}
function card(e){
  const upcoming=upcomingNodes(e);
  const next=nextDeadline(e,$('sort').value);
  const watch=isWatchlist(e);
  const phases=eventStatuses(e);
  const check=e.check||{};
  const checkState={not_checked:'Awaiting automated check',checked:'Source check completed',review_required:'Source needs review',failed:'Source check failed',unverifiable:'Source not automatically checkable'}[check.status]||'Awaiting automated check';
  const hasConflict=(e.milestones||[]).some(m=>m.status==='conflict');
  const region=e.region==='UK'?'United Kingdom':e.region==='Europe'?'Europe':hasEuropeanSite(e)?'Worldwide · Paris option':'Worldwide';
  const paused=e.reminders_paused||e.disabled||phases.some(p=>['cancelled','paused'].includes(p.key));
  const full=phases.some(p=>p.key==='fully_booked');
  const email=watch||paused||full||!upcoming.length?'':emailUrl(e.id);
  const reminderLabel=watch?'Dates not confirmed':paused?'Reminders paused':full?'Attendance full':!upcoming.length?'No future dates':'Send reminder';
  const reminderReason=watch?'Email reminders become available after the conference dates are verified.':paused?'Reminder scheduling is paused for this activity.':full?'This activity is full or on a waiting list, so new attendance reminders are not offered.':!upcoming.length?'There are no verified future dates to remind you about.':'Email reminders are temporarily unavailable.';
  const reminderAction=email?anchor(email,'Send reminder ↗','button'):'<button class="secondary" disabled title="'+esc(reminderReason)+'">'+esc(reminderLabel)+'</button>';
  const dates=e.start?(watch?'Provisional: ':'')+dateLabel(e.start)+(e.end&&e.end!==e.start?' – '+dateLabel(e.end):''):'Dates to be announced';
  const sources=[...new Set([e.url,...(e.sources||[])])].filter(safeUrl);
  const deadlines=deadlineSummary(e);
  return `<article class="conference${watch?' watchlist':''}" id="event-${esc(e.id)}" tabindex="-1"><a class="timeline-return" href="#conference-timeline">↑ Back to timeline</a><div class="card-top"><span class="badge${watch||hasConflict?' warn':''}">${esc(watch?'Dates pending · '+region:region)}</span><span class="activity">${esc(e.type)}</span></div><div class="phase-line" role="list" aria-label="Conference statuses">${statusBadges(phases)}</div><h3>${esc(e.name)}</h3><p class="event-date">${esc(dates)}</p><p class="location">${esc(e.location||'Location to be announced')}</p><div class="tags">${(e.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><p class="event-status">${esc(e.status)}${e.reminders_paused?' Reminder scheduling is paused while an official change is reviewed.':''}</p>${next?`<p class="deadline-preview"><b>${esc(next.label)}</b><br>${esc(nodeText(next))}</p>`:hasConflict?'<p class="deadline-preview">Some dates conflict. See the evidence before planning.</p>':''}<details class="card-details"><summary>Dates, research fit &amp; sources</summary><p>${esc(e.note)}</p>${deadlines?`<p><b>Published deadlines &amp; availability</b><br>${esc(deadlines)}</p>`:''}${e.deadline_notes?`<p><b>Initial research notes (may include superseded dates)</b><br>${esc(e.deadline_notes)}</p>`:''}${e.date&&e.date!==`${e.start} — ${e.end}`?`<p>${esc(e.date)}</p>`:''}<ul class="milestones">${(e.milestones||[]).map(m=>`<li><b>${esc(m.label)}</b><br>${esc(nodeText(m))}${m.evidence?`<br>${esc(m.evidence)}`:''}${m.candidates?.length?`<br>Candidates: ${m.candidates.map(c=>esc(typeof c==='string'?c:(c.date||c.raw||JSON.stringify(c)))).join(' / ')}`:''}${m.source?`<br>${anchor(m.source,'Date source ↗')}`:''}</li>`).join('')}</ul>${e.evidence?`<p>${esc(e.evidence)}</p>`:''}<b>Official sources</b><ul class="source-links">${sources.map((url,i)=>`<li>${anchor(url,`${i+1}. ${new URL(url).hostname} ↗`)}</li>`).join('')}</ul><p>Initial research / latest supported-fact verification: ${esc(shortTime(check.last_verified_at||e.verified_on))}</p>${check.message?`<p>${esc(check.message)}</p>`:''}</details><p class="check">${esc(checkState)} · ${esc(shortTime(check.last_checked_at))}</p><div class="card-actions">${reminderAction}${anchor(e.url,'Official website ↗','button secondary')}</div></article>`;
}
function statusBadges(phases){return phases.map(phase=>`<span role="listitem" class="phase-badge" data-phase="${esc(phase.key)}"${phase.availability?` data-availability="${esc(phase.availability)}"`:""} title="${esc(phase.help)}" aria-label="Status: ${esc(phase.label)}">${esc(phase.label)}</span>`).join('');}
function statusSignature(){return JSON.stringify([...catalogue.events,...catalogue.watchlist].map(e=>[e.id,eventStatuses(e)]));}
function renderTimeline(events,stage){
  const entries=timelineEntries(events,stage);
  const labels={registration:'Registration dates',submission:'Submission dates',abstract:'Abstract dates',oral:'Oral submission dates',poster:'Poster submission dates',paper:'Paper submission dates',application:'Application dates',opening_soon:'Opening dates',closed:'Closed submission / registration dates',needs_review:'Dates to confirm'};
  const dated=entries.filter(entry=>entry.date).length;
  $('conference-timeline').hidden=false;
  $('timeline-count').textContent=`${labels[stage]||'Conference dates'} · ${events.length} ${events.length===1?'activity':'activities'}`;
  $('timeline-hint').textContent=entries.length?`Scroll through ${dated} published ${dated===1?'date':'dates'}${entries.length-dated?` and ${entries.length-dated} awaiting confirmation`:''}. Select an activity to jump to its card.`:'No activities match these filters.';
  let undated=false;
  const markup=entries.map(entry=>{
    const divider=!entry.date&&!undated?'<li class="timeline-divider">Dates to confirm</li>':'';
    if(!entry.date)undated=true;
    const stamp=entry.date?`<time datetime="${esc(entry.date)}">${esc(dateLabel(entry.date).replace(/ \d{4}$/, ''))}<small>${esc(entry.date.slice(0,4))}</small></time>`:'<span class="timeline-tba">To confirm</span>';
    const detail=[entry.label,entry.endDate&&entry.endDate!==entry.date?`Ends ${dateLabel(entry.endDate)}`:'',entry.time?`${entry.time}${entry.timezone?' ('+entry.timezone+')':''}`:'',entry.status==='conflict'?'Conflicting dates':entry.status==='paused'?'Dates need confirmation':''].filter(Boolean).join(' · ');
    return `${divider}<li class="timeline-item${entry.date?'':' timeline-undated'}"><a class="timeline-link" href="#event-${encodeURIComponent(entry.eventId)}"><span class="timeline-date">${stamp}</span><span class="timeline-dot" aria-hidden="true"></span><span class="timeline-body"><span class="timeline-name">${esc(entry.eventName)}</span><span class="timeline-detail">${esc(detail)}</span></span><span class="timeline-arrow" aria-hidden="true">↓</span></a></li>`;
  }).join('')||'<li class="timeline-empty">Try adjusting the filters or use Reset filters.</li>';
  // Email configuration and clock checks can render the catalogue again while
  // someone is browsing dates. Retain the current links and scroll position.
  if(markup!==timelineMarkup){$('timeline-list').innerHTML=markup;$('timeline-scroll').scrollTop=0;timelineMarkup=markup;}
}
function renderCatalogue(){
  if(catalogueError||!catalogueLoaded)return;
  const f={search:$('search').value,region:$('region').value,topic:$('topic').value,type:$('type').value,year:$('year').value,stage:$('stage').value,sort:$('sort').value,showPast:$('show-past').checked};
  const sourceCheck=$('source-check').value;
  const entries=[...catalogue.events,...catalogue.watchlist].filter(e=>sourceCheck==='all'||(e.check?.status||'not_checked')===sourceCheck);
  const events=filterEvents(entries,f);
  const watch=events.filter(isWatchlist).length;
  const scheduled=events.length-watch;
  $('result-count').textContent=`${scheduled} scheduled · ${watch} ${watch===1?'date':'dates'} pending / unconfirmed`;
  const advancedCount=['topic','type','year','source-check'].filter(id=>$(id).value!=='all').length;
  $('advanced-count').textContent=advancedCount?`(${advancedCount} selected)`:'';
  for(const [status,button] of sourceButtons)button.setAttribute('aria-pressed',String(sourceCheck===status));
  catalogueStatusSignature=statusSignature();
  $('catalogue-list').innerHTML=events.length?events.map(card).join(''):'<div class="empty">No conferences match these filters.<br>Try adjusting the filters or use Reset filters.</div>';
  renderTimeline(events,f.stage);
}
function refreshPhases(){
  if(statusSignature()!==catalogueStatusSignature)renderCatalogue();
}
function renderHealth(){
  const all=[...catalogue.events,...catalogue.watchlist];
  const scheduled=all.filter(e=>!isWatchlist(e));
  $('catalogue-stats').innerHTML=[[scheduled.length,'scheduled activities'],[scheduled.filter(e=>e.region==='UK').length,'in the UK'],[scheduled.filter(e=>e.region==='Europe').length,'elsewhere in Europe'],[all.length-scheduled.length,'dates pending / unconfirmed']].map(([n,label])=>`<div class="stat"><b>${n}</b><span>${label}</span></div>`).join('');
  const latest=catalogue.metadata.last_checked_at || all.map(e=>e.check?.last_checked_at).filter(Boolean).sort().at(-1);
  const needs=all.filter(e=>e.check?.status==='review_required').length, failed=all.filter(e=>e.check?.status==='failed').length, blocked=all.filter(e=>e.check?.status==='unverifiable').length;
  const stale=!latest||Date.now()-new Date(latest).getTime()>48*3600000;
  $('source-health').textContent=`Official sources: ${shortTime(latest)}.${stale?' Check overdue or not yet run.':''}`;
  $('source-health-detail').textContent=`Initial research: ${dateLabel(catalogue.metadata.verified_on || '2026-10-27')}. Latest automated check: ${shortTime(latest)}.${stale?' Check overdue or not yet run.':''} Individual facts retain their own verification dates. Source shortcuts show all affected activities across the catalogue; the Source check filter can be combined with your other filters.`;
  $('source-shortcuts').replaceChildren();sourceButtons.clear();
  for(const [status,count,label] of [['review_required',needs,'Sources to review'],['failed',failed,'Source errors'],['unverifiable',blocked,'Sources not automatically checkable']]){
    if(!count)continue;
    const button=document.createElement('button');button.type='button';button.className='health-button';button.textContent=`${label} (${count})`;button.setAttribute('aria-pressed','false');
    button.addEventListener('click',()=>{resetFilters();$('source-check').value=status;$('region').value='all';$('show-past').checked=true;$('advanced-filters').open=true;renderCatalogue();});
    sourceButtons.set(status,button);$('source-shortcuts').append(button);
  }
  const updates=catalogue.updates||[];
  $('update-list').innerHTML=updates.length?updates.slice(0,15).map(u=>`<div class="update-entry"><b>${esc(u.event_name||u.event_id||u.eventId||u.name||'Official-source update')}</b> · ${esc(shortTime(u.checked_at||u.timestamp||u.at||u.time))}<br>${esc(u.message||u.summary||u.field||u.type||'Source data changed')}${u.previous!==undefined||u.value!==undefined?`<br>${esc(typeof u.previous==='object'?JSON.stringify(u.previous):u.previous)} → ${esc(typeof u.value==='object'?JSON.stringify(u.value):u.value)}`:''}${u.source?` · ${anchor(u.source,'Source ↗')}`:''}</div>`).join(''):'<p class="fine">No automated changes recorded yet. The catalogue keeps the initial source-verified research snapshot.</p>';
}
for(const id of ['search','region','topic','type','year','sort','show-past','source-check'])$(id).addEventListener(id==='search'?'input':'change',renderCatalogue);
$('stage').onchange=()=>{if($('stage').value==='finished')$('show-past').checked=true;renderCatalogue();};
function resetFilters(){$('search').value='';$('region').value='Europe-group';for(const id of ['topic','type','year','stage','source-check'])$(id).value='all';$('sort').value='date';$('show-past').checked=false;$('advanced-filters').open=false;}
$('reset-filters').onclick=()=>{resetFilters();renderCatalogue();};
function tick(){const day=todayISO();if(day!==catalogueDay){catalogueDay=day;renderCatalogue();}else refreshPhases();}
async function loadCatalogue(){try{const response=await fetch('./data/conferences.json',{cache:'no-store'});if(!response.ok)throw new Error('Catalogue unavailable');const data=await response.json();if(!Array.isArray(data.events)||!Array.isArray(data.watchlist))throw new Error('Invalid catalogue');catalogue=data;watchlistIds=new Set(data.watchlist.map(e=>e.id));catalogueLoaded=true;const all=[...data.events,...data.watchlist];for(const [id,values] of [['topic',all.flatMap(e=>e.tags||[])],['type',all.map(e=>e.type)],['year',all.map(e=>e.start?.slice(0,4)||e.name.match(/20\d{2}/)?.[0]).filter(Boolean)]]){for(const value of [...new Set(values)].sort()){const option=document.createElement('option');option.value=value;option.textContent=value;$(id).append(option);}}renderHealth();renderCatalogue();}catch{catalogueError=true;$('source-health').textContent='The catalogue could not be loaded. Please try reloading.';$('catalogue-list').innerHTML='<p class="empty">The conference collection is temporarily unavailable. Please try reloading.</p>';$('result-count').textContent='Catalogue unavailable';}}
async function loadConfig(){try{const r=await fetch('./config.json',{cache:'no-store'});if(r.ok)config=await r.json();if(emailUrl()){$('email-status').innerHTML='<b>Email reminders:</b> choose dates on a conference, then verify your email. '+ '<span class="email-help">No sign-in; reminders work with this page closed. </span>'+anchor(emailUrl(),'Manage my email reminders ↗');renderCatalogue();}else{$('email-status').textContent='Email reminders are temporarily unavailable. Please check back later.';}}catch{$('email-status').textContent='Email reminder availability could not be checked. Please try reloading.';}}
tick();setInterval(tick,15000);loadCatalogue();loadConfig();
