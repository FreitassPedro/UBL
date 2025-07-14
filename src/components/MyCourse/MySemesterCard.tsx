import { BookOpen, ChevronRight, Clock } from "lucide-react"
import { TesteProgress } from "../ui/TesteProgress"
import { MySemesterCardBody } from "./MySemesterCardBody";

interface MySemesterCardProps {
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
    expandedSemesters: string[];
    toggleSemester: (id: string) => void;
}



export const MySemesterCard: React.FC<MySemesterCardProps> = ({ semester, expandedSemesters, toggleSemester }) => {

    const isExpanded = expandedSemesters.includes(semester.id);
    const getColors = () => {
        switch (semester.id) {
            case '0':
                return {
                    gradient: "from-blue-500 via-blue-600 to-cyan-500",
                    bg: "from-blue-500/20 via-blue-600/10 to-cyan-500/20",
                    border: "from-blue-500/30 to-cyan-500/30",
                    icon: "🎯"
                };
            case '1':
                return {
                    gradient: "from-green-500 via-emerald-600 to-teal-500",
                    bg: "from-green-500/20 via-emerald-600/10 to-teal-500/20",
                    border: "from-green-500/30 to-teal-500/30",
                    icon: "🚀"
                };
            case '2':
                return {
                    gradient: "from-purple-500 via-violet-600 to-indigo-500",
                    bg: "from-purple-500/20 via-violet-600/10 to-indigo-500/20",
                    border: "from-purple-500/30 to-indigo-500/30",
                    icon: "⚡"
                };
            case '3':
                return {
                    gradient: "from-orange-500 via-red-600 to-pink-500",
                    bg: "from-orange-500/20 via-red-600/10 to-pink-500/20",
                    border: "from-orange-500/30 to-pink-500/30",
                    icon: "🔥"
                };
            default:
                return {
                    gradient: "from-yellow-500 via-amber-600 to-orange-500",
                    bg: "from-yellow-500/20 via-amber-600/10 to-orange-500/20",
                    border: "from-yellow-500/30 to-orange-500/30",
                    icon: "✨"
                };
        }
    }
    return (
        <div key={semester.id} className="group">
            {/* Card Principal */}
            <div className="relative transition-all duration-500 hover:scale-[1.01]">

                { /* Container Principal */}
                <div className="relative bg-white/5 backdrop-blur-2xl overflow-hidden transition-all duration-300 rounded-xl border border-white/10">

                    <TesteProgress value={50} color={getColors().gradient + ' ' + 'bg-gradient-to-r'} />

                    {/* Header do curso/semestre */}
                    <div
                        className="px-8 py-6 cursor-pointer hover:bg-zinc-700 transition-all duration-300 border-b border-gray-700"
                        onClick={() => toggleSemester(semester.id)}
                    >


                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-col space-y-1">
                                    <h2 className="text-2xl font-semibold text-white">{semester.name}</h2>

                                    <div className="flex items-center gap-4 text-gray-300">
                                        <span className="flex items-center gap-2">
                                            <BookOpen className="w-4 h-4" />
                                            {semester.completedSubjects} de {semester.modules.length}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {99}h
                                        </span>
                                    </div>
                                </div>
                                {semester.isActive && (
                                    <span className="items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                                        Em progresso
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-sm text-gray-400">Clique para</p>
                                    <p className="text-white font-medium">
                                        {isExpanded ? 'Recolher' : 'Expandir'}
                                    </p>
                                </div>
                                <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                            </div>
                        </div>
                    </div>

                    {/* Corpo do semestre */}
                    {expandedSemesters.includes(semester.id) && (
                        <MySemesterCardBody
                            semester={semester}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}