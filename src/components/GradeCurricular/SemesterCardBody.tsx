import { SubjectCard } from "./SubjectCard";
import type { Grade } from "../../data/gradeCurricular";

interface SemesterCardBodyProps {
    grade: Grade;
    colors: {
        gradient: string;
        bg: string;
        border: string;
        icon: string;
    };
}
export const SemesterCardBody: React.FC<SemesterCardBodyProps> = ({ grade, colors }) => {

    return (
        <div className="px-8 pb-8 animate-in slide-in-from-top-4 duration-500">
            <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 mb-6">
                    <span className="font-bold text-white text-lg">Disciplinas</span>
                    <span className="text-gray-400">/ Pré-requisitos</span>
                </div>
                <ul className="space-y-6">
                    {grade.materias.map((subject, subjectIndex) => (
                        <SubjectCard
                            key={subjectIndex}
                            subject={subject}
                            index={subjectIndex}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}