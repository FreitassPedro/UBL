import { MyStep } from "@/components/my-course/MyStep";
import { MyStepsHeader } from "@/components/my-course/MyStepsHeader";
import MyStepsNavigation from "@/components/my-course/MyStepsNavigation";
import type { MyCurriculumProgress } from "@/types/curriculum";
import { useEffect, useState } from "react";

interface MyStepsProps {
  courseProgress: MyCurriculumProgress;
  activeStepId?: number | null;
  getStepHref?: (stepId: number) => string;
}

export const MySteps = ({
  courseProgress,
  activeStepId,
  getStepHref,
}: MyStepsProps) => {
  const fallbackStepId = courseProgress.steps[0]?.id || 1;
  const [activeStep, setActiveStep] = useState<number>(
    activeStepId ?? fallbackStepId,
  );

  useEffect(() => {
    setActiveStep(activeStepId ?? fallbackStepId);
  }, [activeStepId, fallbackStepId, courseProgress.curriculo]);

  return (
    <div className="flex flex-col w-full space-y-8">
      {/* Navegação por Abas (Tabs) */}
      <div className="flex flex-col w-full items-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          {courseProgress.curriculo}
        </h2>
        <MyStepsNavigation
          steps={courseProgress.steps}
          activeStep={activeStep}
          getStepHref={getStepHref}
          onSelect={setActiveStep}
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        {courseProgress.steps
          .filter((gr) => gr.id === activeStep)
          .map((step) => (
            <div key={step.id} className="space-y-6">
              <MyStepsHeader step={step} />
              <div className="grid grid-cols-1 gap-3">
                {step.subjects.map((subject) => (
                  <MyStep key={subject.id} subject={subject} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
