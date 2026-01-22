import type { Step } from "@/types/step";

export function formatSecondsToMinutes(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}min`;
}

export function formatStepToHours(step: Step): string {
  const hours = Math.round(
    step.subjects
      .flatMap((subject) => subject.lessons)
      .reduce((acc, lesson) => acc + (lesson.duration ?? 0), 0) / 3600,
  );

  return `${hours}h`;
}
