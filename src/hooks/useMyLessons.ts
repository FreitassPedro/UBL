import UserProgressContext from "@/contexts/UserProgressContext";
import { useLessons } from "@/hooks/useLessons";
import type { MyLesson } from "@/types/my-lesson";
import type MySubject from "@/types/my-subject";
import { useContext, useMemo } from "react";

export const useMyLessons = (subject?: MySubject) => {
  const { progress } = useContext(UserProgressContext);
  const lessonsQuery = useLessons(
    subject?.curriculumAcronym,
    subject?.stepNumber,
    subject?.id,
  );

  const myLessons: MyLesson[] = useMemo(() => {
    if (!subject || !lessonsQuery.data) {
      return [];
    }

    const completedLessonIds =
      progress[subject.curriculumAcronym]?.[subject.stepNumber]?.[
        subject.name
      ] ?? [];

    return lessonsQuery.data.map((lesson) => ({
      ...lesson,
      isCompleted: completedLessonIds.includes(lesson.id),
    }));
  }, [lessonsQuery.data, progress, subject]);

  return {
    lessonsQuery: lessonsQuery,
    myLessons: myLessons,
    isLoading: lessonsQuery.isLoading,
    isSuccess: lessonsQuery.isSuccess,
  };
};
