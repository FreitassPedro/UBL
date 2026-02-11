import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Organize seus estudos por trilhas e etapas.",
  "Acesse conteúdos selecionados para seu objetivo.",
  "Registre seu avanço com visão clara da jornada.",
];

export const SignUpPage = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-7rem)] w-full items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
      <Card className="w-full max-w-5xl overflow-hidden border-border/60 bg-card/80 py-0 shadow-2xl shadow-black/20 backdrop-blur">
        <CardContent className="grid p-0 md:grid-cols-[1fr_1fr]">
          <section className="p-7 sm:p-9">
            <div className="mb-8 space-y-3">
              <h1 className="text-3xl font-semibold tracking-[-0.015em] text-foreground">
                Criar conta
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cadastre-se para salvar sua trilha e acompanhar sua evolução.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-200"
                >
                  Nome completo
                </Label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Seu nome"
                  className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-11 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

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

              <div className="grid gap-4 sm:grid-cols-2">
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
                    autoComplete="new-password"
                    placeholder="Digite uma senha"
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-11 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Confirmar senha
                  </Label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Repita a senha"
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-11 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <Button
                type="button"
                className="mt-4 h-11 w-full cursor-pointer bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              >
                Criar conta
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground">
              Já possui conta?{" "}
              <Link
                href="/login"
                className="font-medium text-zinc-100 transition hover:text-emerald-300"
              >
                Fazer login
              </Link>
            </p>
          </section>

          <section className="relative hidden overflow-hidden border-l border-border/60 bg-linear-to-br from-ubl-green/30 via-emerald-500/20 to-teal-500/10 p-10 md:flex md:flex-col md:justify-between">
            <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />

            <div className="relative space-y-6">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.015em] text-zinc-100">
                Comece sua trilha com objetivos claros.
              </h2>
              <p className="max-w-md text-base leading-relaxed text-zinc-300">
                Crie seu perfil para transformar conteúdos de qualidade em uma
                rotina de estudo contínua.
              </p>
            </div>

            <ul className="relative space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
};

export default SignUpPage;
