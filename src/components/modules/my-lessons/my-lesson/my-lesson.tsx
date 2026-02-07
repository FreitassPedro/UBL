import MyLessonBreadcrumb from "@/components/modules/my-lessons/my-lesson/my-lesson-breadcrumb";
import { VideoPlayer } from "@/components/shared/video-player";
import { Card } from "@/components/ui/card";
import { formatSeconds } from "@/lib/time";
import Lesson from "@/types/course/lesson.interface";
import Subject from "@/types/course/subject.interface";

interface MyLessonProps {
  subject: Subject;
  lesson: Lesson;
}

export const MyLesson = ({ subject, lesson }: MyLessonProps) => {
  return (
    <Card className="flex min-h-0 flex-col gap-3 p-4 pb-2 sm:gap-4 sm:p-6 bg-transparent border-0 shadow-none lg:h-full">
      <MyLessonBreadcrumb subjectName={subject.name} lessonName={lesson.name} />
      <div className="relative w-full aspect-video min-h-55 sm:min-h-80 lg:aspect-auto lg:flex-1 lg:min-h-0">
        <div className="h-full rounded-lg overflow-hidden transition-opacity">
          <VideoPlayer key={lesson.id} url={lesson.embedUrl} />
        </div>
      </div>
      <div className="shrink-0 rounded-xl border border-border/60 bg-card/80 p-4 sm:p-5 shadow-[0_18px_55px_-45px_rgba(0,0,0,0.75)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="font-medium text-zinc-200">Aula {lesson.number}</span>
              {lesson.duration && (
                <span className="inline-flex items-center gap-2 text-zinc-400">
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span className="font-medium text-zinc-200">
                    {formatSeconds(lesson.duration)}
                  </span>
                </span>
              )}
            </div>
            <h2 className="text-[1.35rem] sm:text-[1.6rem] lg:text-[1.75rem] font-semibold tracking-[-0.01em] leading-tight text-zinc-50">
              {lesson.name}
            </h2>
            <p className="text-sm text-zinc-400">
              Disciplina: <span className="text-zinc-200">{subject.name}</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MyLesson;
