import defaultAvatar from "@/assets/defaultAvatar.jpg";
import { createContext } from "react";

export interface UserContextType {
  name: string;
  avatar: string;
}

// TODO: Alterar a tipagem para "UserContextType | undefined"
export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext
      value={{
        name: "Estudante",
        avatar: defaultAvatar,
      }}
    >
      {children}
    </UserContext>
  );
};

export default UserContext;
