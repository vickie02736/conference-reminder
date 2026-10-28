import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterEvents, peopleSearchText} from '../assets/core.mjs';

const event={id:'people-example',name:'Porous Materials 2027',start:'2027-07-01',end:'2027-07-03',region:'UK',type:'Workshop',tags:['MOF'],people:{
  organizers:[{name:'Example Chemical Society',role:'Organiser',source:'https://example.org/2027'}],
  committee:[{name:'Zoë García-López',role:'Programme chair',affiliation:'University of Zürich',source:'https://example.org/2027/committee'}],
  speakers:[{name:'Søren Müller',role:'Keynote speaker',affiliation:'Technical University',source:'https://example.org/2027/speakers'}],
  participants:[{name:'Renée O’Connor',role:'Announced participant',source:'https://example.org/2027/programme'}]
}};
const filter=search=>filterEvents([event],{search},'2026-10-28');

test('every published catalogue entry has reviewed people data and monitored evidence',()=>{
  const catalog=JSON.parse(readFileSync(new URL('../data/conferences.json',import.meta.url),'utf8'));
  for(const event of [...catalog.events,...catalog.watchlist]) {
    assert.ok(event.people,event.id);
    for(const source of event.people.sources) assert.ok(event.sources.includes(source),event.id+': '+source);
    for(const group of ['organizers','committee','speakers','participants']) for(const person of event.people[group]) {
      assert.ok(event.people.sources.includes(person.source),event.id+': '+person.name);
      assert.equal(filterEvents([event],{search:person.name,showPast:true},'2026-10-28').length,1,event.id+': '+person.name);
    }
  }
});

test('people search includes every role group, institution and unaccented names',()=>{
  for(const query of ['chemical society','garcia lopez','GARCÍA','zoe zurich','soren muller','keynote speaker','renee o connor','renee oconnor','programme chair','organizers','organisers']) {
    assert.equal(filter(query).length,1,query);
  }
  assert.equal(filter('nonexistent researcher').length,0);
});

test('people keywords combine across fields and continue to obey other filters',()=>{
  assert.equal(filter('porous garcia').length,1);
  assert.equal(filter('muller MOF').length,1);
  assert.equal(filterEvents([event],{search:'garcia',region:'Other'},'2026-10-28').length,0);
  assert.equal(filterEvents([event],{search:'garcia',topic:'AI & Machine Learning'},'2026-10-28').length,0);
  assert.equal(filterEvents([event],{search:'garcia',topic:'MOFs, COFs & Porous Materials'},'2026-10-28').length,1);
});

test('unavailable or absent people retain ordinary search without indexing verification notes',()=>{
  const empty={...event,people:{organizers:[],committee:[],speakers:[],participants:[],note:'Old keynote Zoë was excluded.'}};
  assert.equal(peopleSearchText(empty),'');
  assert.equal(filterEvents([empty],{search:'zoe'},'2026-10-28').length,0);
  assert.equal(filterEvents([{...event,people:undefined}],{search:'porous'},'2026-10-28').length,1);
});
