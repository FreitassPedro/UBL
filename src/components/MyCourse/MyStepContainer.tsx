import React, { useState } from "react";
import type { MyGradeProgress } from "../../data/myCourseProgress";
import { MyStepCard } from "./MyStepCard";

interface MyStepContainerProps {
    grade: MyGradeProgress;
}

export const MyStepContainer: React.FC<MyStepContainerProps> = ({ grade }) => {
    const [activeStep, setActiveStep] = useState<number>(1);

    return (
        <div className="flex-1 space-y-6">
            {/* Navegação entre etapas */}
            <div className="flex justify-center gap-2">
                {grade.etapas.map((step) => {
                    const isActive = activeStep === step.id;
                    
                    return (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(step.id)}
                            className={`
                                px-5 py-2.5 rounded-lg font-medium transition-all duration-200
                                ${isActive 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                                    : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700 border border-white/10'
                                }
                            `}
                        >
                            {step.name}
                        </button>
                    )
                })}
            </div>

            {/* Etapa ativa */}
            <div>
                {grade.etapas
                    .filter(step => step.id === activeStep)
                    .map((step) => (
                        <MyStepCard
                            key={step.id}
                            step={step}
                        />
                    ))
                }
            </div>
        </div>
    )
}