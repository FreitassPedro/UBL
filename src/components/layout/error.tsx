import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface ErrorProps {
  title?: string;
  description?: string;
}

export const Error = ({
  title = "Erro ao carregar o conteúdo da página",
  description = "Ocorreu um erro inesperado ao carregar esta página. Tente novamente em instantes ou volte para a página inicial.",
}: ErrorProps) => {
  return (
    <main className="flex h-[calc(100vh-7rem)] w-full items-center justify-center bg-background px-6 py-12 sm:px-8">
      <Card className="w-full max-w-lg p-8 sm:p-10 shadow-lg gap-3">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-4xl font-semibold tracking-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <Link href="/">
            <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6">
              Voltar para o início
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
};

export default Error;
