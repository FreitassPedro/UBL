import { SemesterSubjectItem } from "@/components/curriculum/SemesterSubjectItem";
import type { Etapa } from "@/types/etapa";

interface SemesterBodyProps {
    stage: Etapa;
}
export const SemesterBody: React.FC<SemesterBodyProps> = ({ stage }) => {

    return (
        <div className="border-t border-white/40 bg-zinc-800/80 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300 ease-in">
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
