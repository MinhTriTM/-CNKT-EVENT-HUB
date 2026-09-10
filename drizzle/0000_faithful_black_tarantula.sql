CREATE TABLE `check_ins` (
	`id` text PRIMARY KEY NOT NULL,
	`registration_id` text NOT NULL,
	`checked_in_at` text NOT NULL,
	`checked_in_by` text NOT NULL,
	FOREIGN KEY (`registration_id`) REFERENCES `registrations`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `check_ins_registration_id_unique` ON `check_ins` (`registration_id`);--> statement-breakpoint
CREATE TABLE `event_stations` (
	`id` text PRIMARY KEY NOT NULL,
	`event_id` text NOT NULL,
	`station_number` integer NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`is_active` integer DEFAULT true NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_event_stations_order` ON `event_stations` (`event_id`,`station_number`);--> statement-breakpoint
CREATE TABLE `events` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`short_title` text NOT NULL,
	`event_type` text NOT NULL,
	`audience` text NOT NULL,
	`description` text NOT NULL,
	`event_date` text,
	`event_time` text,
	`venue` text NOT NULL,
	`capacity` integer,
	`registration_open` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'DRAFT' NOT NULL,
	`accent` text DEFAULT 'blue' NOT NULL,
	`created_by` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `events_slug_unique` ON `events` (`slug`);--> statement-breakpoint
CREATE TABLE `registrations` (
	`id` text PRIMARY KEY NOT NULL,
	`ticket_code` text NOT NULL,
	`event_id` text NOT NULL,
	`student_id` text NOT NULL,
	`full_name` text NOT NULL,
	`class_name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`confirmation` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'REGISTERED' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `registrations_ticket_code_unique` ON `registrations` (`ticket_code`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_registrations_event_student` ON `registrations` (`event_id`,`student_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_registrations_event_created` ON `registrations` (`event_id`,`created_at`);