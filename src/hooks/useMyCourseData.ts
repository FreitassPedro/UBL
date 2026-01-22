import { ProgressContext } from "@/contexts/ProgressContext";
import { CurriculoCC, CurriculoMatematica } from "@/data/GradeCurricular";
import { mapCurriculumToMyCurriculumProgress } from "@/mappers/curriculum.mapper";
import type { MyCurriculumProgress } from "@/types/curriculum";
import { useContext, useMemo } from "react";

export type CourseOption = "Computacao" | "Matematica";

/**
/* Converte curriculo de acordo com o curso selecionado e aulas assistidas
/* @param course string
/* @returns MyGradeProgress
*/
export const useMyCourseData = () => {
  const { completedLessons } = useContext(ProgressContext);
  const computacaoProgress = useMemo(() => {
    return mapCurriculumToMyCurriculumProgress(CurriculoCC, completedLessons);
  }, [completedLessons]);

  const matematicaProgress = useMemo(() => {
    return mapCurriculumToMyCurriculumProgress(
      CurriculoMatematica,
      completedLessons,
    );
  }, [completedLessons]);

  const getCourseProgress = (course: string): MyCurriculumProgress | null => {
    if (course === "Computacao") {
      return computacaoProgress;
    }
    if (course === "Matematica") {
      return matematicaProgress;
    }

    return null;
  };

  return {
    computacaoProgress,
    matematicaProgress,
    getCourseProgress,
  };
};
