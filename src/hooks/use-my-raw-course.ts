"use client";

import MyRawCourse from "@/types/my-raw-course";
import { useEffect, useState } from "react";

const KEY: string = "user-progress";

export const useMyProgress = () => {
  const [progress, setProgress] = useState<MyRawCourse>(() => {
    if (typeof window === "undefined") {
      return {};
    }

    try {
      const rawProgress = localStorage.getItem(KEY);
      if (!rawProgress) return {};
      return JSON.parse(rawProgress);
    } catch (error) {
      console.error("Failed to parse completedLessons to localStorage:", error);
      return {};
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(KEY, JSON.stringify(progress));
      } catch (error) {
        console.error("Failed to write completedLessons to localStorage:", error);
      }
    }
  }, [progress]);

  return {
    progress,
    setProgress
  };
};

export default useMyProgress;
