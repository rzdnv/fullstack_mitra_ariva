import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IUser } from "@/types/user";

export interface UserPaginatedResponse {
  data: IUser[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

const userServices = {
  getAll: () => instance.get(endpoint.USERS),

  getAllPaginated: (params: string) =>
    instance.get<{ data: UserPaginatedResponse }>(
      `${endpoint.USERS}?${params}`,
    ),

  getById: (id: number) => instance.get(`${endpoint.USERS}/${id}`),

  create: (payload: IUser) => instance.post(endpoint.USERS, payload),

  update: (id: number, payload: Partial<IUser>) =>
    instance.put(`${endpoint.USERS}/${id}`, payload),

  resetPassword: (id: number, payload: Partial<IUser>) =>
    instance.put(`${endpoint.USERS}/${id}/reset-password`, payload),

  delete: (id: number) => instance.delete(`${endpoint.USERS}/${id}`),
};

export default userServices;
