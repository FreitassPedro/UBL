import React, { useState } from "react";
import { type Grade } from "../../data/gradeCurricular";
import { StepCard } from "./StepCard";

interface StepContainerProps {
    selectedCourse: Grade;
}

export const StepContainer: React.FC<StepContainerProps> = ({ selectedCourse }) => {
    const [activeStage, setActiveStage] = useState<number | null>(null);

    const stageColors = [
        {
            gradient: "from-blue-500 via-blue-600 to-cyan-500",
            bg: "from-blue-500/20 via-blue-600/10 to-cyan-500/20",
            border: "from-blue-500/30 to-cyan-500/30",
            icon: "🎯"
        },
        {
            gradient: "from-green-500 via-emerald-600 to-teal-500",
            bg: "from-green-500/20 via-emerald-600/10 to-teal-500/20",
            border: "from-green-500/30 to-teal-500/30",
            icon: "🚀"
        },
        {
            gradient: "from-purple-500 via-violet-600 to-indigo-500",
            bg: "from-purple-500/20 via-violet-600/10 to-indigo-500/20",
            border: "from-purple-500/30 to-indigo-500/30",
            icon: "⚡"
        },
        {
            gradient: "from-orange-500 via-red-600 to-pink-500",
            bg: "from-orange-500/20 via-red-600/10 to-pink-500/20",
            border: "from-orange-500/30 to-pink-500/30",
            icon: "🔥"
        },
        {
            gradient: "from-yellow-500 via-amber-600 to-orange-500",
            bg: "from-yellow-500/20 via-amber-600/10 to-orange-500/20",
            border: "from-yellow-500/30 to-orange-500/30",
            icon: "✨"
        }
    ];

    return (
        <section className="mb-16">
            <div className="space-y-8">

                {selectedCourse.etapas.map((stage, index) => {
                    const colors = stageColors[index % stageColors.length];
                    const isActive = activeStage === stage.id;

                    return (
                        <StepCard
                            key={stage.id}
                            stage={stage}
                            isActive={isActive}
                            colors={colors}
                            onToggle={() => setActiveStage(isActive ? null : stage.id)}
                        />
                    );
                })}
            </div>

        </section>
    );
}