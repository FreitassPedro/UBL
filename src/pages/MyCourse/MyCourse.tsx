import { useCourseProgress } from "../../contexts/CourseProgressContext/CourseProgressContext.tsx";
import { CurriculoCC } from "../../data/gradeCurricular.ts";
import { MyStepContainer } from "../../components/MyCourse/MyStepContainer.tsx";
import { mapGradeToMyGradeProgress } from "../../lib/utils.ts";
import useTituloDaPagina from "../../components/useTitlePage.tsx";
import { BackgroundGrid } from "../../components/ui/BackgroundGrid.tsx";


const MyCourse = () => {
    useTituloDaPagina('Meu Curso');

    const curriculoOriginal = CurriculoCC;
    const { completedLessons } = useCourseProgress();
    const sampleData = mapGradeToMyGradeProgress(curriculoOriginal, completedLessons);
    console.log('Curriculo:', curriculoOriginal);
    console.log('Sample Data:', sampleData);


    return (
        <div className="min-h-screen bg-bg-body text-white w-full">
            <div className="container mx-auto px-4 py-8">
                {/* Main */}
                <BackgroundGrid />

                <main className="w-full">
                    {/* Conteúdo Principal contendo cada Etapa */}
                    <MyStepContainer
                        grade={sampleData}
                    />
                </main >
            </div>
        </div >
    );
};

export default MyCourse;