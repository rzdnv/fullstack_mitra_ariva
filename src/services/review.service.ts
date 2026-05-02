import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IReview } from "@/types/review";

const reviewServices = {
  getAll: () => instance.get(endpoint.REVIEW),

  getById: (id: number) => instance.get(`${endpoint.REVIEW}/${id}`),

  create: (payload: IReview) => instance.post(endpoint.REVIEW, payload),

  update: (id: number, payload: Partial<IReview>) =>
    instance.put(`${endpoint.REVIEW}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.REVIEW}/${id}`),
};

export default reviewServices;
