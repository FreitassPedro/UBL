"use client";

import CourseProgressStoreContext from "@/contexts/course-progress-store-context";
import { toCourseProgress, toCourseProgressFromSubjectParams } from "@/mappers/course.mapper";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import Course from "@/types/course/course.interface";
import { useContext, useMemo } from "react";

type UseCourseProgressParams =
  | { course: Course }
  | { courseSlug: string; semesterNumber: number; subjectNumber: number; totalLessons: number };

export const useCourseProgress = (params: UseCourseProgressParams) => {
  const { progressStore } = useContext(CourseProgressStoreContext);
  const progress: CourseProgress = useMemo<CourseProgress>(() => {
    if ("course" in params) {
      return toCourseProgress(params.course, progressStore);
    }

    return toCourseProgressFromSubjectParams(
      params.courseSlug,
      params.semesterNumber,
      params.subjectNumber,
      params.totalLessons,
      progressStore,
    );
  }, [params, progressStore]);
  return progress;
};

export default useCourseProgress;
