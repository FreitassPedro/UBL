
import { createContext, useContext, useEffect, useState } from "react";
import type { Video } from "../types/course"; 

interface CourseProgressContextType {
  completedVideos: Set<string>;
  toggleVideoCompletion: (videoId: string) => void;
  getProgress: (courseId: string, videos: Video[]) => number;
}

const CourseProgressContext = createContext<CourseProgressContextType | undefined>(undefined);

export function CourseProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedVideos, setCompletedVideos] = useState<Set<string>>(() => {
    if (typeof window === "undefined") {
      return new Set();
    }

    try {
      const saved = localStorage.getItem("completedVideos");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (error) {
      console.error("Failed to parse completed videos from localStorage", error);
      return new Set();
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("completedVideos", JSON.stringify(Array.from(completedVideos)));
      } catch (error) {
        console.error("Error writing completedVideos to localStorage:", error);
      }
    }
  }, [completedVideos]);

  const toggleVideoCompletion = (videoId: string) => {
    setCompletedVideos((prev) => {
      const next = new Set(prev);
      if (next.has(videoId)) {
        next.delete(videoId);
      } else {
        next.add(videoId);
      }
      return next;
    });
  };

  const getProgress = (courseId: string, videos: Video[]) => {
    if (!courseId || !videos || videos.length === 0) {
      return 0;
    }
    const completedVideosInCourse = videos.filter((video) => completedVideos.has(video.id)).length;
    const progressPercentage = (completedVideosInCourse / videos.length) * 100;
    return isNaN(progressPercentage) ? 0 : progressPercentage;
  };

  return (
    <CourseProgressContext.Provider value={{ completedVideos, toggleVideoCompletion, getProgress }}>
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