import { IDokter } from "./dokter";

interface IPoli {
  id: number;
  namaPoli: string;
  dokter: IDokter[];
  _count?: { dokter: number };
}

export { IPoli };

// interface CreatePoliPayload {
//   namaPoli: string;
// }
