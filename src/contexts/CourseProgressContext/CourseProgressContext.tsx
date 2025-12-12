
import { createContext, useContext, useEffect, useState } from "react";

const DATA_KEY = "completedLessons";

interface CourseProgressContextType {
  completedLessons: Set<string>;
  toggleCompletion: (lessonId: string) => void;
}

const CourseProgressContext = createContext<CourseProgressContextType | undefined>(undefined);

export function CourseProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    if (typeof window === "undefined") {
      return new Set();
    }

    try {
      const saved = localStorage.getItem(DATA_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (error) {
      console.error("Failed to parse completed videos from localStorage", error);
      return new Set();
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(DATA_KEY, JSON.stringify(Array.from(completedLessons)));
      } catch (error) {
        console.error("Error writing completedVideos to localStorage:", error);
      }
    }
  }, [completedLessons]);

  const toggleVideoCompletion = (videoId: string) => {
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(videoId)) {
        next.delete(videoId);
      } else {
        next.add(videoId);
      }
      return next;
    });
  };



  return (
    <CourseProgressContext.Provider value={{ completedLessons: completedLessons, toggleCompletion: toggleVideoCompletion }}>
      {children}
    </CourseProgressContext.Provider>
  )
}

export function useCourseProgress() {
  const context = useContext(CourseProgressContext);
  if (!context) {
    throw new Error("useCourseProgress must be used within a CourseProgressProvider");
  }
  return context;
}