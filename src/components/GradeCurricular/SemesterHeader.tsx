import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Etapa } from "@/types/etapa";
import { BookOpen, ChevronRight, Clock } from "lucide-react";

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
  const getColor = () => {
    switch (stage.number) {
      case 1:
        return {
          from: "from-red-500/70",
          to: "to-orange-500/70",
        };
      case 2:
        return {
          from: "from-orange-500/70",
          to: "to-yellow-500/70",
        };
      case 3:
        return {
          from: "from-yellow-500/70",
          to: "to-green-500/70",
        };
      case 4:
        return {
          from: "from-green-500/70",
          to: "to-cyan-500/70",
        };
      case 5:
        return {
          from: "from-cyan-500/70",
          to: "to-blue-500/70",
        };
      case 6:
        return {
          from: "from-blue-500/70",
          to: "to-purple-500/70",
        };
      case 7:
        return {
          from: "from-purple-500/70",
          to: "to-pink-500/70",
        };
      default:
        return {
          from: "from-zinc-500/70",
          to: "to-zinc-700/70",
        };
    }
  };

  const totalDurationHours = Math.round(
    stage.cadeiras
      .flatMap((cadeira) => cadeira.lessons)
      .reduce((acc, lesson) => acc + (lesson.duration ?? 0), 0) / 3600
  );

  return (
    <Card
      className={cn(
        "border-0 p-0.5 rounded-xl bg-linear-to-r hover:brightness-110 transition-all",
        getColor().to,
        getColor().from
      )}
      onClick={() => onToggle(stage.number)}
    >
      <CardHeader className="flex items-center justify-between p-4 cursor-pointer rounded-xl bg-bg-card/90">
        <div className="flex items-center gap-6">
          <div>
            <CardTitle className="text-2xl tracking-tight text-text-main">
              Etapa {stage.number}
            </CardTitle>
            <CardDescription className="flex items-center gap-4 text-gray-300 mt-1">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {stage.cadeiras.length} disciplinas
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {totalDurationHours}h
              </span>
            </CardDescription>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right uppercase">
            <p className="text-xs text-gray-400">Clique para</p>
            <p className="text-lg text-white font-medium">
              {isActive ? "Recolher" : "Expandir"}
            </p>
          </div>
          <ChevronRight
            className={cn(
              "w-6 h-6 text-gray-400 transition-transform duration-300",
              isActive ? "rotate-90" : "group-hover:translate-x-1"
            )}
          />
        </div>
      </CardHeader>
    </Card>
  );
};
