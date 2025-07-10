import { curriculum } from "../../data/curriculum";
import { SubjectItem } from "./SubjectItem";

export function GradeEmBlocos() {
    const semesters = curriculum;

    return (
        <section className="mb-16">
            <h2 className="text-3xl text-white font-bold">Currículo em etapas</h2>
            <div className="space-y-6 ">
                {semesters.map((semester) => (
                    <div key={semester.number} className="bg-gray-800/20 shadow-xl rounded-xl p-6">
                        <h4 className="text-xl font-semibold text-white mb-4">Semestre {semester.number}</h4>
                        <span className="font-medium text-white">Disciplina / </span>
                        <span className="text-gray-300">Pré-requisitos</span>
                        <ul className="mt-4 space-y-4">
                            {semester.subjects.map((subject) => (
                                <SubjectItem key={subject.name} subject={subject} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )

}

