import { db } from "../db/config.js";
import { usersTable,urlsTable, urlRelation , userRelation} from "../db/schema.js";
import { eq } from "drizzle-orm";

export const getUrlByShortcode = async (shortcode) => {
  const [url] = await db
    .select()
    .from(urlsTable)
    .where(eq(urlsTable.shortcode,shortcode ));
  console.log(url);
  return url;
};

export const createShortcode = async (url, shortcode, id) => {
  try {
    const [entry] = await db
      .insert(urlsTable)
      .values({
        longurl: url,
        shortcode: shortcode,
        userId: id
      });
    return entry;
  } catch (error) {
    throw new Error("Try again!!")
  }
};


export const getUrlsofUser = async(userid) => {
    const urls = await db.select().from(urlsTable).where(eq(urlsTable.userId, userid));
    return urls; //urls is a list of objects where each object is a shortcode-url pair
    
}