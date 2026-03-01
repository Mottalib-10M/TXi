import "dotenv/config";
import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";

// Load .env.local with higher priority
dotenv.config({ path: ".env.local", override: true });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use direct connection for migrations/push
    url: process.env["DIRECT_URL"] || process.env["DATABASE_URL"],
  },
});
