import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ReviewCardSkeleton = () => {
  return (
    <Card className="h-full bg-white shadow-lg">
      <CardHeader className="flex items-center gap-4">
        {/* Avatar */}
        <Skeleton className="w-12 h-12 rounded-full" />

        <div className="flex flex-col gap-2 w-full">
          {/* Name */}
          <Skeleton className="h-4 w-32" />

          {/* Date */}
          <Skeleton className="h-3 w-24" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 h-full px-6">
        {/* Review text */}
        <div className="flex flex-col gap-2 mb-auto">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="w-5 h-5 rounded-sm" />
          <Skeleton className="h-4 w-24" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCardSkeleton;
