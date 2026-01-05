import React from "react";
import type { Etapa } from "../../data/gradeCurricular";
import { SemesterBody } from "./SemesterBody";
import { SemesterHeader } from "./SemesterHeader";

interface SemesterCardProps {
    stage: Etapa;
}

export const SemesterCard: React.FC<SemesterCardProps> = ({ stage }) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    return (
        <li key={stage.id} id={`${stage.id}`}
            className={`
                relative rounded-2xl border overflow-hidden shadow-lg shadow-black 
                duration-500 transition-all ease-in-out  border-white/10 hover:border-white/20
                hover:bg-zinc-800/80 hover:translate-x-2 flex flex-col
                ${isActive ? 'border-blue/20 shadow-lg shadow-black/20 bg-zinc-800/90 translate-x-2' : 'bg-bg-card'}
                `}>

            {/* Header */}
            <SemesterHeader
                stage={stage}
                isActive={isActive}
                onToggle={() => setIsActive(!isActive)}
            />

            {isActive && (
                <SemesterBody
                    stage={stage}
                />
            )}
        </li>
    )
}
