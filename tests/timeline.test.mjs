import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterEvents,timelineEntries} from '../assets/core.mjs';

const catalogue=JSON.parse(readFileSync(new URL('../data/conferences.json',import.meta.url),'utf8'));
const all=[...catalogue.events,...catalogue.watchlist];
const today='2026-10-27', now=Date.parse('2026-10-27T12:00:00Z');
const canonical=name=>all.find(event=>event.name.includes(name));
const node=(id,kind,date,label=kind,extra={})=>({id,kind,date,label,status:'verified',precision:'date',...extra});
const snapshot=(events,stage='all')=>timelineEntries(events,stage,today,now);

test('registration timeline contains exactly the visible conferences and only registration dates',()=>{
 const visible=filterEvents(all,{region:'Europe-group',stage:'registration'},today,now);
 const entries=snapshot(visible,'registration');
 assert.deepEqual(new Set(entries.map(entry=>entry.eventId)),new Set(visible.map(event=>event.id)));
 for (const entry of entries.filter(entry=>entry.date)) {
  const event=visible.find(event=>event.id===entry.eventId);
  const milestone=event.milestones.find(milestone=>milestone.id===entry.milestoneId);
  assert.ok(['registration','early_registration'].includes(milestone.kind),entry.label);
  assert.equal(entry.date,milestone.date);
 }
 const workshop=canonical('Recent Advances in Chemistry and AI');
 assert.equal(entries.find(entry=>entry.eventId===workshop.id).date,null);
 assert.match(entries.find(entry=>entry.eventId===workshop.id).label,/Registration date not announced/);
 const ai4x=snapshot([canonical('AI4X 2027')],'registration');
 assert.deepEqual(ai4x.map(entry=>entry.date),['2027-04-21','2027-05-09','2027-05-09']);
});

test('the default timeline follows the supplied UK result set and shows conference ranges',()=>{
 const visible=filterEvents(all,{region:'UK',topic:'MOF'},today,now);
 const entries=snapshot(visible);
 assert.equal(entries.length,visible.length);
 assert.deepEqual(new Set(entries.map(entry=>entry.eventId)),new Set(visible.map(event=>event.id)));
 assert.ok(entries.every(entry=>visible.find(event=>event.id===entry.eventId)?.region==='UK'));
 for (const entry of entries.filter(entry=>entry.date)) {
  const event=visible.find(event=>event.id===entry.eventId);
  assert.equal(entry.date,event.start);
  assert.equal(entry.endDate,event.end);
 }
 assert.deepEqual(snapshot([]),[]);
});

test('submission timelines keep independent routes and exclude closed or expired deadlines',()=>{
 const event={id:'mixed',name:'Mixed calls',start:'2027-06-01',status:'Oral abstracts closed; poster submissions open; registration open.',milestones:[
  node('oral','abstract','2027-01-01','Oral abstracts'),
  node('poster','poster','2027-02-01','Poster abstracts'),
  node('old-poster','poster','2026-10-01','Past poster round'),
  node('registration','registration','2027-03-01','Registration')
 ]};
 assert.deepEqual(snapshot([event],'submission').map(entry=>entry.milestoneId),['poster']);
 assert.deepEqual(snapshot([event],'poster').map(entry=>entry.milestoneId),['poster']);
 const combined=canonical('SSCG2026');
 for (const stage of ['submission','oral','poster','abstract']) {
  const entries=snapshot([combined],stage);
  assert.equal(entries.length,1);
  assert.equal(entries[0].date,'2026-10-30');
 }
 const aistats=snapshot([canonical('AISTATS 2027')],'submission');
 assert.deepEqual(aistats.map(entry=>entry.label),['Workshop proposal submission deadline','Journal-to-Conference submissions']);
 for (const name of ['Euro-Asia Zeolite']) {
  const entries=snapshot([canonical(name)],'submission');
  assert.equal(entries.length,1);
  assert.match(entries[0].label,/Journal-to-Conference|Recent Reports/);
 }
});

test('unknown and conflicting dates remain explicit undated entries after known dates',()=>{
 const confirmed=canonical('SSCG2026');
 const pending=canonical('UKPorMat2027');
 const provisional=canonical('MEDPore2027');
 const entries=snapshot([pending,provisional,confirmed]);
 assert.equal(entries[0].eventId,confirmed.id);
 assert.ok(entries.slice(1).every(entry=>entry.date===null && entry.status==='unknown'));
 const event={id:'conflict',name:'Conflict',start:'2027-06-01',milestones:[node('start','conference_start','2027-06-01','Starts',{status:'conflict'})]};
 assert.equal(snapshot([event])[0].date,null);
 assert.equal(snapshot([event])[0].status,'conflict');
 const paused={...confirmed,reminders_paused:true};
 assert.equal(snapshot([paused])[0].status,'paused');
 assert.equal(snapshot([paused])[0].date,confirmed.start);
});

test('opening-soon timelines use opening dates and never substitute the closing cutoff',()=>{
 const euro=snapshot([canonical('EuroMOF 2027')],'opening_soon');
 assert.ok(euro.length>0);
 assert.ok(euro.every(entry=>entry.date===null));
 const quantum=snapshot([canonical('Mathematics for Quantum Dynamics')],'opening_soon');
 assert.equal(quantum[0].date,'2027-04-01');
 assert.match(quantum[0].label,/opens/i);
});

test('exact overseas deadlines retain their real availability and chronological order',()=>{
 const event={id:'overseas',name:'Overseas',start:'2027-06-01',status:'Registration open.',milestones:[
  node('cutoff','registration','2026-10-29','Registration',{precision:'datetime',time:'23:59',timezone:'America/New_York'})
 ]};
 const before=Date.parse('2026-10-30T00:30:00Z'), after=Date.parse('2026-10-30T04:00:00Z');
 const visible=filterEvents([event],{stage:'registration'},'2026-10-30',before);
 const entries=timelineEntries(visible,'registration','2026-10-30',before);
 assert.equal(entries[0].date,'2026-10-29');
 assert.equal(entries[0].time,'23:59');
 assert.equal(entries[0].timezone,'America/New_York');
 assert.deepEqual(timelineEntries(filterEvents([event],{stage:'registration'},'2026-10-30',after),'registration','2026-10-30',after),[]);
 const earlier={...event,id:'earlier',name:'Earlier UTC instant',milestones:[node('utc','registration','2026-10-30','Registration',{precision:'datetime',time:'01:00',timezone:'UTC'})]};
 assert.deepEqual(timelineEntries([event,earlier],'registration','2026-10-29',Date.parse('2026-10-29T12:00:00Z')).map(entry=>entry.eventId),['earlier','overseas']);
 const invalid={...event,milestones:[node('gap','registration','2027-03-28','Registration',{precision:'datetime',time:'01:30',timezone:'Europe/London'})]};
 assert.equal(snapshot([invalid],'registration')[0].date,null);
});

test('closed timelines show closed route cutoffs without mixing in an independent open route',()=>{
 const event={id:'closed-route',name:'Independent routes',start:'2027-06-01',status:'Oral abstracts open; poster submissions closed; registration open.',milestones:[
  node('oral','abstract','2027-01-01','Oral abstracts'),
  node('poster','poster','2026-10-01','Poster abstracts'),
  node('registration','registration','2027-03-01','Registration')
 ]};
 const entries=snapshot([event],'closed');
 assert.deepEqual(entries.map(entry=>entry.milestoneId),['poster']);
 assert.equal(entries[0].date,'2026-10-01');
 const aistats=snapshot([canonical('AISTATS 2027')],'closed');
 assert.ok(aistats.length>=2);
 assert.ok(aistats.every(entry=>entry.date<today));
 assert.ok(aistats.every(entry=>!/Journal-to-Conference|Conference dates/.test(entry.label)));
 const undated={...event,status:'Registration closed.',milestones:[]};
 const fallback=snapshot([undated],'closed');
 assert.equal(fallback[0].date,null);
 assert.match(fallback[0].label,/Registration closed/);
});

test('needs-review timelines show unresolved milestones and unconfirmed-route deadlines',()=>{
 const paris=snapshot([canonical('Recent Advances in Chemistry and AI')],'needs_review');
 assert.equal(paris[0].date,null);
 assert.match(paris[0].label,/Registration/);
 const ai4x=snapshot([canonical('AI4X 2027')],'needs_review');
 assert.deepEqual(ai4x.map(entry=>entry.date),['2027-04-21','2027-05-09','2027-05-09']);
 assert.ok(ai4x.every(entry=>!/papers/i.test(entry.label)));
 const conflict=snapshot([canonical('InterPore2027')],'needs_review');
 const unresolved=conflict.find(entry=>entry.milestoneId==='interpore2027:abstract');
 assert.equal(unresolved.date,null);
 assert.equal(unresolved.status,'conflict');
 assert.ok(conflict.every(entry=>!/^Conference dates$/.test(entry.label)));
 const invalid={id:'invalid-review',name:'Invalid clock',start:'2027-06-01',milestones:[
  node('clock','registration','2027-03-28','Registration',{precision:'datetime',time:'01:30',timezone:'Europe/London'}),
  node('unknown','abstract','2027-02-01','Abstract date provisional',{status:'unknown'})
 ]};
 const invalidEntries=snapshot([invalid],'needs_review');
 assert.equal(invalidEntries.length,2);
 assert.ok(invalidEntries.every(entry=>entry.date===null));
 for (const stage of ['closed','needs_review']) {
  const visible=filterEvents(all,{stage},today,now);
  assert.deepEqual(new Set(snapshot(visible,stage).map(entry=>entry.eventId)),new Set(visible.map(event=>event.id)));
 }
});
