import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './db',
  schema: './db/schema.js',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});