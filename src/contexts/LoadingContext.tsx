import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import React from "react";

interface LoadingContextType {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

export const LoadingContext = React.createContext<LoadingContextType>(
  {} as LoadingContextType
);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingCount, setLoadingCount] = React.useState(0);
  const showLoader = () => {
    setLoadingCount((prev) => prev + 1);
  };

  const hideLoader = () => {
    setLoadingCount((prev) => Math.max(prev - 1, 0));
  };

  const isLoading = loadingCount > 0;
  return (
    <LoadingContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
          <Card className="w-[280px] text-center shadow-lg">
            <CardContent className="flex flex-col items-center gap-4 py-8">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Carregando…</p>
            </CardContent>
          </Card>
        </div>
      )}
    </LoadingContext.Provider>
  );
};
