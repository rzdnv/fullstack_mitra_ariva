import { Skeleton } from "@/components/ui/skeleton";

const NewsCardSkeleton = () => {
  return (
    <div className="min-w-xs h-full rounded-sm border p-2">
      <Skeleton className="aspect-video w-full rounded-sm" />
      <div className="flex flex-col gap-2 mt-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/3 mt-1" />
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
