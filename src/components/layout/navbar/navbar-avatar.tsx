import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/shared/user/user-avatar";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

export const NavbarAvatar = () => {
  return (
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
          <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings size={16} />
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut size={16} />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarAvatar;
