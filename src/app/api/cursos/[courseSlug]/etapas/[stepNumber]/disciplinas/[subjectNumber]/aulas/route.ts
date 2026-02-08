import { getCourse } from "@/services/course.service";
import { getLessons } from "@/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import Step from "@/types/course/step.interface";
import Subject from "@/types/course/subject.interface";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ courseSlug: string; stepNumber: string; subjectNumber: string }> },
) {
  const { courseSlug, stepNumber, subjectNumber } = await params;
  const parsedStepNumber: number = Number(stepNumber);
  const parsedSubjectNumber: number = Number(subjectNumber);
  if (!Number.isInteger(parsedStepNumber) || !Number.isInteger(parsedSubjectNumber)) {
    return NextResponse.json(
      { error: "Parâmetros inválidos." },
      { status: 400 }
    );
  }

  const course: Course | undefined = await getCourse(courseSlug);
  if (!course) {
    return NextResponse.json(
      { error: "Curso não encontrado." },
      { status: 404 }
    );
  }

  const step: Step | undefined = course.steps.find((courseStep) => courseStep.number === parsedStepNumber);
  const subject: Subject | undefined = step?.subjects.find((stepSubject) => stepSubject.number === parsedSubjectNumber);
  if (!subject) {
    return NextResponse.json(
      { error: "Disciplina não encontrada." },
      { status: 404 }
    );
  }

  const lessons: Lesson[] | undefined = await getLessons(courseSlug, parsedStepNumber, subject.id);
  if (!lessons) {
    return NextResponse.json(
      { error: "Aulas não encontradas." },
      { status: 404 }
    );
  }

  return NextResponse.json(lessons);
}
