import React, { useState } from "react";
import type { MyGradeProgress } from "../../data/myCourseProgress";
import { MyStepCard } from "./MyStepCard";
import { LayoutGrid } from "lucide-react";

interface MyStepContainerProps {
    grade: MyGradeProgress;
}

export const MyStepContainer: React.FC<MyStepContainerProps> = ({ grade }) => {
    // Definindo o primeiro passo como padrão ou 1 se não houver
    const [activeStep, setActiveStep] = useState<number>(grade.etapas[0]?.id || 1);

    return (
        <div className="flex flex-col w-full max-w-5xl mx-auto space-y-8">
            {/* Header da Seção */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
                        <LayoutGrid className="w-5 h-5 text-zinc-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Sua Jornada</h2>
                </div>
                <div className="text-sm text-zinc-400">
                    Bem-vindo, Estudante
                </div>
            </div>

            {/* Navegação por Abas (Tabs) */}
            <div className="flex flex-col w-full items-center space-y-4">
                <h2 className="text-2xl font-semibold ">Ciência da Computação</h2>
                <div className="w-full overflow-x-auto pb-2 scrollbar-hide flex justify-center">
                    <div className="flex p-1 space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl w-max min-w-full lg:min-w-0">
                        {grade.etapas.map((step) => {
                            const isActive = activeStep === step.id;
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={`
                                    relative cursor-pointer px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
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

            {/* Conteúdo do Passo Ativo */}
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                {grade.etapas
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