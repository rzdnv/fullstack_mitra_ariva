// // src/services/upload.service.ts
// import instance from "@/lib/axios/instance";
// import endpoint from "./endpoint.constant";
// import { IFileURL } from "@/types/file";

// const formDataHeader = {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// };

// const uploadServices = {
//   uploadSingle: (payload: FormData) =>
//     instance.post(endpoint.CLOUDINARY.UPLOAD, payload, formDataHeader),

//   uploadMultiple: (payload: FormData) =>
//     instance.post(endpoint.CLOUDINARY.UPLOAD_MULTIPLE, payload, formDataHeader),

//   removeFile: (payload: IFileURL) =>
//     instance.delete(endpoint.CLOUDINARY.REMOVE, { data: payload }),
// };

// export default uploadServices;

import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IFileURL } from "@/types/file";

// Tipe upload
export type UploadType = "dokter" | "berita" | "layanan" | "default";

const formDataHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const uploadServices = {
  // ← Tambahkan type parameter
  uploadSingle: (payload: FormData, type: UploadType = "default") =>
    instance.post(
      `${endpoint.CLOUDINARY.UPLOAD}?type=${type}`,
      payload,
      formDataHeader,
    ),

  uploadMultiple: (payload: FormData, type: UploadType = "default") =>
    instance.post(
      `${endpoint.CLOUDINARY.UPLOAD_MULTIPLE}?type=${type}`,
      payload,
      formDataHeader,
    ),

  removeFile: (payload: IFileURL) =>
    instance.delete(endpoint.CLOUDINARY.REMOVE, { data: payload }),
};

export default uploadServices;
