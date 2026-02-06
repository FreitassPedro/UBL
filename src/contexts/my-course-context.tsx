"use client";

import useMyProgress from "@/hooks/use-my-raw-course";
import MyRawCourse from "@/types/my-raw-course";
import { createContext, useCallback, useMemo } from "react";

export interface MyCourseContextType {
  progress: MyRawCourse;
  toggleLessonCompletion: (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number) => void;
}

export const MyCourseContext = createContext<MyCourseContextType>(
  {} as MyCourseContextType,
);

export const MyCourseProvider = ({ children }: { children: React.ReactNode }) => {
  const { progress, setProgress } = useMyProgress();
  const toggleLessonCompletion = useCallback(
    (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number): void => {
      setProgress((prev) => {
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
    [setProgress],
  );

  const context: MyCourseContextType = useMemo(
    () => ({ progress, toggleLessonCompletion }),
    [progress, toggleLessonCompletion],
  );

  return (
    <MyCourseContext value={context}>
      {children}
    </MyCourseContext>
  );
};

export default MyCourseContext;
