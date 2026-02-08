"use client";

import { MyCourseProgressStoreProvider } from "@/contexts/course-progress-store-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MyCourseProgressStoreProvider>{children}</MyCourseProgressStoreProvider>
    </QueryClientProvider>
  );
};

export default Providers;
