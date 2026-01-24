import { MyStep } from "@/components/my-course/MyStep";
import { MyStepsHeader } from "@/components/my-course/MyStepsHeader";
import { cn } from "@/lib/utils";
import type { MyCurriculumProgress } from "@/types/curriculum";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="w-full overflow-x-auto pb-2 scrollbar-hide flex justify-start lg:justify-center">
          <div className="flex p-1 space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl w-max min-w-full lg:min-w-0">
            {courseProgress.steps.map((step) => {
              const isActive = activeStep === step.id;
              const stepHref = getStepHref?.(step.id);
              return stepHref ? (
                <Link
                  key={step.id}
                  to={stepHref}
                  className={cn(
                    "relative cursor-pointer px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap border border-transparent",
                    isActive
                      ? "bg-zinc-800 text-white shadow-lg shadow-black/20 border border-zinc-700"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
                  )}
                >
                  {step.name}
                  {isActive && (
                    <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-blue-500 rounded-full opacity-70"></span>
                  )}
                </Link>
              ) : (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "relative cursor-pointer px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap border border-transparent",
                    isActive
                      ? "bg-zinc-800 text-white shadow-lg shadow-black/20 border border-zinc-700"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
                  )}
                >
                  {step.name}
                  {isActive && (
                    <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-blue-500 rounded-full opacity-70"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
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
