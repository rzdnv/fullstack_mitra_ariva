import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { ILogin } from "@/types/auth";

const authServices = {
  login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),

  logout: () => instance.post(`${endpoint.AUTH}/logout`),

  me: () => instance.get(`${endpoint.AUTH}/me`),
};

export default authServices;
