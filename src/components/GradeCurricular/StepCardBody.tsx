import { SubjectCard } from "./SubjectCard";
import type { Etapa } from "../../data/gradeCurricular";

interface StepCardBodyProps {
    stage: Etapa;
}
export const StepCardBody: React.FC<StepCardBodyProps> = ({ stage }) => {

    return (
        <div className="border-t border-white/10 pt-6 px-6">
            <div className="flex items-center gap-2 mb-6">
                <span className="font-bold text-white text-lg">Disciplinas</span>
                <span className="text-gray-400">/ Pré-requisitos</span>
            </div>
            <ul className="space-y-6 my-6">
                {stage.cadeiras.map((subject, subjectIndex) => (
                    <SubjectCard
                        key={subjectIndex}
                        subject={subject}
                        index={subjectIndex}
                    />
                ))}
            </ul>
        </div>
    )
}