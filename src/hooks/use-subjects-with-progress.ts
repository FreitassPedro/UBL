"use client";

import MyCourseProgressStoreContext from "@/contexts/course-progress-store-context";
import { trpc } from "@/lib/trpc";
import { toCourseProgress } from "@/mappers/course.mapper";
import { toSubjectsWithProgress } from "@/mappers/subject.mapper";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import SubjectWithProgress from "@/types/course-with-progress/subject-with-progress.interface";
import Course from "@/types/course/course.interface";
import { useContext, useMemo, useState } from "react";

export enum SubjectWithProgressOrder {
  Progress = "progresso",
  Step = "etapa",
  Course = "curso",
}

export const useSubjectsWithProgress = () => {
  const { progressStore } = useContext(MyCourseProgressStoreContext);
  const [orderBy, setOrderBy] = useState<SubjectWithProgressOrder>(SubjectWithProgressOrder.Progress);

  const courseQueries = trpc.useQueries((t) =>
    Object.keys(progressStore).map((courseSlug) =>
      t.course.bySlug(
        { courseSlug },
        {
          staleTime: Infinity,
          gcTime: Infinity,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        },
      ),
    ),
  );

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
        case SubjectWithProgressOrder.Step:
          return a.stepNumber - b.stepNumber;
        case SubjectWithProgressOrder.Progress:
          return a.progress - b.progress;
        case SubjectWithProgressOrder.Course:
          return a.courseName.localeCompare(b.courseName);
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
