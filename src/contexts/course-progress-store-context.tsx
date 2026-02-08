"use client";

import { courseProgressStoreSchema } from "@/schemas/course-progress/course-progress-store.schema";
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
        const parsedProgressStore = courseProgressStoreSchema.safeParse(JSON.parse(rawProgressStore) as unknown);
        if (parsedProgressStore.success) {
          setProgressStore(parsedProgressStore.data);
        } else {
          console.error("Invalid completedLessons shape in localStorage:", parsedProgressStore.error);
        }
      }
    } catch (error) {
      console.error("Failed to parse completedLessons to localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const parsedProgressStore = courseProgressStoreSchema.safeParse(progressStore);
        if (!parsedProgressStore.success) {
          console.error("Invalid completedLessons shape before persisting:", parsedProgressStore.error);
          return;
        }

        localStorage.setItem(KEY, JSON.stringify(parsedProgressStore.data));
      } catch (error) {
        console.error("Failed to write completedLessons to localStorage:", error);
      }
    }
  }, [progressStore]);

  const toggleLessonCompletion = useCallback(
    (courseSlug: string, stepNumber: number, subjectNumber: number, lessonId: number): void => {
      setProgressStore((prev) => {
        const course = prev[courseSlug] ?? {};
        const step = course[stepNumber] ?? {};
        const lessons = step[subjectNumber] ?? [];
        const nextLessons = lessons.includes(lessonId)
          ? lessons.filter((id) => id !== lessonId)
          : [...lessons, lessonId];

        if (nextLessons.length > 0) {
          return {
            ...prev,
            [courseSlug]: {
              ...course,
              [stepNumber]: {
                ...step,
                [subjectNumber]: nextLessons,
              },
            },
          };
        }

        const { [subjectNumber]: _removedSubject, ...nextStep } = step;
        if (Object.keys(nextStep).length > 0) {
          return {
            ...prev,
            [courseSlug]: {
              ...course,
              [stepNumber]: nextStep,
            },
          };
        }

        const { [stepNumber]: _removedStep, ...nextCourse } = course;
        if (Object.keys(nextCourse).length > 0) {
          return {
            ...prev,
            [courseSlug]: nextCourse,
          };
        }

        const { [courseSlug]: _removedCourse, ...nextProgress } = prev;
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
