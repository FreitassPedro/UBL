import useTituloDaPagina from "@/hooks/useTitlePage";
import { useState } from "react";
import { type CourseOption, useMyCourseData } from "../../lib/useMyCourseData";
import { Card } from "@/components/ui/card";
import { MyStepContainer } from "@/components/MyCourse/MyStepContainer";


const MyCourse = () => {
    useTituloDaPagina('Meu Curso');

    const { getCourseProgress } = useMyCourseData();

    const [selectedCourseType, setSelectedCourseType] = useState<CourseOption | null>(null);

    const handleCourseSelection = (course: CourseOption) => {
        setSelectedCourseType(course);
    };

    const currentCourseProgress = selectedCourseType ? getCourseProgress(selectedCourseType) : null;

    return (
        <div className="min-h-screen bg-bg-body text-white">
            <main className="relative max-w-6xl mx-auto z-10 px-4 md:px-6 py-6 space-y-8">
                <div className="flex gap-4">
                    <Card onClick={() => handleCourseSelection("Computacao")} >
                        Ciencia da Computação
                    </Card>
                    <Card onClick={() => handleCourseSelection("Matematica")} >
                        Matemática
                    </Card>
                </div>

                {/* Conteúdo do Curso - Componente isolado com memo */}
                {currentCourseProgress && <MyStepContainer courseProgress={currentCourseProgress} />}
            </main >
        </div >
    );
};

export default MyCourse;