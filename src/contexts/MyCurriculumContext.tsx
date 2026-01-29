import { useUserProgress } from "@/hooks/useUserProgress";
import type UserProgress from "@/types/user-progress";
import { createContext, useCallback, useMemo } from "react";

const pruneEmptyProgress = (
  progress: UserProgress,
  curriculumAcronym: string,
  stepNumber: number,
  subjectName: string,
): UserProgress => {
  const curriculum = progress[curriculumAcronym];
  if (!curriculum) {
    return progress;
  }

  const step = curriculum[stepNumber];
  if (!step) {
    return progress;
  }

  const lessons = step[subjectName];
  if (lessons && lessons.length > 0) {
    return progress;
  }

  const { [subjectName]: _, ...restSubjects } = step;
  if (Object.keys(restSubjects).length > 0) {
    return {
      ...progress,
      [curriculumAcronym]: {
        ...curriculum,
        [stepNumber]: restSubjects,
      },
    };
  }

  const { [stepNumber]: __, ...restSteps } = curriculum;
  if (Object.keys(restSteps).length > 0) {
    return {
      ...progress,
      [curriculumAcronym]: restSteps,
    };
  }

  const { [curriculumAcronym]: ___, ...restProgress } = progress;
  return restProgress;
};

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
        const nextProgress: UserProgress = {
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

        return pruneEmptyProgress(nextProgress, curriculumAcronym, stepNumber, subjectName);
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
