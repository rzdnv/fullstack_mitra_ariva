interface IReview {
  id: number;
  nama: string;
  tanggal: string;
  review: string;
  rating: number;
  gender: "pria" | "wanita";
  createdAt: string;
}

export { IReview };

// export interface CreateReviewPayload {
//   nama: string;
//   tanggal: string;
//   review: string;
//   rating: number;
//   gender: "pria" | "wanita";
// }
