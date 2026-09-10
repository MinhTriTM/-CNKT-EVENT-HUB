import assert from 'node:assert/strict';
import { permutation,schedule,scoreBoard,recommendedCycle } from '../lib/fieldmath.ts';
import { bank,returns,finalAnswer,finalDisplay,destinations } from '../lib/fieldkit.ts';
function* permutations(a){if(!a.length){yield [];return;}for(let i=0;i<a.length;i++)for(const p of permutations(a.filter((_,j)=>j!==i)))yield [a[i],...p];}
const base={start:'2026-09-13T15:10',play:6,decode:5,move:10,loser:'4',attempts:[],order:[],battles:[],answers:[]};
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
const cipherFamilies=new Set();
for(const c of [...bank,...returns]){
 assert.match(c.route,/MẬT THƯ 3 LỚP/,c.id);
 assert.match(c.route,/OT —/,c.id);assert.match(c.route,/NW —/,c.id);assert.match(c.route,/KIỂM CHỨNG —/,c.id);
 assert.match(c.hint1,/ít nhất hai thao tác/,c.id);
 assert.equal(c.route.includes(destinations?.[c.to]?.name??'__never__'),false,c.id);
 cipherFamilies.add(c.method);
}
assert.equal(cipherFamilies.size,7);
assert.equal(bank.find(c=>c.from===1&&c.to===2).keyword,'ĐỔI MỚI');
assert.equal(bank.find(c=>c.from===2&&c.to===3).keyword,'SÁNG TẠO');
assert.equal(bank.find(c=>c.from===7&&c.to===1).keyword,'CỘNG ĐỒNG');
assert.equal(finalAnswer,'DOI MOI SANG TAO HOA NHIP TUONG LAI CONG NGHE VI CONG DONG');
assert.equal(finalDisplay,'ĐỔI MỚI SÁNG TẠO — HÒA NHỊP TƯƠNG LAI — CÔNG NGHỆ VÌ CỘNG ĐỒNG');
const s={...base,cycle:recommendedCycle,teams:[1,2,3,4,5,6,7].map(n=>({id:String(n),name:String(n),start:n})),attempts:[]};
for(let station=1;station<=7;station++)for(let team=1;team<=7;team++)s.attempts.push({team:String(team),station,seconds:team===2?10:team*10,dnf:team===7});
let b=scoreBoard(s);assert.equal(b[0].points,45.5);assert.equal(b[1].points,45.5);assert.equal(b.find(t=>t.id==='3').points,35);assert.equal(b.find(t=>t.id==='7').points,0);assert.equal(b.find(t=>t.id==='7').seconds,2520);
s.battles=[{attacker:'1',defender:'2',winner:'2',refused:false}];b=scoreBoard(s);assert.equal(b[0].id,'2');assert.equal(b[0].total,46.5);
console.log('PASS: '+count+' schedules, all 49 directed ciphers, 7 final fragments per team, ties, DNF and challenge bonus.');
