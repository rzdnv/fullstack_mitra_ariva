import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

interface PropTypes {
  img: string;
  title: string;
  description: string;
}

const CardService = (props: PropTypes) => {
  const { img, title, description } = props;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 p-4 rounded-xl bg-white">
      <Image
        src={`/images/general/${img}.webp`}
        alt="MCU"
        width={400}
        height={300}
        className="aspect-video w-full rounded-xl"
      />
      <div className="flex flex-col px-10 gap-2">
        <h1 className="font-playfair text-4xl font-bold text-havelock-blue-800">
          {title}
        </h1>
        <p className=" text-slate-800">{description}</p>

        <div className="w-full lg:px-15">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="mx-0.5">
              <CarouselItem className=" p-1 md:p-2 basis-1/2 lg:basis-full ">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-4xl font-bold text-havelock-blue-600">
                      Silver
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-inside list-disc">
                      <li>Konsultasi dokter</li>
                      <li>GDS/GDP</li>
                      <li>Kolesterol total</li>
                      <li>Trigliserida</li>
                      <li>Rontgen thorax</li>
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className=" p-1 md:p-2 basis-1/2 lg:basis-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-4xl font-bold text-havelock-blue-600">
                      Gold
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium text-slate-800">
                      Semua dari Silver +
                    </p>
                    <ul className="list-inside list-disc">
                      <li>Hematologi</li>
                      <li>Fungsi ginjal (Ureum, Creatinin)</li>
                      <li>Fungsi hati (SGOT, SGPT)</li>
                      <li>Rontgen thorax</li>
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className=" p-1 md:p-2 basis-1/2 lg:basis-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-4xl font-bold text-havelock-blue-600">
                      Platinum
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium text-slate-800">
                      Semua dari Silver +
                    </p>
                    <ul className="list-inside list-disc">
                      <li>Hematologi</li>
                      <li>Fungsi ginjal (Ureum, Creatinin)</li>
                      <li>Fungsi hati (SGOT, SGPT)</li>
                      <li>Rontgen thorax</li>
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className=" p-1 md:p-2 basis-1/2 lg:basis-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-4xl font-bold text-havelock-blue-600">
                      Diamond
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium text-slate-800">
                      Semua dari Platinum +
                    </p>
                    <ul className="list-inside list-disc">
                      <li>EKG (rekam jantung)</li>
                      <li>Urine lengkap</li>
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-10 w-10" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-10 w-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CardService;
