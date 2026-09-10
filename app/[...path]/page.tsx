import { notFound } from "next/navigation";
import { PublicPages } from "@/components/public-pages";
export default async function Page({params}:{params:Promise<{path:string[]}>}) {
 const {path}=await params;
 if(!["su-kien","tra-cuu","lich","thong-bao","bang-xep-hang","ho-tro"].includes(path[0]))notFound();
 if(path[0]!=="su-kien" && path.length!==1)notFound();
 if(path[0]==="su-kien"&&(path.length>3||(path.length===3&&path[2]!=="dang-ky")))notFound();
 return <PublicPages path={path}/>;
}
