
import { GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function HomeHeader() {
    return (
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Portal de Ciência da Computação Open Source</h1>
            <p className="text-xl text-muted-foreground mb-6">Inspirado no projeto Universidade Brasileira Livre (UBL)</p>
            <div className="flex justify-center space-x-4">
                <Button>
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Comece a Aprender
                </Button>
                <Link to="https://github.com/Universidade-Livre/universidade" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                        Contribua no GitHub
                    </Button>
                </Link>
                <Button>
                    <Link to="/grade-curricular">
                        Ver Grade Curricular
                    </Link>
                </Button>
            </div>
        </header>
    )
}