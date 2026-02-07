"use client";

import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";
import { useEffect, useState } from "react";

const KEY: string = "user-progress";

export const useCourseProgressStore = () => {
  const [progressStore, setProgressStore] = useState<CourseProgressStore>(() => {
    if (typeof window === "undefined") {
      return {};
    }

    try {
      const progress = localStorage.getItem(KEY);
      if (!progress) return {};
      return JSON.parse(progress);
    } catch (error) {
      console.error("Failed to parse completedLessons to localStorage:", error);
      return {};
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(KEY, JSON.stringify(progressStore));
      } catch (error) {
        console.error("Failed to write completedLessons to localStorage:", error);
      }
    }
  }, [progressStore]);

  return {
    progressStore,
    setProgressStore
  };
};

export default useCourseProgressStore;
