"use client";

import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import MyCourseContext from "@/contexts/my-course-context";
import Lesson from "@/types/lesson";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useContext, useMemo } from "react";
import MySubjectSidebarItem from "./my-subject-sidebar-item";

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

  const { progress, toggleLessonCompletion } = useContext(MyCourseContext);
  const completedLessons: number[] = useMemo(
    () => progress?.[courseSlug]?.[stepNumber - 1]?.[subjectNumber - 1] ?? [],
    [progress, courseSlug, stepNumber, subjectNumber],
  );

  const completedLessonsProgress: number = useMemo(() => {
    if (lessons.length === 0) return 0;
    return Math.round((completedLessons.length / lessons.length) * 100);
  }, [completedLessons.length, lessons.length]);

  const handleSelectLesson = useCallback((nextLesson: Lesson) => {
    router.push(`/meu-curso/${courseSlug}/etapas/${stepNumber}/disciplinas/${subjectNumber}/aulas/${nextLesson.number}`);
  }, [router, courseSlug, stepNumber, subjectNumber]);

  const handleToggleCompletion = useCallback((lessonId: number) => {
    toggleLessonCompletion(courseSlug, stepNumber, subjectNumber, lessonId);
  }, [toggleLessonCompletion, courseSlug, stepNumber, subjectNumber]);

  return (
    <aside className="flex h-auto lg:h-full min-h-0 flex-col gap-3 p-4 sm:p-6 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">
      <div className="flex items-center justify-between pr-2">
        <h3 className="text-lg font-semibold">Playlist de Aulas</h3>
        <span className="text-sm font-semibold">
          {completedLessons.length} de {lessons.length}
        </span>
      </div>

      <Progress value={completedLessonsProgress} />
      <div className="flex min-h-0 flex-col flex-1">
        <ScrollArea className="h-72 sm:h-96 lg:h-full w-full overflow-hidden">
          <ul className="space-y-2 pr-2">
            {lessons.map((lesson) => (
              <MySubjectSidebarItem
                key={lesson.id}
                lesson={lesson}
                isSelected={currentLesson?.id === lesson.id}
                isCompleted={completedLessons.includes(lesson.id)}
                onSelect={handleSelectLesson}
                onToggleCompletion={handleToggleCompletion}
              />
            ))}
          </ul>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default MySubjectSidebar;
