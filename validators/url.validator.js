import z from "zod";

export const createUrlSchema = z.object({
  shortCode: z
    .string()
    .trim()
    .min(3, { message: "Shortcode must be at least 3 characters" })
    .max(20, { message: "Shortcode must be at most 20 characters" }),

  originalUrl: z
    .string()
    .trim()
    .url({ message: "Please enter a valid URL" })
});