import { LoadingContext } from "@/contexts/LoadingContext";
import { useContext } from "react";

export const useLoading = () => {
  return useContext(LoadingContext);
};
