"use client";

import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";
import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";

const KEY: string = "user-progress";

export interface MyCourseProgressStoreContextType {
  progressStore: CourseProgressStore;
  toggleLessonCompletion: (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number) => void;
}

export const MyCourseProgressStoreContext = createContext<MyCourseProgressStoreContextType>(
  {} as MyCourseProgressStoreContextType,
);

export const MyCourseProgressStoreProvider = ({ children }: { children: ReactNode }) => {
  const [progressStore, setProgressStore] = useState<CourseProgressStore>({});

  useEffect(() => {
    try {
      const rawProgressStore = localStorage.getItem(KEY);
      if (rawProgressStore) {
        setProgressStore(JSON.parse(rawProgressStore));
      };
    } catch (error) {
      console.error("Failed to parse completedLessons to localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(KEY, JSON.stringify(progressStore));
      } catch (error) {
        console.error("Failed to write completedLessons to localStorage:", error);
      }
    }
  }, [progressStore]);

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

        const { [stepNumber - 1]: __, ...nextCourse } = course;
        if (Object.keys(nextCourse).length > 0) {
          return {
            ...prev,
            [courseSlug]: nextCourse,
          };
        }

        const { [courseSlug]: ___, ...nextProgress } = prev;
        return nextProgress;
      });
    },
    [setProgressStore],
  );

  const context = useMemo<MyCourseProgressStoreContextType>(
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
