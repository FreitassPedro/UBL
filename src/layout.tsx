import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-bg-body font-inter overflow-hidden">
      <Navbar />
      <main>
        {/* Aqui vão os componentes filhos, como rotas */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
