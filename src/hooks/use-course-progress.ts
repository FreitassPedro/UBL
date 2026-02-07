"use client";

import useCourseProgressStore from "@/hooks/use-course-progress-store";
import { toProgress } from "@/mappers/course.mapper";
import Course from "@/types/course/course.interface";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import { useMemo } from "react";

export const useCourseProgress = (course: Course) => {
  const { progressStore: progressesStore } = useCourseProgressStore();
  const progress: CourseProgress = useMemo<CourseProgress>(() => {
    return toProgress(course, progressesStore);
  }, [course, progressesStore]);
  return progress;
};

export default useCourseProgress;
