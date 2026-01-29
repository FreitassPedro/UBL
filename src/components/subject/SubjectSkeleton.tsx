import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SubjectSkeleton = () => (
  <div className="h-[calc(100vh-3.5rem)] text-text-main overflow-x-hidden font-inter">
    <div className="w-full h-full min-h-0 py-6 px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
      <Card className="flex min-h-0 flex-col gap-4 p-4 sm:p-6 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 lg:col-span-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-6 w-64" />
        </div>
        <Skeleton className="w-full aspect-video rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-7 w-3/4" />
        </div>
      </Card>

      <aside className="flex h-auto lg:h-full min-h-0 flex-col gap-3 p-4 sm:p-6 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-2 w-full rounded-full" />
        <div className="flex min-h-0 flex-col flex-1">
          <div className="h-72 sm:h-96 lg:h-full w-full space-y-2 pr-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={`lesson-skeleton-${index}`}
                className="h-10 w-full"
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  </div>
);

export default SubjectSkeleton;
