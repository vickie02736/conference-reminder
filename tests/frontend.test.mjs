import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterEvents,eventPhase,upcomingNodes,normalizeSaved,isDuplicate,calendarFile,milestoneInstant,safeUrl,esc} from '../assets/core.mjs';

const catalogue=JSON.parse(readFileSync(new URL('../data/conferences.json',import.meta.url),'utf8'));
const canonical=name=>[...catalogue.events,...catalogue.watchlist].find(e=>e.name.includes(name));
const snapshotPhase=e=>eventPhase(e,'2026-10-27',Date.parse('2026-10-27T12:00Z'));
const phaseNode=(kind,date,label=kind,status='verified')=>({id:kind,kind,date,label,status,precision:date?'date':'unknown',time:null,timezone:null});

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
 assert.equal(ai4mat.label,'Submissions closed');
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

test('legacy reminders survive migration and malformed storage is ignored',()=>{
 const old={id:'old',title:'My conference',time:Date.parse('2027-01-01T12:00Z'),reminder:4320,notified:true};
 const result=normalizeSaved([old,null,{title:'broken',time:'tomorrow'}]);
 assert.equal(result.length,1);assert.equal(result[0].deadlineLabel,'Submission deadline');assert.equal(result[0].notified,true);
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
test('multiple nodes can be saved while the same node/time is not duplicated',()=>{
 const m={title:'EuroMOF',catalogId:'e',milestoneId:'abstract',deadlineLabel:'Abstract',time:1000};
 assert.equal(isDuplicate([m],{...m}),true);
 assert.equal(isDuplicate([m],{...m,milestoneId:'registration',deadlineLabel:'Registration'}),false);
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
test('ICS includes the chosen node, UTC deadline and alarm and folds long UTF-8 safely',()=>{
 const file=calendarFile({id:'x',title:'A'.repeat(100)+'研究',time:Date.parse('2027-01-02T11:59Z'),deadlineLabel:'Poster submission',reminder:10080,place:'London, UK',website:'https://example.org',conferenceDate:'2027-05-01'},Date.parse('2026-10-27T12:00Z'));
 assert.match(file,/DTSTART:20270102T115900Z/);assert.match(file,/TRIGGER:-PT10080M/);assert.match(file,/SUMMARY:Poster submission/);assert.match(file,/LOCATION:London\\, UK/);
 assert.ok(file.split('\r\n').every(line=>new TextEncoder().encode(line).length<=75));
});
test('untrusted URL schemes and HTML are not rendered as executable content',()=>{
 assert.equal(safeUrl('javascript:alert(1)'),'');assert.equal(safeUrl('https://example.org'),'https://example.org/');assert.equal(esc('<img onerror="bad">'),'&lt;img onerror=&quot;bad&quot;&gt;');
});
