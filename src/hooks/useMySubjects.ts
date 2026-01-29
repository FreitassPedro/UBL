import { useCurriculums } from "@/hooks/useCurriculums";
import { useUserProgress } from "@/hooks/useUserProgress";
import type MySubject from "@/types/my-subject";
import { useMemo, useState } from "react";

export const useMySubjects = () => {
  const { progress } = useUserProgress();
  const activeCurriculums = Object.keys(progress);
  const curriculumQueries = useCurriculums(activeCurriculums);
  const [orderBy, setOrderBy] = useState<string>("etapas");

  const mySubjects: MySubject[] = useMemo(() => {
    const innerMySubjects: MySubject[] = [];
    for (const curriculumQuery of curriculumQueries) {
      const curriculum = curriculumQuery.data;
      if (!curriculum) {
        continue;
      }

      const curriculumProgress = progress[curriculum.acronym];
      if (!curriculumProgress) {
        continue;
      }

      for (const step of curriculum.steps) {
        const stepProgress = curriculumProgress[step.number];
        if (!stepProgress) {
          continue;
        }

        for (const subject of step.subjects) {
          const subjectProgress = stepProgress[subject.name];
          if (!subjectProgress) {
            continue;
          }

          innerMySubjects.push({
            ...subject,
            curriculumAcronym: curriculum.acronym,
            curriculumName: curriculum.name,
            stepNumber: step.number,
            completedLessons: subjectProgress.length,
          });
        }
      }
    }

    return innerMySubjects.sort((a, b) => {
      switch (orderBy) {
        case "etapas":
          return a.stepNumber - b.stepNumber;
        case "progresso":
          return b.completedLessons - a.completedLessons;
        case "curso":
          return a.curriculumName.localeCompare(b.curriculumName);
        default:
          return 0;
      }
    });
  }, [progress, curriculumQueries, orderBy]);

  return {
    mySubjects,
    orderBy,
    setOrderBy,
  };
};
