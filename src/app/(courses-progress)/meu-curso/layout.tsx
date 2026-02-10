import UserAvatar from "@/components/common/user/user-avatar";
import { LayoutGrid } from "lucide-react";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <UserAvatar className="h-12 w-12 shrink-0" />
          <span className="text-2xl text-zinc-200">Bem-vindo, Estudante!</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-zinc-200">
          <LayoutGrid className="h-6 w-6 text-zinc-400 shrink-0" />
          <h2 className="flex items-center text-xl font-semibold tracking-tight sm:text-2xl">
            <span className="leading-none">Sua Jornada</span>
          </h2>
        </div>
      </header>
      <main className="flex w-full flex-1 items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
