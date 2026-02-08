import StepProgress from "@/types/course-progress/step-progress.interface";

export default interface CourseProgress {
  slug: string;
  steps: StepProgress[];
}
