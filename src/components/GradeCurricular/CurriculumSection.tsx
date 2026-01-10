import { SemesterCard } from "@/components/GradeCurricular/SemesterCard";
import NodeGraphVisualization from "@/components/NodeGraph/NodeGraphVisualization";
import type { Grade } from "@/types/grade";
import { GraduationCap } from "lucide-react";
import React, { useEffect } from "react";

interface CurriculumSectionProps {
    selectedCourse: Grade;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ selectedCourse }) => {

    const [nodeView, setNodeView] = React.useState<boolean>(false);
    const sectionRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }, [selectedCourse]);

    return (
        <section className="w-full mt-10 py-8" ref={sectionRef}>
            <div className="mx-auto max-w-6xl container">
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        <GraduationCap className="w-14 h-14" />
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedCourse.curriculo}</h2>
                    </div>
                    <div className="h-1 bg-linear-to-r from-blue-500 to-green-400 w-full rounded" />
                    <button className="px-2 py-2 bg-bg-card rounded text-white text-md text-nowrap cursor-pointer"
                        onClick={() => setNodeView(!nodeView)}>
                        Ver em grafos
                    </button>
                </div>

                {nodeView && (
                    (
                        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black p-8">
                            <div className="bg-bg-card rounded-xl border border-zinc-600 w-4/5 h-[80vh] overflow-hidden">
                                <div className="py-2 px-4 bg-gray-900 border-b border-white/20 justify-between flex items-center">
                                    <h2 className="text-2xl font-semibold text-white">{selectedCourse.curriculo}</h2>
                                    <button className="px-4 py-2 bg-white/20 rounded text-white text-xl cursor-pointer"
                                        onClick={() => setNodeView(false)}>Fechar</button>
                                </div>
                                <div className="flex-1 w-full overflow-hidden flex items-center justify-center h-full">
                                    <NodeGraphVisualization />
                                </div>
                            </div>
                        </div>
                    )
                )}

                {/* Etapas (Stages) */}
                <ul className="space-y-4">
                    {selectedCourse.etapas.map((stage) => {
                        return (
                            <SemesterCard
                                key={stage.id}
                                stage={stage}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
