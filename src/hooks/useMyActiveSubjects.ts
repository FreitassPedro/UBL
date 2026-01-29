import { useMySubjects } from "@/hooks/useMySubjects";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useMemo, useState } from "react";

export const useMyActiveSubjects = () => {
  const [orderBy, setOrderBy] = useState<string>("etapas");
  const { progress } = useUserProgress();
  const { mySubjects, isLoading } = useMySubjects(Object.keys(progress));

  const myActiveSubjects = useMemo(() => {
    return mySubjects.sort((a, b) => {
      switch (orderBy) {
        case "etapas":
          return a.stepNumber - b.stepNumber;
        case "progresso":
          return b.progress - a.progress;
        case "curso":
          return a.curriculumName.localeCompare(b.curriculumName);
        default:
          return 0;
      }
    });
  }, [mySubjects]);

  return {
    myActiveSubjects,
    orderBy,
    setOrderBy,
    isLoading,
  };
};
