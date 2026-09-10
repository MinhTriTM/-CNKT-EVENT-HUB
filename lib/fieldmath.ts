export const recommendedCycle=[1,2,3,7,6,4,5];
export type FieldTeam={id:string;name:string;start:number};
export type Attempt={team:string;station:number;seconds:number;dnf:boolean};
export type Battle={attacker:string;defender:string;winner:string;refused:boolean};
export type FieldState={teams:FieldTeam[];cycle:number[];start:string;play:number;decode:number;move:number;loser:string;attempts:Attempt[];order:string[];battles:Battle[];answers:{team:string;correct:boolean;at:string}[]};
export function permutation(v:number[]){return v.length===7&&v.every(n=>Number.isInteger(n)&&n>=1&&n<=7)&&new Set(v).size===7;}
export function schedule(s:Pick<FieldState,'teams'|'cycle'|'start'|'play'|'decode'|'move'>){
 if(!permutation(s.teams.map(t=>t.start))||!permutation(s.cycle))throw new Error('Bảy đội phải xuất phát tại bảy trạm khác nhau.');
 const base=Date.parse(s.start+'+07:00');if(!Number.isFinite(base))throw new Error('Ngày giờ không hợp lệ.');
 const span=s.play+s.decode+s.move;
 return Array.from({length:7},(_,round)=>({round:round+1,start:new Date(base+round*span*60000).toISOString(),end:new Date(base+(round+1)*span*60000).toISOString(),teams:s.teams.map(t=>({id:t.id,name:t.name,station:s.cycle[(s.cycle.indexOf(t.start)+round)%7],next:round===6?0:s.cycle[(s.cycle.indexOf(t.start)+round+1)%7]}))}));
}
export function scoreBoard(s:FieldState){
 const rows=s.teams.map(t=>({...t,points:0,bonus:s.battles.filter(b=>b.winner===t.id).length,completed:s.attempts.filter(a=>a.team===t.id).length,dnf:s.attempts.filter(a=>a.team===t.id&&a.dnf).length,seconds:s.attempts.filter(a=>a.team===t.id).reduce((n,a)=>n+(a.dnf?s.play*60:a.seconds),0)}));
 for(let station=1;station<=7;station++){
  const attempts=s.attempts.filter(a=>a.station===station);if(attempts.length!==7)continue;
  const finish=attempts.filter(a=>!a.dnf).sort((a,b)=>a.seconds-b.seconds);
  for(const a of finish){const before=finish.filter(b=>b.seconds<a.seconds).length;const tied=finish.filter(b=>b.seconds===a.seconds).length;const points=7-before-(tied-1)/2;rows.find(t=>t.id===a.team)!.points+=points;}
 }
 return rows.map(t=>({...t,total:t.points+t.bonus})).sort((a,b)=>b.total-a.total||a.dnf-b.dnf||a.seconds-b.seconds);
}
