import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ScheduleCardSkeleton = () => {
  return (
    <Card className="rounded-2xl md:rounded-3xl border bg-white shadow-sm">
      <CardContent className="p-2 md:p-4 space-y-5 md:space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <Skeleton className="h-6 w-44 md:h-8 md:w-64 rounded-md" />
          <Skeleton className="h-9 w-36 md:h-10 md:w-44 rounded-full" />
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-4 w-4 md:h-5 md:w-5 rounded-sm" />
              <Skeleton className="h-5 w-24 md:h-7 md:w-28 rounded-md" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCardSkeleton;
