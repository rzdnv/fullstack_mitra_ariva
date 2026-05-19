import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IDokter } from "@/types/dokter";

export interface DokterPaginatedResponse {
  data: IDokter[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

// export interface CreateDokterPayload {
//   nama: string;
//   spesialis: string;
//   foto?: string | null;
//   poliId: number;
// }

const dokterServices = {
  // Ambil semua tanpa pagination → untuk dropdown/select
  getAll: (poliId?: number) =>
    instance.get(
      poliId ? `${endpoint.DOKTER}?poliId=${poliId}` : endpoint.DOKTER,
    ),

  getAllPaginated: (params: string) =>
    instance.get<{ data: DokterPaginatedResponse }>(
      `${endpoint.DOKTER}?${params}`,
    ),

  getById: (id: number) => instance.get(`${endpoint.DOKTER}/${id}`),

  create: (payload: IDokter) => instance.post(endpoint.DOKTER, payload),

  update: (id: number, payload: Partial<IDokter>) =>
    instance.put(`${endpoint.DOKTER}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.DOKTER}/${id}`),
};

export default dokterServices;
