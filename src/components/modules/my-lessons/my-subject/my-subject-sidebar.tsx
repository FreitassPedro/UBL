"use client";

import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import MyCourseProgressStoreContext from "@/contexts/course-progress-store-context";
import useCourseProgress from "@/hooks/use-course-progress";
import Lesson from "@/types/course/lesson.interface";
import { useParams, useRouter } from "next/navigation";
import { useContext, useMemo } from "react";
import MySubjectSidebarItem from "./my-subject-sidebar-item";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import SubjectProgress from "@/types/course-progress/subject-progress.interface";

interface MySubjectSidebarProps {
  lessons: Lesson[];
  currentLesson?: Lesson;
}

export const MySubjectSidebar = ({ lessons, currentLesson }: MySubjectSidebarProps) => {
  const router = useRouter();
  const params = useParams();
  const courseSlug: string = params.courseSlug as string;
  const stepNumber: number = Number(params.stepNumber);
  const subjectNumber: number = Number(params.subjectNumber);

  const { toggleLessonCompletion } = useContext(MyCourseProgressStoreContext);
  const courseProgress: CourseProgress = useCourseProgress({
    courseSlug,
    stepNumber,
    subjectNumber,
    totalLessons: lessons.length,
  });

  const subjectProgress: SubjectProgress = courseProgress.steps[0]?.subjects[0];
  const completedLessons: number[] = subjectProgress?.lessons ?? [];
  const completedLessonsProgress: number = subjectProgress?.progress ?? 0;

  return (
    <aside className="flex min-h-0 flex-col gap-4 p-4 pt-2 sm:p-6 bg-transparent border-0 shadow-none lg:h-full">
      <div className="flex items-center justify-between pr-2">
        <h3 className="text-lg font-semibold text-zinc-100">
          Playlist de Aulas
        </h3>
        <span className="text-sm font-semibold">
          {completedLessons.length} de {lessons.length}
        </span>
      </div>
      <Progress value={completedLessonsProgress} />
      <div className="flex min-h-0 flex-col flex-1">
        <ScrollArea className="h-[55vh] sm:h-[60vh] lg:h-full w-full overflow-hidden">
          <ul className="space-y-2 pr-2">
            {lessons.map((lesson) => (
              <MySubjectSidebarItem
                key={lesson.id}
                lesson={lesson}
                isSelected={currentLesson?.id === lesson.id}
                isCompleted={completedLessons.includes(lesson.id)}
                onSelect={(nextLesson) => {
                  router.push(
                    `/meu-curso/${courseSlug}/etapas/${stepNumber}/disciplinas/${subjectNumber}/aulas/${nextLesson.number}`,
                  );
                }}
                onToggleCompletion={(lessonId) => {
                  toggleLessonCompletion(
                    courseSlug,
                    stepNumber,
                    subjectNumber,
                    lessonId,
                  );
                }}
              />
            ))}
          </ul>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default MySubjectSidebar;
