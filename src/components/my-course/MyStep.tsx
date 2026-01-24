import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getProgressTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import type { MySubjectProgress } from "@/types/subject";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MyStepProps {
  subject: MySubjectProgress;
}

export const MyStep = ({ subject }: MyStepProps) => {
  const status = getProgressTheme(subject.progress);

  return (
    <Link to={`/disciplinas/${subject.id}`} className="group block">
      <Card
        className={cn(
          "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 border transition-all duration-300 ease-out hover:bg-zinc-800/80 hover:translate-x-1 hover:shadow-lg p-4 sm:p-6",
          status.border,
          status.bg,
        )}
      >
        {/* Ícone / Imagem */}
        <div className="relative shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 shadow-inner">
            <img
              src={`https://placehold.co/60x60/18181b/a1a1aa?text=${subject.name.substring(0, 2).toUpperCase()}`}
              alt={subject.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
          {/* Badge de Status flutuante (opcional, visual cleaner sem ele, mas útil para UX) */}
          <div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-0.5 border border-zinc-800">
            {<status.icon className={status.iconColor} />}
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex-1 min-w-0 space-y-2 w-full">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base sm:text-lg font-medium text-zinc-200 group-hover:text-white truncate pr-4">
              {subject.name}
            </h3>

            {/* Botão Call to Action (visível no hover ou sempre visível desktop) */}
            <div
              className={cn(
                "hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/40 cursor-pointer",
                subject.progress === 100
                  ? "text-emerald-100/90 border-emerald-300/40 bg-emerald-500/10"
                  : subject.progress > 0
                    ? "text-blue-200/85 border-blue-400/35 bg-blue-950/30"
                    : "text-zinc-300/90 border-zinc-500/40 bg-zinc-800/30",
              )}
            >
              {subject.progress === 100
                ? "Revisar"
                : subject.progress > 0
                  ? "Continuar"
                  : "Iniciar"}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Barra de Progresso e Meta info */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>
                {subject.progress === 100
                  ? "Concluído"
                  : subject.progress > 0
                    ? "Progresso"
                    : "Comece a assistir"}
              </span>
              <span className={status.color}>{subject.progress}%</span>
            </div>

            {/* Container da barra de progresso ajustada */}
            {subject.progress > 0 && (
              <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                <div className="h-full w-full">
                  <Progress value={subject.progress} />
                </div>
              </div>
            )}

            <div className="text-xs text-zinc-600 pt-0.5">
              {subject.totalCompleted} de {subject.lessons.length} aulas
              concluídas
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
