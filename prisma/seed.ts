// import "dotenv/config";
// import { PrismaClient } from "../src/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";
// import bcrypt from "bcryptjs";
// import { generateId } from "@/lib/generate-id";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const adapter = new PrismaPg(pool);
// const prisma = new PrismaClient({ adapter });

// async function main() {
//   console.log("🌱 Mulai seeding...");

//   const hashedPassword = await bcrypt.hash("admin123", 10);

//   const admin = await prisma.user.upsert({
//     where: { username: "admin" },
//     update: {},
//     create: {
//       id: generateId("user"),
//       username: "admin",
//       password: hashedPassword,
//       role: "ADMIN",
//     },
//   });

//   console.log("✅ Seed berhasil! User admin dibuat:", admin.username);
// }

// main()
//   .catch((e) => {
//     console.error("❌ Seeding gagal:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//     await pool.end();
//   });

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from "bcryptjs";
import { generateId } from "@/lib/generate-id";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Mulai seeding...");

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      id: generateId("user"),
      username: "admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Seed berhasil! User admin dibuat:", admin.username);
}

main()
  .catch((e) => {
    console.error("❌ Seeding gagal:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
