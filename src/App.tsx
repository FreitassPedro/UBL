import { ProgressProvider } from "@/contexts/ProgressContext";
import { UserProvider } from "@/contexts/UserContext";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  return (
    <UserProvider>
      <ProgressProvider>
        <RouterProvider router={router} />
      </ProgressProvider>
    </UserProvider>
  );
};

export default App;
