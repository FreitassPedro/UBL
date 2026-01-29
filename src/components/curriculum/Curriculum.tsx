import { Step } from "@/components/curriculum/Step";
import CurriculumGraphModal from "@/components/node-graphs/CurriculumGraphModal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Curriculum as CurriculumType } from "@/types/curriculum";
import { GraduationCap, Network } from "lucide-react";
import React, { useEffect } from "react";

interface CurriculumProps {
  selectedCourse: CurriculumType;
}

export const Curriculum = ({ selectedCourse }: CurriculumProps) => {
  const [nodeView, setNodeView] = React.useState<boolean>(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCourse]);

  return (
    <section className="w-full py-8" ref={sectionRef}>
      <div className="mx-auto max-w-6xl container px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedCourse.name}
            </h2>
          </div>
          <Separator className="hidden md:block flex-1 bg-linear-to-r from-ubl-blue to-ubl-green rounded" />
          <Button
            onClick={() => setNodeView(true)}
            variant="outline"
            size="lg"
            className="cursor-pointer h-10 rounded-xl border-white/10 bg-zinc-950/40 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:bg-zinc-800/70 hover:text-white w-full md:w-auto justify-center"
          >
            <Network className="w-4 h-4 text-ubl-green" />
            <span className="whitespace-nowrap">Visualizar como grafo</span>
          </Button>
        </div>

        <CurriculumGraphModal
          open={nodeView}
          onOpenChange={setNodeView}
          grade={selectedCourse}
        />

        {/* Etapas (Stages) */}
        <ul className="space-y-4">
          {selectedCourse.steps.map((step) => {
            return <Step key={step.id} step={step} />;
          })}
        </ul>
      </div>
    </section>
  );
};
