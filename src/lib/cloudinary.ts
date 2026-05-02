import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getPublicIdFromUrl = (fileUrl: string): string => {
  try {
    const split = fileUrl.split("/upload/");
    if (split.length < 2) return "";

    const afterUpload = split[1];
    const versionMatch = afterUpload.match(/v\d+\/(.*)/);
    const path = versionMatch ? versionMatch[1] : afterUpload;
    const withoutExtension = path.replace(/\.[^/.]+$/, "");

    // ← cek hasilnya
    // console.log("Public ID:", withoutExtension);
    return withoutExtension;
  } catch {
    return "";
  }
};

const cloudinaryService = {
  async uploadSingle(fileBase64: string) {
    const result = await cloudinary.uploader.upload(fileBase64, {
      resource_type: "auto",
      folder: "mitra-ariva",
    });
    return result;
  },

  async uploadMultiple(filesBase64: string[]) {
    const uploadBatch = filesBase64.map((file) => this.uploadSingle(file));
    const results = await Promise.all(uploadBatch);
    return results;
  },

  async remove(fileUrl: string) {
    const publicId = getPublicIdFromUrl(fileUrl);
    if (!publicId) return null;
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  },
};

export default cloudinaryService;
