interface ILayanan {
  id: number;
  namaLayanan: string;
  deskripsi: string;
  foto: string;
  _count?: { detail: number };
}

interface ICreateLayanan {
  namaLayanan: string;
  deskripsi: string;
  foto: string;
}

interface IUpdateLayanan {
  namaLayanan: string;
  deskripsi: string;
  foto: string;
}

export { ILayanan, ICreateLayanan, IUpdateLayanan };
