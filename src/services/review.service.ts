import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { ICreateReview, IReview, IUpdateReview } from "@/types/review";

export interface ReviewPaginatedResponse {
  data: IReview[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

const reviewServices = {
  getAll: () => instance.get(endpoint.REVIEW),

  getAllPaginated: (params: string) =>
    instance.get<{ data: ReviewPaginatedResponse }>(
      `${endpoint.REVIEW}?${params}`,
    ),

  getById: (id: number) => instance.get(`${endpoint.REVIEW}/${id}`),

  create: (payload: ICreateReview) => instance.post(endpoint.REVIEW, payload),

  update: (id: number, payload: Partial<IUpdateReview>) =>
    instance.put(`${endpoint.REVIEW}/${id}`, payload),

  delete: (id: number) => instance.delete(`${endpoint.REVIEW}/${id}`),
};

export default reviewServices;
