import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="sticky top-0 left-0 z-50 bg-gray-950 shadow-xl border-b border-gray-700 ">
            <div className="flex justify-between max-w-7xl mx-auto px-6 py-4 items-center">
                {/* Logo e Título */}
                <div className="flex flex-col">
                    <Link to={"/"} className="flex items-center space-x-2">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                            UBL
                        </h1>
                    </Link>
                </div>

                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="font-medium hover:text-white text-zinc-300/90 duration-300 transition-all">Home</Link>
                        </li>
                        <li>
                            <Link to="/grade-curricular" className="font-medium hover:text-white text-zinc-300/90 duration-300 transition-all">Grade Curricular</Link>
                        </li>
                        <li className="border border-zinc-400 px-2 rounded-md bg-zinc-800">
                            <Link to="/meu-curso" className="font-medium hover:text-white text-zinc-300/90 duration-300 transition-all">Meu Curso</Link>
                        </li>
                        <li className="">
                            <Link to="https://github.com/Universidade-Livre" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white text-zinc-300 duration-300 transition-all">Github</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};