import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = () => {
  return (
    <Card className="relative aspect-3/4 w-full max-w-85 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-0 shadow-sm">
      <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-slate-200" />

      <Skeleton className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-300/50" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col space-y-3 p-5">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20 rounded bg-slate-300/60" />

          <Skeleton className="h-5 w-3/4 rounded-md bg-slate-300/80" />
          <Skeleton className="h-5 w-1/2 rounded-md bg-slate-300/80" />
        </div>

        <div className="space-y-1.5 pt-1">
          <Skeleton className="h-3 w-full rounded bg-slate-300/40" />
          <Skeleton className="h-3 w-5/6 rounded bg-slate-300/40" />
        </div>
      </div>
    </Card>
  );
};

export default ServiceCardSkeleton;
