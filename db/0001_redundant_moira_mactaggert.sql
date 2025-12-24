ALTER TABLE `users_table` ADD `passwordhash` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users_table` DROP COLUMN `age`;