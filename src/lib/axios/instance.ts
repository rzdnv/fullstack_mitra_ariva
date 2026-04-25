import environment from "@/config/environment";
import axios from "axios";
import { getSession } from "next-auth/react";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    const session = await getSession();
    if (session) {
      request.headers.Authorization = `Bearer ${session.user?.id}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  async (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    if (error.response?.status === 403) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

export default instance;
