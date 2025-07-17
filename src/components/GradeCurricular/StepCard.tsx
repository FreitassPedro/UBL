import type { Etapa } from "../../data/gradeCurricular";
import { StepCardBody } from "./StepCardBody";
import { StepCardHeader } from "./StepCardHeader";

interface StepCardProrps {
    stage: Etapa;
    isActive: boolean;
    colors: {
        gradient: string;
        bg: string;
        border: string;
        icon: string;
    };
    onToggle: () => void;
}
export const StepCard: React.FC<StepCardProrps> = ({ stage, isActive, colors, onToggle }) => {
    return (
        <div key={stage.id} className="group">
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
                    <StepCardHeader
                        stage={stage}
                        isActive={isActive}
                        onToggle={onToggle}
                    />

                    {isActive && (
                        <StepCardBody
                            stage={stage}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}