import { SemesterSubjectItem } from "@/components/curriculum/SemesterSubjectItem";
import type { Step } from "@/types/step";

interface SemesterBodyProps {
  stage: Step;
}
export const SemesterBody = ({ stage }: SemesterBodyProps) => {
  return (
    <div className="border-t border-white/40 bg-zinc-800/80 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300 ease-in">
      <ul className="flex flex-col ">
        {stage.subjects.map((subject, subjectIndex) => (
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
