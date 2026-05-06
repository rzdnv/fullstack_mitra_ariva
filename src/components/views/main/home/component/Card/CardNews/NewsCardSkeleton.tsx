import { Skeleton } from "@/components/ui/skeleton";

const NewsCardSkeleton = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row h-full rounded-sm">
      {/* Image Skeleton */}
      <Skeleton className="aspect-video w-full lg:w-1/2 rounded-sm" />

      {/* Content Skeleton */}
      <div className="flex flex-col gap-2 p-4 w-full">
        {/* Title */}
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />

        {/* Footer */}
        <div className="flex gap-2 items-center mt-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-3" />
          <div className="flex gap-1 items-center">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
