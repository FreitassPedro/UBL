import { UserProvider } from "@/contexts/UserContext";
import { UserProgressProvider } from "@/contexts/MyCurriculumContext";
import "@/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <UserProgressProvider>
          <RouterProvider router={router} />
        </UserProgressProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
