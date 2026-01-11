import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Etapa } from "@/types/etapa";
import { BookOpen, ChevronRight, Clock, Sparkles } from "lucide-react";

interface SemesterHeaderProps {
  stage: Etapa;
  isActive: boolean;
  onToggle: (gradeNumber: number) => void;
}

export const SemesterHeader: React.FC<SemesterHeaderProps> = ({
  stage,
  isActive,
  onToggle,
}) => {
  const getTheme = () => {
    switch (stage.number) {
      case 1:
        return {
          glow: "from-blue-500/10 via-transparent",
          text: "text-blue-400",
        };
      case 2:
        return {
          glow: "from-emerald-500/10 via-transparent",
          text: "text-emerald-400",
        };
      case 3:
        return {
          glow: "from-violet-500/10 via-transparent",
          text: "text-violet-400",
        };
      case 4:
        return {
          glow: "from-rose-500/10 via-transparent",
          text: "text-rose-400",
        };
      case 5:
        return {
          glow: "from-amber-500/10 via-transparent",
          text: "text-amber-400",
        };
      case 6:
        return {
          glow: "from-cyan-500/10 via-transparent",
          text: "text-cyan-400",
        };
      case 7:
        return {
          glow: "from-indigo-500/10 via-transparent",
          text: "text-indigo-400",
        };
      default:
        return {
          glow: "from-zinc-500/10 via-transparent",
          text: "text-zinc-400",
        };
    }
  };

  const theme = getTheme();
  const totalDurationHours = Math.round(
    stage.cadeiras
      .flatMap((cadeira) => cadeira.lessons)
      .reduce((acc, lesson) => acc + (lesson.duration ?? 0), 0) / 3600
  );

  return (
    <Card className="border-0 p-0" onClick={() => onToggle(stage.number)}>
      <CardHeader className="group overflow-hidden rounded-xl border-zinc-800 bg-zinc-900/80 p-6 cursor-pointer">
        {/* Glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-linear-to-br to-transparent opacity-60",
            theme.glow
          )}
        />

        <div className="flex gap-4 items-end justify-between">
          <div className="space-y-2">
            <div
              className={cn(
                "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider",
                theme.text
              )}
            >
              <Sparkles className="h-3 w-3" />
              <span>Grade curricular</span>
            </div>

            <CardTitle className="text-3xl font-light text-white tracking-tight">
              Etapa {stage.number}
            </CardTitle>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-zinc-400 bg-zinc-950/30 p-3 rounded-xl border border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-zinc-800 rounded-md">
                  <BookOpen className="h-4 w-4 text-zinc-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 uppercase font-bold">
                    Disciplinas
                  </span>
                  <span className="text-zinc-200 font-medium">
                    {stage.cadeiras.length}
                  </span>
                </div>
              </div>

              <Separator orientation="vertical" className="data-[orientation=vertical]:h-8 bg-zinc-800" />
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-zinc-800 rounded-md">
                  <Clock className="h-4 w-4 text-zinc-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 uppercase font-bold">
                    Tempo
                  </span>
                  <span className="text-zinc-200 font-medium">
                    {totalDurationHours}h
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-md border border-white/10 bg-zinc-980/40 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
                {isActive ? "Recolher" : "Expandir"}
              </div>
              <ChevronRight
                className={cn(
                  "h-5 w-5 text-zinc-400 transition-transform",
                  isActive ? "rotate-90" : "group-hover:translate-x-1"
                )}
              />
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
