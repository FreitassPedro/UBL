import { MyStep } from "@/components/my-curriculum/MyStep";
import { MyStepsHeader } from "@/components/my-curriculum/MyStepsHeader";
import MyStepsNavigation from "@/components/my-curriculum/MyStepsNavigation";
import type MyCurriculum from "@/types/my-curriculum";
import { useEffect, useState } from "react";

interface MyStepsProps {
  myCurriculum: MyCurriculum;
  currentStepId?: number | null;
  getStepHref?: (stepId: number) => string;
}

export const MySteps = ({
  myCurriculum,
  currentStepId,
  getStepHref,
}: MyStepsProps) => {
  const fallbackStepNumber = myCurriculum.steps[0]?.number || 1;
  const [activeStep, setActiveStep] = useState<number>(
    currentStepId ?? fallbackStepNumber,
  );

  useEffect(() => {
    setActiveStep(currentStepId ?? fallbackStepNumber);
  }, [currentStepId, fallbackStepNumber, myCurriculum.name]);

  return (
    <div className="flex flex-col w-full space-y-8 mb-10">
      {/* Navegação por Abas (Tabs) */}
      <div className="flex flex-col w-full items-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          {myCurriculum.name}
        </h2>
        <MyStepsNavigation
          mySteps={myCurriculum.steps}
          currentStep={activeStep}
          getStepHref={getStepHref}
          onSelect={setActiveStep}
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        {myCurriculum.steps
          .filter((gr) => gr.number === activeStep)
          .map((step) => (
            <div key={step.id} className="space-y-6">
              <MyStepsHeader myStep={step} />
              <div className="grid grid-cols-1 gap-3">
                {step.subjects.map((mySubject) => (
                  <MyStep key={mySubject.id} mySubject={mySubject} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
