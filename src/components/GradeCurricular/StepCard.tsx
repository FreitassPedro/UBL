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
export const StepCard: React.FC<StepCardProrps> = ({ stage, isActive, onToggle }) => {
    
    return (
        <div key={stage.id} className="group">
            {/* Semester Card */}
            <div
                className={`transition-all duration-400 ${isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                    }`}
            >
                {/* Main Container */}
                <div className="bg-bg-card rounded-2xl border overflow-hidden border-white/20">
                    {/* Gradient Top Border */}
                    { /* <div className={`h-0.5 bg-linear-to-r ${colors.gradient}`}></div> */}

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