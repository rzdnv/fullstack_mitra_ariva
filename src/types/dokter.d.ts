import { IJadwal } from "./jadwal";
import { IPoli } from "./poli";

export interface IDokter {
  id: number;
  nama: string;
  spesialis: string;
  deskripsi: string;
  foto: string;
  poliId: number;

  poli: IPoli;
  jadwal: IJadwal[];
}

export interface ICreateDokter {
  nama: string;
  spesialis: string;
  deskripsi: string;
  foto: string;
  poliId: number;
}

export interface IUpdateDokter {
  nama?: string;
  spesialis?: string;
  deskripsi?: string;
  foto?: string;
  poliId?: number;
}

export interface IDokterParams {
  page?: number;
  limit?: number;
  search?: string;
  poliId?: number;
}
