import { CourseProgressProvider } from "@/contexts/CourseProgressContext"

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CourseProgressProvider>{children}</CourseProgressProvider>
}

