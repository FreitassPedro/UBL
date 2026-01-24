import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-bg-body font-inter overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 flex min-h-0 flex-col">
        {/* Aqui vão os componentes filhos, como rotas */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
