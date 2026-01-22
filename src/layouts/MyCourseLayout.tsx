import UserAvatar from "@/components/auth/UserAvatar";
import UserContext from "@/contexts/UserContext";
import { LayoutGrid } from "lucide-react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const MyCourseLayout = () => {
  const { name } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-bg-body text-white">
      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <UserAvatar className="w-12 h-12" />
            <span className="text-2xl text-zinc-200">Bem-vindo, {name}!</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Sua Jornada
            </h2>
            <div className="p-2 rounded-lg border border-zinc-700 bg-zinc-800">
              <LayoutGrid className="w-5 h-5 text-zinc-300" />
            </div>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  );
};
