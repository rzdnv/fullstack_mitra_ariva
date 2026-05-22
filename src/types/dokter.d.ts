import { IJadwal } from "./jadwal";
import { IPoli } from "./poli";

export interface IDokter {
  id: number;
  nama: string;
  spesialis: string;
  foto: string;
  poliId: number;

  poli: IPoli;
  jadwal: IJadwal[];
}

export interface ICreateDokter {
  nama: string;
  spesialis: string;
  foto: string;
  poliId: number;
}

export interface IUpdateDokter {
  nama?: string;
  spesialis?: string;
  foto?: string;
  poliId?: number;
}

export interface IDokterParams {
  page?: number;
  limit?: number;
  search?: string;
  poliId?: number;
}

// export interface Jadwal {
//   id: number;
//   hari: string;
//   jamMulai: string;
//   jamSelesai: string;
// }

// interface CreateDokterPayload {
//   nama: string;
//   spesialis: string;
//   foto?: string | null;
//   poliId: number;
// }
