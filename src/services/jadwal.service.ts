import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IJadwal } from "@/types/jadwal";

const jadwalServices = {
  getAll: () => instance.get(endpoint.JADWAL),

  getByDokter: (dokterId: number) =>
    instance.get(`${endpoint.JADWAL}?dokterId=${dokterId}`),

  getById: (id: number) => instance.get(`${endpoint.JADWAL}/${id}`),

  create: (payload: IJadwal) => instance.post(endpoint.JADWAL, payload),

  update: (id: number, payload: Partial<IJadwal>) =>
    instance.put(`${endpoint.JADWAL}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.JADWAL}/${id}`),
};

export default jadwalServices;
