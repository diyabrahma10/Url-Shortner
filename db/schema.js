import { relations } from 'drizzle-orm';
import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users_table', {
  id: int("id").autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  passwordhash : varchar({length: 255}).notNull()
});

export const urlsTable = mysqlTable('urls_table', {
  id: int("id").autoincrement().primaryKey(),
  shortcode : varchar({ length : 255 }).unique(),
  longurl: varchar({length:255}).notNull(),
  userId: int("user_id").notNull()
    .references(() => usersTable.id, {
      onDelete: "cascade"
    }),
})

//relationships
//while quering the userTable below will help in joins
//each user can have many shortlinks user ---many---> urls
export const userRelation = relations(usersTable, ({many}) => (
  {
    urls: many(urlsTable)
  }
));

//one shorlink is linked to only one user hence shortlink ---one---> user 
export const urlRelation = relations(urlsTable, ({one}) => (
  {
    user: one(usersTable,{
      fields:[urlsTable.userId], //foreign key
      references: [usersTable.id]
    })
  }
));