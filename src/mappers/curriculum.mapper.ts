import { mapStepToMyStep } from "@/mappers/step.mapper";
import type { Curriculum } from "@/types/curriculum";
import type { MyCurriculumProgress } from "@/types/curriculum";

export function mapCurriculumToMyCurriculumProgress(
  curriculum: Curriculum,
  completedLessons: Set<string>,
): MyCurriculumProgress {
  const mySteps = curriculum.steps.map((step) =>
    mapStepToMyStep(step, completedLessons),
  );

  let totalLessonsInCurriculum = 0;
  let completedLessonsInCurriculum = 0;

  mySteps.forEach((step) => {
    step.subjects.forEach((subject) => {
      totalLessonsInCurriculum += subject.lessons.length;
      completedLessonsInCurriculum += subject.totalCompleted;
    });
  });

  const curriculumProgress =
    totalLessonsInCurriculum > 0
      ? (completedLessonsInCurriculum / totalLessonsInCurriculum) * 100
      : 0;

  const isCurriculumCompleted =
    totalLessonsInCurriculum > 0 &&
    completedLessonsInCurriculum === totalLessonsInCurriculum;

  return {
    ...curriculum,
    steps: mySteps,
    progress: curriculumProgress,
    isCompleted: isCurriculumCompleted,
  };
}
