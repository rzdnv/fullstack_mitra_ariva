import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IBerita } from "@/types/berita";

export interface BeritaPaginatedResponse {
  data: IBerita[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

const beritaServices = {
  getAll: (userId?: number) =>
    instance.get(
      userId ? `${endpoint.BERITA}?userId=${userId}` : endpoint.BERITA,
    ),

  getAllPaginated: (params: string) =>
    instance.get<{ data: BeritaPaginatedResponse }>(
      `${endpoint.BERITA}?${params}`,
    ),

  getById: (id: number) => instance.get(`${endpoint.BERITA}/${id}`),

  create: (payload: IBerita) => instance.post(endpoint.BERITA, payload),

  update: (id: number, payload: Partial<IBerita>) =>
    instance.put(`${endpoint.BERITA}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.BERITA}/${id}`),
};

export default beritaServices;
