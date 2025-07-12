import { useState } from "react";
import { curriculum } from "../../data/curriculum";
import { SubjectItem } from "./SubjectItem";
import { GraduationCap, BookOpen, Clock, ChevronRight, Sparkles, ExternalLink, LibraryBig, ChevronUp, ChevronDown, Asterisk } from "lucide-react";
import BackgroundAnimation from "../BackgroundAnimation";
import { Button } from "../ui/button";


export function SemesterCard() {
    const semesters = curriculum;
    const [activeSemester, setActiveSemester] = useState<number | null>(null);
    const [showBooks, setShowBooks] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const semesterColors = [
        {
            gradient: "from-blue-500 via-blue-600 to-cyan-500",
            bg: "from-blue-500/20 via-blue-600/10 to-cyan-500/20",
            border: "from-blue-500/30 to-cyan-500/30",
            icon: "🎯"
        },
        {
            gradient: "from-green-500 via-emerald-600 to-teal-500",
            bg: "from-green-500/20 via-emerald-600/10 to-teal-500/20",
            border: "from-green-500/30 to-teal-500/30",
            icon: "🚀"
        },
        {
            gradient: "from-purple-500 via-violet-600 to-indigo-500",
            bg: "from-purple-500/20 via-violet-600/10 to-indigo-500/20",
            border: "from-purple-500/30 to-indigo-500/30",
            icon: "⚡"
        },
        {
            gradient: "from-orange-500 via-red-600 to-pink-500",
            bg: "from-orange-500/20 via-red-600/10 to-pink-500/20",
            border: "from-orange-500/30 to-pink-500/30",
            icon: "🔥"
        },
        {
            gradient: "from-yellow-500 via-amber-600 to-orange-500",
            bg: "from-yellow-500/20 via-amber-600/10 to-orange-500/20",
            border: "from-yellow-500/30 to-orange-500/30",
            icon: "✨"
        }
    ];

    return (
        <section className="mb-16 relative">
            {/* Semesters Grid */}
            <div className="relative z-10 space-y-8">
                {semesters.map((semester, index) => {
                    const colors = semesterColors[index % semesterColors.length];
                    const isActive = activeSemester === semester.number;

                    return (
                        <div key={semester.number} className="group">
                            {/* Semester Card */}
                            <div
                                className={`relative transition-all duration-500 ${isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                                    }`}
                            >
                                {/* Animated Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>

                                {/* Main Container */}
                                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-300">
                                    {/* Gradient Top Border */}
                                    <div className={`h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                                    {/* Header */}
                                    <div
                                        className="p-8 cursor-pointer"
                                        onClick={() => setActiveSemester(isActive ? null : semester.number)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-6">
                                                <div>
                                                    <h3 className="text-3xl font-bold text-white mb-2">
                                                        Etapa {semester.number}
                                                    </h3>
                                                    <div className="flex items-center gap-4 text-gray-300">
                                                        <span className="flex items-center gap-1">
                                                            <BookOpen className="w-4 h-4" />
                                                            {semester.subjects.length} disciplinas
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-4 h-4" />
                                                            {index + 1}h
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-400">Clique para</p>
                                                    <p className="text-white font-medium">
                                                        {isActive ? 'Recolher' : 'Expandir'}
                                                    </p>
                                                </div>
                                                <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                                                    }`} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subjects List */}
                                    {isActive && (
                                        <div className="px-8 pb-8 animate-in slide-in-from-top-4 duration-500">
                                            <div className="border-t border-white/10 pt-6">
                                                <div className="flex items-center gap-2 mb-6">
                                                    <span className="font-bold text-white text-lg">Disciplinas</span>
                                                    <span className="text-gray-400">/ Pré-requisitos</span>
                                                </div>
                                                <ul className="space-y-6">
                                                    {semester.subjects.map((subject, subjectIndex) => (
                                                        <li
                                                            className="relative group"
                                                            onMouseEnter={() => setIsHovered(true)}
                                                            onMouseLeave={() => setIsHovered(false)}
                                                        >

                                                            {/* Main Card */}
                                                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                                                {/* Content Container */}
                                                                <div className="flex justify-between items-start">
                                                                    <div className="flex-1">
                                                                        {/* Subject Header */}
                                                                        <div className="flex items-center gap-3 mb-3">
                                                                            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
                                                                            <h3 className="font-semibold text-xl text-white">
                                                                                {subject.name}
                                                                            </h3>
                                                                        </div>

                                                                        <div className="flex flex-wrap items-center gap-2">
                                                                            <div className={`flex items-center gap-1 px-3 py-1 ${subject.prerequisites.length > 0 ? 'from-purple-400/20 to-pink-600/20' : ''} bg-gradient-to-r  rounded-full  border-white/20`}>
                                                                                <Asterisk className="h-3 w-3 text-yellow-400" />
                                                                                <span className="text-sm text-gray-200">{subject.prerequisites.length > 0 ? 'Pré-requisitos' : 'Sem pré-requisitos'} </span>
                                                                            </div>
                                                                            {subject.prerequisites.length > 0 && (
                                                                                <ul className="flex flex-wrap gap-2" >
                                                                                    {subject.prerequisites.map((prereq, i) => (
                                                                                        <li key={i} className="text-xs bg-gradient-to-r from-purple-500/10 to-pink-800/20 text-purple-200 px-2 py-1 rounded-full border border-purple-500/30">
                                                                                            {prereq}
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Action Button */}
                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() => setShowBooks(!showBooks)}
                                                                        className="ml-4 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                                                    >
                                                                        <BookOpen className="h-4 w-4" />
                                                                        <span className="hidden sm:inline cursor-pointer">Recomendações</span>
                                                                        <div className="flex items-center">
                                                                            {showBooks ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                                                        </div>
                                                                    </Button>
                                                                </div>

                                                                {/* Books Section */}
                                                                {showBooks && (
                                                                    <div className="mt-4 pt-4 border-t border-white/10">
                                                                        <div className="animate-in slide-in-from-top-2 duration-300">
                                                                            <div className="flex items-center gap-2 mb-4">
                                                                                <LibraryBig className="h-5 w-5 text-yellow-400" />
                                                                                <h5 className="font-semibold text-lg text-white">Leituras Recomendadas</h5>
                                                                            </div>

                                                                            {subject.books && subject.books.length > 0 ? (
                                                                                <div className="grid gap-3 cursor-pointer">
                                                                                    {subject.books.map((book, bookIndex) => (
                                                                                        <a
                                                                                            key={bookIndex}
                                                                                            href={`https://github.com/Universidade-Livre/ciencia-da-computacao/blob/main/${book.url}`}
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            className="group/book flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                                                                                        >
                                                                                            <span className="flex-1 text-gray-200 group-hover/book:text-white transition-colors">
                                                                                                {book.name}
                                                                                            </span>
                                                                                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover/book:text-blue-400 transition-colors" />
                                                                                        </a>
                                                                                    ))}
                                                                                </div>
                                                                            ) : (
                                                                                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                                                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                                                                    <p className="text-gray-400">Nenhuma recomendação disponível para esta disciplina.</p>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}