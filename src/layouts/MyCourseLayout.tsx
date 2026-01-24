import UserAvatar from "@/components/auth/UserAvatar";
import UserContext from "@/contexts/UserContext";
import { LayoutGrid } from "lucide-react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const MyCourseLayout = () => {
  const { name } = useContext(UserContext);
  return (
    <div className="flex flex-1 min-h-0 flex-col bg-bg-body text-white">
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <UserAvatar className="h-12 w-12 shrink-0" />
            <span className="text-2xl text-zinc-200">Bem-vindo, {name}!</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-200">
            <LayoutGrid className="h-5 w-5 text-zinc-400" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Sua Jornada
            </h2>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 w-full items-stretch">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
