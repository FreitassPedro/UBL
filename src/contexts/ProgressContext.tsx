import { createContext, useEffect, useState } from "react";

const DATA_KEY = "completedLessons";

interface ProgressContextType {
  completedLessons: Set<string>;
  toggleCompletion: (lessonId: string) => void;
}

export const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    if (typeof window === "undefined") {
      return new Set();
    }

    try {
      const saved = localStorage.getItem(DATA_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (error) {
      console.error(
        "Failed to parse completed videos from localStorage",
        error
      );
      return new Set();
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          DATA_KEY,
          JSON.stringify(Array.from(completedLessons))
        );
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
    <ProgressContext.Provider
      value={{
        completedLessons: completedLessons,
        toggleCompletion: toggleVideoCompletion,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
