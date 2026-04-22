import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const ServiceSection = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-15 w-full py-5 md:py-20 px-10 md:px-20 items-center ">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-xl tracking-tight">
          ✦ Solusi Medis Terpadu
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Layanan Profesional untuk Kualitas Hidup Lebih Baik
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <Card className="bg-havelock-blue-500/20  max-w-sm p-6">
          <CardHeader>
            <CardTitle className="text-havelock-blue-800 text-2xl font-bold">
              Medical Check Up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-slate-800 w-3/4">
              Kenali kondisi tubuh Anda lebih dalam sebagai langkah awal
              investasi hidup sehat.
              <br />.
            </h2>
            <div className="flex gap-2 items-end">
              <Button variant="link" size="lg" className="text-slate-800">
                Cek Detail
              </Button>
              <Image
                src="/images/logo/mcu.png"
                alt="MCU"
                width={200}
                height={200}
                className="w-50 opacity-70"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-your-pink-400/20  max-w-sm p-6">
          <CardHeader>
            <CardTitle className="text-your-pink-800 text-2xl font-bold">
              Ultrasonografi (USG)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-slate-800 w-3/4">
              Abadikan momen berharga dan pantau tumbuh kembang si kecil dengan
              teknologi citra 3D & 4D yang detail dan nyata.
            </h2>
            <div className="flex gap-2 items-end">
              <Button variant="link" size="lg" className="text-slate-800">
                Cek Detail
              </Button>
              <Image
                src="/images/logo/usg.png"
                alt="MCU"
                width={200}
                height={200}
                className="w-50 opacity-70"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-seance-500/20  max-w-sm p-6">
          <CardHeader>
            <CardTitle className="text-seance-800 text-2xl font-bold">
              Layanan Booster Vitamin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-slate-800 w-3/4">
              Solusi praktis dan cepat untuk menjaga performa tubuh tetap prima
              di tengah aktivitas yang padat.
            </h2>
            <div className="flex gap-2 items-end">
              <Button variant="link" size="lg" className="text-slate-800">
                Cek Detail
              </Button>
              <Image
                src="/images/logo/infus.png"
                alt="MCU"
                width={200}
                height={200}
                className="w-50 opacity-70"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceSection;
