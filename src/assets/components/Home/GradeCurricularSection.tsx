import { CourseGrid } from "../../pages/GradeGraph/CourserGrid"

export function GradeCurricularSection() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Grade Curricular</h2>
            <h3 className="text-xl font-semibold mb-4">
                Grade do curso de Ciência da Computação da Universidade Brasileira Livre (UBL)
            </h3>
            <CourseGrid />
        </section>
    )
}
