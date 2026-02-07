import Step from "@/types/course/step.interface";

export default interface Course {
  id: number;
  slug: string;
  name: string;
  steps: Step[];
}
