import { operator, all, eventQuery } from "@/lib/data";
export async function GET(){const u=await operator();if(!u)return Response.json({message:"Không đủ quyền."},{status:403});return Response.json({events:await all(eventQuery),operator:u.displayName});}
