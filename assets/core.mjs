export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeUrl(value) { try { const u = new URL(value); return ['http:', 'https:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } }
export function dateLabel(value) { return value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T12:00:00Z`).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}) : 'Date to be announced'; }
export function todayISO(now = new Date()) { return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; }
export const isConferenceDate = m => ['conference_start','conference_end'].includes(m.kind);
// Keep the research keywords in the catalogue while presenting a short, shared
// taxonomy in the topic filter and on conference cards.
export const topicGroups = [
  {label:'AI & Machine Learning', tags:['AI','ML','Machine Learning','GNN','Intelligent Computing','AI for Science']},
  {label:'AI for Materials & Chemistry', tags:['AI for Materials','AI for Chemistry','AI for Materials Chemistry','Materials Informatics','ML Potentials','Materials Data','Inverse Design']},
  {label:'MOFs, COFs & Porous Materials', tags:['MOF','COF','Porous Materials','Porous Media','Poroelasticity','Porous Metals','Reticular Chemistry','Zeolites']},
  {label:'Adsorption & Separations', tags:['Adsorption']},
  {label:'Simulation & Theory', tags:['Simulation','Electronic Structure','Computational Chemistry','Theoretical Chemistry','Molecular Modelling','Statistical Physics','Computational Materials','Thermodynamics','Phase Equilibria','Quantum Transport','Quantum Dynamics','Theoretical and Computational Chemistry','Computational and Theoretical Chemistry','Ionic Fluids','Transport','Confined Water','Soft Matter','Self-assembly']},
  {label:'Materials & Characterisation', tags:['General Materials','Materials Chemistry','Catalysis','Electrochemistry','Carbon Materials','Characterisation']},
  {label:'Automation & Digital Chemistry', tags:['Automation','Automated Experimentation','Cheminformatics','Process Chemistry']}
];
const nonTopicTags = new Set(['School','AI and simulation symposia pending']);
const groupedTags = new Set(topicGroups.flatMap(group=>group.tags));
export function eventTopics(event) {
  const tags=new Set(event.tags || []);
  const topics=topicGroups.filter(group=>group.tags.some(tag=>tags.has(tag))).map(group=>group.label);
  if (!topics.length || [...tags].some(tag=>!groupedTags.has(tag) && !nonTopicTags.has(tag))) topics.push('Other topics');
  return topics;
}
export const peopleGroups = [
  {key:'organizers', label:'Organisers & hosts'},
  {key:'committee', label:'Committee & chairs'},
  {key:'speakers', label:'Invited speakers & panellists'},
  {key:'participants', label:'Other announced participants'}
];
export function peopleSearchText(event) {
  return peopleGroups.flatMap(({key,label}) => {
    const entries=event.people?.[key] || [];
    return entries.length ? [label, key==='organizers'?'organizers hosts':'', ...entries.flatMap(person=>[person.name,person.role,person.affiliation])] : [];
  }).filter(Boolean).join(' ');
}
// Names are often published with accents or punctuation. Accept unaccented
// spelling and match each word across the conference and its people fields.
export function searchWords(value) {
  return String(value || '').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase()
    .replace(/['’‘ʼ]/g,'')
    .replace(/[øłæœđðß]/g, character=>({'ø':'o','ł':'l','æ':'ae','œ':'oe','đ':'d','ð':'d','ß':'ss'}[character]))
    .match(/[\p{L}\p{N}]+/gu) || [];
}
export function matchesSearch(text, query) {
  const words=searchWords(query), haystack=searchWords(text).join(' ');
  return words.every(word=>haystack.includes(word));
}
const submissionKinds = new Set(['abstract','paper','poster']);
const phaseClauses = text => String(text || '').toLowerCase().split(/[.;]|\bbut\b/).map(s=>s.trim()).filter(Boolean);
const closure = /\b(?:closed|ended|passed|no longer (?:open|available)|not\s+(?:(?:currently|presently)\s+)?open)\b/;
const closedClause = clause => closure.test(clause) && !/\bnot\s+(?:yet\s+)?(?:closed|ended|passed)\b/.test(clause);
const statusSoon = clause => /not (?:yet )?open|opens? soon|opening soon|will open|forthcoming|in preparation/.test(clause);
const statusUnconfirmed = clause => /\b(?:availability|places?|tickets?)\b.{0,50}\b(?:not\s+(?:yet\s+)?(?:confirmed|verified|known)|unconfirmed|uncertain|needs?\s+(?:checking|confirmation)|must\s+be\s+confirmed)\b/.test(clause) || /\b(?:registration|submissions?|applications?)\s+(?:(?:is|are|remains?|status|opening)\s+)*(?:not\s+(?:yet\s+)?(?:confirmed|verified|known)|unconfirmed|uncertain|needs?\s+(?:checking|confirmation)|must\s+be\s+confirmed)\b/.test(clause);
const statusLink = clause => /\blink\b.{0,25}\b(?:available|published|listed|exists?)\b/.test(clause);
const statusOffered = clause => !closedClause(clause) && !statusSoon(clause) && !statusUnconfirmed(clause) && !/\bnot\s+(?:(?:currently|presently|yet)\s+)?(?:open|opened|available|offered|possible|invited)\b/.test(clause) && (/\b(?:open|opened|invited|possible)\b|\boffers?\s+(?:submit|abstract)|\bsubmit\s+(?:an?\s+)?abstract/.test(clause) || (!statusLink(clause) && /\b(?:offered|available)\b/.test(clause)));
function roundNumber(text) {
  const match=String(text || '').toLowerCase().match(/\b(?:(first|second|third)\s+round|round\s*(one|two|three|[1-3]))\b/);
  return match ? ({first:'1',second:'2',third:'3',one:'1',two:'2',three:'3'}[match[1] || match[2]] || match[2]) : null;
}
function statusClauses(event) {
  return phaseClauses(event.status).map(clause=>{
    // Resolve an omitted channel only from a matching, unambiguous published round label.
    if (['submission','registration','application'].some(channel=>channelText(clause,channel))) return clause;
    const round=roundNumber(clause);
    if (!round) return clause;
    const matches=(event.milestones || []).filter(node=>roundNumber(node.label)===round && phaseChannel(node));
    const routes=new Set(matches.map(node=>phaseChannel(node)+':'+(phaseChannel(node)==='submission'?submissionRoutes(node).join(','):'')));
    if (matches.length && routes.size===1) return matches.map(node=>String(node.label).toLowerCase()).join(' ')+' '+clause;
    return clause;
  });
}
const matchesRound = (clause,node) => !roundNumber(clause) || !!node && roundNumber(clause)===roundNumber(node.label);
function phaseChannel(node) {
  if (submissionKinds.has(node.kind) || (node.kind === 'other' && /proposal/i.test(node.label))) return 'submission';
  if (node.kind === 'application' || node.kind === 'funding') return 'application';
  if (['registration','early_registration'].includes(node.kind)) return 'registration';
  return null;
}
function phaseLabel(node) {
  if (/recent reports/i.test(node.label)) return 'Recent Reports submission';
  if (/journal.to.conference/i.test(node.label)) return 'Journal-to-Conference submission';
  if (node.kind === 'poster') return 'Poster submission';
  if (node.kind === 'paper') return /full paper.*(?:required|oral presentation)/i.test(node.label) ? 'Full paper submission' : 'Paper submission';
  if (node.kind === 'abstract') return 'Abstract submission';
  if (/proposal/i.test(node.label)) return /workshop/i.test(node.label) ? 'Workshop proposals' : 'Symposium proposals';
  if (node.kind === 'funding') return /travel/i.test(node.label) ? 'Travel-grant applications' : 'Funding applications';
  return node.kind === 'application' ? 'Applications' : 'Registration';
}
function channelText(clause, channel) {
  return (channel === 'submission' ? /\b(?:abstracts?|papers?|posters?|submissions?|calls?|proposals?)\b/ : channel === 'application' ? /\bapplications?\b/ : /\b(?:registration|bookings?|attendance|tickets?)\b/).test(clause);
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
  return clauses.some(clause=>channelText(clause,channel) && statusSoon(clause));
}
function channelOffered(clauses, channel, node) {
  const relevant=clauses.filter(clause=>channelText(clause,channel) && (!node || matchesRound(clause,node)));
  return !relevant.some(statusUnconfirmed) && relevant.some(statusOffered);
}
/** A phase describes the available route; a future cutoff alone never asserts it is open. */
export function eventPhase(event, today = todayISO(), now = Date.now()) {
  const nodes=event.milestones || [], clauses=statusClauses(event);
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
    const offered=channelOffered(clauses,channel,node);
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
// Presentation routes come only from submission nodes: a poster-presenter registration is not a poster call.
function submissionRoutes(node) {
  if (node.kind === 'poster') return ['poster'];
  if (node.kind === 'paper') return [/journal.to.conference/i.test(node.label) ? 'journal' : 'paper'];
  if (/recent (?:research )?reports/i.test(node.label)) return ['reports'];
  if (node.kind === 'other') return ['proposal'];
  const routes=[];
  if (/\boral\b|contributed.talk|speaker/i.test(node.label)) routes.push('oral');
  if (/\bposter/i.test(node.label)) routes.push('poster');
  return routes.length ? routes : ['abstract'];
}
const statusRouteLabel = route => ({oral:'Oral submission',poster:'Poster submission',abstract:'Abstract submission',paper:'Paper submission',journal:'Journal-to-Conference submission',reports:'Recent Reports submission',proposal:'Symposium proposals',registration:'Registration',application:'Applications',funding:'Travel-grant applications'}[route]);
function routeClause(clause, channel, route) {
  if (channel==='submission' && route==='reports') return /recent (?:research )?reports/.test(clause);
  if (channel==='submission' && route==='journal') return /journal.to.conference/.test(clause);
  if (!channelText(clause,channel)) return false;
  if (channel !== 'submission') return true;
  if (/recent (?:research )?reports|journal.to.conference/.test(clause)) return false;
  if (/\bproposals?\b/.test(clause) && !/\b(?:abstracts?|papers?|submissions?)\b/.test(clause)) return route==='proposal';
  const oral=/\boral\b|contributed.talk|speaker/.test(clause), poster=/\bposters?\b/.test(clause);
  if (oral || poster) return (route==='oral' && oral) || (route==='poster' && poster);
  if (/\bpapers?\b/.test(clause) && !/\b(?:abstracts?|submissions?|calls?)\b/.test(clause)) return ['paper','journal'].includes(route);
  return true;
}
/** Concurrent public stages. Filter tags describe live/planning routes, never closed or not-yet-open ones. */
export function eventStatuses(event, today = todayISO(), now = Date.now()) {
  const primary=eventPhase(event,today,now);
  const badge=(key,label,help,filters=[key],extra={})=>({key,label,help,filters,...extra});
  if (['cancelled','paused','finished','awaiting_dates'].includes(primary.key)) return [{...primary,filters:[primary.key]}];
  const nodes=event.milestones || [], clauses=statusClauses(event), results=[];
  const add=value=>{if (!results.some(s=>s.key===value.key && s.label===value.label)) results.push(value);};
  if (['ongoing','fully_booked','invitation_only','restricted','needs_review'].includes(primary.key)) add({...primary,label:primary.key==='ongoing'?'Ongoing':primary.label,filters:[primary.key]});
  // Full or restricted attendance must not be advertised as general open registration.
  const restricted=['fully_booked','invitation_only','restricted'].includes(primary.key);
  if (restricted) return results;
  const problem=nodes.find(m=>m.status==='conflict' || (m.status==='verified' && m.precision==='datetime' && m.date>=today && milestoneInstant(m)===null));
  if (problem && primary.key!=='needs_review') add(badge('needs_review','Deadline needs confirmation','A published deadline conflicts or its exact time is not verified. Other verified routes are shown separately.',['needs_review'],{milestoneId:problem.id}));
  const future=new Set(upcomingNodes(event,today,now));
  const groups=new Map();
  for (const node of nodes) {
    const channel=phaseChannel(node); if (!channel) continue;
    for (const route of channel==='submission'?submissionRoutes(node):[node.kind==='funding'?'funding':channel]) {
      if (!groups.has(route)) groups.set(route,{channel,route,nodes:[]});
      groups.get(route).nodes.push(node);
    }
  }
  // Explicit call availability can be useful even when no exact closing date was published.
  for (const channel of ['registration','application','submission']) {
    if (![...groups.values()].some(g=>g.channel===channel) && clauses.some(c=>channelText(c,channel) && !(channel==='application' && /\boral\b|\bposters?\b|speaker|contributed.talk/.test(c)) && (statusSoon(c) || closedClause(c) || statusOffered(c) || statusUnconfirmed(c) || statusLink(c)))) {
      const route=channel==='submission'?'abstract':channel;
      groups.set(route,{channel,route,nodes:[]});
    }
  }
  for (const {channel,route,nodes:routeNodes} of groups.values()) {
    const cutoffs=routeNodes.filter(m=>m.status==='verified' && m.date).sort((a,b)=>a.date.localeCompare(b.date));
    const next=cutoffs.find(m=>future.has(m));
    const reference=next || cutoffs.at(-1);
    const relevant=clauses.filter(c=>routeClause(c,channel,route) && matchesRound(c,reference));
    const openingNodes=nodes.filter(m=>m.kind==='other' && /open/i.test(m.label) && routeClause(String(m.label).toLowerCase(),channel,route) && m.status==='verified' && m.date);
    const laterOpening=openingNodes.find(m=>m.date>today);
    const closed=relevant.some(c=>closedClause(c) && !statusSoon(c));
    const soon=!!laterOpening || relevant.some(statusSoon);
    const unconfirmed=relevant.some(statusUnconfirmed) || relevant.some(statusLink);
    const offered=!relevant.some(statusUnconfirmed) && (relevant.some(statusOffered) || openingNodes.some(m=>m.date<=today));
    const conflicted=routeNodes.some(m=>m.status==='conflict' || (m.status==='verified' && m.precision==='datetime' && m.date>=today && milestoneInstant(m)===null));
    const past=cutoffs.filter(m=>!future.has(m) && (m.precision!=='datetime' || milestoneInstant(m)!==null));
    // An early-bird cutoff does not close a separately announced standard registration route.
    const onlyEarlyPast=channel==='registration' && past.length && past.every(m=>m.kind==='early_registration') && routeNodes.some(m=>m.kind==='registration' && !m.date);
    const expired=!next && past.length>0 && !onlyEarlyPast;
    const title=route==='proposal' && /workshop/i.test(reference?.label) ? 'Workshop proposals' : statusRouteLabel(route), extra=reference?{milestoneId:reference.id,date:reference.date}:{};
    const filters=[channel];
    if (channel==='submission') {
      if (['oral','poster','paper'].includes(route)) filters.push(route);
      if (route==='abstract' || routeNodes.some(m=>m.kind==='abstract' || /\babstracts?\b/i.test(m.label))) filters.push('abstract');
    }
    if (soon && !expired) {
      add(badge('opening_soon',title+' opening soon','The published call or platform is not yet open. '+(laterOpening?`Published opening: ${dateLabel(laterOpening.date)}.`:'Published deadlines remain planning dates.'),['opening_soon'],{availability:'soon',...(laterOpening?{milestoneId:laterOpening.id,date:laterOpening.date}:extra)}));
    } else if ((closed || expired) && primary.label!=='Availability needs confirmation') {
      add(badge('closed',title+' closed','The published cutoff has passed or the organiser reports this route closed. Check any late or alternative route with the organiser.',['closed'],{availability:'closed',...extra}));
    } else if (!closed && !expired && !conflicted && (next || offered || unconfirmed)) {
      const availability=offered?'open':'unconfirmed';
      if (!offered) filters.push('needs_review');
      const suffix=offered?' open':' · opening unconfirmed';
      const help=(next?`Published cutoff: ${dateLabel(next.date)}. `:'No verified closing date is published. ')+(offered?'The published status offers this route; confirm current availability with the organiser.':unconfirmed?'The published information does not confirm current availability. A link alone does not establish that the route is open.':'A future cutoff does not confirm that the submission or registration platform is open.')+(channel==='submission' && clauses.some(c=>channelText(c,'registration') && closedClause(c) && !statusSoon(c))?' Registration is closed; confirm attendance eligibility before submitting.':'');
      add(badge(channel,title+suffix,help,filters,{availability,...extra}));
    }
  }
  // Opening notices may precede any published deadline or route node.
  for (const channel of ['registration','application','submission']) {
    if ([...groups.values()].some(g=>g.channel===channel)) continue;
    const opening=nodes.find(m=>m.kind==='other' && /open/i.test(m.label) && channelText(String(m.label).toLowerCase(),channel) && m.status==='verified' && m.date>today);
    if (opening) add(badge('opening_soon',(channel==='submission'?'Submission':statusRouteLabel(channel))+' opening soon',`Published opening: ${dateLabel(opening.date)}.`,['opening_soon'],{availability:'soon',milestoneId:opening.id,date:opening.date}));
  }
  return results.length ? results : [{...primary,filters:[primary.key]}];
}
/** Dates for the already-filtered cards; missing or conflicting dates remain explicit entries. */
export function timelineEntries(events, stage = 'all', today = todayISO(), now = Date.now()) {
  const routeStages=new Set(['registration','application','submission','abstract','oral','poster','paper']);
  const entries=[];
  const validDate=date=>typeof date==='string' && /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Date.parse(date+'T00:00:00Z')) && new Date(date+'T00:00:00Z').toISOString().slice(0,10)===date;
  const knownNode=node=>node.status==='verified' && validDate(node.date) && (node.precision!=='datetime' || milestoneInstant(node)!==null);
  const futureNode=node=>knownNode(node) && (node.precision==='datetime' ? milestoneInstant(node)>now : node.date>=today);
  const add=(event,node,label)=>{
    const known=node && knownNode(node);
    entries.push({eventId:event.id,eventName:event.name,date:known?node.date:null,label,
      status:known?(event.reminders_paused || event.disabled?'paused':'verified'):node?.status==='conflict'?'conflict':'unknown',
      ...(node?.id?{milestoneId:node.id}:{}),
      ...(known?{precision:node.precision || 'date',time:node.time || null,timezone:node.timezone || null}:{})});
  };
  const nodeRoutes=node=>phaseChannel(node)==='submission'?submissionRoutes(node):[node.kind==='funding'?'funding':phaseChannel(node)];
  const matchesStatus=(node,status,nodes)=>{
    const reference=nodes.find(item=>item.id===status.milestoneId);
    if (reference) return phaseChannel(reference)===phaseChannel(node) && nodeRoutes(reference).some(route=>nodeRoutes(node).includes(route));
    return nodeRoutes(node).some(route=>statusRouteLabel(route) && status.label.startsWith(statusRouteLabel(route)));
  };
  const matchesStage=node=>{
    const channel=phaseChannel(node);
    if (stage==='registration' || stage==='application') return channel===stage;
    if (channel!=='submission') return false;
    if (stage==='submission') return true;
    if (stage==='abstract') return node.kind==='abstract' || /\babstracts?\b/i.test(node.label);
    return submissionRoutes(node).includes(stage);
  };
  for (const event of events) {
    const nodes=event.milestones || [], before=entries.length;
    if (routeStages.has(stage)) {
      const statuses=eventStatuses(event,today,now).filter(status=>status.filters.includes(stage) && ['registration','application','submission'].includes(status.key));
      const clauses=statusClauses(event);
      for (const node of nodes.filter(matchesStage)) {
        const routes=nodeRoutes(node);
        const matching=statuses.some(status=>{
          const reference=nodes.find(item=>item.id===status.milestoneId);
          return status.key===phaseChannel(node) && (!reference || nodeRoutes(reference).some(route=>routes.includes(route)));
        });
        if (!matching) continue;
        const closed=routes.every(route=>clauses.some(clause=>routeClause(clause,phaseChannel(node),route) && matchesRound(clause,node) && closedClause(clause) && !statusSoon(clause)));
        if (closed || (knownNode(node) && !futureNode(node))) continue;
        add(event,node,node.label || phaseLabel(node));
      }
      if (entries.length===before) {
        const label=stage==='registration'?'Registration date not announced':stage==='application'?'Application date not announced':(statusRouteLabel(stage) || 'Submission')+' date not announced';
        add(event,null,label);
      }
    } else if (stage==='closed' || stage==='needs_review') {
      const statuses=eventStatuses(event,today,now);
      const selected=statuses.filter(status=>stage==='closed'?status.key==='closed':status.availability==='unconfirmed');
      const used=new Set();
      const addOnce=(node,label)=>{
        if (node?.id && used.has(node.id)) return;
        if (node?.id) used.add(node.id);
        add(event,node,label);
      };
      if (stage==='needs_review') {
        for (const node of nodes.filter(node=>node.status==='unknown' || node.status==='conflict' || (node.status==='verified' && node.precision==='datetime' && milestoneInstant(node)===null))) {
          addOnce(node,node.label || 'Date needs confirmation');
        }
      }
      for (const status of selected) {
        const matching=nodes.filter(node=>phaseChannel(node) && matchesStatus(node,status,nodes) && (stage==='closed' || !knownNode(node) || futureNode(node)));
        for (const node of matching) addOnce(node,node.label || phaseLabel(node));
        if (!matching.length) add(event,null,status.label+' · date not announced');
      }
      if (entries.length===before) add(event,null,stage==='closed'?'Closed route · date not announced':'Date or availability needs confirmation');
    } else if (stage==='opening_soon') {
      const statuses=eventStatuses(event,today,now).filter(status=>status.key==='opening_soon');
      for (const status of statuses) {
        const node=nodes.find(item=>item.id===status.milestoneId && item.kind==='other' && /open/i.test(item.label));
        add(event,node,node?.label || status.label+' · opening date not announced');
      }
      if (entries.length===before) add(event,null,'Opening date not announced');
    } else {
      const startNode=nodes.find(node=>node.kind==='conference_start');
      const endNode=nodes.find(node=>node.kind==='conference_end');
      const start=startNode || {date:event.start,status:'verified',precision:'date'};
      add(event,start,event.reminders_paused || event.disabled?'Conference dates · reminders paused':'Conference dates');
      const last=entries.at(-1);
      if (last.date && validDate(event.end) && (!endNode || knownNode(endNode))) last.endDate=event.end;
    }
  }
  const instant=entry=>entry.precision==='datetime'?milestoneInstant({...entry,status:'verified'}):Date.parse(entry.date+'T00:00:00Z');
  // Stable ties preserve the order of the corresponding cards.
  return entries.sort((a,b)=>a.date===null?(b.date===null?0:1):b.date===null?-1:instant(a)-instant(b));
}
export function upcomingNodes(event, today = todayISO(), now = Date.now()) { if (event.reminders_paused) return []; return (event.milestones || []).filter(m => { if (m.status !== 'verified' || !m.date) return false; const instant = milestoneInstant(m); return m.precision === 'datetime' ? instant !== null && instant > now : m.date >= today; }).sort((a,b) => a.date.localeCompare(b.date)); }
export function deadlineSummary(event, today = todayISO()) {
  const nodes = (event.milestones || []).filter(m => !isConferenceDate(m));
  if (!nodes.length) return event.deadline || '';
  return nodes.map(m => {
    const when = m.date ? dateLabel(m.date) : 'Date to be announced';
    const passed = m.status === 'verified' && m.date && m.date < today;
    const conflict = m.status === 'conflict' ? ' · conflicting official dates' : '';
    return `${m.label}: ${when}${passed ? ' · has passed' : ''}${conflict}`;
  }).join('; ');
}
export function hasEuropeanSite(event) { return event.region === 'UK' || event.region === 'Europe' || (/neurips/i.test(event.name) && /Paris/i.test(`${event.location} ${event.note}`)); }
const deadlineChannels=new Map([['registration_deadline','registration'],['submission_deadline','submission']]);
const compareDeadlineDates=(a,b)=>a.date.localeCompare(b.date) || (a.instant===null?(b.instant===null?0:1):b.instant===null?-1:a.instant-b.instant);
export function nextDeadline(event, sort = 'deadline', today = todayISO(), now = Date.now()) {
  const channel=deadlineChannels.get(sort);
  if (channel && event.disabled) return null;
  const nodes=upcomingNodes(event,today,now);
  if (!channel) return nodes.find(node=>!isConferenceDate(node)) || null;
  const candidates=nodes.filter(node=>phaseChannel(node)===channel).map(node=>({node,date:node.date,instant:node.precision==='datetime'?milestoneInstant(node):null}));
  return candidates.sort(compareDeadlineDates)[0]?.node || null;
}
export function filterEvents(events, filters, today = todayISO(), now = Date.now()) {
  const search=(filters.search || '').trim();
  const deadlineChannel=deadlineChannels.get(filters.sort);
  const deadlineCache=new Map();
  const filtered=events.filter(e => {
    if (!filters.showPast && e.end && e.end < today) return false;
    if (filters.region === 'Europe-group' && !hasEuropeanSite(e)) return false;
    if (filters.region && !['all','Europe-group'].includes(filters.region) && e.region !== filters.region) return false;
    if (filters.topic && filters.topic !== 'all' && !eventTopics(e).includes(filters.topic) && !(e.tags || []).includes(filters.topic)) return false;
    if (filters.type && filters.type !== 'all' && e.type !== filters.type) return false;
    if (filters.year && filters.year !== 'all' && !(e.start || e.name || '').includes(filters.year)) return false;
    if (filters.stage && filters.stage !== 'all' && !eventStatuses(e,today,now).some(status=>status.filters.includes(filters.stage))) return false;
    if (search && !matchesSearch([e.name,e.location,e.note,...eventTopics(e),...(e.tags||[]),peopleSearchText(e)].join(' '),search)) return false;
    return true;
  });
  if (deadlineChannel) for (const event of filtered) {
    const node=nextDeadline(event,filters.sort,today,now);
    deadlineCache.set(event,node?{date:node.date,instant:node.precision==='datetime'?milestoneInstant(node):null}:null);
  }
  return filtered.sort((a,b) => {
    if (filters.sort === 'name') return a.name.localeCompare(b.name);
    if (filters.sort === 'priority') return (a.priority || 99) - (b.priority || 99) || (a.start || '9999').localeCompare(b.start || '9999');
    if (filters.sort === 'deadline') return (upcomingNodes(a,today,now).find(m=>!isConferenceDate(m))?.date || '9999').localeCompare(upcomingNodes(b,today,now).find(m=>!isConferenceDate(m))?.date || '9999') || (a.start || '9999').localeCompare(b.start || '9999');
    if (deadlineChannel) {
      const first=deadlineCache.get(a), second=deadlineCache.get(b);
      return (first && second ? compareDeadlineDates(first,second) : first?-1:second?1:0) || (a.start || '9999').localeCompare(b.start || '9999');
    }
    return (a.start || '9999').localeCompare(b.start || '9999') || a.name.localeCompare(b.name);
  });
}
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
