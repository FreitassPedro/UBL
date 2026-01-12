import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  const location = useLocation();
  const isHome: boolean = location.pathname === "/";

  return (
    <div className="min-h-screen bg-bg-body font-inter overflow-hidden">
      <Navbar />
      <main>
        {/* Aqui vão os componentes filhos, como rotas */}
        <Outlet />
      </main>
      <Footer marginTop={!isHome} />
    </div>
  );
};
