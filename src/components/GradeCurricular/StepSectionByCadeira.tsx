import React, { useEffect } from "react";
import { type Grade } from "../../data/gradeCurricular";
import { StepCardItem } from "./StepCardItem";
import { GraduationCap } from "lucide-react";

interface StepContainerProps {
    selectedCourse: Grade;
}

export const StepSectionByCadeira: React.FC<StepContainerProps> = ({ selectedCourse }) => {

    const sectionRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }, [selectedCourse]);

    return (
        <section className="w-full mt-10" ref={sectionRef} >
            <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                    <GraduationCap className="w-14 h-14" />
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedCourse.curriculo}</h2>
                </div>
                <div className="h-1 bg-linear-to-r from-blue-500 to-green-400 w-full rounded" />
            </div>
            {/* Etapas (Stages) */}
            <ul className="space-y-4">
                {selectedCourse.etapas.map((stage) => {
                    return (
                        <StepCardItem
                            key={stage.id}
                            stage={stage}
                        />
                    );
                })}
            </ul>
        </section>
    );
}