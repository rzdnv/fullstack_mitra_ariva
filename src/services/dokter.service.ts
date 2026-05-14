import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IDokter } from "@/types/dokter";

const dokterServices = {
  // getAll: () => instance.get(endpoint.DOKTER),
  getAll: (params?: string) =>
    instance.get(`${endpoint.DOKTER}${params ? `?${params}` : ""}`),

  getByPoli: (poliId: number) =>
    instance.get(`${endpoint.DOKTER}?poliId=${poliId}`),

  getById: (id: number) => instance.get(`${endpoint.DOKTER}/${id}`),

  create: (payload: IDokter) => instance.post(endpoint.DOKTER, payload),

  update: (id: number, payload: Partial<IDokter>) =>
    instance.put(`${endpoint.DOKTER}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.DOKTER}/${id}`),
};

export default dokterServices;
