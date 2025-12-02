import { Link } from "react-router-dom";
import { TesteProgress } from "../ui/TesteProgress";
import type { MyEtapaProgress } from "../../data/myCourseProgress";
import { ArrowRight } from "lucide-react";

interface MyStepCardBodyProps {
    step: MyEtapaProgress;
}

export const MyStepCardBody: React.FC<MyStepCardBodyProps> = ({ step }) => {
    const cadeira = step.cadeiras[0];


    const getColors = (progress: number) => {
        if (progress === 100) {
            return {
                bg: "bg-gray-900",
                border: "border-blue-400/40",
            };
        }
        if (progress > 0) {
            return {
                bg: "bg-gray-700",
                border: "border-yellow-400/40",
            };
        }
        return {
            bg: "bg-gray-400",
            border: "border-white/10",
        };
    };
    return (
        <>
            {
                step.cadeiras.map((cadeira) => (
                    <Link
                        to={`/curso/${cadeira.id}`}
                        key={cadeira.id}
                        className="block mt-4 px-2 border-gray-700"
                    >
                        <div className={`px-8 py-6 space-y-4 bg-gray-500 rounded border border-white/10 ${getColors(cadeira.progress).bg
                            } hover:bg-gray-700 hover:scale-102 transition-all duration-300`}>
                            <div className="flex items-center space-x-4">
                                <img
                                    src={`https://placehold.co/60x60/31343C/EEE?text=${cadeira.name.substring(0, 3)}`}
                                    alt={`Imagem do curso ${cadeira.name}`}
                                    className="w-16 h-16 rounded object-cover flex-shrink-0 border border-gray-700"
                                />
                                <div className="">
                                    <h3 className="text-xl font-bold text-white">{cadeira.name}</h3>
                                </div>
                                <div className="ml-auto flex items-center space-x-2 group">
                                    <span className="text-gray-300">{`${cadeira.progress > 0 ? "Continuar" : "Iniciar"} `}</span>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-4">
                                    <TesteProgress value={cadeira.progress} />
                                    <span className="text-sm text-gray-400">{cadeira.progress}%</span>
                                </div>
                                <div className="text-sm text-gray-400">{cadeira.totalCompleted} de {cadeira.lessons.length} Aulas Concluídas</div>
                            </div>

                        </div>
                    </Link>
                ))
            }
        </>
    );
}