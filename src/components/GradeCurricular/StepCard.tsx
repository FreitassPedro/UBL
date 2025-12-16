import type { Etapa } from "../../data/gradeCurricular";
import { StepCardBody } from "./StepCardBody";
import { StepCardHeader } from "./StepCardHeader";

interface StepCardProrps {
    stage: Etapa;
    isActive: boolean;
    onToggle: () => void;
}
export const StepCard: React.FC<StepCardProrps> = ({ stage, isActive, onToggle }) => {

    return (
        <div key={stage.id} id={`${stage.id}`}
            className={`
                relative bg-bg-card rounded-2xl border overflow-hidden border-white/10 hover:border-white/20
                hover:my-6 duration-500 transition-all ease-in-out
                hover:bg-zinc-800/80 hover:translate-x-2
                ${isActive ? 'border-blue/20 shadow-lg shadow-black/20 translate-x-2' : ''}
                `}>

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
    )
}