import { IJadwal } from "./jadwal";
import { IPoli } from "./poli";

interface IDokter {
  id: number;
  nama: string;
  spesialis: string;
  foto: string | null;
  poliId: number;
  poli: IPoli;
  jadwal: IJadwal[];
}

interface IDokterParams {
  page?: number;
  limit?: number;
  search?: string;
  poliId?: number;
}

export { IDokter, IDokterParams };

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
