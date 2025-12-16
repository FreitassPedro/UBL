import React, { useEffect, useState } from "react";
import { type Grade } from "../../data/gradeCurricular";
import { StepCard } from "./StepCard";

interface StepContainerProps {
    selectedCourse: Grade;
}

export const StepSection: React.FC<StepContainerProps> = ({ selectedCourse }) => {
    const [activedStageId, setActivedStageId] = useState<number | null>(null);

    const handleScrollToStage = useEffect(() => {
        const element = document.getElementById(`${activedStageId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [activedStageId]);

    return (
        <section>
            <h2 className="text-3xl font-bold text-white mb-2">{selectedCourse.curriculo}</h2>

            {/* Etapas (Stages) */}
            <div className="space-y-4">
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
            </div>
        </section>
    );
}