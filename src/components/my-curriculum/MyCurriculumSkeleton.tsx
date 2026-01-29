import { Skeleton } from "@/components/ui/skeleton";

const MyCurriculumSkeleton = () => (
  <div className="flex flex-col w-full space-y-8 mb-10">
    <div className="flex flex-col w-full items-center space-y-4">
      <Skeleton className="h-8 w-56" />
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={`step-tab-skeleton-${index}`} className="h-9 w-24" />
        ))}
      </div>
    </div>
    <div className="w-full space-y-4">
      <Skeleton className="h-6 w-40" />
      <div className="grid grid-cols-1 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`step-card-skeleton-${index}`}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 border border-zinc-800/70 rounded-xl p-4 sm:p-6"
          >
            <Skeleton className="h-12 w-12 rounded-lg" />
            <div className="flex-1 space-y-2 w-full">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MyCurriculumSkeleton;
