import { StepStats } from "@/components/shared/courses/step/step-stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import Step from "@/types/step";
import { ChevronRight, Sparkles } from "lucide-react";

interface StepHeaderProps {
  step: Step;
}

export const StepHeader = ({ step }: StepHeaderProps) => {
  const theme = getTheme(step.number);

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-0 bg-zinc-900 p-4 shadow-none cursor-pointer sm:p-6 lg:flex-row lg:items-end lg:justify-between group-open:rounded-b-none",
        theme.border,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br to-transparent opacity-60",
          theme.glow,
        )}
      />

      <CardHeader className="p-0">
        <div
          className={cn(
            "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap",
            theme.text,
          )}
        >
          <Sparkles className="h-3 w-3" />
          <span>Grade Curricular</span>
        </div>
        <CardTitle className="text-2xl font-light text-white tracking-tight sm:text-3xl">
          Etapa {step.number}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex w-full flex-col gap-4 p-0 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end lg:w-auto">
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
      </CardContent>
    </Card>
  );
};

export default StepHeader;
