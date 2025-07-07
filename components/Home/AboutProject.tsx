import { Card, CardContent } from "../ui/card";

import { BookOpen, Users} from "lucide-react";

export const AboutProject = () => {
    return (
        <>
            <section className="mb-16">

                <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
                <Card>
                    <CardContent className="p-6">
                        <p className="text-lg mb-4">
                            Este portal é um projeto em construção voltado para estudos no curso de Ciência da Computação, inspirado
                            no projeto Universidade Brasileira Livre (UBL). Nosso objetivo é criar uma plataforma de aprendizado open
                            source, acessível a todos.
                        </p>
                        <p className="text-lg mb-4">
                            Atualmente, disponibilizamos a grade curricular do curso da UBL e estamos trabalhando para adicionar mais
                            conteúdos e recursos educacionais.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <Card>
                                <CardContent className="flex flex-col items-center p-4">
                                    <BookOpen className="h-12 w-12 text-primary mb-2" />
                                    <h3 className="text-lg font-semibold">Conteúdo Gratuito</h3>
                                    <p className="text-center text-sm text-muted-foreground">Acesso livre a materiais de estudo</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center p-4">
                                    <Users className="h-12 w-12 text-primary mb-2" />
                                    <h3 className="text-lg font-semibold">Comunidade Ativa</h3>
                                    <p className="text-center text-sm text-muted-foreground">Aprenda e colabore com outros estudantes</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center p-4">
                                    <h3 className="text-lg font-semibold">Open Source</h3>
                                    <p className="text-center text-sm text-muted-foreground">
                                        Contribua para o desenvolvimento do projeto
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    )
}

export default AboutProject;