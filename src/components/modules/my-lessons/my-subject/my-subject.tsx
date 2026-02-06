import MyLesson from "@/components/modules/my-lessons/my-lesson/my-lesson";
import MySubjectSidebar from "@/components/modules/my-lessons/my-subject/my-subject-sidebar";
import { Separator } from "@/components/ui/separator";
import Lesson from "@/types/lesson";
import Subject from "@/types/subject";

interface MySubjectProps {
  subject: Subject;
  lessons: Lesson[];
  currentLesson: Lesson;
}

export const MySubject = ({ subject, lessons, currentLesson }: MySubjectProps) => {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] h-auto lg:h-[calc(100vh-3.5rem)] text-text-main overflow-x-hidden overflow-y-auto lg:overflow-y-hidden font-inter">
      <div className="w-full min-h-0 py-6 px-4 sm:px-6 max-w-360 mx-auto h-auto lg:h-full">
        <div className="min-h-0 bg-card border border-zinc-800/80 rounded-xl shadow-2xl shadow-black/45 ring-1 ring-zinc-700/40 lg:h-full">
          <div className="min-h-0 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_1px_minmax(0,2fr)] gap-0 items-stretch lg:h-full">
            <MyLesson
              subject={subject}
              lesson={currentLesson}
            />
            <Separator
              className="hidden lg:block my-6 h-[calc(100%-3rem)] max-h-[calc(100%-3rem)] w-2.5 self-center rounded-full bg-linear-to-b from-transparent via-border/70 to-transparent opacity-70"
              orientation="vertical"
            />
            <MySubjectSidebar
              lessons={lessons}
              currentLesson={currentLesson}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubject;
