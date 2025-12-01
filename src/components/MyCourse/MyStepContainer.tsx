import React, { useState } from "react";
import type { MyGradeProgress } from "../../data/myCourseProgress";
import { MyStepCard } from "./MyStepCard";

interface MyStepContainerProps {
    grade: MyGradeProgress;
}

export const MyStepContainer: React.FC<MyStepContainerProps> = ({ grade }) => {
    const [activeStep, setActiveStep] = useState<number>(1);

    return (

        <div className="flex-1">
            { /* NAvegação */}
            <div className="flex justify-center">
                {grade.etapas.map((step) => (
                    <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`px-4 py-2 mr-2 mb-4 rounded ${activeStep === step.id ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
                    >
                        {step.name}
                    </button>
                ))}
            </div>
            { /* All Steps */}
            <div className="w-full">
                {grade.etapas.filter(gr => gr.id == activeStep).map((step) => (
                    <MyStepCard
                        key={step.id}
                        step={step}
                    />
                ))}
            </div>
        </div >

    )
}