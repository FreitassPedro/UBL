"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useCourseProgress } from "@/hooks/useCourseProgress"
import { CourseGrid } from "@/components/CourserGrid"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Github, Search, Plus, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { coursesList } from "@/data/courses"

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.log(error);
        setStoredValue(initialValue);
      }
    }
  }, []);

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue as T) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue ?? initialValue, setValue];
}

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

interface SelectedCourse {
  name: string
  daysGoal: number
  daysCompleted: number
}

export default function HomePage() {
  const { getProgress } = useCourseProgress()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCourses, setFilteredCourses] = useState<string[]>([])
  const [selectedCourses, setSelectedCourses] = useLocalStorage<SelectedCourse[]>("selectedCourses", [])
  const [newCourseName, setNewCourseName] = useState("")
  const [newCourseDays, setNewCourseDays] = useState("")
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [newDaysGoal, setNewDaysGoal] = useState("")

  useEffect(() => {
    if (searchTerm) {
      setFilteredCourses(coursesList.filter((course) => course.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      setFilteredCourses([])
    }
  }, [searchTerm])

  const handleAddCourse = () => {
    if (newCourseName && newCourseDays) {
      const newCourse = {
        name: newCourseName,
        daysGoal: Number(newCourseDays),
        daysCompleted: 0,
      }
      setSelectedCourses([...selectedCourses, newCourse])
      setNewCourseName("")
      setNewCourseDays("")
      console.log("Curso adicionado:", newCourse)
    }
  }

  const handleMarkDay = (index: number) => {
    const updatedCourses = selectedCourses.map((course, i) => {
      if (i === index && course.daysCompleted < course.daysGoal) {
        return { ...course, daysCompleted: course.daysCompleted + 1 }
      }
      return course
    })
    setSelectedCourses(updatedCourses)
    console.log("Progresso atualizado:", updatedCourses[index])
  }

  const handleEditGoal = (index: number) => {
    setEditingIndex(index)
    setNewDaysGoal(selectedCourses[index].daysGoal.toString()) // Preenche com o valor atual
  }
  
  const handleSaveGoal = (index: number) => {
    if (!newDaysGoal) return
  
    const updatedCourses = selectedCourses.map((course, i) => {
      if (i === index) {
        return { ...course, daysGoal: Number(newDaysGoal) }
      }
      return course
    })
  
    setSelectedCourses(updatedCourses)
    setEditingIndex(null)
    setNewDaysGoal("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portal de Ciência da Computação Open Source</h1>
        <p className="text-xl text-muted-foreground mb-6">Inspirado no projeto Universidade Brasileira Livre (UBL)</p>
        <div className="flex justify-center space-x-4">
          <Button>
            <GraduationCap className="mr-2 h-4 w-4" />
            Comece a Aprender
          </Button>
          <a href="https://github.com/MarlonJerold/universidade" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Contribua no GitHub
            </Button>
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Meus Cursos e Metas</h2>
        <Card>
          <CardContent className="p-6">
            <div className="mb-4">
              <Label htmlFor="course-search">Buscar Cadeira</Label>
              <div className="flex items-center">
                <Input
                  id="course-search"
                  type="text"
                  placeholder="Digite o nome da cadeira"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mr-2"
                />
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="new-course">Adicionar Nova Cadeira</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="new-course"
                  type="text"
                  placeholder="Nome da cadeira"
                  value={newCourseName}
                  onChange={(e) => setNewCourseName(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Dias para concluir"
                  value={newCourseDays}
                  onChange={(e) => setNewCourseDays(e.target.value)}
                />
                <Button onClick={handleAddCourse}>
                  <Plus className="h-4 w-4" />
                  Adicionar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
  <h2 className="text-3xl font-bold mb-6">Meus Cursos em Andamento</h2>
  <div className="space-y-4">
    {selectedCourses.map((course, index) => (
      <Card key={index}>
        <CardContent className="p-4">
          <div>
            <h3 className="font-semibold">{course.name}</h3>
            <p className="text-sm text-muted-foreground">
              Meta: {course.daysCompleted} / {course.daysGoal} dias
            </p>
            <Progress value={(course.daysCompleted / course.daysGoal) * 100} className="w-full mt-2" />
          </div>
          <div className="flex justify-between items-center mt-4">
            {editingIndex === index ? (
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  value={newDaysGoal}
                  onChange={(e) => setNewDaysGoal(e.target.value)}
                  className="w-16"
                />
                <Button onClick={() => handleSaveGoal(index)}>
                  <Check className="h-4 w-4" />
                  Salvar
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={() => handleMarkDay(index)} disabled={course.daysCompleted >= course.daysGoal}>
                  <Check className="h-4 w-4 mr-2" />
                  Marcar Dia
                </Button>
                <Button variant="outline" onClick={() => handleEditGoal(index)}>
                  Editar Meta
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

      {filteredCourses.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Cadeiras Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{course}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => {
                      setNewCourseName(course)
                      setNewCourseDays("30") // Default to 30 days
                    }}
                  >
                    Adicionar à Minha Lista
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-3xl font-bold mb-6">Grade Curricular</h2>
        <h3 className="text-xl font-semibold mb-4">
          Grade do curso de Ciência da Computação da Universidade Brasileira Livre (UBL)
        </h3>
        <CourseGrid />
      </section>

      <section className="mt-16 mb-12">
        <h2 className="text-3xl font-bold mb-6">Cursos Disponíveis</h2>
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
      </section>

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
                  <Github className="h-12 w-12 text-primary mb-2" />
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

      <footer className="text-center text-sm text-muted-foreground mt-12">
        <p>
          Este site está sendo criado por <strong>@patinhotech, vulgo Marlon Jerold</strong>
        </p>
      </footer>
    </div>
  )
}

