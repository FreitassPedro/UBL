"use client";

import useCourseProgressStore from "@/hooks/use-course-progress-store";
import { toCourseProgress } from "@/mappers/course.mapper";
import { toSubjectsWithProgress } from "@/mappers/subject.mapper";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import SubjectWithProgress from "@/types/course-with-progress/subject-with-progress.interface";
import Course from "@/types/course/course.interface";
import { useQueries } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export enum SubjectWithProgressOrder {
  Course = "curso",
  Step = "etapa",
  Progress = "progresso",
}

export const useSubjectsWithProgress = () => {
  const [orderBy, setOrderBy] = useState<SubjectWithProgressOrder>(SubjectWithProgressOrder.Progress);
  const { progressStore } = useCourseProgressStore();
  const courseQueries = useQueries({
    queries: Object.keys(progressStore).map((courseSlug) => ({
      queryKey: ["course", courseSlug],
      queryFn: async () => {
        const res = await fetch(`/api/cursos/${courseSlug}`);
        if (!res.ok) throw new Error("Curso não encontrado.");
        return res.json() as Promise<Course>;
      },
      staleTime: Infinity,
      gcTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    })),
  });

  const unorderedSubjectsWithProgress = useMemo<SubjectWithProgress[]>(() => {
    const courses: Course[] = courseQueries
      .map((query) => query.data)
      .filter((course): course is Course => course !== undefined);

    const progresses: CourseProgress[] = courses.map((course) => toCourseProgress(course, progressStore));
    return toSubjectsWithProgress(courses, progresses);
  }, [courseQueries, progressStore]);

  const orderedSubjectsWithProgress: SubjectWithProgress[] = useMemo<SubjectWithProgress[]>(() => {
    return [...unorderedSubjectsWithProgress].sort((a, b) => {
      switch (orderBy) {
        case SubjectWithProgressOrder.Course:
          return a.courseName.localeCompare(b.courseName);
        case SubjectWithProgressOrder.Step:
          return a.stepNumber - b.stepNumber;
        case SubjectWithProgressOrder.Progress:
          return a.progress - b.progress;
        default:
          return 0;
      }
    });
  }, [orderBy, unorderedSubjectsWithProgress]);

  return {
    subjectsWithProgress: orderedSubjectsWithProgress,
    orderBy: orderBy,
    setOrderBy: setOrderBy,
    isLoading: courseQueries.some((query) => query.isLoading),
    isError: courseQueries.some((query) => query.isError),
  };
};

export default useSubjectsWithProgress;
