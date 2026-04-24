import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx --env-file=.env prisma/seed.ts", // ← tambahkan --env-file
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
