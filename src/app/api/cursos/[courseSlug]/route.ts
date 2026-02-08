import { getCourse } from "@/services/course.service";
import Course from "@/types/course/course.interface";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ courseSlug: string }> },
) {
  const { courseSlug } = await params;
  const course: Course | undefined = await getCourse(courseSlug);
  if (!course) {
    return NextResponse.json(
      { error: "Curso não encontrado." },
      { status: 404 },
    );
  }

  return NextResponse.json(course);
}
