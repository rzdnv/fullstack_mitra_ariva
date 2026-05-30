interface IReview {
  id: number;
  nama: string;
  tanggal: string;
  review: string;
  rating: number;
  gender: string;
  createdAt: string;
}

interface ICreateReview {
  nama: string;
  tanggal: string;
  review: string;
  rating: number;
  gender: string;
}

interface IUpdateReview {
  nama?: string;
  tanggal?: string;
  review?: string;
  rating?: number;
  gender?: string;
}

export { IReview, IUpdateReview, ICreateReview };
