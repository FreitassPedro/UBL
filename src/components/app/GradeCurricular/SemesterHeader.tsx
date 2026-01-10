import type { Etapa } from "@/data/gradeCurricular";
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
          from: "from-blue-600/30",
          to: "to-blue-800/20",
        };
      case 2:
        return {
          from: "from-green-600/30",
          to: "to-green-800/20",
        };
      case 3:
        return {
          from: "from-purple-600/30",
          to: "to-purple-800/20",
        };
      case 4:
        return {
          from: "from-amber-600/30",
          to: "to-amber-800/20",
        };
      case 5:
        return {
          from: "from-pink-600/30",
          to: "to-pink-800/20",
        };
      case 6:
        return {
          from: "from-red-600/30",
          to: "to-red-800/20",
        };
      case 7:
        return {
          from: "from-teal-600/30",
          to: "to-teal-800/20",
        };
      default:
        return {
          from: "from-zinc-600/30",
          to: "to-zinc-800/20",
        };
    }
  };

  return (
    <div
      className={`p-4 cursor-pointer relative bg-bg-card ${
        isActive ? "border-b border-white/70" : ""
      } 
            absolute inset-0 bg-linear-to-r ${getColor().from} ${
        getColor().to
      }`}
      onClick={() => onToggle(stage.number)}
    >
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h3 className="text-2xl  tracking-tight text-text-main mb-2">
            Etapa {stage.number}
          </h3>
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {stage.cadeiras.length} disciplinas
            </span>
            {/* Ajustar a lógica da duração se 'index + 1' não for o tempo real */}
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {999}h
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-400">Clique para</p>
            <p className="text-white font-medium">
              {isActive ? "Recolher" : "Expandir"}
            </p>
          </div>
          <ChevronRight
            className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
              isActive ? "rotate-90" : "group-hover:translate-x-1"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
