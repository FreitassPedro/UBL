import { getLessons } from "@/services/lesson.service";
import type { Lesson } from "@/types/lesson";
import { useQuery } from "@tanstack/react-query";

export const useLessons = (curriculumAcronym?: string, stepNumber?: number, subjectId?: number) => {
  return useQuery<Lesson[]>({
    queryKey: ["lessons", curriculumAcronym, stepNumber, subjectId],
    queryFn: () => getLessons(curriculumAcronym!, stepNumber!, subjectId!),
    enabled: Boolean(curriculumAcronym) && Number.isFinite(stepNumber) && Number.isFinite(subjectId),
    staleTime: Infinity,
  });
};
