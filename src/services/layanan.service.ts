import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { ICreateLayanan, ILayanan, IUpdateLayanan } from "@/types/layanan";

export interface LayananPaginatedResponse {
  data: ILayanan[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

const layananServices = {
  getAll: () => instance.get(endpoint.LAYANAN),

  getAllPaginated: (params: string) =>
    instance.get<{ data: LayananPaginatedResponse }>(
      `${endpoint.LAYANAN}?${params}`,
    ),

  getById: (id: number) => instance.get(`${endpoint.LAYANAN}/${id}`),

  create: (payload: ICreateLayanan) => instance.post(endpoint.LAYANAN, payload),

  update: (id: number, payload: Partial<IUpdateLayanan>) =>
    instance.put(`${endpoint.LAYANAN}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.LAYANAN}/${id}`),
};

export default layananServices;
