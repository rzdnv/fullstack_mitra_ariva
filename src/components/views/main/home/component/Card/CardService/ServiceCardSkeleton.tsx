import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = () => {
  return (
    <Card className="w-60 md:w-90 overflow-hidden rounded-2xl border-0 bg-havelock-blue-500/10">
      <Skeleton className="h-60 w-full rounded-none" />

      <CardContent className="space-y-4 p-5">
        <Skeleton className="mx-auto h-7 w-52 rounded-md" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="mx-auto h-4 w-3/4 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCardSkeleton;
