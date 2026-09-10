import { notFound } from "next/navigation";
import { requireChatGPTUser } from "@/app/chatgpt-auth";
import { operator } from "@/lib/data";
import { AdminPages } from "@/components/admin-pages";
export const dynamic="force-dynamic";
export default async function Page({params}:{params:Promise<{path:string[]}>}){
 const {path}=await params;if(!["su-kien","sinh-vien","check-in","doi","tram","dieu-phoi","mat-thu","thoi-gian","khieu-chien","kich-ban","cham-diem","bao-cao","thong-bao","phan-quyen","nhat-ky","cai-dat"].includes(path[0]) || path.length>2 || (path.length===2&&path[0]!=="su-kien"))notFound();
 return <Protected path={path}/>;
}
async function Protected({path}:{path:string[]}) {
 const user=await requireChatGPTUser("/admin/"+path.join("/"));const op=await operator();
 if(!op)return <main className="public-main"><h1>Chưa có quyền Ban tổ chức</h1><a href="/">Về cổng sinh viên</a></main>;
 return <AdminPages path={path} name={user.displayName} role={op.role}/>;
}
