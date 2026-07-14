import dotenv from 'dotenv';
import { defineConfig, env } from "prisma/config";

dotenv.config();

console.log(env("DATABASE_URL"), 'database_url')

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
    // shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
});
