import { LessonBreadcrumb } from "@/components/features/subject/LessonBreadcrumb";
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { MyLessonProgress, MySubjectProgress } from "@/types/progress";
import { useEffect, useState } from "react";

interface LessonProps {
  subject: MySubjectProgress;
  lesson?: MyLessonProgress;
}

export const Lesson = ({ subject, lesson }: LessonProps) => {
  const [isLessonLoading, setIsLessonLoading] = useState(true);

  useEffect(() => {
    if (lesson) {
      setIsLessonLoading(true);
    }
  }, [lesson]);

  return (
    <Card className="flex min-h-0 flex-col gap-4 p-6 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 lg:col-span-4">
      <LessonBreadcrumb
        subjectName={subject.name}
        lessonTitle={lesson?.title}
      />

      {lesson && (
        <>
          <div className="relative w-full flex-1 min-h-0">
            <div
              className={cn(
                "h-full transition-opacity",
                isLessonLoading ? "opacity-0" : "opacity-100",
              )}
            >
              <VideoPlayer
                videoId={lesson.url}
                key={lesson.id}
                onLoaded={() => setIsLessonLoading(false)}
              />
            </div>
            {isLessonLoading && (
              <Skeleton className="absolute inset-0 rounded-xl" />
            )}
          </div>

          <div className="shrink-0">
            <div className="flex items-center gap-2 pb-1 space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap leading-none">
                Aula Gravada
              </span>
              <Separator className="flex-1 rounded self-center" />
            </div>

            <h2 className="text-2xl font-semibold leading-snug text-zinc-100">
              {lesson.title}
            </h2>
          </div>
        </>
      )}
    </Card>
  );
};

export default Lesson;
