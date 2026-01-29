import api from "@/services/api";
import type { Lesson } from "@/types/lesson";

export async function getLessons(curriculumAcronym: string, stepId: number, subjectId: number): Promise<Lesson[]> {
  const { data } = await api.get<Lesson[]>(`/curriculums/${curriculumAcronym}/steps/${stepId}/${subjectId}.json`);
  return data;
}
