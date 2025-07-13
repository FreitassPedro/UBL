import React from 'react';
import { SemesterContainer } from '../../components/GradeCurricular/SemesterContainer';
import { Navbar } from '../../components/Navbar';
import { GradeHeader } from '../../components/GradeCurricular/GradeHeader';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import { CurriculoCC, CurriculoMatematica, type Grade } from '../../data/gradeCurricular';

export default function GradeCurricularPage() {

    const [selecteCourse, setSelectedCourse] = React.useState<Grade[]>();

    const handleCourseSelection = (index: number) => {
        console.log(`Curso selecionado: ${index}`);
        if (index === 1) {
            setSelectedCourse(CurriculoCC);
        }
        else {
            setSelectedCourse(CurriculoMatematica);
        }
    }

    const cursos = [
        {
            "curso": "Ciência da Computação",
            "descricao": "Curso de Ciência da Computação da Universidade Brasileira Livre (UBL).",
            "imgSrc": "https://placehold.co/60x60/31343C/EEE?text=Ciencia+da+Computacao",
        },
        {
            "curso": "Matemática",
            "descricao": "Curso de Matemática da Universidade Brasileira Livre (UBL).",
            "imgSrc": "https://placehold.co/60x60/31343C/EEE?text=Matematica",
        }
    ]

    return (
        <div className='bg-gray-900 text-white min-h-screen'>
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <header className="relative h-96 shadow-xl">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={`https://placehold.co/60x60/31343C/EEE?text=Teste`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                    <div className="relative h-full flex items-center justify-center px-6">
                        <div className={`max-w-2xl text-center transition-all duration-1000 ease-out `}>
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                                Nossos Cursos
                            </h1>
                            <p className="text-xl text-white mb-6 font-light">
                                Descubra a liberdade de aprender com nossos cursos online gratuitos, desenvolvidos para todos os níveis de conhecimento. Aprenda no seu ritmo, onde e quando quiser.
                            </p>
                        </div>
                    </div>
                </header>
                <section className='bg-radial from-secondary to-thirtiary py-10'>
                    <div className='mx-auto px-6 py-10 container'>
                        <h2 className='md:text-3xl text-4xl font-bold text-white text-center mb-10'>Escolha o curso desejado</h2>
                        <div className='grid grid-cols-5 gap-12'>
                            {cursos.map((curso, index) => (
                                <div key={index}
                                    className='bg-quaternary rounded-xl shadow-lg overflow-hidden col-span-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer'
                                    onClick={() => handleCourseSelection(index + 1)}
                                >
                                    <div className='h-128 overflow-hidden'>
                                        <img
                                            src={curso.imgSrc}
                                            alt={curso.curso}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='p-8 border-t-4 border-secondary '>
                                        <h3 className='text-2xl font-bold'>{curso.curso}</h3>
                                        <p className='text-lg'>{curso.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <BackgroundAnimation />

                <GradeHeader />
                {selecteCourse && (
                    <SemesterContainer
                        selectedCourse={selecteCourse}
                    />
                )}

            </div>
        </div>
    );
}