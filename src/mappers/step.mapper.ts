import StepProgress from "@/types/course-progress/step-progress.interface";
import Step from "@/types/course/step.interface";
import { toSubjectProgress } from "@/mappers/subject.mapper";

export function toStepProgress(
  step: Step,
  stepProgressStore: { [subjectNumber: number]: number[] } = {},
): StepProgress {
  return {
    number: step.number,
    subjects: step.subjects.map((subject) => {
      const subjectProgress = stepProgressStore?.[subject.number - 1] ?? [];
      return toSubjectProgress(subject, subjectProgress);
    }),
  };
}
