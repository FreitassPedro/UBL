import { MyStepCardBody } from "@/components/features/my-course/MyStepCardBody";
import type { MyEtapaProgress } from "@/types/progress";
import { BookOpen, Clock, Sparkles } from "lucide-react";

interface MyStepCardProps {
    step: MyEtapaProgress;
}

export const MyStepCard: React.FC<MyStepCardProps> = ({ step }) => {

    // Lógica de Cores refinada para ser mais sutil
    const getTheme = () => {
        switch (step.id) {
            case 0: return { accent: "border-blue-500/30", glow: "from-blue-500/10 via-transparent", text: "text-blue-400" };
            case 1: return { accent: "border-emerald-500/30", glow: "from-emerald-500/10 via-transparent", text: "text-emerald-400" };
            case 2: return { accent: "border-violet-500/30", glow: "from-violet-500/10 via-transparent", text: "text-violet-400" };
            case 3: return { accent: "border-rose-500/30", glow: "from-rose-500/10 via-transparent", text: "text-rose-400" };
            default: return { accent: "border-amber-500/30", glow: "from-amber-500/10 via-transparent", text: "text-amber-400" };
        }
    };

    const theme = getTheme();
    const totalDurationHours = Math.round(
        step.cadeiras
            .flatMap((cadeira) => cadeira.lessons)
            .reduce((acc, lesson) => acc + (lesson.duration ?? 0), 0) / 3600
    );

    return (
        <div className="flex flex-col space-y-6">
            {/* Header do Semestre com visual "Glass" */}
            <div className={`
                relative overflow-hidden rounded-2xl border bg-zinc-900/80 p-8
                ${theme.accent} border-zinc-800
            `}>
                {/* Glow de Fundo */}
                <div className={`absolute inset-0 bg-linear-to-br ${theme.glow} to-transparent opacity-50 pointer-events-none`} />

                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${theme.text}`}>
                            <Sparkles className="w-3 h-3" />
                            <span>Progresso da Etapa</span>
                        </div>
                        <h2 className="text-4xl font-light text-white tracking-tight">
                            {step.name}
                        </h2>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm text-zinc-400 bg-zinc-950/30 p-3 rounded-xl border border-white/5 backdrop-blur-md">
                        <div className="flex items-center gap-2.5">
                            <div className="p-1.5 bg-zinc-800 rounded-md">
                                <BookOpen className="w-4 h-4 text-zinc-300" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-zinc-500 uppercase font-bold">Cadeiras</span>
                                <span className="text-zinc-200 font-medium">
                                    {step.totalCompleted}
                                    <span className="text-zinc-600">/</span> {step.cadeiras.length}
                                </span>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-zinc-800" />

                        <div className="flex items-center gap-2.5">
                            <div className="p-1.5 bg-zinc-800 rounded-md">
                                <Clock className="w-4 h-4 text-zinc-300" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-zinc-500 uppercase font-bold">Tempo</span>
                                <span className="text-zinc-200 font-medium">{totalDurationHours}h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista de Cadeiras */}
            <MyStepCardBody step={step} />
        </div>
    );
};
