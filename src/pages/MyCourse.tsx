import useTituloDaPagina from "@/hooks/useTitlePage";
import { useState } from "react";
import { type CourseOption, useMyCourseData } from "../hooks/useMyCourseData";
import { Card } from "@/components/ui/card";
import { MyStepContainer } from "@/components/my-course/MyStepContainer";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LayoutGrid } from "lucide-react";


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

                <div>
                    {/* Header da Seção */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row gap-4">
                            <Avatar className="h-12 w-12 cursor-pointer">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="Avatar"
                                />
                                <AvatarFallback>Avatar</AvatarFallback>
                            </Avatar>
                            <div className="text-2xl text-zinc-200 ">
                                Bem-vindo, Estudante!
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">Sua Jornada</h2>
                            <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
                                <LayoutGrid className="w-5 h-5 text-zinc-300" />
                            </div>
                        </div>
                    </div>
                </div>

                {currentCourseProgress === null ? (
                    <div>
                        <h1 className="text-2xl">O que você quer aprender hoje?</h1>
                        <div className="flex gap-4 items-center justify-center">
                            <Card className="cursor-pointer" onClick={() => handleCourseSelection("Computacao")} >
                                Ciencia da Computação
                            </Card>
                            <Card className="cursor-pointer" onClick={() => handleCourseSelection("Matematica")} >
                                Matemática
                            </Card>
                        </div>
                    </div>
                ) : (
                    <MyStepContainer courseProgress={currentCourseProgress} />
                )}
            </main >
        </div >
    );
};

export default MyCourse;