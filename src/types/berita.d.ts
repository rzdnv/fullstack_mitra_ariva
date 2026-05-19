import { IUser } from "./user";

export interface IBerita {
  id: number;
  judul: string;
  isi: string;
  gambar: string | null;
  tanggal: string;
  userId: number;
  user: IUser;
}

interface IBeritaParams {
  page?: number;
  limit?: number;
  search?: string;
  userId?: number;
}

export { IBerita, IBeritaParams };

// export interface CreateBeritaPayload {
//   judul: string;
//   isi: string;
//   gambar?: string | null;
//   tanggal: string;
//   userId: number;
// }
