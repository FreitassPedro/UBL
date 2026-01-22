import { MyStepCard } from "@/components/my-course/MyStepCard";
import type { MyGradeProgress } from "@/types/progress";
import React, { useState } from "react";

interface MyStepContainerProps {
    courseProgress: MyGradeProgress;
}

export const MyStepContainer: React.FC<MyStepContainerProps> = ({ courseProgress }) => {
    // Definindo o primeiro passo como padrão ou 1 se não houver
    const [activeStep, setActiveStep] = useState<number>(courseProgress.etapas[0]?.id || 1);

    return (
        <div className="flex flex-col w-full space-y-8">
            

            {/* Navegação por Abas (Tabs) */}
            <div className="flex flex-col w-full items-center space-y-4">
                <h2 className="text-4xl font-semibold ">{courseProgress.curriculo}</h2>
                <div className="w-full overflow-x-auto pb-2 scrollbar-hide flex justify-center">
                    <div className="flex p-1 space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl w-max min-w-full lg:min-w-0">
                        {courseProgress.etapas.map((step) => {
                            const isActive = activeStep === step.id;

                            {/* Border-transparent necessário para transição suave */ }
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={`
                                    relative cursor-pointer px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                                    border border-transparent
                                    ${isActive
                                            ? 'bg-zinc-800 text-white shadow-lg shadow-black/20 border border-zinc-700'
                                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                                        }
                                `}
                                >
                                    {step.name}
                                    {isActive && (
                                        <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-blue-500 rounded-full opacity-70"></span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                {courseProgress.etapas
                    .filter(gr => gr.id === activeStep)
                    .map((step) => (
                        <MyStepCard
                            key={step.id}
                            step={step}
                        />
                    ))}
            </div>
        </div>
    );
};