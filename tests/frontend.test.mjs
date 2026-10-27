import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterEvents,eventTopics,eventPhase,eventStatuses,upcomingNodes,deadlineSummary,nextDeadline,milestoneInstant,safeUrl,esc} from '../assets/core.mjs';

const catalogue=JSON.parse(readFileSync(new URL('../data/conferences.json',import.meta.url),'utf8'));
const canonical=name=>[...catalogue.events,...catalogue.watchlist].find(e=>e.name.includes(name));
const snapshotPhase=e=>eventPhase(e,'2026-10-27',Date.parse('2026-10-27T12:00Z'));
const phaseNode=(kind,date,label=kind,status='verified')=>({id:kind,kind,date,label,status,precision:date?'date':'unknown',time:null,timezone:null});

test('the published catalogue fits seven research topics without leaving activities unclassified',()=>{
 const all=[...catalogue.events,...catalogue.watchlist];
 const topics=new Set(all.flatMap(eventTopics));
 assert.equal(topics.size,7);
 assert.ok(!topics.has('Other topics'));
 for (const event of all) {
  const groups=eventTopics(event);
  assert.ok(groups.length>0,event.name);
  assert.equal(new Set(groups).size,groups.length,event.name);
 }
 assert.deepEqual(eventTopics(canonical('School on Advanced Structural')),['MOFs, COFs & Porous Materials']);
 assert.deepEqual(eventTopics(canonical('E-MRS Fall Meeting 2027')),['Materials & Characterisation']);
 for (const name of ['UKPorMat2027','MEDPore2027','PMEA2028','FEZA2029']) assert.ok(eventTopics(canonical(name)).includes('MOFs, COFs & Porous Materials'),name);
 assert.deepEqual(eventTopics(canonical('Materials Chemistry Poster Symposium')),['Materials & Characterisation']);
});
test('topic groups merge related keywords once and distinguish general from applied AI',()=>{
 assert.deepEqual(eventTopics({tags:['MOF','COF','Porous Materials','Zeolites','School']}),['MOFs, COFs & Porous Materials']);
 assert.deepEqual(eventTopics({tags:['ML','Machine Learning','AI']}),['AI & Machine Learning']);
 assert.deepEqual(eventTopics({tags:['AI for Materials','AI for Chemistry','Materials Informatics']}),['AI for Materials & Chemistry']);
 assert.deepEqual(eventTopics(canonical('NeurIPS 2026')),['AI & Machine Learning']);
 assert.deepEqual(eventTopics(canonical('AI4Mat @')),['AI for Materials & Chemistry']);
 assert.deepEqual(eventTopics({tags:['Uncatalogued research field']}),['Other topics']);
});
test('grouped topics combine with region and status while detailed keyword searches remain available',()=>{
 const all=[...catalogue.events,...catalogue.watchlist], at=Date.parse('2026-10-27T18:00Z');
 const names=filterEvents(all,{topic:'MOFs, COFs & Porous Materials',region:'UK',stage:'registration'},'2026-10-27',at).map(e=>e.name);
 assert.deepEqual(names,[
  '45th RSC Solid State Chemistry Group Christmas Meeting (SSCG2026)',
  'ARIC Advanced Adsorption Course — Kinetic Measurements using Macroscopic Techniques',
  'Characterisation of Catalysts',
  'MC18 — 18th International Conference on Materials Chemistry'
 ]);
 const gnn=filterEvents(all,{topic:'AI for Materials & Chemistry',search:'GNN'},'2026-10-27',at);
 assert.deepEqual(gnn.map(e=>e.name),['Chemistry and Materials Machine Learning School — CaMML 2027']);
 const schools=filterEvents(all,{topic:'MOFs, COFs & Porous Materials',type:canonical('MOFschool2027').type},'2026-10-27',at);
 assert.ok(schools.some(e=>e.name==='MOFschool2027'));
});

test('event phases include both conference date boundaries and distinguish finished and awaiting dates',()=>{
 const e={start:'2027-06-01',end:'2027-06-03',status:'Submissions closed',milestones:[]};
 assert.equal(eventPhase(e,'2027-06-01').key,'ongoing');
 assert.equal(eventPhase(e,'2027-06-03').label,'Happening now');
 assert.equal(eventPhase(e,'2027-06-04').key,'finished');
 assert.equal(snapshotPhase(canonical('UKPorMat2027')).key,'awaiting_dates');
 assert.equal(snapshotPhase(canonical('MEDPore2027')).label,'Dates unverified');
});
test('event phases respect cancellation, unresolved changes, full events and restricted attendance',()=>{
 const e={start:'2027-06-01',end:'2027-06-03',milestones:[phaseNode('registration','2027-05-01')]};
 assert.equal(snapshotPhase({...e,status:'This conference has been cancelled.'}).key,'cancelled');
 assert.equal(snapshotPhase({...e,reminders_paused:true,reminders_pause_reason:'Official postponement needs review.'}).key,'paused');
 assert.equal(snapshotPhase({...e,status:'The conference is not cancelled.'}).key,'registration');
 assert.equal(snapshotPhase(canonical('Chemical Science symposium')).label,'Fully booked');
 assert.equal(snapshotPhase(canonical('School on Advanced Structural')).label,'Waiting list only');
 assert.equal(snapshotPhase(canonical('Future of Porous Frameworks')).key,'invitation_only');
 assert.equal(snapshotPhase(canonical('Materials Chemistry Poster Symposium')).key,'restricted');
});
test('future submission cutoffs take priority but do not assert an unconfirmed platform is open',()=>{
 const e={start:'2027-06-01',end:'2027-06-03',status:'Dates and deadlines announced.',milestones:[phaseNode('abstract','2027-01-01','Oral abstracts'),phaseNode('registration','2027-04-01')]};
 const p=snapshotPhase(e);
 assert.equal(p.label,'Abstract submission');assert.equal(p.milestoneId,'abstract');
 assert.match(p.help,/opening status is not confirmed/);
 assert.equal(snapshotPhase({...e,status:'Submissions closed; registration is open.'}).key,'registration');
 assert.equal(snapshotPhase({...e,status:'Full paper information will follow.'}).key,'submission');
 const expired={...e,status:'Registration open.',milestones:[phaseNode('registration','2026-10-26')]};
 assert.equal(snapshotPhase(expired).label,'Registration closed');
 const transitioning={...e,milestones:[phaseNode('abstract','2026-10-27'),phaseNode('registration','2026-11-01')]};
 assert.equal(snapshotPhase(transitioning).key,'submission');
 assert.equal(eventPhase(transitioning,'2026-10-28').key,'registration');
 assert.equal(eventPhase(transitioning,'2026-11-02').key,'closed');
});
test('announced opening dates and explicit not-yet-open statements never become active calls',()=>{
 assert.equal(snapshotPhase(canonical('EuroMOF 2027')).label,'Submission opening soon');
 assert.equal(snapshotPhase(canonical('Characterisation of Catalysts')).label,'Submission opening soon');
 assert.equal(snapshotPhase(canonical('Mathematics for Quantum Dynamics')).label,'Registration opening soon');
 assert.equal(eventPhase(canonical('EuroMOF 2027'),'2027-03-01').label,'Registration opening soon');
 const e={start:'2027-06-01',status:'Dates announced.',milestones:[phaseNode('abstract','2027-03-01'),phaseNode('other','2026-11-01','Abstract submissions open')]};
 assert.equal(snapshotPhase(e).key,'opening_soon');
 assert.equal(snapshotPhase({...e,status:'Abstract submissions not yet open; registration is open.',milestones:[...e.milestones,phaseNode('registration','2027-05-01')]}).key,'registration');
});
test('separate submission routes survive closure of a regular round and funding is not submission',()=>{
 assert.equal(snapshotPhase(canonical('Euro-Asia Zeolite')).label,'Recent Reports submission');
 assert.equal(snapshotPhase(canonical('AISTATS 2027')).label,'Journal-to-Conference submission');
 assert.equal(snapshotPhase(canonical('AIxMAT 2026')).label,'Poster submission');
 assert.match(snapshotPhase(canonical('AIxMAT 2026')).help,/Registration is closed/);
 const ai4mat=snapshotPhase(canonical('AI4Mat @'));
 assert.equal(ai4mat.label,'Travel-grant applications');
 const ai4matStatuses=eventStatuses(canonical('AI4Mat @'),'2026-10-27',Date.parse('2026-10-27T12:00Z'));
 assert.ok(ai4matStatuses.some(s=>s.filters.includes('application') && s.label.includes('Travel-grant')));
 assert.ok(ai4matStatuses.some(s=>s.label==='Paper submission closed'));
 assert.equal(snapshotPhase(canonical('Winter School')).label,'Applications closed');
 assert.equal(snapshotPhase(canonical('Modelling Water')).key,'application');
});
test('conflicting and provisional dates stay visibly unverified instead of driving a phase deadline',()=>{
 for(const name of ['Faraday Discussion','InterPore2027']) assert.equal(snapshotPhase(canonical(name)).label,'Deadline needs confirmation');
 assert.equal(snapshotPhase(canonical('FOA16')).label,'Deadlines unverified');
 assert.equal(snapshotPhase(canonical('AI MSE 2027')).key,'needs_review');
 assert.equal(snapshotPhase(canonical('ISWPM26')).label,'Availability needs confirmation');
 assert.equal(snapshotPhase(canonical('E-MRS Fall Meeting 2027')).key,'upcoming');
 const e={start:'2027-06-01',milestones:[{...phaseNode('paper','2027-03-28'),precision:'datetime',time:'01:30',timezone:'Europe/London'}]};
 assert.equal(snapshotPhase(e).label,'Deadline time unverified');
});
test('the phase keeps an exact overseas registration cutoff across local midnight',()=>{
 const e=canonical('MRS Fall 2026');
 assert.equal(eventPhase(e,'2026-10-30',Date.parse('2026-10-30T00:30Z')).key,'registration');
 assert.equal(eventPhase(e,'2026-10-30',Date.parse('2026-10-30T04:00Z')).label,'Registration closed');
});

const snapshotStatuses=e=>eventStatuses(e,'2026-10-27',Date.parse('2026-10-27T12:00Z'));
test('a registration link never establishes open ticket availability',()=>{
 const workshop=canonical('Recent Advances in Chemistry and AI');
 const statuses=snapshotStatuses(workshop);
 assert.deepEqual(statuses.map(s=>s.label),['Registration · opening unconfirmed']);
 assert.equal(statuses[0].availability,'unconfirmed');
 assert.match(snapshotPhase(workshop).help,/not verified|not yet|not confirmed|not establish/);
 const e={start:'2027-06-01',milestones:[phaseNode('registration','2027-05-01')]};
 for (const status of ['Registration link available.', 'Registration is open; current ticket availability is not confirmed.', 'Registration availability is not yet verified.', 'Registration is not available.']) {
  assert.equal(snapshotStatuses({...e,status})[0].availability,'unconfirmed',status);
 }
 assert.equal(snapshotStatuses({...e,status:'Registration link available; registration is open.'})[0].availability,'open');
 assert.equal(snapshotStatuses({...e,status:'Registration remains available.'})[0].availability,'open');
});
test('unconfirmed availability stays within its channel and explicit closures retain precedence',()=>{
 const e={start:'2027-06-01',status:'Paper submissions open; registration link available; ticket availability is not confirmed.',milestones:[phaseNode('paper','2027-01-01'),phaseNode('registration','2027-05-01')]};
 assert.deepEqual(snapshotStatuses(e).map(s=>s.label),['Paper submission open','Registration · opening unconfirmed']);
 assert.deepEqual(snapshotStatuses({...e,status:'Paper submissions not yet open; registration closed.'}).map(s=>s.label),['Paper submission opening soon','Registration closed']);
 assert.deepEqual(snapshotStatuses({...e,status:'Paper submissions closed; registration availability is not confirmed.'}).map(s=>s.label),['Paper submission closed','Registration · opening unconfirmed']);
});
test('the dates and availability unconfirmed filter includes every unconfirmed route',()=>{
 const examples=['Recent Advances in Chemistry and AI','AI4X 2027'].map(canonical);
 assert.deepEqual(filterEvents(examples,{stage:'needs_review'},'2026-10-27',Date.parse('2026-10-27T12:00Z')).map(e=>e.id).sort(),examples.map(e=>e.id).sort());
 const all=[...catalogue.events,...catalogue.watchlist];
 for (const e of all) {
  const statuses=snapshotStatuses(e);
  for (const status of statuses.filter(s=>s.availability==='unconfirmed')) assert.ok(status.filters.includes('needs_review'),e.name);
 }
 const open={name:'Confirmed open route',start:'2027-06-01',status:'Registration open.',milestones:[phaseNode('registration','2027-05-01')]};
 assert.equal(filterEvents([open],{stage:'needs_review'},'2026-10-27',Date.parse('2026-10-27T12:00Z')).length,0);
});
test('currently and presently negated opening statements never advertise an open route',()=>{
 const e={start:'2027-06-01',milestones:[phaseNode('registration','2027-05-01')]};
 for(const modifier of ['currently','presently']) {
  const status='Registration is not '+modifier+' open.';
  assert.deepEqual(snapshotStatuses({...e,status}).map(s=>s.label),['Registration closed']);
  assert.equal(snapshotPhase({...e,status}).label,'Registration closed');
  for(const word of ['available','offered','possible']) {
   assert.equal(snapshotStatuses({...e,status:'Registration is not '+modifier+' '+word+'.'})[0].availability,'unconfirmed');
  }
 }
});
test('an omitted round channel is resolved from its published label without opening other routes or rounds',()=>{
 const ai4x=canonical('AI4X 2027');
 assert.deepEqual(snapshotStatuses(ai4x).map(s=>s.label),['Paper submission open','Registration · opening unconfirmed']);
 assert.match(snapshotPhase(ai4x).help,/published status offers this route/);
 const nextRound=eventStatuses(ai4x,'2027-01-02',Date.parse('2027-01-02T12:00Z'));
 assert.equal(nextRound.find(s=>s.filters.includes('paper')).availability,'unconfirmed');
 const unmatched={...ai4x,milestones:ai4x.milestones.map(m=>({...m,label:m.kind==='paper'?'Paper deadline':m.label}))};
 assert.equal(snapshotStatuses(unmatched).find(s=>s.filters.includes('paper')).availability,'unconfirmed');
 const ambiguous={...ai4x,milestones:[...ai4x.milestones,phaseNode('registration','2027-05-01','Round 1 registration')]};
 assert.ok(snapshotStatuses(ambiguous).every(s=>s.availability!=='open'));
 const mixedRoutes={...ai4x,milestones:[...ai4x.milestones,phaseNode('poster','2027-05-01','Round 1 posters')]};
 assert.ok(snapshotStatuses(mixedRoutes).every(s=>s.availability!=='open'));
});
test('concurrent oral, poster and registration routes appear separately, including mixed abstract calls',()=>{
 for (const name of ['Computational Methods for Defects','Theoretical Chemistry Group Graduate','SSCG2026']) {
  const statuses=snapshotStatuses(canonical(name));
  const labels=statuses.map(s=>s.label);
  assert.ok(labels.includes('Oral submission open'),name);
  assert.ok(labels.includes('Poster submission open'),name);
  assert.ok(labels.includes('Registration open'),name);
  if (name.includes('Theoretical Chemistry')) assert.ok(labels.some(label=>label.includes('Travel-grant') || label.includes('Funding')));
  for (const type of ['oral','poster']) {
   const route=statuses.find(s=>s.filters.includes(type));
   assert.ok(route.filters.includes('submission')); assert.ok(route.filters.includes('abstract'));
  }
 }
 const mixed=snapshotStatuses(canonical('SSCG2026'));
 assert.equal(mixed[0].milestoneId,mixed[1].milestoneId);
 assert.equal(snapshotStatuses(canonical('MC18'))[0].availability,'open');
});
test('future cutoffs visibly remain unconfirmed and ongoing events retain simultaneous available routes',()=>{
 const e={name:'Concurrent',start:'2027-06-01',end:'2027-06-03',status:'Dates announced.',milestones:[phaseNode('abstract','2027-06-02','Oral abstracts'),phaseNode('registration','2027-06-03')]};
 assert.deepEqual(snapshotStatuses(e).map(s=>s.label),['Oral submission · opening unconfirmed','Registration · opening unconfirmed']);
 const ongoing=eventStatuses({...e,status:'Submissions and registration open.'},'2027-06-01',Date.parse('2027-06-01T12:00Z'));
 assert.deepEqual(ongoing.map(s=>s.label),['Ongoing','Oral submission open','Registration open']);
 assert.equal(filterEvents([e],{stage:'oral'},'2027-06-01',Date.parse('2027-06-01T12:00Z')).length,1);
});
test('one closed presentation route does not close another or an independent registration route',()=>{
 const e={start:'2027-06-01',status:'Poster submissions closed; oral abstracts open; registration open.',milestones:[phaseNode('abstract','2027-01-01','Oral abstracts'),phaseNode('poster','2027-02-01','Poster abstracts'),phaseNode('registration','2027-04-01')]};
 const statuses=snapshotStatuses(e);
 assert.deepEqual(statuses.map(s=>s.label),['Oral submission open','Poster submission closed','Registration open']);
 assert.ok(statuses.find(s=>s.label==='Poster submission closed').filters.includes('closed'));
 assert.equal(filterEvents([e],{stage:'poster'},'2026-10-27').length,0);
 assert.equal(filterEvents([e],{stage:'oral'},'2026-10-27').length,1);
 assert.equal(filterEvents([e],{stage:'closed'},'2026-10-27').length,1);
});
test('announced openings coexist with other channels and never match the active route filters',()=>{
 const e={start:'2027-06-01',status:'Abstract submissions not yet open; registration is open.',milestones:[phaseNode('abstract','2027-02-01'),phaseNode('registration','2027-04-01')]};
 assert.deepEqual(snapshotStatuses(e).map(s=>s.label),['Abstract submission opening soon','Registration open']);
 assert.equal(filterEvents([e],{stage:'submission'},'2026-10-27').length,0);
 assert.equal(filterEvents([e],{stage:'opening_soon'},'2026-10-27').length,1);
 assert.equal(filterEvents([e],{stage:'registration'},'2026-10-27').length,1);
 assert.deepEqual(snapshotStatuses(canonical('EuroMOF 2027')).map(s=>s.label),['Abstract submission opening soon','Registration opening soon']);
 assert.deepEqual(snapshotStatuses(canonical('FOMMS 2027')).map(s=>s.label),['Abstract submission open','Registration opening soon']);
});
test('conflicting and invalid exact dates warn while independent verified routes stay available',()=>{
 const e={start:'2027-06-01',status:'Submissions and registration open.',milestones:[phaseNode('abstract',null,'Oral abstracts','conflict'),phaseNode('poster','2027-05-01','Poster abstracts'),phaseNode('registration','2027-05-02')]};
 const statuses=snapshotStatuses(e);
 assert.deepEqual(statuses.map(s=>s.label),['Deadline needs confirmation','Poster submission open','Registration open']);
 assert.equal(filterEvents([e],{stage:'oral'},'2026-10-27').length,0);
 assert.equal(filterEvents([e],{stage:'needs_review'},'2026-10-27').length,1);
 const invalid={...e,milestones:[{...phaseNode('paper','2027-03-28'),precision:'datetime',time:'01:30',timezone:'Europe/London'},phaseNode('registration','2027-05-02')]};
 assert.ok(snapshotStatuses(invalid).some(s=>s.key==='needs_review'));
 assert.ok(!snapshotStatuses(invalid).some(s=>s.filters.includes('paper')));
 assert.ok(snapshotStatuses(invalid).some(s=>s.filters.includes('registration')));
});
test('route filters respect exact overseas cutoff instants and normal registration after early bird',()=>{
 const e={start:'2027-06-01',milestones:[{...phaseNode('abstract','2026-10-29','Oral abstracts'),precision:'datetime',time:'23:59',timezone:'America/New_York'},phaseNode('registration','2027-01-01')]};
 const before=Date.parse('2026-10-30T00:30Z'), after=Date.parse('2026-10-30T04:00Z');
 assert.equal(filterEvents([e],{stage:'oral'},'2026-10-30',before).length,1);
 assert.equal(filterEvents([e],{stage:'oral'},'2026-10-30',after).length,0);
 assert.equal(filterEvents([e],{stage:'registration'},'2026-10-30',after).length,1);
 const reg={start:'2027-06-01',status:'Registration open.',milestones:[phaseNode('early_registration','2026-10-26'),phaseNode('registration',null)]};
 assert.equal(snapshotStatuses(reg).find(s=>s.key==='registration').availability,'open');
 reg.milestones[1]=phaseNode('registration','2026-10-25');
 assert.equal(snapshotStatuses(reg)[0].label,'Registration closed');
});
test('oral and poster presenter registration is never inferred as a submission route',()=>{
 const statuses=snapshotStatuses(canonical('InterPore2027'));
 assert.ok(statuses.some(s=>s.filters.includes('registration')));
 assert.ok(!statuses.some(s=>s.filters.some(f=>['oral','poster','submission'].includes(f))));
 const grc=snapshotStatuses(canonical('Applications GRC'));
 assert.deepEqual(grc.map(s=>s.label),['Applications open']);
 const proposal=snapshotStatuses(canonical('AISB Convention'));
 assert.ok(proposal.some(s=>s.label==='Symposium proposals open'));
 assert.ok(!proposal.some(s=>s.filters.includes('paper')));
 assert.ok(snapshotStatuses(canonical('AISTATS 2027')).some(s=>s.label==='Journal-to-Conference submission open'));
 assert.deepEqual(snapshotStatuses(canonical('ISWPM26')).map(s=>s.label),['Availability needs confirmation']);
});
test('stage filters combine with existing filters, hide finished events by default, and preserve input',()=>{
 const open={name:'UK oral',region:'UK',type:'Workshop',tags:['AI'],start:'2027-06-01',end:'2027-06-03',status:'Submissions and registration open.',milestones:[phaseNode('abstract','2027-01-01','Oral abstracts'),phaseNode('registration','2027-05-01')]};
 const other={...open,name:'Other oral',region:'Other'};
 const ended={...open,name:'Finished',start:'2026-01-01',end:'2026-01-03'};
 const events=[open,other,ended], original=structuredClone(events);
 assert.deepEqual(filterEvents(events,{stage:'oral',region:'UK',topic:'AI',type:'Workshop',year:'2027'},'2026-10-27').map(e=>e.name),['UK oral']);
 assert.equal(filterEvents(events,{stage:'poster'},'2026-10-27').length,0);
 assert.equal(filterEvents(events,{stage:'finished'},'2026-10-27').length,0);
 assert.deepEqual(filterEvents(events,{stage:'finished',showPast:true},'2026-10-27').map(e=>e.name),['Finished']);
 assert.deepEqual(events,original);
 for (const [change,key] of [[{eventStatus:'https://schema.org/EventCancelled'},'cancelled'],[{reminders_paused:true},'paused']]) {
  assert.deepEqual(snapshotStatuses({...open,...change}).map(s=>s.key),[key]);
 }
});

test('deadline summaries mark passed dates from today rather than stored prose',()=>{
 const e={deadline:'Old prose saying everything is still open.',milestones:[
  {kind:'abstract',label:'Abstracts',date:'2026-10-01',status:'verified'},
  {kind:'registration',label:'Registration',date:'2026-11-01',status:'verified'},
  {kind:'conference_start',label:'Starts',date:'2027-01-01',status:'verified'}
 ]};
 assert.match(deadlineSummary(e,'2026-10-27'),/Abstracts: 1 Oct 2026 · has passed/);
 assert.match(deadlineSummary(e,'2026-10-27'),/Registration: 1 Nov 2026(?! · has passed)/);
 assert.doesNotMatch(deadlineSummary(e,'2026-10-27'),/Starts:/);
});
test('European defaults include the Paris NeurIPS site and retain closed future events',()=>{
 const events=[{name:'UK workshop',region:'UK',start:'2027-01-01',end:'2027-01-02',status:'Closed'},{name:'NeurIPS',region:'Other',location:'Sydney, Paris and Atlanta',start:'2026-12-06',end:'2026-12-13'},{name:'US meeting',region:'Other',start:'2027-02-01'},{name:'Finished',region:'UK',end:'2026-01-01'},{name:'UKPorMat2027',region:'UK',start:null}];
 const result=filterEvents(events,{region:'Europe-group',year:'all'},'2026-10-27');
 assert.deepEqual(result.map(e=>e.name),['NeurIPS','UK workshop','UKPorMat2027']);
 assert.equal(filterEvents(events,{region:'all',year:'2027'},'2026-10-27').length,3);
});
test('unknown and conflicted nodes do not drive next-deadline sorting',()=>{
 const e=[{name:'Conflict',milestones:[{date:'2026-10-28',status:'conflict',kind:'abstract'}]},{name:'Verified',milestones:[{date:'2026-11-01',status:'verified',kind:'paper'}]}];
 assert.equal(filterEvents(e,{region:'all',sort:'deadline'},'2026-10-27')[0].name,'Verified');
});
test('conference start and end dates do not masquerade as submission deadlines',()=>{
 const events=[{name:'Meeting first',start:'2027-01-01',milestones:[{date:'2027-01-01',status:'verified',kind:'conference_start'},{date:'2027-01-03',status:'verified',kind:'conference_end'}]},{name:'Submission first',start:'2027-06-01',milestones:[{date:'2027-02-01',status:'verified',kind:'abstract'}]}];
 assert.deepEqual(filterEvents(events,{sort:'deadline'},'2026-10-27').map(e=>e.name),['Submission first','Meeting first']);
 assert.equal(upcomingNodes(events[0],'2026-10-27').length,2);
});
test('registration and submission deadline sorts use their own published routes',()=>{
 const events=['AI4X 2027','SSCG2026','EuroMOF 2027','Recent Advances in Chemistry and AI'].map(canonical);
 const original=structuredClone(events), at=Date.parse('2026-10-27T12:00Z');
 assert.deepEqual(filterEvents(events,{sort:'registration_deadline'},'2026-10-27',at).map(e=>e.id),[events[1].id,events[2].id,events[0].id,events[3].id]);
 assert.deepEqual(filterEvents(events,{sort:'submission_deadline'},'2026-10-27',at).map(e=>e.id),[events[1].id,events[0].id,events[2].id,events[3].id]);
 assert.equal(nextDeadline(events[0],'registration_deadline','2026-10-27',at).kind,'early_registration');
 assert.equal(nextDeadline(events[0],'submission_deadline','2026-10-27',at).kind,'paper');
 assert.equal(nextDeadline(events[3],'registration_deadline','2026-10-27',at),null);
 const filtered=filterEvents(events,{sort:'registration_deadline',region:'UK',topic:'Porous Materials',stage:'registration'},'2026-10-27',at);
 assert.deepEqual(filtered.map(e=>e.id),[events[1].id]);
 assert.deepEqual(events,original);
});
test('channel deadline sorts put missing, past, conflicting and paused dates last',()=>{
 const meeting=(name,start,milestones,extra={})=>({name,start,milestones,...extra});
 const proposal=meeting('Proposal','2027-06-01',[phaseNode('other','2026-11-01','Symposium proposals')]);
 const abstract=meeting('Abstract','2027-01-01',[phaseNode('abstract','2026-11-02','Oral abstracts')]);
 const excluded=meeting('Excluded dates','2027-02-01',[
  phaseNode('conference_start','2026-10-28'),phaseNode('conference_end','2026-10-29'),
  phaseNode('funding','2026-10-28'),phaseNode('application','2026-10-29'),
  phaseNode('poster','2026-10-26'),phaseNode('paper','2026-10-28','Paper deadline','conflict'),
  phaseNode('abstract','2026-10-29','Provisional abstracts','unknown')
 ]);
 const paused=meeting('Paused','2027-03-01',[phaseNode('paper','2026-10-28')],{reminders_paused:true});
 assert.deepEqual(filterEvents([excluded,abstract,paused,proposal],{sort:'submission_deadline'},'2026-10-27').map(e=>e.name),['Proposal','Abstract','Excluded dates','Paused']);
 const regular=meeting('Regular registration','2027-06-01',[phaseNode('registration','2026-11-01')]);
 const early=meeting('Early registration','2027-01-01',[phaseNode('early_registration','2026-11-02'),phaseNode('registration','2026-12-01')]);
 const disabled=meeting('Disabled','2027-02-01',[phaseNode('registration','2026-10-28')],{disabled:true});
 assert.deepEqual(filterEvents([early,disabled,regular],{sort:'registration_deadline'},'2026-10-27').map(e=>e.name),['Regular registration','Early registration','Disabled']);
 assert.equal(nextDeadline(excluded,'submission_deadline','2026-10-27'),null);
 assert.equal(nextDeadline(proposal,'deadline','2026-10-27').kind,'other');
});
test('channel deadline sorts respect overseas expiry and order exact times within a date',()=>{
 for (const [sort,kind] of [['registration_deadline','registration'],['submission_deadline','paper']]) {
  const exact=(name,date,time,timezone,start='2027-06-01')=>({name,start,milestones:[{...phaseNode(kind,date),precision:'datetime',time,timezone}]});
  const overseas=exact('New York cutoff','2026-10-29','23:59','America/New_York','2027-01-01');
  const later=exact('Later cutoff','2026-11-01','12:00','UTC');
  const before=Date.parse('2026-10-30T00:30Z'), after=Date.parse('2026-10-30T04:00Z');
  assert.deepEqual(filterEvents([later,overseas],{sort},'2026-10-30',before).map(e=>e.name),['New York cutoff','Later cutoff']);
  assert.deepEqual(filterEvents([overseas,later],{sort},'2026-10-30',after).map(e=>e.name),['Later cutoff','New York cutoff']);
  assert.equal(nextDeadline(overseas,sort,'2026-10-30',after),null);
  const tokyo=exact('Tokyo noon','2026-11-01','12:00','Asia/Tokyo');
  const london=exact('London morning','2026-11-01','10:00','Europe/London','2027-01-01');
  assert.deepEqual(filterEvents([london,tokyo],{sort},'2026-10-27',Date.parse('2026-10-27T12:00Z')).map(e=>e.name),['Tokyo noon','London morning']);
  const dateOnly={name:'Date only',start:'2026-12-01',milestones:[phaseNode(kind,'2026-11-01')]};
  const at=Date.parse('2026-10-27T12:00Z');
  for (const entries of [[london,dateOnly,tokyo],[dateOnly,tokyo,london],[tokyo,london,dateOnly]]) {
   assert.deepEqual(filterEvents(entries,{sort},'2026-10-27',at).map(e=>e.name),['Tokyo noon','London morning','Date only']);
  }
  assert.equal(nextDeadline({milestones:[dateOnly.milestones[0],london.milestones[0],tokyo.milestones[0]]},sort,'2026-10-27',at),tokyo.milestones[0]);
 }
});
test('exact times convert from London DST and AoE; date-only never invents a time',()=>{
 assert.equal(new Date(milestoneInstant({status:'verified',precision:'datetime',date:'2027-07-01',time:'12:00',timezone:'Europe/London'})).toISOString(),'2027-07-01T11:00:00.000Z');
 assert.equal(new Date(milestoneInstant({status:'verified',precision:'datetime',date:'2027-01-01',time:'23:59',timezone:'Etc/GMT+12'})).toISOString(),'2027-01-02T11:59:00.000Z');
 assert.equal(milestoneInstant({status:'verified',precision:'date',date:'2027-01-01'}),null);
 assert.equal(milestoneInstant({status:'verified',precision:'datetime',date:'2027-03-28',time:'01:30',timezone:'Europe/London'}),null);
 assert.equal(milestoneInstant({status:'verified',precision:'datetime',date:'2027-10-31',time:'01:30',timezone:'Europe/London'}),null);
});
test('an exact overseas deadline stays available across the visitor’s midnight',()=>{
 const node={id:'paper',kind:'paper',status:'verified',precision:'datetime',date:'2026-10-29',time:'23:59',timezone:'America/New_York'};
 const event={milestones:[node]};
 assert.equal(upcomingNodes(event,'2026-10-30',Date.parse('2026-10-30T00:30Z')).length,1);
 assert.equal(upcomingNodes(event,'2026-10-30',Date.parse('2026-10-30T04:00Z')).length,0);
 assert.equal(upcomingNodes({...event,reminders_paused:true},'2026-10-29',Date.parse('2026-10-29T00:30Z')).length,0);
});
test('untrusted URL schemes and HTML are not rendered as executable content',()=>{
 assert.equal(safeUrl('javascript:alert(1)'),'');assert.equal(safeUrl('https://example.org'),'https://example.org/');assert.equal(esc('<img onerror="bad">'),'&lt;img onerror=&quot;bad&quot;&gt;');
});
