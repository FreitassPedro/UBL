import { useEffect } from "react";

function useTituloDaPagina(titulo: string) {
  useEffect(() => {
    const originalTitle = document.title;

    document.title = `${titulo} | UBLCourse`;

    return () => {
      document.title = originalTitle;
    };
  }, [titulo]);
}

export default useTituloDaPagina;
