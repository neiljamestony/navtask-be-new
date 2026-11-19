import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  migrations: {
    path: "./prisma/migrations",
  },

  datasource: {
    // replace it into PRISMA_DATABASE_URL in .env file for database table update
    url: env("DATABASE_URL"),
  },
});