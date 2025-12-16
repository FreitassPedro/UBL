import React from 'react';
import { StepSection } from '../../components/GradeCurricular/StepSection';
import { CurriculoCC, CurriculoMatematica, type Grade } from '../../data/gradeCurricular';
import { BackgroundGrid } from '../../components/ui/BackgroundGrid';
import Footer from '../../components/Footer';

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
            "imgSrc": "https://github.com/Universidade-Livre/imagens/blob/main/outras/placeholder.png?raw=true",
            "color": "bg-gradient-to-r from-blue-600 to-green-700"
        },
        {
            "curso": "Matemática",
            "descricao": "Curso de Matemática da Universidade Brasileira Livre (UBL).",
            "imgSrc": "https://github.com/Universidade-Livre/imagens/blob/main/outras/ubl_mat.jpeg?raw=true",
            "color": "bg-gradient-to-r from-blue-600 to-purple-500"
        }
    ]

    return (
        <div className='min-h-screen bg-bg-body text-white px-4'>
            {/* Main */}
            <BackgroundGrid />

            <main className="relative z-10 max-w-5xl mx-auto flex flex-col items-center py-10 space-y-4">
                {/* Banner */}
                <div className="relative h-96 shadow-lg w-full mb-16 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 z-1 overflow-hidden w-full h-full">
                        <img
                            src={`https://placehold.co/60x60/31343C/EEE?text=Teste`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                    <div className="h-full z-10 relative flex items-center justify-center px-6">
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

                {/* Seção de Seleção de Curso */}
                <section className='relative flex flex-col items-center' >
                    <h2 className='md:text-3xl text-2xl font-semibold text-white text-center mb-6'>Visualize uma Grade Curricular</h2>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                        {cursos.map((curso, index) => (
                            <div key={index}
                                className='bg-bg-card rounded-lg hover:shadow-xl shadow-blue-500 overflow-hidden col-span-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer group'
                                onClick={() => handleCourseSelection(index + 1)}
                            >
                                <div className='h-96 overflow-hidden'>
                                    <img
                                        src={curso.imgSrc}
                                        alt={curso.curso}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className={`h-1 ${curso.color} group-hover:animate-pulse`}></div>
                                <div className='p-8'>
                                    <h3 className='text-2xl group-hover:text-3xl font-bold text-gray-100 transition-all duration-300'>{curso.curso}</h3>
                                    <p className='text-md text-text-muted'>{curso.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção de Conteúdo da Grade Curricular */}
                {selectedGrade && (
                    <div
                        className="w-full mt-12"
                        ref={gradeContainerRef} >
                        <StepSection
                            selectedCourse={selectedGrade}
                        />
                    </div>

                )}
            </main>


            <Footer />
        </div>
    );
}