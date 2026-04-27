import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IBerita } from "@/types/berita";

const beritaServices = {
  getAll: () => instance.get(endpoint.BERITA),

  getTerbaru: (limit: number) =>
    instance.get(`${endpoint.BERITA}?limit=${limit}`),

  getById: (id: number) => instance.get(`${endpoint.BERITA}/${id}`),

  create: (payload: IBerita) => instance.post(endpoint.BERITA, payload),

  update: (id: number, payload: Partial<IBerita>) =>
    instance.put(`${endpoint.BERITA}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.BERITA}/${id}`),
};

export default beritaServices;
