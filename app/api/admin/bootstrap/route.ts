import { initialize, operator } from "@/lib/data";
export async function POST(){const u=await operator();if(!u||!["OWNER","ADMIN"].includes(u.role))return Response.json({message:"Không đủ quyền."},{status:403});await initialize(u.email);return Response.json({message:"Đã khởi tạo dữ liệu K26."});}
