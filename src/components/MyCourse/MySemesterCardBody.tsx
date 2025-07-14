import { TesteProgress } from "../ui/TesteProgress";

interface MySemesterCardBodyProps {
    semester: {
        id: string;
        name: string;
        isActive: boolean;
        completedSubjects: number;
        totalSubjects: number;
        modules: {
            id: string;
            name: string;
            progress: number;
            subjects: { id: string; name: string; duration: string; type: string; completed: boolean }[];
        }[];
    };
}


export const MySemesterCardBody: React.FC<MySemesterCardBodyProps> = ({ semester }) => {
    return (
        <div>
            {semester.modules.map((module) => (
                <div key={module.id} className="border-t border-gray-700 last:border-b-0 cursor-pointer">
                    <div className="px-8 py-6 space-y-4 bg-black/30 hover:bg-black/60 transition-all duration-300"                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={`https://placehold.co/60x60/31343C/EEE?text=${module.name.substring(0, 3)}`}
                                alt={`Imagem do curso ${module.name}`}
                                className="w-16 h-16 rounded object-cover flex-shrink-0 border border-gray-700"
                            />
                            <div className="">
                                <h3 className="text-xl font-bold text-white">{module.name}</h3>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-4">
                                <TesteProgress value={module.progress} />
                                <span className="text-sm text-gray-400">{module.progress}%</span>
                            </div>
                            <div className="text-sm text-gray-400">{module.subjects.filter(s => s.completed).length} de {module.subjects.length} Aulas Concluídas</div>
                        </div>
                        <div className="mt-4 border-t border-gray-700 pt-4">
                            <h4 className="text-lg font-semibold text-gray-200 mb-3">Tópicos:</h4>
                            <ul className="space-y-2">
                                {module.subjects.map((subject) => (
                                    <li key={subject.id} className="flex items-center space-x-2 text-gray-300 ">
                                        {subject.completed ? (
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        <span>{subject.name} ({subject.duration})</span>
                                        {subject.type === 'video' && <span className="text-xs text-blue-400">[Vídeo]</span>}
                                        {subject.type === 'text' && <span className="text-xs text-yellow-400">[Texto]</span>}
                                        {subject.type === 'exercise' && <span className="text-xs text-purple-400">[Exercício]</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}