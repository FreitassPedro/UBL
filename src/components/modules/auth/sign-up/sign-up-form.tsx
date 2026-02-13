"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpAction } from "@/server/actions/auth/sign-up";
import { AlertCircle, ArrowRight } from "lucide-react";
import { useActionState } from "react";

export const SignUpForm = () => {
  const [state, formAction, isPending] = useActionState(signUpAction, {
    errorMessages: [],
  });

  return (
    <form action={formAction} className="space-y-4">
      {state.errorMessages.length > 0 ? (
        <Alert variant="destructive" className="border-destructive/50">
          <AlertCircle />
          <AlertTitle>Não foi possível criar sua conta</AlertTitle>
          <AlertDescription>
            <ul className="list-disc space-y-1 pl-5">
              {state.errorMessages.map((message, index) => (
                <li key={`${index}-${message}`}>{message}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-zinc-200">
          Nome
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome"
          minLength={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-zinc-200">
          E-mail
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Digite seu email"
          required
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
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Digite uma senha"
            minLength={8}
            required
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-zinc-200"
          >
            Confirmar senha
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Repita a senha"
            minLength={8}
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="mt-4 h-11 w-full cursor-pointer bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
      >
        {isPending ? "Criando conta..." : "Criar conta"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default SignUpForm;
