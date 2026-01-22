import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserContext from "@/contexts/UserContext";
import { cn } from "@/lib/utils";
import { useContext } from "react";

interface UserAvatarProps {
  className?: string;
  alt?: string;
}

export const UserAvatar = ({ className, alt }: UserAvatarProps) => {
  const { avatar } = useContext(UserContext);
  return (
    <Avatar className={cn("h-8 w-8", className)}>
      <AvatarImage src={avatar} alt={alt || "Avatar"} />
      <AvatarFallback>Avatar</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
