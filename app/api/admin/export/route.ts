import { all, operator } from "@/lib/data";
function cell(value:unknown) { let s=String(value??""); if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'; }
export async function GET(request:Request) {
 try {const user=await operator();if(!user||!["OWNER","ADMIN"].includes(user.role))return Response.json({message:"Không đủ quyền xuất danh sách."},{status:403});
 const eventId=new URL(request.url).searchParams.get("event");
 const rows=await all("SELECT e.title,r.ticket_code,r.student_id,r.full_name,r.class_name,r.phone,r.email,r.status,c.checked_in_at,t.name team_name FROM registrations r JOIN events e ON e.id=r.event_id LEFT JOIN check_ins c ON c.registration_id=r.id LEFT JOIN assignments a ON a.registration_id=r.id LEFT JOIN teams t ON t.id=a.team_id"+(eventId?" WHERE r.event_id=?":"")+" ORDER BY r.created_at",...(eventId?[eventId]:[]));
 const csv=["Sự kiện,Mã vé,MSSV,Họ tên,Lớp,Điện thoại,Email,Trạng thái,Check-in,Đội",...rows.map(r=>[r.title,r.ticket_code,r.student_id,r.full_name,r.class_name,r.phone,r.email,r.status,r.checked_in_at,r.team_name].map(cell).join(","))].join("\r\n");
 return new Response("\uFEFF"+csv,{headers:{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":"attachment; filename=cnkt-danh-sach.csv","Cache-Control":"no-store"}});
 }catch{return Response.json({message:"Chưa xuất được dữ liệu."},{status:503});}
}
