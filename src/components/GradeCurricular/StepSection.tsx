import React, { useEffect, useState } from "react";
import { type Grade } from "../../data/gradeCurricular";
import { StepCard } from "./StepCard";
import { GraduationCap } from "lucide-react";

interface StepContainerProps {
    selectedCourse: Grade;
}

export const StepSection: React.FC<StepContainerProps> = ({ selectedCourse }) => {
    const [activedStageId, setActivedStageId] = useState<number | null>(null);

    useEffect(() => {
        const element = document.getElementById(`${activedStageId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [activedStageId]);

    return (
        <section>
            <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                    <GraduationCap className="w-14 h-14" />
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedCourse.curriculo}</h2>
                </div>
                <div className="h-1 bg-linear-to-r from-blue-500 to-green-400 w-full rounded" />
            </div>
            {/* Etapas (Stages) */}
            <ul className="space-y-4">
                {selectedCourse.etapas.map((stage) => {
                    const isActive = activedStageId === stage.id;
                    return (
                        <StepCard
                            key={stage.id}
                            stage={stage}
                            isActive={isActive}
                            onToggle={() => setActivedStageId(isActive ? null : stage.id)}
                        />
                    );
                })}
            </ul>
        </section>
    );
}