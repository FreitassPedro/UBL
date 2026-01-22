import { SemesterBody } from "@/components/GradeCurricular/SemesterBody";
import { SemesterHeader } from "@/components/GradeCurricular/SemesterHeader";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { Etapa } from "@/types/etapa";
import React from "react";

interface SemesterCardProps {
  stage: Etapa;
}

export const SemesterCard: React.FC<SemesterCardProps> = ({ stage }) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <Collapsible open={isActive} onOpenChange={setIsActive} asChild>
        <li
          key={stage.id}
          id={`${stage.id}`}
          className={cn(
            "relative rounded-xl border overflow-hidden shadow-lg shadow-black duration-00 transition-all ease-in-out  border-white/10 hover:border-white/20 hover:bg-zinc-800/80 hover:translate-x-2 flex flex-col",
            isActive
              ? "border-blue/20 shadow-lg shadow-black/20 bg-zinc-800/90 translate-x-2"
              : "bg-bg-card"
          )}
        >
          <CollapsibleTrigger asChild>
            <SemesterHeader
              stage={stage}
              isActive={isActive}
              onToggle={() => setIsActive(!isActive)}
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SemesterBody stage={stage} />
          </CollapsibleContent>
        </li>
    </Collapsible>
  );
};
