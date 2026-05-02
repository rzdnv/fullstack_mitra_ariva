import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DokterCardSkeleton = () => {
  return (
    <Card className="overflow-hidden rounded-3xl border-0 bg-havelock-blue-500/10">
      <Skeleton className="h-40 w-full" />

      <CardContent className="space-y-4 p-6">
        <Skeleton className="mx-auto h-6 w-28 rounded-full" />
        <Skeleton className="h-7 w-full rounded-md" />
        <Skeleton className="mx-auto h-5 w-3/4 rounded-md" />
      </CardContent>
    </Card>
  );
};

export default DokterCardSkeleton;
