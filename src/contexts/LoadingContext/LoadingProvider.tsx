import GlobalLoader from "@/contexts/GlobalLoader/GlobalLoader";
import { LoadingContext } from "@/contexts/LoadingContext/LoadingContext";
import React from "react";

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [loadingCount, setLoadingCount] = React.useState(0);

    const showLoader = () => {
        setLoadingCount(prev => prev + 1);
    };

    const hideLoader = () => {
        setLoadingCount(prev => Math.max(prev - 1, 0));
    };

    const isLoading = loadingCount > 0;

    return (
        <LoadingContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
            {isLoading && <GlobalLoader />}
        </LoadingContext.Provider>
    )
};