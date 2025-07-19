import React from "react";
import type { MyGradeProgress } from "../../data/myCourseProgress";
import { MyStepCard } from "./MyStepCard";

interface MyStepContainerProps {
    grade: MyGradeProgress;

}

export const MyStepContainer: React.FC<MyStepContainerProps> = ({ grade }) => {
    const [expandedSteps, setExpandedSteps] = React.useState<number[]>([]);


    const toggleStep = (stepId: number) => {
        setExpandedSteps((prev) => {
            if (prev.includes(stepId)) {
                return prev.filter(id => id !== stepId);
            } else {
                return [...prev, stepId];
            }
        });
    };

    return (
        <div className="grid gap-8 w-full">
            {grade.etapas.map((step) => (
                <MyStepCard
                    key={step.id}
                    step={step}
                    expandedSteps={expandedSteps}
                    toggleStep={toggleStep}
                />
            ))}
        </div>

    )
}

