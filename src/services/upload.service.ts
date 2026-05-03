// src/services/upload.service.ts
import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";

export interface IFileURL {
  fileUrl: string;
}

const formDataHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const uploadServices = {
  uploadSingle: (payload: FormData) =>
    instance.post(endpoint.CLOUDINARY.UPLOAD, payload, formDataHeader),

  uploadMultiple: (payload: FormData) =>
    instance.post(endpoint.CLOUDINARY.UPLOAD_MULTIPLE, payload, formDataHeader),

  removeFile: (payload: IFileURL) =>
    instance.delete(endpoint.CLOUDINARY.REMOVE, { data: payload }),
};

export default uploadServices;
