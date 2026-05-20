import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IPoli } from "@/types/poli";

export interface PoliPaginatedResponse {
  data: IPoli[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

const poliServices = {
  getAll: () => instance.get(endpoint.POLI),

  getAllPaginated: (params: string) =>
    instance.get<{ data: PoliPaginatedResponse }>(`${endpoint.POLI}?${params}`),

  getById: (id: number) => instance.get(`${endpoint.POLI}/${id}`),

  create: (payload: IPoli) => instance.post(endpoint.POLI, payload),

  update: (id: number, payload: IPoli) =>
    instance.put(`${endpoint.POLI}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.POLI}/${id}`),
};

export default poliServices;
