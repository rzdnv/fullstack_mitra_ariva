import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { ICreateJadwal, IJadwal, IUpdateJadwal } from "@/types/jadwal";

export interface JadwalPaginatedResponse {
  data: IJadwal[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

const jadwalServices = {
  getAll: () => instance.get(endpoint.JADWAL),

  getAllPaginated: (params: string) =>
    instance.get<{ data: JadwalPaginatedResponse }>(
      `${endpoint.JADWAL}?${params}`,
    ),

  getByDokter: (dokterId: number) =>
    instance.get(`${endpoint.JADWAL}?dokterId=${dokterId}`),

  getById: (id: number) => instance.get(`${endpoint.JADWAL}/${id}`),

  create: (payload: ICreateJadwal) => instance.post(endpoint.JADWAL, payload),

  update: (id: number, payload: Partial<IUpdateJadwal>) =>
    instance.put(`${endpoint.JADWAL}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.JADWAL}/${id}`),
};

export default jadwalServices;
