// src/services/dashboard.service.ts
import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IDashboard } from "@/types/dashboard";

const dashboardServices = {
  getStats: () => instance.get<{ data: IDashboard }>(endpoint.DASHBOARD),
};

export default dashboardServices;
