"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardReview from "../shared/CardReview/CardReview";

const ReviewSection = () => {
  const reviews = [
    {
      Name: "Marisa Nafi Mughnisa",
      Date: "17 februari 2026",
      Review:
        "pelayanan nya ramah, alhamdulilah saya habis tindakan tertusuk paku, dengan tenaga profesional di rumah sakit ini lancar dan biaya terjangkau, para staf juga sangat membantu dalam prosesnya",
      Rating: 5,
      Gender: "cewe",
    },
    {
      Name: "Farel zaqie",
      Date: "11 oktober 2025",
      Review: "rumah sakit langganan pelayanan oke dan memuaskan",
      Rating: 5,
      Gender: "cowo",
    },
    {
      Name: "Wiwit Lestari",
      Date: "3 oktober 2025",
      Review: "Pelayanan Ramah,tempatnya nyaman dan dokternya menyenangkan.",
      Rating: 4,
      Gender: "cewe",
    },
    {
      Name: "Nur Rokhman",
      Date: "14 november 2025",
      Review: "Akses parkirnya enak, tidak perlu jalan kaki jauh jauh",
      Rating: 5,
      Gender: "cowo",
    },
    {
      Name: "Hanifah Dwimutia",
      Date: "20 desember 2025",
      Review:
        "overall baguss sihh, nyaman buat berobat, bersih, pelayanan bagus. akses juga gampang, bener2 dipinggir jalan besar, ke tempat2 penting kaya atm/alfamart juga deket",
      Rating: 5,
      Gender: "cewe",
    },
    {
      Name: "Karmila Riska",
      Date: "8 november 2025",
      Review: "Tempatnya nyaman dan ga berisik",
      Rating: 5,
      Gender: "cewe",
    },
    {
      Name: "Supriyanto",
      Date: "17 november 2025",
      Review:
        "RSKB mitra ariva..fasilitas bagus,bersih dan nyaman..pelayanan memuaskan..petugas ramah dan cekatan..maju terus RSKB mitra ariva",
      Rating: 5,
      Gender: "cowo",
    },
  ];

  return (
    <div className="flex flex-col gap-10 md:gap-15 w-full py-10 md:py-20 px-10 md:px-20 items-center">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-xl tracking-tight">
          ✦ Cerita Pasien Kami
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Kepercayaan Anda Adalah Kebanggaan Bagi Kami
        </h1>
      </div>

      <div className="w-full px-10 md:px-20">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="gap-2">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 md:p-2 h-full">
                  <CardReview
                    Name={review.Name}
                    Date={review.Date}
                    Review={review.Review}
                    Rating={review.Rating}
                    Gender={review.Gender}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-14 w-14" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-14 w-14" />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;
