"use client";

import MyCourseProgressStoreContext from "@/contexts/course-progress-store-context";
import { toCourseProgress, toCourseProgressFromSubjectRef } from "@/mappers/course.mapper";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import Course from "@/types/course/course.interface";
import { useContext, useMemo } from "react";

type UseCourseProgressArgs =
  | { course: Course }
  | { courseSlug: string; stepNumber: number; subjectNumber: number; totalLessons: number };

export const useCourseProgress = (args: UseCourseProgressArgs) => {
  const { progressStore } = useContext(MyCourseProgressStoreContext);
  const progress: CourseProgress = useMemo<CourseProgress>(() => {
    if ("course" in args) {
      return toCourseProgress(args.course, progressStore);
    }

    return toCourseProgressFromSubjectRef(
      args.courseSlug,
      args.stepNumber,
      args.subjectNumber,
      args.totalLessons,
      progressStore,
    );
  }, [args, progressStore]);
  return progress;
};

export default useCourseProgress;
