import { TicketView } from "@/components/ticket-view";

export const dynamic = "force-dynamic";

export default async function TicketPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <TicketView code={code} />;
}
