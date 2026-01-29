import { useCurriculums } from "@/hooks/useCurriculums";
import { useUserProgress } from "@/hooks/useUserProgress";
import type MySubject from "@/types/my-subject";
import { useMemo } from "react";

export const useMySubjects = (acronyms: string[]) => {
  const { progress } = useUserProgress();
  const curriculumQueries = useCurriculums(acronyms);
  const hasQueries: boolean = acronyms.length > 0;
  const isLoading: boolean = hasQueries && curriculumQueries.some((query) => query.isLoading);
  const isSuccess: boolean = hasQueries && curriculumQueries.every((query) => query.isSuccess);

  const mySubjects: MySubject[] = useMemo(() => {
    return curriculumQueries.flatMap(({ data: curriculum }) => {
      if (!curriculum) {
        return [];
      }

      const curriculumProgress = progress[curriculum.acronym];
      if (!curriculumProgress) {
        return [];
      }

      return curriculum.steps.flatMap((step) => {
        const stepProgress = curriculumProgress[step.number];
        if (!stepProgress) {
          return [];
        }

        return step.subjects.flatMap((subject) => {
          const subjectProgress = stepProgress[subject.name];
          if (!subjectProgress) {
            return [];
          }

          return [
            {
              ...subject,
              curriculumAcronym: curriculum.acronym,
              curriculumName: curriculum.name,
              stepNumber: step.number,
              completedLessons: subjectProgress.length,
            },
          ];
        });
      });
    });
  }, [progress, curriculumQueries]);

  return {
    mySubjects: mySubjects,
    isLoading: isLoading,
    isSuccess: isSuccess,
  };
};
