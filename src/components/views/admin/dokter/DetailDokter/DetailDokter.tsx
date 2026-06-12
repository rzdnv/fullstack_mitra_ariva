"use client";

import useDetailDokter from "./useDetailDokter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoTab from "./InfoTab/InfoTab";
import JadwalTab from "./JadwalTab/JadwalTab";

export default function DetailDokter() {
  const { dataDokter, isLoadingDokter } = useDetailDokter();

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Detail Dokter</h2>
        <p className="mt-1 max-w-lg text-sm text-slate-500">
          Halaman untuk melihat detail informasi serta memperbarui data dokter.
        </p>
      </div>

      <Tabs defaultValue="info">
        <TabsList variant="line">
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="jadwal">Jadwal</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="my-2">
          <InfoTab dataDokter={dataDokter} isLoadingDokter={isLoadingDokter} />
        </TabsContent>
        <TabsContent value="jadwal" className="my-2">
          <JadwalTab dataDokter={dataDokter} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
