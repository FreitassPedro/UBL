import { getCurriculum } from "@/services/curriculum.service";
import { useQueries } from "@tanstack/react-query";

export const useCurriculums = (acronyms: string[]) => {
  return useQueries({
    queries: acronyms.map((acronym) => ({
      queryKey: ["curriculum", acronym],
      queryFn: () => getCurriculum(acronym),
      staleTime: Infinity,
    })),
  });
};
