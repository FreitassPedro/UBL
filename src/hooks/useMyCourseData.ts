import { ProgressContext } from "@/contexts/ProgressContext";
import { CurriculumCC, CurriculumMath } from "@/data/Curriculum";
import { mapCurriculumToMyCurriculumProgress } from "@/mappers/curriculum.mapper";
import type { MyCurriculumProgress } from "@/types/curriculum";
import { useContext, useMemo } from "react";

export type CourseOption = "Computacao" | "Matematica";
export type CourseSlug = "ciencia-da-computacao" | "matematica";

const courseSlugByOption: Record<CourseOption, CourseSlug> = {
  Computacao: "ciencia-da-computacao",
  Matematica: "matematica",
};

const courseOptionBySlug: Record<CourseSlug, CourseOption> = {
  "ciencia-da-computacao": "Computacao",
  matematica: "Matematica",
};

export const getCourseSlug = (option: CourseOption): CourseSlug =>
  courseSlugByOption[option];

export const getCourseOptionFromSlug = (slug?: string): CourseOption | null => {
  if (!slug || !(slug in courseOptionBySlug)) return null;
  return courseOptionBySlug[slug as CourseSlug];
};

/**
/* Converte curriculo de acordo com o curso selecionado e aulas assistidas
/* @param course string
/* @returns MyGradeProgress
*/
export const useMyCourseData = () => {
  const { completedLessons } = useContext(ProgressContext);
  const computacaoProgress = useMemo(() => {
    return mapCurriculumToMyCurriculumProgress(CurriculumCC, completedLessons);
  }, [completedLessons]);

  const matematicaProgress = useMemo(() => {
    return mapCurriculumToMyCurriculumProgress(
      CurriculumMath,
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
