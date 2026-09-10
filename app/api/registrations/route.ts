import { z } from "zod";
import { first, run } from "@/lib/data";
const input=z.object({eventId:z.string(),studentId:z.string().trim().regex(/^\d{6,12}$/),fullName:z.string().trim().min(2).max(100),className:z.string().trim().min(2).max(80),phone:z.string().trim().regex(/^(0|\+84)\d{9,10}$/),email:z.string().trim().email(),confirmation:z.literal(true),website:z.string().optional()});
export async function POST(request:Request) {
 try {
 const origin=request.headers.get("origin");if(origin&&origin!==new URL(request.url).origin)return Response.json({message:"Yêu cầu không hợp lệ."},{status:403});
 const b=input.parse(await request.json());if(b.website)return Response.json({message:"Yêu cầu không hợp lệ."},{status:400});
 const e=await first("SELECT * FROM events WHERE id=?",b.eventId);if(!e||!e.registration_open||e.status!=="REGISTRATION_OPEN")return Response.json({message:"Đăng ký chưa mở hoặc đã đóng."},{status:409});
 const code=(b.eventId.startsWith("teambuilding")?"TB26":"EV")+"-"+crypto.randomUUID().replaceAll("-","").toUpperCase();
 const now=new Date().toISOString();
 const r=await run("INSERT INTO registrations (id,ticket_code,event_id,student_id,full_name,class_name,phone,email,confirmation,status,created_at,updated_at) SELECT ?,?,?,?,?,?,?,?,1,'REGISTERED',?,? WHERE EXISTS (SELECT 1 FROM events e WHERE e.id=? AND e.registration_open=1 AND e.status='REGISTRATION_OPEN' AND (e.capacity IS NULL OR (SELECT COUNT(*) FROM registrations r WHERE r.event_id=e.id AND r.status!='CANCELLED') < e.capacity))",crypto.randomUUID(),code,b.eventId,b.studentId,b.fullName,b.className,b.phone,b.email.toLowerCase(),now,now,b.eventId);
 if(!r.meta.changes)return Response.json({message:"Sự kiện đã đủ suất hoặc vừa đóng đăng ký."},{status:409});
 return Response.json({ticketCode:code,event:e.title,message:"Đăng ký thành công. Hãy lưu đường dẫn vé; chưa có email tự động."});
 }catch(e){console.error(e);return Response.json({message:e instanceof z.ZodError ? "Kiểm tra MSSV (6–12 chữ số), điện thoại và các trường bắt buộc." : String(e).includes("UNIQUE") ? "MSSV này đã đăng ký. Liên hệ BTC nếu cần khôi phục vé đã hủy." : "Chưa thể đăng ký. Vui lòng thử lại."},{status:400});}
}
