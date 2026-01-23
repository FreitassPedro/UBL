import UserAvatar from "@/components/auth/UserAvatar";
import GitHubIcon from "@/components/icons/GitHubIcon";
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
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  BookMarked,
  ChevronDown,
  Home,
  LogOut,
  Map,
  Menu,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarNavigation = ({
  mobile = false,
  className,
}: {
  mobile?: boolean;
  className?: string;
}) => {
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
    <NavigationMenu
      className={cn(
        "justify-self-center",
        mobile && "w-full max-w-none justify-start",
        className,
      )}
    >
      <NavigationMenuList
        className={cn("gap-6 font-mono", mobile && "flex-col items-start")}
      >
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
  );
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 left-0 z-50 text-zinc-400 bg-bg-card shadow-xl border-b border-zinc-800/80">
      <Collapsible open={mobileOpen} onOpenChange={setMobileOpen}>
        <div className="px-6 py-2 mx-auto max-w-7xl grid grid-cols-[auto_1fr_auto] items-center">
          {/* Logo e Título */}
          <div className="justify-self-start">
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                UBL
              </h1>
            </Link>
          </div>

          {/* Navigation (Desktop Only) */}
          <NavbarNavigation className="hidden md:flex" />

          {/* Avatar + Mobile Toggle */}
          <div className="justify-self-end flex items-center">
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

            <CollapsibleTrigger asChild>
              <button
                type="button"
                aria-label="Abrir navegação"
                className="md:hidden inline-flex cursor-pointer items-center justify-center p-2"
              >
                <Menu size={16} />
              </button>
            </CollapsibleTrigger>
          </div>
        </div>

        {/* Navigation (Mobile Only) */}
        <CollapsibleContent className="md:hidden">
          <nav aria-label="Navegação principal principal">
            <NavbarNavigation mobile className="p-4" />
          </nav>
        </CollapsibleContent>
      </Collapsible>
    </header>
  );
};

export default Navbar;
