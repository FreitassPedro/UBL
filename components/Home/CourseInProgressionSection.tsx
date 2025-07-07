import { useCourseProgress } from "@/contexts/CourseProgressContext";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "@radix-ui/react-progress";

import Link from "next/link";


const coursesMock = [
    {
        id: "circuitos-digitais",
        title: "Circuitos Digitais",
        description: "Introdução aos conceitos fundamentais de circuitos digitais",
        videos: [],
    },
    {
        id: "matematica-discreta",
        title: "Matemática Discreta",
        description: "Aulas e Provas do Curso de Matemática Discreta voltada para computação",
        videos: [],
    },
]

const CoursesInProgressSection = () => {
    const { getProgress } = useCourseProgress()

    return (
        <section className="mb-16"> 
            <h2 className="text-3xl font-bold">Meu aprendizado</h2>
            <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                Acesse seus cursos em andamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesMock.map((course) => (
                    <Link href={`/curso/${course.id}`} key={course.id}>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{course.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Progress value={getProgress(course.id, course.videos)} />
                                    <p className="text-sm text-muted-foreground">
                                        {Math.round(getProgress(course.id, course.videos))}% concluído
                                    </p>
                                    <p className="text-sm">{course.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section >
    )
}

export default CoursesInProgressSection;