import { MyStepInfo } from "@/components/my-courses/my-step/my-step-info";
import { getTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import Course from "@/types/course";
import { Sparkles } from "lucide-react";

interface MyStepProps {
  stepNumber: number;
  course: Course;
}

export const MyStep = ({ stepNumber, course }: MyStepProps) => {
  const theme = getTheme(stepNumber);
  return (
    <div className="flex flex-col space-y-6">
      <div className="relative overflow-hidden rounded-2xl border bg-zinc-900/80 p-5 sm:p-6 md:p-8 border-zinc-800">
        <div
          className={cn(
            "absolute inset-0 bg-linear-to-br to-transparent opacity-50 pointer-events-none",
            theme.glow,
          )}
        />
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div
              className={cn(
                "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider",
                theme.text,
              )}
            >
              <Sparkles className="w-3 h-3" />
              <span>Progresso da Etapa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
              Etapa {stepNumber}
            </h2>
          </div>
          <MyStepInfo stepNumber={stepNumber} course={course} />
        </div>
      </div>
    </div>
  );
};

export default MyStep;
