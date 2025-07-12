import { useState } from "react";
import { curriculum } from "../../data/curriculum";
import { SubjectItem } from "./SubjectItem";
import { GraduationCap, BookOpen, Clock, ChevronRight, Sparkles } from "lucide-react";
import BackgroundAnimation from "../BackgroundAnimation";

export function GradeEmBlocos() {
    const semesters = curriculum;
    const [activeSemester, setActiveSemester] = useState<number | null>(null);

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
            {/* Animated Background Elements */}
            <BackgroundAnimation />

            {/* Header Section */}
            <div className="relative z-10 mb-12">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Currículo Estruturado</span>
                    </div>
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
                        Currículo em Etapas
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Jornada completa de aprendizado estruturada por semestres
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 text-blue-400" />
                            <div>
                                <p className="text-2xl font-bold text-white">{semesters.length}</p>
                                <p className="text-gray-400">Semestres</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-green-400" />
                            <div>
                                <p className="text-2xl font-bold text-white">
                                    {semesters.reduce((total, semester) => total + semester.subjects.length, 0)}
                                </p>
                                <p className="text-gray-400">Disciplinas</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center gap-3">
                            <Clock className="w-8 h-8 text-purple-400" />
                            <div>
                                <p className="text-2xl font-bold text-white">~4</p>
                                <p className="text-gray-400">Anos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Semesters Grid */}
            <div className="relative z-10 space-y-8">
                {semesters.map((semester, index) => {
                    const colors = semesterColors[index % semesterColors.length];
                    const isActive = activeSemester === semester.number;
                    
                    return (
                        <div key={semester.number} className="group">
                            {/* Semester Card */}
                            <div 
                                className={`relative transition-all duration-500 ${
                                    isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
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
                                                <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                                                    isActive ? 'rotate-90' : 'group-hover:translate-x-1'
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
                                                        <SubjectItem 
                                                            key={subject.name} 
                                                            subject={subject} 
                                                            index={subjectIndex}
                                                        />
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