import { BookOpen, ChevronRight, Clock } from "lucide-react";
import type { Grade } from "../../data/gradeCurricular";

interface SemesterCardHeaderPros {
    grade: Grade;
    isActive: boolean;
    onToggle: (gradeNumber: number) => void;
}
export const SemesterCardHeader: React.FC<SemesterCardHeaderPros> = ({ grade, isActive, onToggle }) => {
    return (
        <div
            className="p-8 cursor-pointer"
            onClick={() => onToggle(grade.number)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                            Etapa {grade.number}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-300">
                            <span className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {grade.materias.length} disciplinas
                            </span>
                            {/* Ajustar a lógica da duração se 'index + 1' não for o tempo real */}
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {/* Aqui você pode calcular a duração total do semestre se tiver os dados */}
                                {grade.number}h {/* Placeholder, ajuste conforme sua lógica de 'duration' */}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Clique para</p>
                        <p className="text-white font-medium">
                            {isActive ? 'Recolher' : 'Expandir'}
                        </p>
                    </div>
                    <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </div>
            </div>
        </div>
    );
};
