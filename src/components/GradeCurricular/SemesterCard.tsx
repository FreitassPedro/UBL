import { SemesterCardBody } from "./SemesterCardBody";
import { SemesterCardHeader } from "./SemesterCardHeader";

interface SemesterCardProps {
    semester: {
        number: number;
        subjects: { name: string; prerequisites: string[]; books?: { name: string; url: string }[] }[];
    };
    isActive: boolean;
    colors: {
        gradient: string;
        bg: string;
        border: string;
        icon: string;
    };
    onToggle: () => void;
}
export const SemesterCard: React.FC<SemesterCardProps> = ({ semester, isActive, colors, onToggle }) => {
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
                    <SemesterCardHeader
                        semester={semester}
                        isActive={isActive}
                        colors={colors}
                        onToggle={onToggle}
                    />

                    {isActive && (
                        <SemesterCardBody
                            semester={semester}
                            colors={colors}
                        />
                    )


                    }
                </div>
            </div>
        </div>
    )
}