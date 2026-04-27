import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { ILayanan, ILayananDetail } from "@/types/layanan";

const layananServices = {
  getAll: () => instance.get(endpoint.LAYANAN),

  getById: (id: number) => instance.get(`${endpoint.LAYANAN}/${id}`),

  create: (payload: ILayanan) => instance.post(endpoint.LAYANAN, payload),

  update: (id: number, payload: Partial<ILayanan>) =>
    instance.put(`${endpoint.LAYANAN}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.LAYANAN}/${id}`),

  getAllDetail: (layananId: number) =>
    instance.get(`${endpoint.LAYANAN_DETAIL}?layananId=${layananId}`),

  getDetailById: (id: number) =>
    instance.get(`${endpoint.LAYANAN_DETAIL}/${id}`),

  createDetail: (payload: ILayananDetail) =>
    instance.post(endpoint.LAYANAN_DETAIL, payload),

  updateDetail: (id: number, payload: Partial<ILayananDetail>) =>
    instance.put(`${endpoint.LAYANAN_DETAIL}/${id}`, payload),

  deleteDetail: (id: number) =>
    instance.delete(`${endpoint.LAYANAN_DETAIL}/${id}`),
};

export default layananServices;
