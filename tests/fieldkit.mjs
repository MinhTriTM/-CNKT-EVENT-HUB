import assert from 'node:assert/strict';
import { permutation,schedule,scoreBoard,recommendedCycle } from '../lib/fieldmath.ts';
import { bank,returns,finalAnswer } from '../lib/fieldkit.ts';
function* permutations(a){if(!a.length){yield [];return;}for(let i=0;i<a.length;i++)for(const p of permutations(a.filter((_,j)=>j!==i)))yield [a[i],...p];}
const base={start:'2026-09-13T15:10',play:6,decode:2,move:10,loser:'4',attempts:[],order:[],battles:[],answers:[]};
let count=0;
for(const cycle of [recommendedCycle,[1,2,3,4,5,6,7]])for(const starts of permutations([1,2,3,4,5,6,7])){
 const s={...base,cycle,teams:starts.map((start,i)=>({id:String(i+1),name:'Đội '+(i+1),start}))};
 const rounds=schedule(s);assert.equal(rounds.length,7);
 for(const r of rounds)assert.equal(new Set(r.teams.map(t=>t.station)).size,7);
 for(const t of s.teams){const visits=rounds.map(r=>r.teams.find(a=>a.id===t.id));assert.equal(new Set(visits.map(a=>a.station)).size,7);assert.equal(visits.at(-1).next,0);const fragments=visits.map(v=>[...bank,...returns].find(c=>c.from===v.station&&c.to===v.next).keyword);assert.equal(new Set(fragments).size,7);}
 count++;
}
assert.equal(permutation([1,1,3,4,5,6,7]),false);
assert.equal(bank.length,49);assert.equal(returns.length,7);assert.equal(new Set(bank.map(c=>c.id)).size,49);
const atoms={H:1,He:2,Li:3,Be:4,B:5,C:6,N:7};const words=['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN'];
for(const c of bank){let n;switch(c.from){case 0:n=(Number(c.route.match(/= (\d+)/)[1])-2)/3;break;case 1:n=(Number(c.route.match(/= (\d+)/)[1])-3)/2;break;case 2:n=Number(c.route.match(/Trong (\d+) giây/)[1])/2;break;case 3:n=atoms[c.route.match(/Z của (\w+)/)[1]];break;case 4:n=parseInt([...c.route.match(/Đổi ([ACGT]{2}) /)[1]].map(a=>({A:'00',C:'01',G:'10',T:'11'})[a]).join(''),2);break;case 5:n=c.route.match(/“(.+)”/)[1].split(' ').length;break;case 6:n=words.indexOf(c.route.match(/station (\w+)/)[1])+1;break;case 7:n=parseInt(c.route.match(/nhị phân ([01]+)/)[1],2);break;}assert.equal(n,c.to,c.id);}
assert.equal([11,5,20].map(n=>String.fromCharCode(n+64)).join(''),'KET');
assert.equal([4,1,13].map(n=>String.fromCharCode(n+64)).join(''),'DAM');
assert.equal('OLQK'.split('').map(c=>String.fromCharCode(c.charCodeAt(0)-3)).join(''),'LINH');
assert.equal(finalAnswer,'KET NOI DAM ME BAN LINH TIEN PHONG');
const s={...base,cycle:recommendedCycle,teams:[1,2,3,4,5,6,7].map(n=>({id:String(n),name:String(n),start:n})),attempts:[]};
for(let station=1;station<=7;station++)for(let team=1;team<=7;team++)s.attempts.push({team:String(team),station,seconds:team===2?10:team*10,dnf:team===7});
let b=scoreBoard(s);assert.equal(b[0].points,45.5);assert.equal(b[1].points,45.5);assert.equal(b.find(t=>t.id==='3').points,35);assert.equal(b.find(t=>t.id==='7').points,0);assert.equal(b.find(t=>t.id==='7').seconds,2520);
s.battles=[{attacker:'1',defender:'2',winner:'2',refused:false}];b=scoreBoard(s);assert.equal(b[0].id,'2');assert.equal(b[0].total,46.5);
console.log('PASS: '+count+' schedules, all 49 directed ciphers, 7 final fragments per team, ties, DNF and challenge bonus.');
