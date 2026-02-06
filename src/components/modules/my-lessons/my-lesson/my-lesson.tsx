import MyLessonBreadcrumb from "@/components/modules/my-lessons/my-lesson/my-lesson-breadcrumb";
import { VideoPlayer } from "@/components/shared/video-player";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Lesson from "@/types/lesson";
import Subject from "@/types/subject";

interface MyLessonProps {
  subject: Subject;
  lesson: Lesson;
}

export const MyLesson = ({ subject, lesson }: MyLessonProps) => {
  return (
    <Card className="flex min-h-0 flex-col gap-4 p-4 sm:p-6 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 lg:col-span-4">
      <MyLessonBreadcrumb subjectName={subject.name} lessonName={lesson.name} />
      <div className="relative w-full aspect-video lg:aspect-auto lg:flex-1 lg:min-h-0">
        <div className="h-full transition-opacity">
          <VideoPlayer key={lesson.id} url={lesson.embedUrl} />
        </div>
      </div>
      <div className="shrink-0">
        <div className="flex items-center gap-2 pb-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap leading-none">
            Aula Gravada
          </span>
          <Separator className="flex-1 rounded data-[orientation=horizontal]:h-0.5" />
        </div>
        <h2 className="text-2xl font-semibold leading-snug text-zinc-100">
          {lesson.name}
        </h2>
      </div>
    </Card>
  );
};

export default MyLesson;
