import { CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTheme } from "@/lib/theme";
import { formatStepToHours } from "@/lib/time";
import { cn } from "@/lib/utils";
import type { Step } from "@/types/step";
import { BookOpen, ChevronRight, Clock, Sparkles } from "lucide-react";

interface SubjectHeaderProps {
  stage: Step;
  isActive: boolean;
  onToggle: (gradeNumber: number) => void;
}

export const SubjectHeader = ({
  stage,
  isActive,
  onToggle,
}: SubjectHeaderProps) => {
  const theme = getTheme(stage.id);
  const totalDuration: string = formatStepToHours(stage);

  return (
    <CardHeader
      className={`border-0 p-0 gap-0 ${theme.border}`}
      onClick={() => onToggle(stage.number)}
    >
      <div className="group overflow-hidden border-zinc-800 bg-zinc-900 p-6 cursor-pointer">
        {/* Glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-linear-to-br to-transparent opacity-60",
            theme.glow,
          )}
        />

        <div className="flex gap-4 items-end justify-between">
          <div className="space-y-2">
            <div
              className={cn(
                "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider",
                theme.text,
              )}
            >
              <Sparkles className="h-3 w-3" />
              <span>Grade curricular</span>
            </div>

            <CardTitle className="text-3xl font-light text-white tracking-tight">
              Etapa {stage.number}
            </CardTitle>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-4 text-sm text-zinc-400 bg-zinc-900/30 p-3 rounded-xl border border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-zinc-800 rounded-md">
                  <BookOpen className="h-4 w-4 text-zinc-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 uppercase font-bold">
                    Disciplinas
                  </span>
                  <span className="text-zinc-200 font-medium">
                    {stage.subjects.length}
                  </span>
                </div>
              </div>

              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-8 bg-zinc-800"
              />
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-zinc-800 rounded-md">
                  <Clock className="h-4 w-4 text-zinc-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 uppercase font-bold">
                    Tempo
                  </span>
                  <span className="text-zinc-200 font-medium">
                    {totalDuration}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
                <span className="text-muted-foreground">Clique para</span>
                <p className="text-muted">
                  {isActive ? "Recolher" : "Expandir"}
                </p>
              </div>
              <ChevronRight
                className={cn(
                  "h-5 w-5 text-zinc-400 transition-transform",
                  isActive ? "rotate-90" : "group-hover:translate-x-1",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </CardHeader>
  );
};
