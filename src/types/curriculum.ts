import type { MyStepProgress, Step } from "@/types/step";

export interface Curriculum {
  id: number;
  curriculo: string;
  steps: Step[];
}

export interface MyCurriculumProgress extends Curriculum {
  steps: MyStepProgress[];
  progress: number;
  isCompleted: boolean;
}
