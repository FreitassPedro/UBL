import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useTitlePage from "@/hooks/useTitlePage";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  useTitlePage("Página não encontrada");

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center bg-background px-6 py-12 sm:px-8">
      <Card className="w-full max-w-lg p-8 sm:p-10 shadow-lg">
        <CardHeader className="text-center space-y-6">
          <CardTitle className="text-4xl font-semibold tracking-tight">
            Página não encontrada
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground mt-4">
            Não encontramos a página que você tentou acessar. Volte para o
            início ou explore outra rota.
          </p>

          <Link to="/">
            <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6">
              Voltar para o início
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
