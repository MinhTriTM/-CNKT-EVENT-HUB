import { z } from "zod";
import { all, first, run, database, operator, log, initialize, eventQuery, publicEvent, OWNER_EMAIL } from "@/lib/data";
export const dynamic = "force-dynamic";
const json = (data: any, status=200) => Response.json(data,{status,headers:{"Cache-Control":"no-store"}});
const eventInput = z.object({id:z.string().optional(),title:z.string().trim().min(4).max(160),description:z.string().trim().max(4000),audience:z.string().trim().min(2).max(200),venue:z.string().trim().min(2).max(200),event_date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable(),event_time:z.string().regex(/^\d{2}:\d{2}$/).nullable(),capacity:z.number().int().min(1).max(100000).nullable(),status:z.enum(["DRAFT","COMING_SOON","REGISTRATION_OPEN","CLOSED","COMPLETED"]),event_type:z.string().max(100)});
export async function GET(request: Request, context:{params:Promise<{path:string[]}>}) {
  try {
    const {path}=await context.params; const route=path.join("/");
    if(route==="public") return json({events:(await all(eventQuery+" WHERE e.status != 'DRAFT' ORDER BY e.event_date IS NULL,e.event_date")).map(publicEvent),stations:await all("SELECT s.* FROM event_stations s JOIN events e ON e.id=s.event_id WHERE s.is_active=1 AND e.status!='DRAFT' ORDER BY station_number"),notices:await all("SELECT n.* FROM notices n LEFT JOIN events e ON e.id=n.event_id WHERE n.published=1 AND (n.event_id IS NULL OR e.status!='DRAFT') ORDER BY n.created_at DESC"),teams:await all("SELECT t.*, COALESCE(SUM(s.points),0) points, COUNT(s.id) completed FROM teams t JOIN events e ON e.id=t.event_id LEFT JOIN scores s ON s.team_id=t.id WHERE e.status!='DRAFT' GROUP BY t.id ORDER BY points DESC,t.name")});
    const user=await operator(); if(!user) return json({message:"Tài khoản chưa được cấp quyền Ban tổ chức."},403);
    if(route==="admin") {
      const detailed=["OWNER","ADMIN"].includes(user.role);
      return json({role:user.role,operator:user.displayName,events:await all(eventQuery+" ORDER BY e.created_at DESC"),registrations:detailed ? await all("SELECT r.*,e.title event_title,t.name team_name,a.team_id,c.checked_in_at FROM registrations r JOIN events e ON e.id=r.event_id LEFT JOIN assignments a ON a.registration_id=r.id LEFT JOIN teams t ON t.id=a.team_id LEFT JOIN check_ins c ON c.registration_id=r.id ORDER BY r.created_at DESC LIMIT 5000") : [],teams:await all("SELECT t.*,COUNT(a.registration_id) members FROM teams t LEFT JOIN assignments a ON a.team_id=t.id GROUP BY t.id ORDER BY t.name"),stations:await all("SELECT * FROM event_stations ORDER BY station_number"),scores:await all("SELECT * FROM scores"),notices:await all("SELECT * FROM notices ORDER BY created_at DESC"),members:user.role==="OWNER" ? await all("SELECT * FROM members ORDER BY name") : [],audit:detailed ? await all("SELECT * FROM audit ORDER BY created_at DESC LIMIT 100") : []});
    }
    return json({message:"Không tìm thấy chức năng."},404);
  } catch(e) { console.error(e); return json({message:"Chưa tải được dữ liệu. Vui lòng thử lại."},503); }
}
export async function POST(request: Request, context:{params:Promise<{path:string[]}>}) {
  try {
    const origin=request.headers.get("origin"); if(origin && origin !== new URL(request.url).origin) return json({message:"Yêu cầu không hợp lệ."},403);
    const user=await operator(); if(!user) return json({message:"Bạn chưa được cấp quyền BTC."},403);
    const {path}=await context.params; const action=path.join("/");
    const allowed= user.role==="OWNER" || (user.role==="ADMIN" && action!=="members") || (user.role==="CHECKIN" && action==="checkin") || (user.role==="STATION" && action==="scores");
    if(!allowed) return json({message:"Vai trò của bạn không có quyền thao tác này."},403);
    const b=await request.json(); const now=new Date().toISOString(); let detail="";
    if(action==="initialize") { await initialize(user.email); detail="Khởi tạo sự kiện K26 và 8 trạm"; }
    else if(action==="events") {
      const e=eventInput.parse(b); if(e.status==="REGISTRATION_OPEN" && (!e.event_date||!e.event_time)) return json({message:"Cần chốt ngày và giờ trước khi mở đăng ký."},400);
      const existing=e.id ? await first("SELECT id FROM events WHERE id=?",e.id) : null;
      if(e.id && !existing) return json({message:"Sự kiện không tồn tại."},404);
      if(existing && e.capacity) { const c=await first("SELECT COUNT(*) n FROM registrations WHERE event_id=? AND status!='CANCELLED'",e.id); if(Number(c?.n)>e.capacity)return json({message:"Số suất không thể thấp hơn số đã đăng ký."},409); }
      if(existing) await run("UPDATE events SET title=?,short_title=?,description=?,audience=?,venue=?,event_date=?,event_time=?,capacity=?,status=?,registration_open=?,event_type=?,updated_at=? WHERE id=?",e.title,e.title,e.description,e.audience,e.venue,e.event_date,e.event_time,e.capacity,e.status,e.status==="REGISTRATION_OPEN"?1:0,e.event_type,now,e.id);
      else { const id=crypto.randomUUID(); await run("INSERT INTO events (id,slug,title,short_title,event_type,audience,description,event_date,event_time,venue,capacity,registration_open,status,accent,created_by,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",id,`su-kien-${id.slice(0,8)}`,e.title,e.title,e.event_type,e.audience,e.description,e.event_date,e.event_time,e.venue,e.capacity,e.status==="REGISTRATION_OPEN"?1:0,e.status,"cobalt",user.email,now,now); }
      detail=e.title;
    } else if(action==="teams") {
      const e=z.object({event_id:z.string(),name:z.string().trim().min(2).max(80)}).parse(b);
      await run("INSERT INTO teams (id,event_id,name,color) VALUES (?,?,?,?)",crypto.randomUUID(),e.event_id,e.name,"#174ccb"); detail=e.name;
    } else if(action==="assign") {
      const e=z.object({registration_id:z.string(),team_id:z.string().nullable()}).parse(b);
      if(e.team_id) {const match=await first("SELECT r.id FROM registrations r JOIN teams t ON t.event_id=r.event_id WHERE r.id=? AND t.id=? AND r.status!='CANCELLED'",e.registration_id,e.team_id);if(!match)return json({message:"Đội và sinh viên phải thuộc cùng một sự kiện."},400);await run("INSERT INTO assignments (registration_id,team_id) VALUES (?,?) ON CONFLICT(registration_id) DO UPDATE SET team_id=excluded.team_id",e.registration_id,e.team_id);}
      else await run("DELETE FROM assignments WHERE registration_id=?",e.registration_id);
      detail="Cập nhật phân đội";
    } else if(action==="stations") {
      const e=z.object({id:z.string().optional(),event_id:z.string(),station_number:z.number().int().min(1).max(100),title:z.string().trim().min(2).max(150),description:z.string().max(2000)}).parse(b);
      if(e.id) await run("UPDATE event_stations SET station_number=?,title=?,description=? WHERE id=? AND event_id=?",e.station_number,e.title,e.description,e.id,e.event_id);
      else await run("INSERT INTO event_stations (id,event_id,station_number,title,description,is_active) VALUES (?,?,?,?,?,1)",crypto.randomUUID(),e.event_id,e.station_number,e.title,e.description); detail=e.title;
    } else if(action==="scores") {
      const e=z.object({team_id:z.string(),station_id:z.string(),points:z.number().int().min(0).max(100),note:z.string().max(1000)}).parse(b);
      const match=await first("SELECT t.id FROM teams t JOIN event_stations s ON s.event_id=t.event_id WHERE t.id=? AND s.id=? AND s.is_active=1",e.team_id,e.station_id); if(!match)return json({message:"Đội và trạm phải thuộc cùng sự kiện."},400);
      await run("INSERT INTO scores (id,team_id,station_id,points,note,operator,updated_at) VALUES (?,?,?,?,?,?,?) ON CONFLICT(team_id,station_id) DO UPDATE SET points=excluded.points,note=excluded.note,operator=excluded.operator,updated_at=excluded.updated_at",crypto.randomUUID(),e.team_id,e.station_id,e.points,e.note,user.email,now);detail=`${e.points} điểm · ${e.note}`;
    } else if(action==="notices") {
      const e=z.object({id:z.string().optional(),event_id:z.string().nullable(),title:z.string().trim().min(3).max(200),body:z.string().trim().min(3).max(6000),published:z.boolean()}).parse(b);
      if(e.id) await run("UPDATE notices SET title=?,body=?,published=?,event_id=? WHERE id=?",e.title,e.body,e.published?1:0,e.event_id,e.id);
      else await run("INSERT INTO notices (id,event_id,title,body,published,created_at) VALUES (?,?,?,?,?,?)",crypto.randomUUID(),e.event_id,e.title,e.body,e.published?1:0,now);detail=e.title;
    } else if(action==="members") {
      const e=z.object({email:z.string().email(),name:z.string().trim().min(2),role:z.enum(["ADMIN","CHECKIN","STATION","VIEWER","REVOKED"])}).parse(b);if(e.email.toLowerCase()===OWNER_EMAIL)return json({message:"Không thể thay đổi quyền chủ sở hữu."},400);
      if(e.role==="REVOKED") await run("DELETE FROM members WHERE email=?",e.email.toLowerCase());
      else await run("INSERT INTO members (email,name,role) VALUES (?,?,?) ON CONFLICT(email) DO UPDATE SET name=excluded.name,role=excluded.role",e.email.toLowerCase(),e.name,e.role);detail=`${e.email} · ${e.role}`;
    } else if(action==="cancel") {
      const e=z.object({id:z.string(),reason:z.string().trim().min(3).max(500)}).parse(b);
      const r=await first("SELECT r.id FROM registrations r LEFT JOIN check_ins c ON c.registration_id=r.id WHERE r.id=? AND c.id IS NULL",e.id);if(!r)return json({message:"Không thể hủy vé đã check-in hoặc vé không tồn tại."},409);
      await run("UPDATE registrations SET status='CANCELLED',updated_at=? WHERE id=?",now,e.id);detail=`Hủy vé ${e.id}: ${e.reason}`;
    } else if(action==="checkin") {
      const e=z.object({ticketCode:z.string().trim().min(4),eventId:z.string()}).parse(b);
      const r=await first("SELECT * FROM registrations WHERE ticket_code=? AND event_id=?",e.ticketCode.toUpperCase(),e.eventId);if(!r)return json({message:"Không tìm thấy vé cho sự kiện đã chọn."},404);if(r.status==="CANCELLED")return json({message:"Vé đã bị hủy."},409);
      const result=await run("INSERT OR IGNORE INTO check_ins (id,registration_id,checked_in_at,checked_in_by) VALUES (?,?,?,?)",crypto.randomUUID(),r.id,now,user.email);
      if(!result.meta.changes)return json({message:"Vé đã check-in trước đó. Không ghi nhận lần hai."},409);detail=`Check-in ${r.ticket_code}`;
      await log(user.email,action,detail);return json({message:`Check-in thành công: ${r.full_name} · ${r.class_name}`});
    } else return json({message:"Không tìm thấy chức năng."},404);
    await log(user.email,action,detail);return json({message:"Đã lưu thay đổi."});
  } catch(e) { if(e instanceof z.ZodError)return json({message:"Thông tin chưa hợp lệ: "+e.issues[0].path.join(".")},400);console.error(e);return json({message:String(e).includes("UNIQUE")?"Dữ liệu bị trùng. Vui lòng kiểm tra lại.":"Chưa lưu được dữ liệu. Nội dung của bạn vẫn được giữ lại."},409); }
}
