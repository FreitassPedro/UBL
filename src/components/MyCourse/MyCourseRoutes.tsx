import React from "react";

interface Route {
    id: string;
    name: string;
    description: string;
    image: string;
}
const sampleRotas = [
    {
        "id": "1",
        "name": "Rumo à Ciência (sugerida)",
        "description": "Caminho perfeito para entusiastas da computação e também para aqueles que estão se descobrindo nessa área. Aprenda os fundamentos da ciência da computação, programação e matemática aplicada.",
        "image": "https://placehold.co/60x60/31343C/EEE?text=Ciencia",
    },
    {
        "id": "2",
        "name": "Foco em Programação",
        "description": "Ideal para quem deseja se aprofundar na programação e desenvolvimento de software. Aprenda linguagens de programação, estruturas de dados e algoritmos.",
        "image": "https://placehold.co/60x60/31343C/EEE?text=Programacao",
    },
    {
        "id": "3",
        "name": "Foco na Matemática",
        "description": "Para aqueles que desejam se especializar em matemática aplicada à computação. Aprenda álgebra linear, cálculo e estatística.",
        "image": "https://placehold.co/60x60/31343C/EEE?text=Matematica",
    }
]
export const MyCourseRoutes = () => {

    const [selectedRoute, setSelectedRoute] = React.useState<Route>(sampleRotas[0]);

    const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Selected route:", event.target.value);
        setSelectedRoute(sampleRotas.find(rota => rota.id === event.target.value) || sampleRotas[0]);
    }
    return (
        <div className="flex flex-col md:w-1/4">
            <div className="bg-zinc-900/90 border-l-1 border-blue-600 sticky top-4 p-5 rounded mb-6">
                <img
                    src={`https://placehold.co/60x60/31343C/EEE?text=${selectedRoute.name}`}
                    className="w-full h-64 rounded object-cover flex-shrink-0 border border-gray-700"
                    alt={`Imagem da rota ${selectedRoute.name}`}
                />
                <h3 className="text-bold text-xl mt-2 text-white">{selectedRoute.name}</h3> {/* Adicionado text-white */}
                <span className="text-sm text-gray-300">{selectedRoute.description}</span>
            </div>
            <div className="bg-zinc-900 border-l-1 border-blue-600 sticky top-4 p-5 rounded ">
                <div className="space-y-2 ">
                    <h3 className="text-lg font-semibold text-white">Rota de estudos</h3> {/* Adicionado text-white */}
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                        <input
                            type="radio"
                            name="studyRoute"
                            value="1"
                            checked={selectedRoute.id === "1"}
                            onChange={handleRouteChange}
                            className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Rumo à Ciência</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                        <input
                            type="radio"
                            name="studyRoute"
                            value="2"
                            checked={selectedRoute.id === "2"}
                            onChange={handleRouteChange}
                            className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Foco em Programação</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                        <input
                            type="radio"
                            name="studyRoute"
                            value="3"
                            checked={selectedRoute.id === "3"}
                            onChange={handleRouteChange}
                            className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Foco na Matemática</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                        <input
                            type="radio"
                            name="studyRoute"
                            value="4"
                            checked={selectedRoute.id === "4"}
                            onChange={handleRouteChange}
                            className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Meu próprio caminho</span>
                    </label>
                </div>
            </div>
        </div>
    )
}