import { SemesterSubjectItem } from "@/components/app/GradeCurricular/SemesterSubjectItem";
import type { Etapa } from "@/data/gradeCurricular";

interface SemesterBodyProps {
  stage: Etapa;
}
export const SemesterBody: React.FC<SemesterBodyProps> = ({ stage }) => {
  return (
    <div className="border-t border-white/20 bg-bg-card">
      {/* <div className="flex items-center gap-2 mb-2">
        <span className="font-bold text-white text-lg">Disciplinas</span>
        <span className="text-gray-400">/ Pré-requisitos</span>
      </div> */}
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
  );
};
