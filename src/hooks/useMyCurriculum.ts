import { useCurriculum } from "@/hooks/useCurriculum";
import { useMySubjects } from "@/hooks/useMySubjects";
import type { Curriculum } from "@/types/curriculum";
import type MyCurriculum from "@/types/my-curriculum";
import type MyStep from "@/types/my-step";
import type MySubject from "@/types/my-subject";
import { useMemo } from "react";

export const useMyCurriculum = (
  curriculumAcronym: string,
  enabled: boolean = true,
) => {
  const { mySubjects } = useMySubjects();
  const curriculumQuery = useCurriculum(curriculumAcronym, enabled);

  const mySubjectsMap: Map<number, MySubject> = useMemo(() => {
    return new Map(mySubjects.map((s) => [s.id, s]));
  }, [mySubjects]);

  const myCurriculum: MyCurriculum | undefined = useMemo(() => {
    const curriculum: Curriculum | undefined = curriculumQuery.data;
    if (!curriculum) {
      return undefined;
    }

    return {
      ...curriculum,
      steps: curriculum.steps.map<MyStep>((step) => ({
        ...step,
        subjects: step.subjects.map<MySubject>((subject) => {
          const mySubject: MySubject | undefined = mySubjectsMap.get(subject.id);
          return {
            ...subject,
            curriculumAcronym: curriculum.acronym,
            curriculumName: curriculum.name,
            stepNumber: step.number,
            completedLessons: mySubject?.completedLessons ?? 0,
          };
        }),
      })),
    };
  }, [curriculumQuery.data, mySubjectsMap]);

  return {
    ...curriculumQuery,
    data: myCurriculum,
  };
};

export default useMyCurriculum;
