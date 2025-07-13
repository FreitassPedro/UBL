import React, { useState } from "react";
import { CurriculoCC, type Grade } from "../../data/gradeCurricular";
import { SemesterCard } from "./SemesterCard";


interface SemesterContainerProps {
    selectedCourse: Grade[];
}

export const SemesterContainer: React.FC<SemesterContainerProps> = ({ selectedCourse }) => {
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
                {selectedCourse.map((semester, index) => {
                    const colors = semesterColors[index % semesterColors.length];
                    const isActive = activeSemester === semester.number;

                    return (
                        <SemesterCard
                            key={semester.number}
                            grade={semester}
                            isActive={isActive}
                            colors={colors}
                            onToggle={() => setActiveSemester(isActive ? null : semester.number)}
                        />
                    );
                })}
            </div>

        </section>
    );
}