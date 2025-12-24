import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
export const usersTable = mysqlTable('users_table', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  passwordhash : varchar({length: 255}).notNull()
});