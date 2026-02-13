import UserAvatar from "@/components/common/user/user-avatar";
import { auth } from "@/lib/auth";
import { Info, LayoutGrid } from "lucide-react";
import { headers } from "next/headers";
import { ReactNode } from "react";

export const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user ?? null;
  const isAuthenticated: boolean = Boolean(user);
  const name: string = user?.name?.trim() ?? "Estudante";
  const email: string = user?.email?.trim() ?? "";
  const image: string | undefined = user?.image ?? undefined;

  return (
    <div className="mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-7xl flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <header
        className={
          isAuthenticated
            ? "flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            : "flex flex-col gap-4 md:items-start"
        }
      >
        <div
          className={
            isAuthenticated ? "flex items-center gap-3" : "flex items-start"
          }
        >
          {isAuthenticated && (
            <UserAvatar src={image} alt={name} className="h-12 w-12 shrink-0" />
          )}

          <div className="space-y-0.5">
            <span className="text-2xl text-zinc-200">
              {isAuthenticated ? `Bem-vindo, ${name}!` : "Continue sua jornada"}
            </span>
            {isAuthenticated ? (
              <p className="text-sm text-zinc-400">{email}</p>
            ) : (
              <p className="flex items-center gap-2 text-sm text-zinc-400">
                <Info className="h-4 w-4 shrink-0 text-zinc-500" />
                <span>Faça login para salvar progresso e acompanhar sua jornada.</span>
              </p>
            )}
          </div>
        </div>

        {isAuthenticated && (
          <div className="hidden sm:flex items-center gap-2 text-zinc-200">
            <LayoutGrid className="h-6 w-6 shrink-0 text-zinc-400" />
            <h2 className="flex items-center text-xl font-semibold tracking-tight sm:text-2xl">
              <span className="leading-none">Sua Jornada</span>
            </h2>
          </div>
        )}
      </header>
      <main className="flex min-h-0 w-full flex-1 items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
