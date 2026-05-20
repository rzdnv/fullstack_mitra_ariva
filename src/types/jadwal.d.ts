import { IDokter } from "./dokter";

export type HariType =
  | "SENIN"
  | "SELASA"
  | "RABU"
  | "KAMIS"
  | "JUMAT"
  | "SABTU"
  | "MINGGU";

export interface IJadwal {
  id: number;
  dokterId: number;
  hari: HariType;
  jamMulai: string;
  jamSelesai: string;
  dokter: IDokter;
}

interface IJadwalParams {
  page?: number;
  limit?: number;
  search?: string;
  dokterId?: number;
}

export { IJadwal, IJadwalParams };

// export interface CreateJadwalPayload {
//   dokterId: number;
//   hari: HariType;
//   jamMulai: string;
//   jamSelesai: string;
// }
