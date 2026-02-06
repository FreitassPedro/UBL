import { getTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface StepCardProps {
  stepNumber: number;
  label: string;
  className?: string;
  children?: ReactNode;
}

export const StepCard = ({
  stepNumber,
  label,
  className,
  children,
}: StepCardProps) => {
  const theme = getTheme(stepNumber);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-zinc-900/80 p-5 sm:p-6",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br to-transparent opacity-50",
          theme.glow,
        )}
      />
      <div className="relative z-10 flex flex-col gap-6 w-full sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:items-end">
        <div className="space-y-2">
          <div
            className={cn(
              "flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] sm:text-xs",
              theme.text,
            )}
          >
            <Sparkles className="h-3 w-3" />
            <span>{label}</span>
          </div>
          <div className="text-3xl text-white tracking-tight whitespace-nowrap sm:text-4xl">
            Etapa {stepNumber}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default StepCard;
