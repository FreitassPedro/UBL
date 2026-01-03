import type { Etapa } from "../../data/gradeCurricular";
import { StepListCadeiraItem2 } from "./StepListCadeiraItem2";

interface StepCardBodyProps {
    stage: Etapa;
}
export const StepCardBody: React.FC<StepCardBodyProps> = ({ stage }) => {

    return (
        <div className="border-t border-white/20 bg-bg-card">
            {/* 
            <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-white text-lg">Disciplinas</span>
                <span className="text-gray-400">/ Pré-requisitos</span>
            </div>
            */}
            <ul className="flex flex-col ">
                {stage.cadeiras.map((subject, subjectIndex) => (
                    <StepListCadeiraItem2
                        key={subjectIndex}
                        subject={subject}
                        index={subjectIndex}
                    />
                ))}
            </ul>
        </div>
    )
}