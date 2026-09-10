import { first } from "@/lib/data";
export async function GET(_request:Request,{params}:{params:Promise<{code:string}>}) {
 try {const {code}=await params;
 const r=await first("SELECT r.ticket_code ticketCode,r.full_name fullName,r.class_name className,r.status,e.title eventTitle,e.event_date eventDate,e.event_time eventTime,e.venue,c.checked_in_at checkedInAt,t.name teamName FROM registrations r JOIN events e ON e.id=r.event_id LEFT JOIN check_ins c ON c.registration_id=r.id LEFT JOIN assignments a ON a.registration_id=r.id LEFT JOIN teams t ON t.id=a.team_id WHERE r.ticket_code=?",code.toUpperCase());
 return Response.json(r || {message:"Không tìm thấy vé."},{status:r?200:404,headers:{"Cache-Control":"no-store","Referrer-Policy":"no-referrer"}});
 }catch{return Response.json({message:"Chưa tải được vé. Thử lại sau."},{status:503});}
}
