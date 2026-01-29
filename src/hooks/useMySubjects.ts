import { useCurriculums } from "@/hooks/useCurriculums";
import { useUserProgress } from "@/hooks/useUserProgress";
import type MySubject from "@/types/my-subject";
import { useMemo } from "react";

export const useMySubjects = (acronyms: string[]) => {
  const { progress } = useUserProgress();
  const curriculumQueries = useCurriculums(acronyms);
  
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

          const totalLessons: number = subject.lessons ?? 0;
          const completedLessons: number = subjectProgress.length;
          const progress: number =
          totalLessons > 0
          ? Math.round((completedLessons / totalLessons) * 100)
          : 0;
          
          return [
            {
              ...subject,
              curriculumAcronym: curriculum.acronym,
              curriculumName: curriculum.name,
              stepNumber: step.number,
              completedLessons: completedLessons,
              progress: progress,
            },
          ];
        });
      });
    });
  }, [progress, curriculumQueries]);
  
  const hasQueries: boolean = acronyms.length > 0;
  return {
    mySubjects: mySubjects,
    isLoading: hasQueries && curriculumQueries.some((query) => query.isLoading),
    isSuccess: hasQueries && curriculumQueries.every((query) => query.isSuccess),
  };
};
