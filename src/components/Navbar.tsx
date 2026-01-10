import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  BookMarked,
  ChevronDown,
  Home,
  LogOut,
  Map,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navItemClass = `
    flex
    items-center
    gap-2
    text-zinc-400
    text-sm
    font-semibold
    hover:bg-transparent
    focus:bg-transparent
    focus-visible:bg-transparent
    hover:text-blue-400
    focus:text-blue-400
  `;

  return (
    <header className="sticky top-0 left-0 z-50 py-2 text-zinc-400 bg-zinc-950 shadow-xl border-b border-zinc-800/80">
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-6">
        {/* Logo e Título */}
        <div className="justify-self-start">
          <Link to={"/"} className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              UBL
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <NavigationMenu className="justify-self-center">
          <NavigationMenuList className="gap-6 font-mono">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={navItemClass}>
                  <span className="flex items-center gap-2">
                    <Home size={18} />
                    <span>Home</span>
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/grade-curricular" className={navItemClass}>
                  <span className="flex items-center gap-2">
                    <Map size={18} />
                    <span>Grade Curricular</span>
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/meu-curso" className={navItemClass}>
                  <span className="flex items-center gap-2">
                    <BookMarked size={18} />
                    <span>Meu Curso</span>
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="https://github.com/Universidade-Livre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navItemClass}
                >
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                  </span>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Avatar */}
        <div className="justify-self-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2">
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Avatar"
                  />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <ChevronDown className="text-zinc-400 cursor-pointer w-4 h-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <User size={16} />
                <button className="cursor-pointer">Perfil</button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings size={16} />
                <button className="cursor-pointer">Configurações</button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut size={16} />
                <button className="cursor-pointer">Sair</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
