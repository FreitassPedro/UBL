"use client";

import { MyCourseProvider } from "@/contexts/my-course-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MyCourseProvider>
      {children}
    </MyCourseProvider>
  );
};

export default Providers;
