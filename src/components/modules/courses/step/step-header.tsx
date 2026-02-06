import StepCard from "@/components/shared/courses/step/step-card";
import { StepStats } from "@/components/shared/courses/step/step-stats";
import { cn } from "@/lib/utils";
import Step from "@/types/step";
import { ChevronRight } from "lucide-react";

interface StepHeaderProps {
  step: Step;
}

export const StepHeader = ({ step }: StepHeaderProps) => {
  return (
    <StepCard
      stepNumber={step.number}
      label="Grade Curricular"
      className="cursor-pointer rounded-xl border-0 bg-zinc-900 p-4 shadow-none sm:p-6 group-open:rounded-b-none"
    >
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end lg:w-auto">
        <StepStats step={step} />
        <div className="flex w-full items-center justify-between text-xs uppercase tracking-wide sm:w-auto sm:justify-end">
          <span className="px-3 py-1 leading-tight">
            <span className="block text-muted-foreground">Clique para</span>
            <span className="block text-zinc-300">
              <span className="hidden group-open:inline">Recolher</span>
              <span className="inline group-open:hidden">Expandir</span>
            </span>
          </span>
          <ChevronRight
            className={cn(
              "h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-open:rotate-90",
            )}
          />
        </div>
      </div>
    </StepCard>
  );
};

export default StepHeader;
