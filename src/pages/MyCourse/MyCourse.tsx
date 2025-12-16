import { useCourseProgress } from "../../contexts/CourseProgressContext/CourseProgressContext.tsx";
import { CurriculoCC } from "../../data/gradeCurricular.ts";
import { MyStepContainer } from "../../components/MyCourse/MyStepContainer.tsx";
import { mapGradeToMyGradeProgress } from "../../lib/utils.ts";
import useTituloDaPagina from "../../components/useTitlePage.tsx";
import { BackgroundGrid } from "../../components/ui/BackgroundGrid.tsx";
import Footer from "../../components/Footer.tsx";


const MyCourse = () => {
    useTituloDaPagina('Meu Curso');

    const curriculoOriginal = CurriculoCC;
    const { completedLessons } = useCourseProgress();
    const sampleData = mapGradeToMyGradeProgress(curriculoOriginal, completedLessons);
    console.log('Curriculo:', curriculoOriginal);
    console.log('Sample Data:', sampleData);


    return (
        <div className="min-h-screen bg-bg-body text-white">
            {/* Main */}
            <BackgroundGrid />
            <main className="relative max-w-6xl mx-auto z-10 px-4 md:px-6 py-6">
                {/* Conteúdo Principal contendo cada Etapa */}
                <MyStepContainer
                    grade={sampleData}
                />
            </main >
            <Footer />
        </div >
    );
};

export default MyCourse;