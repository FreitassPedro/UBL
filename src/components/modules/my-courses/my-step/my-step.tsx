import StepCard from "@/components/shared/courses/step/step-card";
import { StepStats } from "@/components/shared/courses/step/step-stats";
import Course from "@/types/course/course.interface";

interface MyStepProps {
  stepNumber: number;
  course: Course;
}

export const MyStep = ({ stepNumber, course }: MyStepProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <StepCard
        stepNumber={stepNumber}
        label="Progresso da Etapa"
        className="md:p-8"
      >
        <StepStats stepNumber={stepNumber} course={course} />
      </StepCard>
    </div>
  );
};

export default MyStep;
