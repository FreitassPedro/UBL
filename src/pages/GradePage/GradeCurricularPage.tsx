import React from 'react';
import { StepContainer } from '../../components/GradeCurricular/StepContainer';
import { CurriculoCC, CurriculoMatematica, type Grade } from '../../data/gradeCurricular';

export default function GradeCurricularPage() {

    const [selectedGrade, setSelectedGrade] = React.useState<Grade | undefined>(undefined);

    const gradeContainerRef = React.useRef<HTMLDivElement>(null);

    const handleCourseSelection = (index: number) => {
        console.log(`Curso selecionado: ${index}`);
        if (index === 1) {
            setSelectedGrade(CurriculoCC);
        }
        else {
            setSelectedGrade(CurriculoMatematica);
        }

        setTimeout(() => {
            if (gradeContainerRef.current) {
                gradeContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);

    }

    const cursos = [
        {
            "curso": "Ciência da Computação",
            "descricao": "Curso de Ciência da Computação da Universidade Brasileira Livre (UBL).",
            "imgSrc": "https://placehold.co/60x60/31343C/EEE?text=Ciencia+da+Computacao",
            "color": "bg-gradient-to-r from-blue-600 to-green-700"
        },
        {
            "curso": "Matemática",
            "descricao": "Curso de Matemática da Universidade Brasileira Livre (UBL).",
            "imgSrc": "https://placehold.co/60x60/31343C/EEE?text=Matematica",
            "color": "bg-gradient-to-r from-blue-600 to-purple-500"
        }
    ]

    return (
        <div className='bg-bg-body text-white min-h-screen'>
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <div className="relative h-96 shadow-xl">
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
                            <h1 className="text-4xl md:text5xl font-bold text-white leading-tight mb-4">
                                Nossos Cursos
                            </h1>
                            <p className="text-xl text-white mb-6 font-light">
                                Descubra a liberdade de aprender com nossos cursos online gratuitos, desenvolvidos para todos os níveis de conhecimento. Aprenda no seu ritmo, onde e quando quiser.
                            </p>
                        </div>
                    </div>
                </div>
                <section className='py-10 ' >
                    <div className='mx-auto px-6 py-10 '>
                        <h2 className='md:text-3xl text-3xl font-semibold text-white text-center mb-6 '>Visualize uma Grade Curricular</h2>
                        <div className='grid grid-cols-5 gap-12'>
                            {cursos.map((curso, index) => (
                                <div key={index}
                                    className='bg-white/5 rounded-xl shadow-lg overflow-hidden col-span-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer'
                                    onClick={() => handleCourseSelection(index + 1)}
                                >
                                    <div className='h-128 overflow-hidden'>
                                        <img
                                            src={curso.imgSrc}
                                            alt={curso.curso}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className={`h-1 ${curso.color}`}></div>
                                    <div className='p-8 '>
                                        <h3 className='text-2xl font-bold text-gray-100'>{curso.curso}</h3>
                                        <p className='text-xl text-gray-300'>{curso.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {selectedGrade && (
                    <div ref={gradeContainerRef} >
                        <StepContainer
                            selectedCourse={selectedGrade}
                        />
                    </div>

                )}
            </div>

        </div>
    );
}