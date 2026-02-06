"use client";

import { MyCourseProvider } from "@/contexts/my-course-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MyCourseProvider>{children}</MyCourseProvider>
    </QueryClientProvider>
  );
};

export default Providers;
