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

export { IBerita };

// export interface CreateBeritaPayload {
//   judul: string;
//   isi: string;
//   gambar?: string | null;
//   tanggal: string;
//   userId: number;
// }
