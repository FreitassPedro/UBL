import { BookMarked, Home, Map } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="sticky top-0 left-0 z-50 bg-gray-950 shadow-xl border-b border-gray-700 ">
            <div className="flex justify-between max-w-7xl mx-auto px-6 py-4 items-center">
                {/* Logo e Título */}
                <div className="flex flex-col">
                    <Link to={"/"} className="flex items-center space-x-2">
                        <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                            UBL
                        </h1>
                    </Link>
                </div>

                <nav>
                    <ul className="flex space-x-6">
                        <li className="cursor-pointer text-zinc-400 text-md font-medium border-b-2 border-transparent hover:border-blue-400 hover:text-blue-400 duration-300 transition-all ease-out text-center justify-between flex items-center space-x-1">
                            <Home size={18} />
                            <Link to="/">Home</Link>
                        </li>
                        <li className="cursor-pointer text-zinc-400 font-medium text-md border-b-2 border-transparent hover:border-blue-400 hover:text-blue-400 duration-300 transition-all text-center justify-between flex items-center space-x-1">
                            <Map size={18} />
                            <Link to="/grade-curricular">Grade Curricular</Link>
                        </li>
                        <li className="cursor-pointer text-zinc-400 text-md font-medium border-b-2 border-transparent hover:border-blue-400 hover:text-blue-400 duration-300 transition-all text-center justify-between flex items-center space-x-1">
                            <BookMarked size={18} />
                            <Link to="/meu-curso" >Meu Curso</Link>
                        </li>
                        <li className="cursor-pointer text-zinc-400 text-md font-medium border-b-2 border-transparent hover:border-blue-400 hover:text-blue-400 duration-300 transition-all text-center justify-between  flex items-center space-x-1">
                            <Link to="https://github.com/Universidade-Livre" target="_blank" rel="noopener noreferrer">Github</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};