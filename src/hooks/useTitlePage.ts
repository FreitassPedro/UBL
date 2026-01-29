import { useEffect } from "react";

export const useTitlePage = (titulo: string) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${titulo} | UBL`;
    return () => {
      document.title = originalTitle;
    };
  }, [titulo]);
};

export default useTitlePage;
