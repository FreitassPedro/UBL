import React, { useContext } from "react";

interface LoadingContextType {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

export const LoadingContext = React.createContext<LoadingContextType>({} as LoadingContextType);

export const useLoading = () => {
    return useContext(LoadingContext);
};

