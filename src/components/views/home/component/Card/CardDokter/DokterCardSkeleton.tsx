import { Skeleton } from "@/components/ui/skeleton";

export function DokterCardSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4 rounded-2xl shadow-lg border bg-white">
      {/* Image */}
      <div className="w-full h-full rounded-xl overflow-hidden">
        <Skeleton className="w-full h-75 lg:h-full" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Nama Dokter */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
        </div>

        {/* Badge Poli */}
        <Skeleton className="h-6 w-24 rounded-full" />

        {/* Jadwal */}
        <div className="grid grid-cols-1 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
