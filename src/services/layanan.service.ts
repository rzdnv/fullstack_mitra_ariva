import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { ILayanan } from "@/types/layanan";

const layananServices = {
  getAll: () => instance.get(endpoint.LAYANAN),

  getById: (id: number) => instance.get(`${endpoint.LAYANAN}/${id}`),

  create: (payload: ILayanan) => instance.post(endpoint.LAYANAN, payload),

  update: (id: number, payload: Partial<ILayanan>) =>
    instance.put(`${endpoint.LAYANAN}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.LAYANAN}/${id}`),
};

export default layananServices;
