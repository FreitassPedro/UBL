import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const LessonEmpty = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full shadow-lg p-10">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-semibold">
            Conteúdo indisponível
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-6">
          <p className="text-muted-foreground">
            Volte mais tarde para ver se já há novos vídeos ou explore outros
            cursos disponíveis.
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

export default LessonEmpty;
