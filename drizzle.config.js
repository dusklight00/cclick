import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  out: "./drizzle",
  schema: "./app/db/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL,
  },
});
