import React from 'react';
import { SemesterCard } from '../../components/GradeCurricular/SemesterCard';
import { Navbar } from '../../components/Navbar';
import { GradeHeader } from '../../components/GradeCurricular/GradeHeader';
import BackgroundAnimation from '../../components/BackgroundAnimation';

export default function GradeCurricularPage() {
    return (
        <div className='bg-gray-900 text-white min-h-screen'>
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <h1 className="text-4xl font-bold mb-8 text-center">Grade Curricular</h1>
                <h1 className="text-3xl text-center font-bold mb-4">
                    Grade do curso de Ciência da Computação da Universidade Brasileira Livre (UBL)
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                    Você pode fazer os cursos na ordem, onde, e como preferir. Este é o maior benefício da liberdade. Entretanto, por fins didáticos e de organização, recomendamos que tente respeitar os pré-requisitos. Você perceberá que não cumprir com estes poderá criar obstáculos em sua jornada.
                </p>
                <BackgroundAnimation />

                <GradeHeader />
                <SemesterCard />

            </div>
        </div>
    );
}