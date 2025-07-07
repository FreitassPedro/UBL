import "./globals.css"
import { Inter } from "next/font/google"
import { CourseProgressProvider } from "@/contexts/CourseProgressContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cursos de Universidade",
  description: "Cursos online gratuitos de Ciência da Computação",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CourseProgressProvider>
          <header className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold">Universidade Brasileira Livre</h1>
            </div>
          </header>
          <main className="container mx-auto py-8">{children}</main>
          <footer className="bg-gray-100 p-4 mt-8">
            <div className="container mx-auto text-center text-sm text-gray-600">
            </div>
          </footer>
        </CourseProgressProvider>
      </body>
    </html>
  )
}

