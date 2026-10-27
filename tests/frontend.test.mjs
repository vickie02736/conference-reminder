import {test} from 'node:test';
import assert from 'node:assert/strict';
import {filterEvents,upcomingNodes,normalizeSaved,isDuplicate,calendarFile,milestoneInstant,safeUrl,esc} from '../assets/core.mjs';

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
