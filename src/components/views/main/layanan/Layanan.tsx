"use client";

import Image from "next/image";
import useLayanan from "./useLayanan";
import { ILayanan } from "@/types/layanan";

const Layanan = () => {
  const { dataLayanan, isLoadingLayanan } = useLayanan();

  return (
    <main className="bg-white">
      <section
        className="relative flex min-h-[50vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[75vh]"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        <div className="relative z-10 flex max-w-2xl items-center gap-4 p-6 text-white lg:p-10">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={400}
            height={400}
            className="h-1/4 w-1/4 object-contain"
          />

          <h1 className="text-3xl font-bold lg:text-5xl">Layanan</h1>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </section>

      {/* content */}
      <section className="grid gap-6 px-10 py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-20">
        {dataLayanan?.map((layanan: ILayanan) => (
          <div
            key={layanan.id}
            className="h-full w-full overflow-hidden rounded-md lg:rounded-xl"
          >
            <Image
              src={layanan.foto}
              alt={layanan.namaLayanan}
              width={300}
              height={400}
              className="h-full w-full"
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Layanan;
