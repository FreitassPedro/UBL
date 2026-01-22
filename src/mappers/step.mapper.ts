import { mapSubjectToMySubject } from "@/mappers/subject.mapper";
import type { MyStepProgress } from "@/types/progress";
import type { Step } from "@/types/step";

export function mapStepToMyStep(
  step: Step,
  completedLessons: Set<string>,
): MyStepProgress {
  const mySubjects = step.subjects.map((subject) =>
    mapSubjectToMySubject(subject, completedLessons),
  );

  const completedSubjectsInStep = mySubjects.filter(
    (subject) => subject.isCompleted,
  ).length;
  const totalSubjectsInStep = mySubjects.length;

  const stepProgress =
    totalSubjectsInStep > 0
      ? Math.round((completedSubjectsInStep / totalSubjectsInStep) * 100)
      : 0;

  return {
    ...step,
    subjects: mySubjects,
    name: `Step ${step.number}`,
    progress: stepProgress,
    totalCompleted: completedSubjectsInStep,
  };
}
