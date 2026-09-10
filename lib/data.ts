import { env } from "cloudflare:workers";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { eventSeeds, teambuildingStations } from "@/lib/events";
export const OWNER_EMAIL = "0024417136@student.dthu.edu.vn";
export function database() { if (!env.DB) throw new Error("Kho dữ liệu tạm thời không sẵn sàng."); return env.DB; }
export async function all<T = Record<string, any>>(sql: string, ...args: any[]): Promise<T[]> { return (await database().prepare(sql).bind(...args).all<T>()).results; }
export async function first(sql: string, ...args: any[]) { return database().prepare(sql).bind(...args).first<Record<string, any>>(); }
export async function run(sql: string, ...args: any[]) { return database().prepare(sql).bind(...args).run(); }
export async function operator() {
  const user = await getChatGPTUser(); if (!user) return null;
  if (user.email.toLowerCase() === OWNER_EMAIL) return { ...user, role: "OWNER" };
  const member = await first("SELECT role FROM members WHERE email = ?", user.email.toLowerCase());
  return member ? { ...user, role: String(member.role) } : null;
}
export async function log(email: string, action: string, detail: string) { await run("INSERT INTO audit (id,operator,action,detail,created_at) VALUES (?,?,?,?,?)",crypto.randomUUID(),email,action,detail,new Date().toISOString()); }
export async function initialize(email: string) {
  const statements = [];
  const now = new Date().toISOString();
  for (const e of eventSeeds) statements.push(database().prepare("INSERT OR IGNORE INTO events (id,slug,title,short_title,event_type,audience,description,event_date,event_time,venue,capacity,registration_open,status,accent,created_by,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)").bind(e.id,e.slug,e.title,e.shortTitle,e.eventType,e.audience,e.description,e.eventDate,e.eventTime,e.venue,e.capacity,e.registrationOpen ? 1 : 0,e.status,e.accent,email,now,now));
  teambuildingStations.forEach((s,i)=>statements.push(database().prepare("INSERT OR IGNORE INTO event_stations (id,event_id,station_number,title,description,is_active) VALUES (?,?,?,?,?,1)").bind(`tb26-station-${i+1}`,eventSeeds[0].id,i+1,s[0],s[1])));
  await database().batch(statements);
}
export const eventQuery = `SELECT e.*, (SELECT COUNT(*) FROM registrations r WHERE r.event_id=e.id AND r.status != 'CANCELLED') registered, (SELECT COUNT(*) FROM check_ins c JOIN registrations r ON r.id=c.registration_id WHERE r.event_id=e.id AND r.status != 'CANCELLED') checked_in FROM events e`;
export function publicEvent(e: Record<string, any>) { const {created_by,...safe}=e; return safe; }
