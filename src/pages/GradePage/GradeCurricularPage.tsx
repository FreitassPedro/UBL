import bannerstudy from "@/assets/imgs/bannerstudy.jpeg";
import { CurriculumSection } from "@/components/GradeCurricular/CurriculumSection";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    CurriculoCC,
    CurriculoMatematica,
} from "@/data/gradeCurricular";
import type { Grade } from "@/types/grade";
import React from "react";

export default function GradeCurricularPage() {
    const [selectedGrade, setSelectedGrade] = React.useState<Grade | undefined>(undefined);

    const handleCourseSelection = (index: number) => {
        console.log(`Curso selecionado: ${index}`);
        if (index === 1) {
            setSelectedGrade(CurriculoCC);
        } else {
            setSelectedGrade(CurriculoMatematica);
        }
    }

    const cursos = [
        {
            "curso": "Ciência da Computação",
            "descricao": "Um caminho para a educação autodidata em Ciência da Computação",
            "imgSrc": "https://github.com/Universidade-Livre/imagens/blob/main/outras/placeholder.png?raw=true",
            "color": "bg-gradient-to-r from-blue-600 to-green-700"
        },
        {
            "curso": "Matemática",
            "descricao": "Um caminho para a educação autodidata em Matemática.",
            "imgSrc": "https://github.com/Universidade-Livre/imagens/blob/main/outras/ubl_mat.jpeg?raw=true",
            "color": "bg-gradient-to-r from-blue-600 to-purple-500"
        }
    ]

    return (
        <div className='min-h-screen bg-bg-body text-white'>
            <main className="relative z-10 flex flex-col items-center space-y-4">
                {/* Banner */}

                <div className="relative h-112 shadow-lg w-full mb-8 overflow-hidden">
                    <div className="absolute inset-0 z-1 overflow-hidden w-full h-full">
                        <img
                            src={bannerstudy}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                    <div className="h-full z-10 relative flex items-center justify-center px-6">
                        <div className={`max-w-2xl text-center transition-all duration-1000 ease-out `}>
                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                                Sua jornada começa aqui
                            </h1>
                            <p className="text-xl text-white mb-6 font-light">
                                Descubra a liberdade de aprender com nossos cursos online gratuitos, desenvolvidos para todos os níveis de conhecimento. Aprenda no seu ritmo, onde e quando quiser.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Seção de Seleção de Curso */}
                <section className='relative mx-auto max-w-6xl flex flex-col items-center my-4 p-8' >
                    <div className='mb-4'>
                        <h2 className='md:text-3xl text-2xl font-bold text-white text-center '>Catálogo de Cursos</h2>
                        <span className='text-gray-400 text-md'>Escolha um curso para explorar sua grade curricular detalhada.</span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
                        {cursos.map((curso, index) => (
                            <Card
                                key={index}
                                className="p-0 gap-0 border-0 bg-zinc-900 rounded-lg shadow-none hover:shadow-xl hover:shadow-ubl-blue/40 overflow-hidden col-span-2 hover:scale-102 transition duration-300 ease-in-out cursor-pointer group"
                                onClick={() => handleCourseSelection(index + 1)}
                            >
                                <div className='h-96 overflow-hidden'>
                                    <img
                                        src={curso.imgSrc}
                                        alt={curso.curso}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <Separator className={`${curso.color} group-hover:animate-pulse`} />
                                <CardContent className="p-8 flex flex-col justify-center items-align">
                                    <CardTitle className='text-2xl group-hover:text-3xl font-bold text-gray-100 transition-all duration-300'>
                                        {curso.curso}
                                    </CardTitle>
                                    <p className='text-md text-text-muted'>{curso.descricao}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Seção de Conteúdo da Grade Curricular */}
                {selectedGrade && (
                    <CurriculumSection
                        selectedCourse={selectedGrade}
                    />
                )}
            </main>
        </div>
    );
}
