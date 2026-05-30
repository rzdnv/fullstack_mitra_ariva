import { IDokter } from "./dokter";

interface IPoli {
  id: number;
  namaPoli: string;
  dokter: IDokter[];
  _count?: { dokter: number };
}

interface ICreatePoli {
  namaPoli: string;
}

interface IUpdatePoli {
  namaPoli: string;
}

export { IPoli, ICreatePoli, IUpdatePoli };

// interface CreatePoliPayload {
//   namaPoli: string;
// }
