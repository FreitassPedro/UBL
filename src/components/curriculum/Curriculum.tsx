import { Subjects } from "@/components/curriculum/Subjects";
import CurriculumGraph from "@/components/node-graphs/CurriculumGraph";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Curriculum as CurriculumType } from "@/types/curriculum";
import { GraduationCap, Network, X } from "lucide-react";
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
    <section className="w-full mt-10 py-8" ref={sectionRef}>
      <div className="mx-auto max-w-6xl container">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <GraduationCap className="w-14 h-14" />
            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedCourse.curriculo}
            </h2>
          </div>
          <Separator className="flex-1 bg-linear-to-r from-ubl-blue to-ubl-green rounded" />
          <Button
            onClick={() => setNodeView((prev) => !prev)}
            variant="outline"
            size="lg"
            className="cursor-pointer h-10 rounded-xl border-white/10 bg-zinc-950/40 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:bg-zinc-800/70 hover:text-white"
          >
            <Network className="w-4 h-4 text-ubl-green" />
            <span className="whitespace-nowrap">Visualizar como grafo</span>
          </Button>
        </div>

        {nodeView && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black p-8">
            <div className="bg-bg-card rounded-xl border border-zinc-600 w-4/5 h-[80vh] overflow-hidden">
              <div className="py-2 px-4 bg-bg-black border-b border-white/20 justify-between flex items-center">
                <h2 className="text-2xl font-semibold text-white">
                  {selectedCourse.curriculo}
                </h2>
                <Button
                  size="icon"
                  variant="ghost"
                  className="cursor-pointer h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setNodeView(false)}
                  aria-label="Fechar grafo"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex-1 w-full overflow-hidden flex items-center justify-center h-full">
                <CurriculumGraph grade={selectedCourse} />
              </div>
            </div>
          </div>
        )}

        {/* Etapas (Stages) */}
        <ul className="space-y-4">
          {selectedCourse.steps.map((stage) => {
            return <Subjects key={stage.id} stage={stage} />;
          })}
        </ul>
      </div>
    </section>
  );
};
