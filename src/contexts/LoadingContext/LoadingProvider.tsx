import React from "react";
import { LoadingContext } from "./LoadingContext";
import GlobalLoader from "../GlobalLoader/GlobalLoader";

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