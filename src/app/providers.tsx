"use client";

import { MyCourseProgressProvider } from "@/contexts/course-progress-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MyCourseProgressProvider>{children}</MyCourseProgressProvider>
    </QueryClientProvider>
  );
};

export default Providers;
