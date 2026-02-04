import StepHeader from "@/components/courses/step/step-header";
import Subject from "@/components/courses/subject/subject";
import { cn } from "@/lib/utils";
import StepType from "@/types/step";

interface StepProps {
  step: StepType;
}

export const Step = ({ step }: StepProps) => {
  return (
    <li id={`${step.id}`}>
      <details
        className={cn(
          "group relative rounded-xl overflow-hidden shadow-lg shadow-black duration-400 transition-all ease-in-out hover:bg-zinc-800/80 hover:translate-x-2 flex flex-col bg-bg-card",
        )}
      >
        <summary className="list-none cursor-pointer focus-visible:outline-none">
          <StepHeader step={step} />
        </summary>
        <ul className="flex flex-col border-t border-white/10 bg-zinc-800/80 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300 ease-in">
          {step.subjects.map((subject, stepIndex) => (
            <Subject key={stepIndex} subject={subject} index={stepIndex} />
          ))}
        </ul>
      </details>
    </li>
  );
};
