"use client";

import useCourseProgressStore from "@/hooks/use-course-progress-store";
import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";
import { createContext, useCallback, useMemo } from "react";

export interface MyCourseProgressContextType {
  progresses: CourseProgressStore;
  toggleLessonCompletion: (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number) => void;
}

export const MyCourseProgressContext = createContext<MyCourseProgressContextType>(
  {} as MyCourseProgressContextType,
);

export const MyCourseProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const { progressStore: progresses, setProgressStore: setProgresses } = useCourseProgressStore();
  const toggleLessonCompletion = useCallback(
    (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number): void => {
      setProgresses((prev) => {
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
    [setProgresses],
  );

  const context: MyCourseProgressContextType = useMemo(
    () => ({ progresses, toggleLessonCompletion }),
    [progresses, toggleLessonCompletion],
  );

  return (
    <MyCourseProgressContext value={context}>
      {children}
    </MyCourseProgressContext>
  );
};

export default MyCourseProgressContext;
