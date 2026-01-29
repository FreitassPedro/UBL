import api from "@/services/api";
import type { Lesson } from "@/types/lesson";

export async function getLessons(curriculumAcronym: string, stepNumber: number, subjectId: number): Promise<Lesson[]> {
  const { data } = await api.get<Lesson[]>(`/curriculums/${curriculumAcronym}/steps/${stepNumber}/${subjectId}.json`);
  return data ?? [];
}
