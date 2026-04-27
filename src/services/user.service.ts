import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IUser } from "@/types/user";

const userServices = {
  getAll: () => instance.get(endpoint.USERS),

  getById: (id: number) => instance.get(`${endpoint.USERS}/${id}`),

  create: (payload: IUser) => instance.post(endpoint.USERS, payload),

  update: (id: number, payload: Partial<IUser>) =>
    instance.put(`${endpoint.USERS}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.USERS}/${id}`),
};

export default userServices;
