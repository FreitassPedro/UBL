import { Asterisk, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "../ui/button"
import { BookRecommendation } from "./BookRecommendation"
import { useState } from "react";

interface SubjectCardProps {
    subject: {
        name: string;
        prerequisites: string[];
        books?: { name: string; url: string }[];
    };
    index: number;
}
export const SemesterSubjectItem: React.FC<SubjectCardProps> = ({ subject, index }) => {
    const [showBooks, setShowBooks] = useState(false);

    const getColorBackground = () => {
        return index % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-800/60';
    }

    return (
        <li key={index} className="relative group">
            <div className={`relative ${getColorBackground()} border border-white/10 hover:border-white/20 px-3 py-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl`} >
                {/* Content Container */}
                <div className="flex justify-between" >
                    <div className="flex-1">
                        {/* Subject Header */}
                        <div className="flex items-center gap-3">
                            { /* Animated Pulse Dot */}
                            <div className="w-3 h-3 bg-linear-to-r from-ubl-blue to-ubl-green rounded-full animate-pulse" />
                            <h3 className="font-md text-xl text-white tracking-tight">
                                {subject.name}
                            </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            <div className={`flex items-center gap-1 px-3 py-1 ${subject.prerequisites.length > 0 ? 'from-purple-400/20 to-pink-600/20' : ''} bg-linear-to-r  rounded-full  border-white/20`}>
                                <Asterisk className="h-3 w-3 text-yellow-400" />
                                <span className="text-xs text-gray-200">{subject.prerequisites.length > 0 ? 'Pré-requisitos' : 'Sem pré-requisitos'} </span>
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

                    {/* Show Books Button */}
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
                </div >

                {/* Books Section */}
                {
                    showBooks && (
                        <BookRecommendation
                            subject={subject}
                        />
                    )
                }
            </div >
        </li>
    )
}
