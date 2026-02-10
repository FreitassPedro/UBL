import errorIllustration from "@/assets/error.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ErrorProps {
  title: string;
  description: string;
}

export const Error = ({ title, description }: ErrorProps) => {
  return (
    <main className="relative flex min-h-[calc(100vh-7rem)] w-full items-center justify-center overflow-hidden bg-background px-6 py-14 sm:px-10 lg:px-12">
      <Card className="relative w-full max-w-4xl overflow-hidden border-border/60 bg-card/70 shadow-2xl shadow-black/20 backdrop-blur">
        <CardContent className="grid items-center gap-10 p-8 sm:p-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:p-12">
          <div className="order-last space-y-5 text-center md:order-first">
            <h1 className="text-3xl font-semibold tracking-[-0.015em] text-foreground sm:text-[2.75rem] lg:text-[3.25rem] leading-tight">
              {title}
            </h1>
            <p className="max-w-xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/">
                <Button className="cursor-pointer bg-white text-zinc-900 hover:bg-zinc-100 px-9 py-6 text-base sm:text-lg h-12 sm:h-13 shadow-lg shadow-black/20">
                  Voltar para o início
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-first flex items-center justify-center md:order-last">
            <Image
              src={errorIllustration}
              alt="Ilustração de erro"
              priority
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Error;
