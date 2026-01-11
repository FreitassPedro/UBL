import { SemesterSubjectItem } from "@/components/GradeCurricular/SemesterSubjectItem";
import type { Etapa } from "@/types/etapa";

interface SemesterBodyProps {
    stage: Etapa;
}
export const SemesterBody: React.FC<SemesterBodyProps> = ({ stage }) => {

    return (
        <div className="border-t border-white/40 bg-zinc-800/80">
            <ul className="flex flex-col ">
                {stage.cadeiras.map((subject, subjectIndex) => (
                    <SemesterSubjectItem
                        key={subjectIndex}
                        subject={subject}
                        index={subjectIndex}
                    />
                ))}
            </ul>
        </div>
    )
}
