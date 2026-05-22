import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";

import { IDokter, ICreateDokter, IUpdateDokter } from "@/types/dokter";

export interface DokterPaginatedResponse {
  data: IDokter[];

  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

const dokterServices = {
  // GET ALL
  getAll: (poliId?: number) =>
    instance.get(
      poliId ? `${endpoint.DOKTER}?poliId=${poliId}` : endpoint.DOKTER,
    ),

  // GET PAGINATION
  getAllPaginated: (params: string) =>
    instance.get<{
      data: DokterPaginatedResponse;
    }>(`${endpoint.DOKTER}?${params}`),

  // GET DETAIL
  getById: (id: number) => instance.get(`${endpoint.DOKTER}/${id}`),

  // CREATE
  create: (payload: ICreateDokter) => instance.post(endpoint.DOKTER, payload),

  // UPDATE
  update: (id: number, payload: IUpdateDokter) =>
    instance.put(`${endpoint.DOKTER}/${id}`, payload),

  // DELETE
  delete: (id: number) => instance.delete(`${endpoint.DOKTER}/${id}`),
};

export default dokterServices;
