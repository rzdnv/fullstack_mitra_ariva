import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";

export interface IFileURL {
  fileUrl: string;
}

export type UploadType = "dokter" | "berita" | "layanan" | "default";

const uploadServices = {
  uploadSingle: (payload: FormData, type: UploadType = "default") =>
    instance.post(`${endpoint.UPLOAD.SINGLE}?type=${type}`, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  removeFile: (payload: IFileURL) =>
    instance.delete(endpoint.UPLOAD.REMOVE, { data: payload }),
};

export default uploadServices;
