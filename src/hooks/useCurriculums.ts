import { getCurriculum } from "@/services/curriculum.service";
import { useQueries } from "@tanstack/react-query";

export const useCurriculums = (acronyms?: string[]) => {
  const safeAcronyms = (acronyms ?? []).filter(Boolean);
  return useQueries({
    queries: safeAcronyms.map((acronym) => ({
      queryKey: ["curriculum", acronym],
      queryFn: () => getCurriculum(acronym),
      staleTime: Infinity,
    })),
  });
};
