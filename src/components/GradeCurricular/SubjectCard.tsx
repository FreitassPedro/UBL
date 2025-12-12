import { Asterisk, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "../ui/button"
import { BookRecomendation } from "./BookRecomendation"
import { useState } from "react";

interface SubjectCardProps {
    subject: {
        name: string;
        prerequisites: string[];
        books?: { name: string; url: string }[];
    };
    index: number;
}
export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, index }) => {
    const [showBooks, setShowBooks] = useState(false);

    return (
        <li
            className="relative group"
        >

            {/* Main Card */}
            <div key={index} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                {/* Content Container */}
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        {/* Subject Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 bg-linear-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
                            <h3 className="font-semibold text-xl text-text-main">
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
                                        <li key={i} className="text-xs bg-linear-to-r from-purple-500/10 to-pink-800/20 text-purple-200 px-2 py-1 rounded-full border border-purple-500/30">
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
                    <BookRecomendation
                        subject={subject}
                    />
                )}
            </div>
        </li>
    )
}