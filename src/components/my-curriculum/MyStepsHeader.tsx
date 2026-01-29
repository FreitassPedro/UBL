import { getTheme } from "@/lib/theme";
import { formatSecondsToHours } from "@/lib/time";
import { cn } from "@/lib/utils";
import type MyStep from "@/types/my-step";
import { BookOpen, Clock, Sparkles } from "lucide-react";

interface MyStepsHeaderProps {
  myStep: MyStep;
}

export const MyStepsHeader = ({ myStep }: MyStepsHeaderProps) => {
  const theme = getTheme(myStep.number);
  const completedSubjects = myStep.subjects.filter(
    (subject) =>
      subject.lessons > 0 && subject.completedLessons >= subject.lessons,
  ).length;
  const totalDuration: string = formatSecondsToHours(
    myStep.subjects.reduce((acc, lesson) => acc + (lesson.duration ?? 0), 0),
  );

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
              Etapa {myStep.number}
            </h2>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-zinc-400 bg-zinc-950/30 p-3 rounded-xl border border-white/5 backdrop-blur-md w-full sm:w-auto">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-zinc-800 rounded-md">
                <BookOpen className="w-4 h-4 text-zinc-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase font-bold">
                  Cadeiras
                </span>
                <span className="text-zinc-200 font-medium">
                  {completedSubjects}
                  <span className="text-zinc-600">/</span>{" "}
                  {myStep.subjects.length}
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-800 sm:w-px sm:h-8" />
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-zinc-800 rounded-md">
                <Clock className="w-4 h-4 text-zinc-300" />
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
        </div>
      </div>
    </div>
  );
};
