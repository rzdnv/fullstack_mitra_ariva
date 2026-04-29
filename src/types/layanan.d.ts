interface ILayanan {
  id: number;
  namaLayanan: string;
  deskripsi: string;
  foto: string;
  detail: ILayananDetail[];
  _count?: { detail: number };
}

interface ILayananDetail {
  id: number;
  layananId: number;
  namaPaket: string;
  harga: number;
  deskripsi: string;
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
