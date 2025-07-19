import React from "react";
import BackgroundAnimation from "../../components/BackgroundAnimation";
import { MyStepCard } from "../../components/MyCourse/MyStepCard.tsx";

import { MyCourseRoutes } from "../../components/MyCourse/MyCourseRoutes.tsx";
import { useCourseProgress } from "../../contexts/CourseProgressContext.tsx";
import type { MyCadeiraProgress, MyEtapaProgress, MyGradeProgress, MyLesson } from "../../data/myCourseProgress.ts";
import { CurriculoCC, type Grade } from "../../data/gradeCurricular.ts";
import { MyStepContainer } from "../../components/MyCourse/MyStepContainer.tsx";


export function transformGradeToMyGradeProgress(
    grade: Grade,
    completedLessons: Set<string>
): MyGradeProgress {

    // 1. Processar cada Etapa para calcular seu progresso individual
    const myEtapas: MyEtapaProgress[] = grade.etapas.map((etapa) => {

        // 2. Processar cada Cadeira dentro da Etapa
        const myCadeiras: MyCadeiraProgress[] = etapa.cadeiras.map((cadeira) => {

            // 3. Processar cada Lição dentro da Cadeira
            // Esta transformação mantém o número de lições. Se o array original 'cadeira.lessons'
            // tiver N itens, 'myLessons' também terá N itens.
            const myLessons: MyLesson[] = cadeira.lessons.map((lesson) => ({
                ...lesson,
                isCompleted: completedLessons.has(lesson.id),
            }));

            // Calcular o progresso da Cadeira com base nas lições
            const completedLessonsInCadeira = myLessons.filter(l => l.isCompleted).length;
            const totalLessonsInCadeira = myLessons.length;

            const cadeiraProgress = totalLessonsInCadeira > 0
                ? (completedLessonsInCadeira / totalLessonsInCadeira) * 100
                : 0;

            const isCadeiraCompleted = totalLessonsInCadeira > 0 && completedLessonsInCadeira === totalLessonsInCadeira;

            return {
                ...cadeira,
                lessons: myLessons, // Substitui o array de lições pelo novo, com o status de conclusão
                progress: cadeiraProgress,
                totalCompleted: completedLessonsInCadeira,
                isCompleted: isCadeiraCompleted,
            };
        });

        // Calcular o progresso da Etapa com base no número de Cadeiras concluídas
        const completedCadeirasInEtapa = myCadeiras.filter(c => c.isCompleted).length;
        const totalCadeirasInEtapa = myCadeiras.length;

        const etapaProgress = totalCadeirasInEtapa > 0
            ? (completedCadeirasInEtapa / totalCadeirasInEtapa) * 100
            : 0;

        return {
            ...etapa,
            cadeiras: myCadeiras,
            name: `Etapa ${etapa.number}`, // Adiciona o nome conforme a interface
            progress: etapaProgress,
            totalSubjects: totalCadeirasInEtapa,
            totalCompleted: completedCadeirasInEtapa,
        };
    });

    // 4. Calcular o progresso geral da Grade (usando o total de lições para maior precisão)
    let totalLessonsInGrade = 0;
    let completedLessonsInGrade = 0;

    myEtapas.forEach(etapa => {
        etapa.cadeiras.forEach(cadeira => {
            totalLessonsInGrade += cadeira.lessons.length;
            completedLessonsInGrade += cadeira.lessons.filter(l => l.isCompleted).length;
        });
    });

    const gradeProgress = totalLessonsInGrade > 0
        ? (completedLessonsInGrade / totalLessonsInGrade) * 100
        : 0;

    const isGradeCompleted = totalLessonsInGrade > 0 && completedLessonsInGrade === totalLessonsInGrade;

    // 5. Retornar a estrutura final e completa
    return {
        ...grade,
        etapas: myEtapas,
        progress: gradeProgress,
        isCompleted: isGradeCompleted,
    };
}
const MyCourse = () => {

    const curriculoOriginal = CurriculoCC;
    const { completedLessons } = useCourseProgress();
    const sampleData = transformGradeToMyGradeProgress(curriculoOriginal, completedLessons);
    console.log('Curriculo:', curriculoOriginal);
    console.log('Sample Data:', sampleData);


    return (
        <div className="min-h-screen bg-gray-950 text-white ">
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <BackgroundAnimation />

                {/* Main */}
                <main className="flex flex-col md:flex-row gap-6">
                    {/* Filtro */}
                    <MyCourseRoutes />
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