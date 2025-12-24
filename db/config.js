import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

console.log("DATABASE_URL =", process.env.DATABASE_URL);


const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
