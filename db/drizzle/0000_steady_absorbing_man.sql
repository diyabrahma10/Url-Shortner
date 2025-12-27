CREATE TABLE `urls_table` (
	`shortcode` varchar(255),
	`longurl` varchar(255) NOT NULL,
	`user_id` int NOT NULL,
	CONSTRAINT `urls_table_shortcode_unique` UNIQUE(`shortcode`)
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`passwordhash` varchar(255) NOT NULL,
	CONSTRAINT `users_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_table_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `urls_table` ADD CONSTRAINT `urls_table_user_id_users_table_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON DELETE cascade ON UPDATE no action;