import { customAlphabet } from "nanoid";

// Hanya angka
const nanoid = customAlphabet("0123456789", 3); // 3 digit angka acak

const PREFIX = {
  user: "10",
  poli: "11",
  jadwal: "13",
  layanan: "15",
  layananDetail: "151",
  dokter: "17",
  berita: "19",
} as const;

type TableName = keyof typeof PREFIX;

export function generateId(table: TableName): number {
  const prefix = PREFIX[table];
  const random = nanoid(); // contoh: "847"
  return Number(`${prefix}${random}`);
}
