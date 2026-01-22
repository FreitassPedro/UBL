import GitHubIcon from "@/components/icons/GitHubIcon";
import UserAvatar from "@/components/auth/UserAvatar";
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
import { Link, NavLink } from "react-router-dom";

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
    aria-[current=page]:text-blue-400
  `;

  const navIconClass = `
    text-zinc-400
    transition-colors
    group-hover/nav-item:text-blue-400
    group-focus/nav-item:text-blue-400
    group-focus-visible/nav-item:text-blue-400
    group-aria-[current=page]/nav-item:text-blue-400
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
                <NavLink to="/" end className={navItemClass}>
                  <Home size={18} className={navIconClass} />
                  <span>Home</span>
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/grade-curricular" className={navItemClass}>
                  <Map size={18} className={navIconClass} />
                  <span>Grade Curricular</span>
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/meu-curso" className={navItemClass}>
                  <BookMarked size={18} className={navIconClass} />
                  <span>Meu Curso</span>
                </NavLink>
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
                  <GitHubIcon width={18} height={18} className={navIconClass} />
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
                <UserAvatar />
                <ChevronDown className="text-zinc-400 w-4 h-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="cursor-pointer">
                <User size={16} />
                <button>Perfil</button>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings size={16} />
                <button>Configurações</button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LogOut size={16} />
                <button>Sair</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
