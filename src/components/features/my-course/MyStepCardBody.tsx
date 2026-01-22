import { Progress } from "@/components/ui/progress";
import type { MyEtapaProgress } from "@/types/progress";
import { ArrowRight, CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface MyStepCardBodyProps {
    step: MyEtapaProgress;
}

export const MyStepCardBody: React.FC<MyStepCardBodyProps> = ({ step }) => {

    const getStatusStyle = (progress: number) => {
        if (progress === 100) return {
            color: "text-emerald-400",
            border: "group-hover:border-emerald-700/30 border-emerald-500/50",
            bg: "bg-linear-to-r from-emerald-900/5 to-emerald-700/60",
            icon: <CheckCircle2 className="w-5 h-5" />
        };
        if (progress > 0) return {
            color: "text-amber-400",
            border: "group-hover:border-blue-700/60  border-blue-500/50",
            bg: "bg-linear-to-r from-blue-900/10 to-blue-700/25",
            icon: <PlayCircle className="w-5 h-5" />
        };
        return {
            color: "text-zinc-500",
            border: "group-hover:border-zinc-400 border-zinc-800",
            bg: "bg-linear-to-r from-zinc-950/10 to-zinc-900/10",
            icon: <Circle className="w-5 h-5" />
        };
    };
    console.log(step.cadeiras);

    return (
        <div className="grid grid-cols-1 gap-3">
            {step.cadeiras.map((cadeira) => {
                const status = getStatusStyle(cadeira.progress);

                return (
                    <Link
                        to={`/curso/${cadeira.id}`}
                        key={cadeira.id}
                        className="group relative block"
                    >
                        <Card className={`
                            relative flex flex-col sm:flex-row items-start sm:items-center gap-5 
                            border  
                            transition-all duration-300 ease-out
                            hover:bg-zinc-800/80 hover:translate-x-1 hover:shadow-lg
                            ${status.border}
                            ${status.bg}
                        `}>

                            {/* Ícone / Imagem */}
                            <div className="relative shrink-0">
                                <div className="w-14 h-14 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 shadow-inner">
                                    <img
                                        src={`https://placehold.co/60x60/18181b/a1a1aa?text=${cadeira.name.substring(0, 2).toUpperCase()}`}
                                        alt={cadeira.name}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                {/* Badge de Status flutuante (opcional, visual cleaner sem ele, mas útil para UX) */}
                                <div className={`absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-0.5 border border-zinc-800 ${status.color}`}>
                                    {status.icon}
                                </div>
                            </div>

                            {/* Conteúdo Principal */}
                            <div className="flex-1 min-w-0 space-y-2 w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-zinc-200 group-hover:text-white truncate pr-4">
                                        {cadeira.name}
                                    </h3>

                                    {/* Botão Call to Action (visível no hover ou sempre visível desktop) */}
                                    <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-500 group-hover:text-white transition-colors border border-zinc-700 rounded-full px-3 py-1 bg-zinc-800/50 hover:bg-blue-600/80 group-hover:border-blue-500 cursor-pointer">
                                        {cadeira.progress === 100 ? "Revisar" : cadeira.progress > 0 ? "Continuar" : "Iniciar"}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>

                                {/* Barra de Progresso e Meta info */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between text-xs text-zinc-500">
                                        <span>{cadeira.progress === 100 ? "Concluído" : cadeira.progress > 0 ? "Progresso" : "Comece a assistir"}</span>
                                        <span className={status.color}>{cadeira.progress}%</span>
                                    </div>

                                    {/* Container da barra de progresso ajustada */}
                                    {cadeira.progress > 0 && (
                                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                                        <div className="h-full w-full">
                                            <Progress value={cadeira.progress} />
                                        </div>
                                    </div>
                                    )}

                                    <div className="text-xs text-zinc-600 pt-0.5">
                                        {cadeira.totalCompleted} de {cadeira.lessons.length} aulas concluídas
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
};
