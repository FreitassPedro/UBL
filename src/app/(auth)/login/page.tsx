import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Continue exatamente do ponto onde parou.",
  "Acompanhe seu progresso por semestre e disciplina.",
  "Mantenha sua trilha de estudo organizada em um só lugar.",
];

export const LoginPage = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-7rem)] w-full items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
      <Card className="w-full max-w-5xl overflow-hidden border-border/60 bg-card/80 py-0 shadow-2xl shadow-black/20 backdrop-blur">
        <CardContent className="grid p-0 md:grid-cols-[1.05fr_0.95fr]">
          <section className="relative hidden overflow-hidden border-r border-border/60 bg-linear-to-br from-ubl-blue/35 via-blue-500/20 to-sky-500/10 p-10 md:flex md:flex-col md:justify-between">
            <div className="pointer-events-none absolute -right-16 top-12 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-12 h-56 w-56 rounded-full bg-ubl-green/20 blur-3xl" />

            <div className="relative space-y-6">
              <h1 className="text-3xl font-semibold leading-tight tracking-[-0.015em] text-zinc-100">
                Entre para continuar sua jornada de estudos.
              </h1>
              <p className="max-w-md text-base leading-relaxed text-zinc-300">
                Faça login para acessar sua trilha personalizada e seguir com
                seus estudos de forma consistente.
              </p>
            </div>

            <ul className="relative space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-200"
                >
                  <BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-7 sm:p-9">
            <div className="mb-8 space-y-3">
              <h2 className="text-3xl font-semibold tracking-[-0.015em] text-foreground">
                Login
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Preencha os campos para acessar sua conta.
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-200"
                >
                  E-mail
                </Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Digite seu email"
                  className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-11 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-200"
                >
                  Senha
                </Label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-11 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Label
                htmlFor="remember-me"
                className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-300"
              >
                <Checkbox id="remember-me" />
                <span>Manter sessão ativa neste dispositivo</span>
              </Label>

              <Button
                type="button"
                className="h-11 w-full cursor-pointer bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              >
                Entrar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground">
              Ainda não tem conta?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-zinc-100 transition hover:text-blue-300"
              >
                Criar conta
              </Link>
            </p>
          </section>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
