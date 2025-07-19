import { Link } from "react-router-dom";
import { TesteProgress } from "../ui/TesteProgress";
import type { MyEtapaProgress } from "../../data/myCourseProgress";

interface MyStepCardBodyProps {
    step: MyEtapaProgress;
}

export const MyStepCardBody: React.FC<MyStepCardBodyProps> = ({ step }) => {
    return (
        <div>
            {step.cadeiras.map((cadeira) => (
                <Link to={`/curso/${cadeira.id}`} key={cadeira.id} className="border-t border-gray-700 last:border-b-0 cursor-pointer">
                    <div className="px-8 py-6 space-y-4 bg-black/30 hover:bg-black/60 transition-all duration-300"                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={`https://placehold.co/60x60/31343C/EEE?text=${cadeira.name.substring(0, 3)}`}
                                alt={`Imagem do curso ${cadeira.name}`}
                                className="w-16 h-16 rounded object-cover flex-shrink-0 border border-gray-700"
                            />
                            <div className="">
                                <h3 className="text-xl font-bold text-white">{cadeira.name}</h3>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-4">
                                <TesteProgress value={cadeira.progress} />
                                <span className="text-sm text-gray-400">{cadeira.progress}%</span>
                            </div>
                            <div className="text-sm text-gray-400">{cadeira.totalCompleted } de {cadeira.lessons.length} Aulas Concluídas</div>
                        </div>
                        <div className="mt-4 border-t border-gray-700 pt-4">
                            <h4 className="text-lg font-semibold text-gray-200 mb-3">Tópicos:</h4>
                            <h4>Nada no momento</h4>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div>
    )
}