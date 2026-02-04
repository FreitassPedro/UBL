import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTheme } from "@/lib/theme";
import { formatSeconds } from "@/lib/time";
import { cn } from "@/lib/utils";
import Step from "@/types/step";
import { BookOpen, ChevronRight, Clock, Sparkles } from "lucide-react";

interface StepHeaderProps {
  step: Step;
}

export const StepHeader = ({ step }: StepHeaderProps) => {
  const theme = getTheme(step.number);
  const totalDuration: string = formatSeconds(
    step.subjects.reduce((acc, lesson) => acc + (lesson.duration ?? 0), 0),
  );

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
        <div className="inline-flex w-full flex-col gap-4 rounded-xl border border-white/10 bg-zinc-900/40 p-3 text-sm text-zinc-400 backdrop-blur-md sm:w-auto sm:flex-row sm:items-center">
          <div className="inline-flex items-center gap-2">
            <div className="rounded-md bg-zinc-800 p-1.5">
              <BookOpen className="h-4 w-4 text-zinc-300" />
            </div>
            <span className="flex flex-col">
              <span className="text-xs font-bold uppercase text-zinc-500">
                Disciplinas
              </span>
              <span className="font-medium text-zinc-200 whitespace-nowrap tabular-nums">
                {step.subjects.length}
              </span>
            </span>
          </div>

          <Separator
            orientation="vertical"
            className="hidden sm:block data-[orientation=vertical]:h-8 bg-zinc-800"
          />

          <div className="inline-flex items-center gap-3">
            <div className="rounded-md bg-zinc-800 p-1.5">
              <Clock className="h-4 w-4 text-zinc-300" />
            </div>
            <span className="flex flex-col">
              <span className="text-xs font-bold uppercase text-zinc-500">
                Tempo
              </span>
              <span className="inline-block min-w-[10ch] text-left font-medium text-zinc-200 whitespace-nowrap tabular-nums">
                {totalDuration}
              </span>
            </span>
          </div>
        </div>

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
