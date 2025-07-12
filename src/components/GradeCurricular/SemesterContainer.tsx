import { useState } from "react";
import { curriculum } from "../../data/curriculum";
import { BookOpen, Clock, ChevronRight, ExternalLink, LibraryBig, ChevronUp, ChevronDown, Asterisk } from "lucide-react";
import { Button } from "../ui/button";
import { BookRecomendation } from "./BookRecomendation";
import { SemesterHeader } from "./SemesterHeader";
import { SubjectListSection } from "./SubjectListSection";


export function SemesterContainer() {
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
                                    <SemesterHeader
                                        semester={semester}
                                        isActive={isActive}
                                        colors={colors}
                                        onToggle={() => setActiveSemester(isActive ? null : semester.number)}
                                    />

                                    {/* Subjects List */}
                                    {isActive && (
                                        <SubjectListSection
                                            semester={semester}
                                        />
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