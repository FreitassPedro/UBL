import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export const LoginForm = () => {
  return (
    <form className="space-y-5">
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

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-zinc-200">
          Senha
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Digite sua senha"
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
        type="submit"
        className="h-11 w-full cursor-pointer bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
      >
        Entrar
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default LoginForm;
