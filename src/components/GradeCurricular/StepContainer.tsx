import React, { useState } from "react";
import { type Grade } from "../../data/gradeCurricular";
import { StepCard } from "./StepCard";

interface StepContainerProps {
    selectedCourse: Grade;
}

export const StepContainer: React.FC<StepContainerProps> = ({ selectedCourse }) => {
    const [activeStage, setActiveStage] = useState<number | null>(null);

    return (
        <section className="">
            <h2 className="text-3xl font-bold text-white mb-2">{selectedCourse.curriculo}</h2>

            {/* Etapas (Stages) */}
            <div className="space-y-4">
                {selectedCourse.etapas.map((stage, index) => {
                    const isActive = activeStage === stage.id;
                    return (
                        <StepCard
                            key={stage.id}
                            stage={stage}
                            isActive={isActive}
                            onToggle={() => setActiveStage(isActive ? null : stage.id)}
                        />
                    );
                })}
            </div>
        </section>
    );
}