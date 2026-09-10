import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const fieldSessions = sqliteTable("field_sessions", {
  eventId: text("event_id").primaryKey().references(() => events.id),
  payload: text("payload").notNull(),
  revision: integer("revision").notNull().default(1),
  updatedAt: text("updated_at").notNull(),
});

export const events = sqliteTable(
  "events",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    shortTitle: text("short_title").notNull(),
    eventType: text("event_type").notNull(),
    audience: text("audience").notNull(),
    description: text("description").notNull(),
    eventDate: text("event_date"),
    eventTime: text("event_time"),
    venue: text("venue").notNull(),
    capacity: integer("capacity"),
    registrationOpen: integer("registration_open", { mode: "boolean" })
      .notNull()
      .default(false),
    status: text("status").notNull().default("DRAFT"),
    accent: text("accent").notNull().default("blue"),
    createdBy: text("created_by"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  () => [],
);

export const registrations = sqliteTable(
  "registrations",
  {
    id: text("id").primaryKey(),
    ticketCode: text("ticket_code").notNull().unique(),
    eventId: text("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    studentId: text("student_id").notNull(),
    fullName: text("full_name").notNull(),
    className: text("class_name").notNull(),
    phone: text("phone").notNull(),
    email: text("email").notNull(),
    confirmation: integer("confirmation", { mode: "boolean" })
      .notNull()
      .default(false),
    status: text("status").notNull().default("REGISTERED"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("idx_registrations_event_student").on(
      table.eventId,
      table.studentId,
    ),
    index("idx_registrations_event_created").on(
      table.eventId,
      table.createdAt,
    ),
  ],
);

export const teams = sqliteTable("teams", {
  id: text("id").primaryKey(), eventId: text("event_id").notNull().references(() => events.id),
  name: text("name").notNull(), color: text("color").notNull().default("#174ccb"),
}, t => [uniqueIndex("teams_event_name").on(t.eventId,t.name)]);
export const assignments = sqliteTable("assignments", {
  registrationId: text("registration_id").primaryKey().references(() => registrations.id),
  teamId: text("team_id").notNull().references(() => teams.id),
});
export const scores = sqliteTable("scores", {
  id: text("id").primaryKey(), teamId: text("team_id").notNull().references(() => teams.id),
  stationId: text("station_id").notNull().references(() => eventStations.id),
  points: integer("points").notNull(), note: text("note").notNull().default(""),
  operator: text("operator").notNull(), updatedAt: text("updated_at").notNull(),
}, t => [uniqueIndex("scores_team_station").on(t.teamId,t.stationId)]);
export const notices = sqliteTable("notices", {
  id: text("id").primaryKey(), eventId: text("event_id").references(() => events.id),
  title: text("title").notNull(), body: text("body").notNull(),
  published: integer("published").notNull().default(0), createdAt: text("created_at").notNull(),
});
export const members = sqliteTable("members", {
  email: text("email").primaryKey(), name: text("name").notNull(), role: text("role").notNull(),
});
export const audit = sqliteTable("audit", {
  id: text("id").primaryKey(), operator: text("operator").notNull(), action: text("action").notNull(),
  detail: text("detail").notNull(), createdAt: text("created_at").notNull(),
});

export const checkIns = sqliteTable(
  "check_ins",
  {
    id: text("id").primaryKey(),
    registrationId: text("registration_id")
      .notNull()
      .references(() => registrations.id, { onDelete: "cascade" })
      .unique(),
    checkedInAt: text("checked_in_at").notNull(),
    checkedInBy: text("checked_in_by").notNull(),
  },
);

export const eventStations = sqliteTable(
  "event_stations",
  {
    id: text("id").primaryKey(),
    eventId: text("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    stationNumber: integer("station_number").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    isActive: integer("is_active", { mode: "boolean" })
      .notNull()
      .default(true),
  },
  (table) => [
    uniqueIndex("idx_event_stations_order").on(
      table.eventId,
      table.stationNumber,
    ),
  ],
);
