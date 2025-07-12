import { useState } from "react";
import { Button } from "../ui/button";
import { BookOpen, ChevronDown, ChevronUp, ExternalLink, Sparkles, Clock, Asterisk, LibraryBig } from "lucide-react";
import type { Subject } from "../../data/curriculum";

interface SubjectItemProps {
    subject: Subject;
    index?: number;
}

export function SubjectItem({ subject, index = 0 }: SubjectItemProps) {
    const [showBooks, setShowBooks] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Gradientes dinâmicos baseados no índice
    const gradients = [
        "from-blue-500/20 via-blue-600/10 to-cyan-500/20",
        "from-green-500/20 via-emerald-600/10 to-teal-500/20",
        "from-purple-500/20 via-violet-600/10 to-indigo-500/20",
        "from-orange-500/20 via-red-600/10 to-pink-500/20",
        "from-yellow-500/20 via-amber-600/10 to-orange-500/20"
    ];

    const borderGradients = [
        "from-blue-500/30 to-cyan-500/30",
        "from-green-500/30 to-teal-500/30",
        "from-purple-500/30 to-indigo-500/30",
        "from-orange-500/30 to-pink-500/30",
        "from-yellow-500/30 to-orange-500/30"
    ];


    return (
        <li
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Main Card */}
            <div className="relative bg-white/5  border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
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

                        {/* Prerequisites */}
                        {subject.prerequisites && (
                            <div className="flex flex-wrap items-center gap-2">
                                
                                <div className={`flex items-center gap-1 px-3 py-1 ${subject.prerequisites.length > 0 ? 'from-purple-400/20 to-pink-600/20' : ''} bg-gradient-to-r  rounded-full  border-white/20`}>
                                    <Asterisk className="h-3 w-3 text-yellow-400" />
                                    <span className="text-sm text-gray-200">{subject.prerequisites.length > 0 ? 'Pré-requisitos' : 'Sem pré-requisitos'} </span>
                                </div>
                                {subject.prerequisites.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                        <ul>
                                            {subject.prerequisites.map((prereq, i) => (
                                                <li key={i} className="text-xs bg-gradient-to-r from-purple-500/10 to-pink-500/20 text-purple-200 px-2 py-1 rounded-full border border-purple-500/30">
                                                    {prereq}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
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
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
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
    );
}