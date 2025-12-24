
import { en } from "zod/locales";
import { db } from "../db/config.js";
import { usersTable } from "../db/schema.js";
import argon2 from "argon2";
import { eq } from "drizzle-orm";

//db query return array of objects where each row is an object

export const createUser = async (name, email, password ) => {
  try {

    const hashedpwd = await argon2.hash(password);
    const newUser = await db.insert(usersTable).values({
      name: name,
      email: email,
      passwordhash: hashedpwd
    });

  console.log(newUser);
    
  } catch (error) {
    console.log(error);
    
  }
  
};

export const getUserByEmail = async(given_email) => {
  
  const [user] = await db.select().from(usersTable).where(eq(usersTable.email,given_email))
  return user; //user is an object
}

export const verifyPassword = async(hashedpwd, entered_pwd) => {
  const verified = await argon2.verify(hashedpwd,entered_pwd);  
  return verified; //return true or false
}



