import { useUserProgress } from "@/hooks/useUserProgress";
import type UserProgress from "@/types/user-progress";
import { createContext, useCallback, useMemo } from "react";

export interface UserProgressContextType {
  progress: UserProgress;
  toggleLessonCompletion: (curriculumAcronym: string, stepNumber: number, subjectName: string, lessonId: number) => void;
}

export const UserProgressContext = createContext<UserProgressContextType>(
  {} as UserProgressContextType,
);

export const UserProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const { progress, setProgress } = useUserProgress();
  const toggleLessonCompletion = useCallback(
    (curriculumAcronym: string, stepNumber: number, subjectName: string, lessonId: number): void => {
      setProgress((prev) => {
        const curriculum = prev[curriculumAcronym] ?? {};
        const step = curriculum[stepNumber] ?? {};
        const lessons = step[subjectName] ?? [];
        return {
          ...prev,
          [curriculumAcronym]: {
            ...curriculum,
            [stepNumber]: {
              ...step,
              [subjectName]: lessons.includes(lessonId)
                ? lessons.filter((id) => id !== lessonId)
                : [...lessons, lessonId],
            },
          },
        };
      });
    },
    [setProgress]
  );

  const context: UserProgressContextType = useMemo(
    () => ({ progress, toggleLessonCompletion }),
    [progress, toggleLessonCompletion]
  );

  return (
    <UserProgressContext value={context}>
      {children}
    </UserProgressContext>
  );
};

export default UserProgressContext;
