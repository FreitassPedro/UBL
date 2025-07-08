
import { useState } from "react";
import { Button } from "../ui/button";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import type { Subject } from "../../data/curriculum";


interface SujectItemProps {
    subject: Subject;
}
export function SubjectItem({ subject }: SujectItemProps) {
    const [showBooks, setShowBooks] = useState(false);

    return (
        <li className="flex flex-col border p-4 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="font-medium text-lg">{subject.name}</span>
                    {subject.prerequisites && subject.prerequisites.length > 0 && (
                        <span className="text-gray-700 text-sm mt-1">
                            {subject.prerequisites.join(', ')}
                        </span>
                    )}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowBooks(!showBooks)}
                    className="ml-4 flex items-center space-x-2"
                >
                    <BookOpen className="h-4 w-4" />
                    <span>Ver Recomendações</span>
                    {showBooks ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
            </div>

            {showBooks && subject.books && subject.books.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="font-semibold text-md mb-2">Livros Recomendados:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                        {subject.books.map((book, index) => (
                            <li key={index}>
                                <a
                                    href={`https://github.com/Universidade-Livre/ciencia-da-computacao/blob/main/${book.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {book.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {showBooks && (!subject.books || subject.books.length === 0) && (
                <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600">
                    <p>Nenhuma recomendação de livro disponível para esta disciplina.</p>
                </div>
            )}
        </li>
    );
}