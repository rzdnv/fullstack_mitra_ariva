import { IUser } from "./user";

interface IBerita {
  id: number;
  judul: string;
  isi: string;
  gambar: string;
  tanggal: string;
  userId: number;
  user: IUser;
}

interface ICreateBerita {
  judul: string;
  isi: string;
  gambar: string;
  tanggal: string;
  userId: number;
}

interface IUpdateBerita {
  judul?: string;
  isi?: string;
  gambar?: string;
  tanggal?: string;
  userId?: number;
}

interface IBeritaParams {
  page?: number;
  limit?: number;
  search?: string;
  userId?: number;
}

export { IBerita, IBeritaParams, ICreateBerita, IUpdateBerita };
