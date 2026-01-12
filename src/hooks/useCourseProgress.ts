import { ProgressContext } from "@/contexts/ProgressContext";
import { useContext } from "react";

export function useCourseProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error(
      "useCourseProgress must be used within a CourseProgressProvider"
    );
  }
  return context;
}
