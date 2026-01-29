import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

export const HomeProgressSkeleton = () => {
  return (
    <div className="max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto mb-20 sm:mb-24">
      <Card className="w-full overflow-hidden border-0 bg-[#141414]">
        <CardHeader className="p-6 sm:p-8 space-y-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-5 w-80" />
        </CardHeader>
        <ScrollArea className="h-60">
          <div className="px-6 pb-6 sm:px-8 sm:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={`home-progress-skeleton-${index}`}
                className="h-50 text-left"
              >
                <CardHeader className="p-0 space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="p-0 my-2 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-2 w-full" />
                </CardContent>
                <CardFooter className="p-0">
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};
