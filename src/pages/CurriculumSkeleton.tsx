import { Skeleton } from "@/components/ui/skeleton";

const CurriculumSkeleton = () => (
  <section className="w-full py-8">
    <div className="mx-auto max-w-6xl container px-6 sm:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-8 w-52" />
        </div>
        <Skeleton className="hidden md:block h-2 w-full" />
        <Skeleton className="h-10 w-48 rounded-xl" />
      </div>
      <ul className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={`curriculum-step-skeleton-${index}`}
            className="rounded-xl border border-zinc-800/70 p-4 sm:p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-4 w-3/4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((__, itemIndex) => (
                <Skeleton
                  key={`curriculum-subject-skeleton-${index}-${itemIndex}`}
                  className="h-12 w-full"
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CurriculumSkeleton;
