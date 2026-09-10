import { AdminPages } from "@/components/admin-pages";
import { requireChatGPTUser } from "@/app/chatgpt-auth";
import { operator } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");
  const op = await operator();
  if (!op) return <main className="public-main"><h1>Bạn chưa được cấp quyền BTC</h1><p>Liên hệ chủ sở hữu để cấp vai trò phù hợp.</p><a href="/">Về cổng sinh viên</a></main>;
  return <AdminPages name={user.displayName} role={op.role}/>;
}
