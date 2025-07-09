
import { BookOpen } from "lucide-react";
import { Progress } from "../../components/ui/progress";
import { TesteProgress } from "../../components/ui/TesteProgress";

const MyCourse = () => {

    return (
        <div className="min-h-screen bg-gray-50 text-slate-800">
            { /* Header */}

            <div className="bg-white backdrop-blur-sm shadow-sm border-b border-blue-100 ">
                <div className="max-w-7xl px-4 flex items-center mx-auto">
                    <div className="flex items-center">
                        <div className="rounded bg-blue-600 p-2 mr-4">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                                Minha trilha
                            </h1>
                            <p className="text text-gray-600 ml-4">Seu progresso do curso.</p>
                        </div>
                    </div>
                </div>
            </div>

            { /* Main */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid gap-8">
                    {/* Card curso */}
                    <div className="bg-white shadow-md rounded text-slate-800">
                        {/* Header curso */}
                        <div className="px-8 py-6 cursor-pointer hover:bg-white/50 transition-all duration-300 border-b border-blue-100/50"                      >
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-3">
                                            <h2 className="text-2xl font-bold text-slate-800">1° Periodo</h2>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className="items-center px-3 py-1 rounded text-sm font-medium bg-blue-100 text-blue-800">
                                                Em progresso
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div className="">
                                            <div className="text-sm text-slate-500">Matérias</div>
                                            <div className="text-lg font-bold text-slate-700">
                                                2/10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extensao para exibir progresso do curso */}
                        <div className="px-8 py-6 space-y-4">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={`https://placehold.co/60x60/EEE/31343C?text=Curso`}
                                    alt={`Imagem do curso `}
                                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                />
                                <div className="">
                                    <h3 className="text-xl font-bold text-slate-800">Circuito Digitais</h3>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-4">
                                    <TesteProgress value={50} />
                                    <span className="text-sm text-slate-500">50%</span>
                                </div>
                                <div className="text-sm text-slate-500">2 de 10 Aulas</div>
                            </div>
                        </div>
                        <div className="px-8 py-6 space-y-2">
                            <div className="text-2xl font-bold text-slate-800">Circuitos Digitais</div>
                            <Progress value={50} className="w-full h-2 bg-blue-100 rounded-full" />
                            <div className="text-sm text-slate-500 mt-4">1 de 10 Aulas</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded text-slate-800">
                        {/* Header curso */}
                        <div className="px-8 py-6 cursor-pointer hover:bg-white/50 transition-all duration-300 border-b border-blue-100/50"                      >
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-3">
                                            <h2 className="text-2xl font-bold text-slate-800">1° Periodo</h2>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className="items-center px-3 py-1 rounded text-sm font-medium bg-blue-100 text-blue-800">
                                                Em progresso
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div className="">
                                            <div className="text-sm text-slate-500">Matérias</div>
                                            <div className="text-lg font-bold text-slate-700">
                                                2/10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extensao para exibir progresso do curso */}
                        <div className="px-8 py-6 space-y-2">
                            <div className="text-2xl font-bold text-slate-800">Circuitos Digitais</div>
                            <Progress value={50} className="w-full h-2 bg-blue-100 text-blue-500 rounded-full" />
                            <div className="text-sm text-slate-500 mt-4">2 de 10 Aulas</div>
                        </div>
                        <div className="px-8 py-6 space-y-2">
                            <div className="text-2xl font-bold text-slate-800">Circuitos Digitais</div>
                            <Progress value={50} className="w-full h-2 bg-blue-100 rounded-full" />
                            <div className="text-sm text-slate-500 mt-4">10 Aulas</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded text-slate-800">
                        {/* Header curso */}
                        <div className="px-8 py-6 cursor-pointer hover:bg-white/50 transition-all duration-300 border-b border-blue-100/50"                      >
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-3">
                                            <h2 className="text-2xl font-bold text-slate-800">1° Periodo</h2>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className="items-center px-3 py-1 rounded text-sm font-medium bg-blue-100 text-blue-800">
                                                Em progresso
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div className="">
                                            <div className="text-sm text-slate-500">Matérias</div>
                                            <div className="text-lg font-bold text-slate-700">
                                                2/10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extensao para exibir progresso do curso */}
                        <div className="px-8 py-6 space-y-2">
                            <div className="text-xl font-bold text-slate-800">Circuitos Digitais</div>
                            <Progress value={50} className="w-full h-2 bg-blue-100 text-blue-500 rounded-full" />
                            <div className="text-sm text-slate-500 mt-4">2 de 10 Aulas</div>
                        </div>
                        <div className="px-8 py-6 space-y-2">
                            <div className="text-xl font-bold text-slate-800">Circuitos Digitais</div>
                            <Progress value={50} className="w-full h-2 bg-blue-100 rounded-full" />
                            <div className="text-sm text-slate-500 mt-4">0 de 10 Aulas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyCourse;