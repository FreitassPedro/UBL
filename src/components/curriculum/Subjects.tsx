import { Subject } from "@/components/curriculum/Subject";
import { SubjectHeader } from "@/components/curriculum/SubjectHeader";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { Step } from "@/types/step";
import React from "react";

interface SubjectsProps {
  stage: Step;
}

export const Subjects = ({ stage }: SubjectsProps) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <Collapsible open={isActive} onOpenChange={setIsActive} asChild>
      <li
        key={stage.id}
        id={`${stage.id}`}
        className={cn(
          "relative rounded-xl overflow-hidden shadow-lg shadow-black duration-400 transition-all ease-in-out hover:bg-zinc-800/80 hover:translate-x-2 flex flex-col",
          isActive
            ? "border-blue/20 shadow-lg shadow-black/20 bg-zinc-800/90 translate-x-2"
            : "bg-bg-card",
        )}
      >
        <CollapsibleTrigger asChild>
          <SubjectHeader
            stage={stage}
            isActive={isActive}
            onToggle={() => setIsActive(!isActive)}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="border-t border-white/10 bg-zinc-800/80 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300 ease-in">
            <ul className="flex flex-col ">
              {stage.subjects.map((subject, subjectIndex) => (
                <Subject
                  key={subjectIndex}
                  subject={subject}
                  index={subjectIndex}
                />
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </li>
    </Collapsible>
  );
};
