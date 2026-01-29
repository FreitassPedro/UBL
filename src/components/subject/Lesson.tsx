import { LessonBreadcrumb } from "@/components/subject/LessonBreadcrumb";
import { VideoPlayer } from "@/components/subject/VideoPlayer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { Lesson as LessonType } from "@/types/lesson";
import type MySubject from "@/types/my-subject";
import { useEffect, useState } from "react";

interface LessonProps {
  mySubject: MySubject;
  lesson?: LessonType;
  isLoading?: boolean;
}

export const Lesson = ({ mySubject, lesson, isLoading }: LessonProps) => {
  const [isLessonLoading, setIsLessonLoading] = useState(true);

  useEffect(() => {
    if (lesson?.embedUrl) {
      setIsLessonLoading(true);
    }
  }, [lesson?.embedUrl]);

  return (
    <Card className="flex min-h-0 flex-col gap-4 p-4 sm:p-6 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 lg:col-span-4">
      <LessonBreadcrumb
        subjectName={mySubject.name}
        lessonTitle={lesson?.title}
      />

      {(lesson || isLoading) && (
        <>
          <div className="relative w-full aspect-video lg:aspect-auto lg:flex-1 lg:min-h-0">
            {lesson ? (
              <div
                className={cn(
                  "h-full transition-opacity",
                  isLessonLoading ? "opacity-0" : "opacity-100",
                )}
              >
                <VideoPlayer
                  key={lesson.id}
                  url={lesson.embedUrl}
                  onLoaded={() => setIsLessonLoading(false)}
                />
              </div>
            ) : null}
            {(isLessonLoading || isLoading) && (
              <Skeleton className="absolute inset-0 rounded-xl" />
            )}
          </div>

          <div className="shrink-0">
            <div className="flex items-center gap-2 pb-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap leading-none">
                Aula Gravada
              </span>
              <Separator className="flex-1 rounded data-[orientation=horizontal]:h-0.5" />
            </div>

            <h2 className="text-2xl font-semibold leading-snug text-zinc-100">
              {lesson?.title ? (
                lesson.title
              ) : isLoading ? (
                <Skeleton className="h-7 w-3/4" />
              ) : (
                "Aula indisponível"
              )}
            </h2>
          </div>
        </>
      )}
    </Card>
  );
};

export default Lesson;
