import dotenv from 'dotenv';
import { defineConfig, env } from "prisma/config";

dotenv.config();
const env_prod = process.env.NODE_ENV === "local" ? env("DATABASE_URL") : env("DATABASE_PROD_URL");
console.log(env("DATABASE_URL"), process.env.NODE_ENV, env("DATABASE_PROD_URL"), 'database_url')

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env_prod,
    // shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
});
