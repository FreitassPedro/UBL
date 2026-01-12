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
    flex-row
    gap-2
    items-center
    group/nav-item
    text-zinc-400
    hover:bg-transparent
    focus:bg-transparent
    focus-visible:bg-transparent
    hover:text-blue-400
    focus:text-blue-400
  `;

  const navIconClass = `
    text-zinc-400
    transition-colors
    group-hover/nav-item:text-blue-400
    group-focus/nav-item:text-blue-400
    group-focus-visible/nav-item:text-blue-400
  `;

  return (
    <header className="sticky top-0 left-0 z-50 py-2 text-zinc-400 bg-bg-card shadow-xl border-b border-zinc-800/80">
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-6 mx-auto max-w-7xl">
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
                  <Home size={18} className={navIconClass} />
                  <span>Home</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/grade-curricular" className={navItemClass}>
                  <Map size={18} className={navIconClass} />
                  <span>Grade Curricular</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/meu-curso" className={navItemClass}>
                  <BookMarked size={18} className={navIconClass} />
                  <span>Meu Curso</span>
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
                    className={navIconClass}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Avatar */}
        <div className="justify-self-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Avatar"
                  />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <ChevronDown className="text-zinc-400 w-4 h-4" />
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
