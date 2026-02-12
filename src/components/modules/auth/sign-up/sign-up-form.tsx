import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export const SignUpForm = () => {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-zinc-200">
          Nome completo
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome"
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
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-zinc-200">
            Senha
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Digite uma senha"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="confirm-password"
            className="text-sm font-medium text-zinc-200"
          >
            Confirmar senha
          </Label>
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            placeholder="Repita a senha"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="mt-4 h-11 w-full cursor-pointer bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
      >
        Criar conta
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default SignUpForm;
