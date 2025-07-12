import { ExternalLink, LibraryBig } from "lucide-react"
import type React from "react"

interface BookRecomendationProps {
    subject: {
        books?: { name: string; url: string }[]
    }
}

export const BookRecomendation: React.FC<BookRecomendationProps> = ({subject}) => {

    return (
        <div className="mt-4 pt-4 border-t border-white/10">
            <div className="animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2 mb-4">
                    <LibraryBig className="h-5 w-5 text-yellow-400" />
                    <h5 className="font-semibold text-lg text-white">Leituras Recomendadas</h5>
                </div>
                {subject.books && subject.books.length > 0 ? (
                    <div className="grid gap-3 cursor-pointer">
                        {subject.books.map((book, bookIndex) => (
                            <a
                                key={bookIndex}
                                href={`https://github.com/Universidade-Livre/ciencia-da-computacao/blob/main/${book.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/book flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <span className="flex-1 text-gray-200 group-hover/book:text-white transition-colors">
                                    {book.name}
                                </span>
                                <ExternalLink className="h-4 w-4 text-gray-400 group-hover/book:text-blue-400 transition-colors" />
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <p className="text-gray-400">Nenhuma recomendação disponível para esta disciplina.</p>
                    </div>
                )}
            </div>
        </div>
    )
}