interface ILayanan {
  id: number;
  namaLayanan: string;
  deskripsi: string;
  foto: string;
  _count?: { detail: number };
}

export { ILayanan, ILayananDetail };

// export interface CreateLayananPayload {
//   namaLayanan: string;
//   deskripsi?: string | null;
// }

// export interface CreateLayananDetailPayload {
//   layananId: number;
//   namaPaket: string;
//   harga: number;
//   deskripsi?: string | null;
// }
