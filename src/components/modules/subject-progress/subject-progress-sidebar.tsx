"use client";

import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import CourseProgressStoreContext from "@/contexts/course-progress-store-context";
import useCourseProgress from "@/hooks/use-course-progress";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import SubjectProgress from "@/types/course-progress/subject-progress.interface";
import Lesson from "@/types/course/lesson.interface";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import SubjectProgressSidebarItem from "./subject-progress-sidebar-item";

interface SubjectProgressSidebarProps {
  lessons: Lesson[];
  currentLesson?: Lesson;
}

export const SubjectProgressSidebar = ({ lessons, currentLesson }: SubjectProgressSidebarProps) => {
  const router = useRouter();
  const params = useParams();
  const courseSlug: string = params.courseSlug as string;
  const semesterNumber: number = Number(params.stepNumber);
  const subjectNumber: number = Number(params.subjectNumber);

  const { toggleLessonCompletion } = useContext(CourseProgressStoreContext);
  const courseProgress: CourseProgress = useCourseProgress({
    courseSlug,
    semesterNumber,
    subjectNumber,
    totalLessons: lessons.length,
  });

  const subjectProgress: SubjectProgress | undefined = courseProgress.semesters
    .find((semester) => semester.number === semesterNumber)
    ?.subjects.find((subject) => subject.number === subjectNumber);

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
              <SubjectProgressSidebarItem
                key={lesson.id}
                lesson={lesson}
                isSelected={currentLesson?.id === lesson.id}
                isCompleted={completedLessons.includes(lesson.id)}
                onSelect={(nextLesson) => {
                  router.push(
                    `/meu-curso/${courseSlug}/etapas/${semesterNumber}/disciplinas/${subjectNumber}/aulas/${nextLesson.number}`,
                  );
                }}
                onToggleCompletion={(lessonId) => {
                  toggleLessonCompletion(
                    courseSlug,
                    semesterNumber,
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

export default SubjectProgressSidebar;
