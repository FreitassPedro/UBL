import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div className="sticky top-0 left-0 z-50 bg-gray-800 shadow-xl border-b border-gray-700 ">
            <div className="flex justify-between mx-w-7xl mx-auto px-6 py-4 items-center">
                <div className="flex flex-col">
                    <Link to={"/"} className="flex items-center space-x-2">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                            UBL
                        </h1>
                    </Link>
                </div>

                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:font-medium hover:text-white">Home</Link>
                    <Link to="/grade-curricular" className="text-gray-300 hover:font-medium hover:text-white"> Grade Curricular</Link>
                    <Link to="/meu-curso" className="text-gray-300 hover:font-medium hover:text-white">Meu Curso</Link>
                    <Link to="https://github.com/Universidade-Livre" className="text-gray-300 hover:font-medium hover:text-white">Github</Link>
                </div>


            </div>
        </div>
    )
};