"use client";

import { courseProgressStoreSchema } from "@/schemas/course-progress/course-progress-store.schema";
import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";
import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";

const KEY: string = "user-progress";

export interface CourseProgressStoreContextType {
  progressStore: CourseProgressStore;
  toggleLessonCompletion: (courseSlug: string, semesterNumber: number, subjectNumber: number, lessonId: number) => void;
}

export const CourseProgressStoreContext = createContext<CourseProgressStoreContextType>(
  {} as CourseProgressStoreContextType,
);

export const CourseProgressStoreProvider = ({ children }: { children: ReactNode }) => {
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
    (courseSlug: string, semesterNumber: number, subjectNumber: number, lessonId: number): void => {
      setProgressStore((prev) => {
        const course = prev[courseSlug] ?? {};
        const semester = course[semesterNumber] ?? {};
        const lessons = semester[subjectNumber] ?? [];
        const nextLessons = lessons.includes(lessonId)
          ? lessons.filter((id) => id !== lessonId)
          : [...lessons, lessonId];

        if (nextLessons.length > 0) {
          return {
            ...prev,
            [courseSlug]: {
              ...course,
              [semesterNumber]: {
                ...semester,
                [subjectNumber]: nextLessons,
              },
            },
          };
        }

        const { [subjectNumber]: _removedSubject, ...nextSemester } = semester;
        if (Object.keys(nextSemester).length > 0) {
          return {
            ...prev,
            [courseSlug]: {
              ...course,
              [semesterNumber]: nextSemester,
            },
          };
        }

        const { [semesterNumber]: _removedSemester, ...nextCourse } = course;
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

  const context = useMemo<CourseProgressStoreContextType>(
    () => ({ progressStore, toggleLessonCompletion }),
    [progressStore, toggleLessonCompletion],
  );

  return (
    <CourseProgressStoreContext value={context}>
      {children}
    </CourseProgressStoreContext>
  );
};

export default CourseProgressStoreContext;
