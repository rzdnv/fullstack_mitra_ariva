"use client";

import useDetailDokter from "./useDetailDokter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoTab from "./InfoTab/InfoTab";
import JadwalTab from "./JadwalTab/JadwalTab";

const DetailDokter = () => {
  const {
    dataDokter,
    isLoadingDokter,
    handleUpdateDokter,
    isPendingMutateUpdateDokter,
    isSuccessMutateUpdateDokter,
  } = useDetailDokter();

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Detail Dokter</h2>
      </div>

      <Tabs defaultValue="info">
        <TabsList variant="line">
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="jadwal">Jadwal</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="my-2">
          <InfoTab
            dataDokter={dataDokter}
            isLoadingDokter={isLoadingDokter}
            handleUpdateDokter={handleUpdateDokter}
            isPendingMutateUpdateDokter={isPendingMutateUpdateDokter}
            isSuccessMutateUpdateDokter={isSuccessMutateUpdateDokter}
          />
        </TabsContent>
        <TabsContent value="jadwal" className="my-2">
          <JadwalTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailDokter;
