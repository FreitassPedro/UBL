"use client";

import useCourseProgressStore from "@/hooks/use-course-progress-store";
import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";
import { createContext, useCallback, useMemo } from "react";

export interface MyCourseProgressStoreContextType {
  progressStore: CourseProgressStore;
  toggleLessonCompletion: (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number) => void;
}

export const MyCourseProgressStoreContext = createContext<MyCourseProgressStoreContextType>(
  {} as MyCourseProgressStoreContextType,
);

export const MyCourseProgressStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const { progressStore, setProgressStore } = useCourseProgressStore();
  const toggleLessonCompletion = useCallback(
    (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number): void => {
      setProgressStore((prev) => {
        const course = prev[courseSlug] ?? {};
        const step = course[stepNumber - 1] ?? {};
        const lessons = step[subjectNumber - 1] ?? [];
        const nextLessons = lessons.includes(lessonId)
          ? lessons.filter((id) => id !== lessonId)
          : [...lessons, lessonId];

        if (nextLessons.length > 0) {
          return {
            ...prev,
            [courseSlug]: {
              ...course,
              [stepNumber - 1]: {
                ...step,
                [subjectNumber - 1]: nextLessons,
              },
            },
          };
        }

        const { [subjectNumber - 1]: _, ...nextStep } = step;
        if (Object.keys(nextStep).length > 0) {
          return {
            ...prev,
            [courseSlug]: {
              ...course,
              [stepNumber - 1]: nextStep,
            },
          };
        }

        const { [stepNumber - 1]: __, ...nextCurriculum } = course;
        if (Object.keys(nextCurriculum).length > 0) {
          return {
            ...prev,
            [courseSlug]: nextCurriculum,
          };
        }

        const { [courseSlug]: ___, ...nextProgress } = prev;
        return nextProgress;
      });
    },
    [setProgressStore],
  );

  const context: MyCourseProgressStoreContextType = useMemo(
    () => ({ progressStore, toggleLessonCompletion }),
    [progressStore, toggleLessonCompletion],
  );

  return (
    <MyCourseProgressStoreContext value={context}>
      {children}
    </MyCourseProgressStoreContext>
  );
};

export default MyCourseProgressStoreContext;
