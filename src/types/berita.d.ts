import { IUser } from "./user";

interface IBerita {
  id: number;
  judul: string;
  isi: string;
  gambar: string;
  userId: number;
  user: IUser;
  createdAt: string;
  dokterId: number;
}

interface ICreateBerita {
  judul: string;
  isi: string;
  gambar: string;
  userId: number;
  dokterId?: number;
}

interface IUpdateBerita {
  judul?: string;
  isi?: string;
  gambar?: string;
  userId?: number;
  dokterId?: number;
}

interface IBeritaParams {
  page?: number;
  limit?: number;
  search?: string;
  userId?: number;
}

export { IBerita, IBeritaParams, ICreateBerita, IUpdateBerita };
