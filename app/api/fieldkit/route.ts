import { z } from 'zod';
import { operator, first, all, run, log } from '@/lib/data';
import { bank, returns, destinations, decoder, bonusHints, ideas, finalAnswer } from '@/lib/fieldkit';
import { permutation, schedule, scoreBoard, type FieldState } from '@/lib/fieldmath';
export const dynamic='force-dynamic';
const EVENT='teambuilding-k26-2026';
const json=(value:unknown,status=200)=>Response.json(value,{status,headers:{'Cache-Control':'no-store'}});
const config=z.object({teams:z.array(z.object({id:z.string().min(1),name:z.string().max(100),start:z.number().int().min(1).max(7)})).length(7),cycle:z.array(z.number().int()).length(7),start:z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/),play:z.number().int().min(1).max(30),decode:z.number().int().min(0).max(30),move:z.number().int().min(1).max(60),loser:z.string().min(1)});
export async function GET(){try{const user=await operator();if(!user||!['OWNER','ADMIN'].includes(user.role))return json({message:'Chỉ quản lý BTC được mở nội dung mật thư và điều phối.'},403);const row=await first('SELECT * FROM field_sessions WHERE event_id=?',EVENT);return json({bank,returns,destinations,decoder,bonusHints,ideas,finalText:'KẾT NỐI ĐAM MÊ — BẢN LĨNH TIÊN PHONG.',fragmentText:'Trạm 1: KẾT · 2: NỐI · 3: ĐAM · 4: MÊ · 5: BẢN · 6: LĨNH · 7: TIÊN PHONG.',teams:await all('SELECT id,name FROM teams WHERE event_id=? ORDER BY name',EVENT),state:row?JSON.parse(row.payload):null,revision:row?.revision||0});}catch(e){console.error(e);return json({message:'Chưa tải được bộ điều phối. Vui lòng thử lại.'},503);}}
export async function POST(request:Request){
 try{
  if(request.headers.get('origin')&&request.headers.get('origin')!==new URL(request.url).origin)return json({message:'Yêu cầu không hợp lệ.'},403);
  const user=await operator();if(!user||!['OWNER','ADMIN'].includes(user.role))return json({message:'Chỉ quản lý BTC được ghi nhận.'},403);
  const body=z.object({action:z.enum(['config','attempt','draw','battle','answer']),revision:z.number().int().min(0),value:z.unknown()}).parse(await request.json());
  const row=await first('SELECT * FROM field_sessions WHERE event_id=?',EVENT);if((row?.revision||0)!==body.revision)return json({message:'Một BTC khác vừa cập nhật. Tải lại trước khi lưu để tránh ghi đè.'},409);
  let state:FieldState=row?JSON.parse(row.payload):null;
  if(body.action==='config'){
   if(state?.attempts.length)return json({message:'Đã có kết quả trạm; lịch và đội đã được khóa.'},409);
   const v=config.parse(body.value);const teams=await all('SELECT id,name FROM teams WHERE event_id=?',EVENT);
   if(teams.length!==7||new Set(v.teams.map(t=>t.id)).size!==7||!v.teams.every(t=>teams.some(a=>a.id===t.id)))throw new Error('Sự kiện cần đúng 7 đội đã được tạo ở trang Đội tham gia.');
   if(!permutation(v.teams.map(t=>t.start))||!permutation(v.cycle))throw new Error('Trạm xuất phát và vòng di chuyển phải là hoán vị 1–7.');
   if(v.teams.find(t=>t.id===v.loser)?.start!==4)throw new Error('Đội thua ở trung tâm phải xuất phát tại trạm 4.');
   state={...v,teams:v.teams.map(t=>({...t,name:String(teams.find(a=>a.id===t.id)!.name)})),attempts:[],order:[],battles:[],answers:[]};schedule(state);
  }else{
   if(!state)throw new Error('Hãy lưu lịch điều phối trước.');
   if(body.action==='attempt'){
    if(state.order.length||state.answers.length)throw new Error('Đã mở vòng giải cuối; kết quả trạm được khóa.');
    const v=z.object({team:z.string(),station:z.number().int().min(1).max(7),seconds:z.number().min(0).max(state.play*60),dnf:z.boolean()}).parse(body.value);
    if(!state.teams.some(t=>t.id===v.team)||(!v.dnf&&v.seconds<=0))throw new Error('Đội hoặc thời gian hoàn thành không hợp lệ.');
    state.attempts=state.attempts.filter(a=>!(a.team===v.team&&a.station===v.station));state.attempts.push({...v,seconds:v.dnf?state.play*60:v.seconds});
   }else if(body.action==='draw'){
    if(state.attempts.length!==49||state.order.length||state.answers.some(a=>a.correct))throw new Error('Bốc thăm sau đủ 49 kết quả, chưa đội nào giải đúng, và chỉ bốc một lần.');
    state.order=state.teams.map(t=>t.id);
    for(let i=6;i>0;i--){const range=i+1;const limit=Math.floor(4294967296/range)*range;let n;do{n=crypto.getRandomValues(new Uint32Array(1))[0];}while(n>=limit);const j=n%range;[state.order[i],state.order[j]]=[state.order[j],state.order[i]];}
   }else if(body.action==='battle'){
    const v=z.object({defender:z.string(),winner:z.string(),refused:z.boolean()}).parse(body.value);const attacker=state.order[state.battles.length];
    if(!attacker||v.defender===attacker||!state.teams.some(t=>t.id===v.defender)||![attacker,v.defender].includes(v.winner)||(v.refused&&v.winner!==attacker))throw new Error('Đối thủ hoặc đội thắng không hợp lệ.');
    state.battles.push({attacker,...v});
   }else{
    const v=z.object({team:z.string(),answer:z.string().trim().min(2).max(200)}).parse(body.value);
    if(state.attempts.length!==49||!state.teams.some(t=>t.id===v.team))throw new Error('Cần đủ 49 kết quả và đúng đội tham gia.');
    if(state.order.length&&state.battles.length!==7)throw new Error('Chờ đủ 7 lượt khiêu chiến để các đội có cơ hội nhận gợi ý như nhau.');
    const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/gi,'d').toUpperCase().replace(/[^A-Z]+/g,' ').trim();
    state.answers.push({team:v.team,correct:normalize(v.answer)===finalAnswer,at:new Date().toISOString()});
   }
  }
  const now=new Date().toISOString();let result;
  if(row)result=await run('UPDATE field_sessions SET payload=?,revision=revision+1,updated_at=? WHERE event_id=? AND revision=?',JSON.stringify(state),now,EVENT,body.revision);
  else result=await run('INSERT OR IGNORE INTO field_sessions (event_id,payload,revision,updated_at) VALUES (?,?,1,?)',EVENT,JSON.stringify(state),now);
  if(result.meta.changes!==1)return json({message:'Dữ liệu vừa thay đổi. Tải lại và kiểm tra trước khi lưu.'},409);
  await log(user.email,'fieldkit/'+body.action,'Cập nhật điều phối Teambuilding K26');
  return json({message:'Đã lưu.',state,revision:body.revision+1,board:scoreBoard(state)});
 }catch(e){console.error(e);return json({message:e instanceof z.ZodError?'Kiểm tra lại các trường bắt buộc và giới hạn giá trị.':e instanceof Error&&!/SQLITE|D1|database/i.test(e.message)?e.message:'Chưa thể lưu, vui lòng thử lại.'},400);}
}
