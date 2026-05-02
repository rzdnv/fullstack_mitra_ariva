"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardReview from "../../../shared/Card/CardReview/CardReview";
import useHome from "../useHome";
import { IReview } from "@/types/review";
import { formatTanggal } from "@/components/shared/formatted/formated";
import ReviewCardSkeleton from "@/components/shared/Card/CardReview/ReviewCardSkeleton";

const ReviewSection = () => {
  const { dataReview, isLoadingReview } = useHome();

  return (
    <div className="flex flex-col gap-10 w-full pb-30 pt-10 px-10 md:px-20 items-center bg-linear-to-b from-gray-100 from-10% to-white to-90%">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-center md:text-xl tracking-tight">
          ✦ Cerita Pasien Kami
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Kepercayaan Anda Adalah Kebanggaan Bagi Kami
        </h1>
      </div>

      <div className="w-full px-0 md:px-10 ">
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
                    <div className="p-1 md:p-2 h-full">
                      <ReviewCardSkeleton />
                    </div>
                  </CarouselItem>
                ))
              : dataReview?.map((review: IReview) => (
                  <CarouselItem
                    key={review.id}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 md:p-2 h-full">
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
          <CarouselPrevious className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-12 w-12 md:h-14 md:w-14" />
          <CarouselNext className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-12 w-12 md:h-14 md:w-14" />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;
