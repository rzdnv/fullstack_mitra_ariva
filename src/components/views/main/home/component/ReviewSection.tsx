"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardReview from "./Card/CardReview/CardReview";
import useHome from "../useHome";
import { IReview } from "@/types/review";
import { formatTanggal } from "@/components/shared/formatted/formated";
import ReviewCardSkeleton from "@/components/views/main/home/component/Card/CardReview/ReviewCardSkeleton";

const ReviewSection = () => {
  const { dataReview, isLoadingReview } = useHome();

  return (
    <div className="flex w-full flex-col items-center gap-10 bg-linear-to-t from-white to-transparent px-10 pt-10 pb-30 md:px-20">
      <div className="flex flex-col items-center gap-4">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Cerita Pasien Kami
        </p>
        <h1 className="font-DMSerif max-w-4xl text-center text-3xl text-slate-800 md:text-5xl">
          Kepercayaan Anda Adalah Kebanggaan Bagi Kami
        </h1>
      </div>

      <div className="w-full px-0 md:px-10">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {isLoadingReview
              ? Array.from({ length: 3 }).map((_, i) => (
                  <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-1 md:p-2">
                      <ReviewCardSkeleton />
                    </div>
                  </CarouselItem>
                ))
              : dataReview?.map((review: IReview) => (
                  <CarouselItem
                    key={review.id}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1 md:p-2">
                      <CardReview
                        Name={review.nama}
                        Date={formatTanggal(review.tanggal)}
                        Review={review.review}
                        Rating={review.rating}
                        Gender={review.gender}
                      />
                    </div>
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -left-6 h-12 w-12 -translate-y-1/2 rounded-full border bg-white/90 shadow-lg hover:bg-white md:h-14 md:w-14 lg:-left-12" />
          <CarouselNext className="absolute top-1/2 -right-6 h-12 w-12 -translate-y-1/2 rounded-full border bg-white/90 shadow-lg hover:bg-white md:h-14 md:w-14 lg:-right-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;
