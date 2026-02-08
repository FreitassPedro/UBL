"use client";

import useCourseProgressStore from "@/hooks/use-course-progress-store";
import { toCourseProgress, toCourseProgressFromCourse } from "@/mappers/course.mapper";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import Course from "@/types/course/course.interface";
import { useMemo } from "react";

type UseCourseProgressArgs =
  | { course: Course }
  | { courseSlug: string; stepNumber: number; subjectNumber: number; totalLessons: number };

export const useCourseProgress = (args: UseCourseProgressArgs) => {
  const { progressStore: progressesStore } = useCourseProgressStore();
  const progress: CourseProgress = useMemo<CourseProgress>(() => {
    if ("course" in args) {
      return toCourseProgressFromCourse(args.course, progressesStore);
    }

    return toCourseProgress(
      args.courseSlug,
      args.stepNumber,
      args.subjectNumber,
      args.totalLessons,
      progressesStore,
    );
  }, [args, progressesStore]);
  return progress;
};

export default useCourseProgress;
