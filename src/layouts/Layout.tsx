import { Outlet } from "react-router-dom";
import { BackgroundGrid } from "../components/layout/BackgroundGrid";
import Footer from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-bg-body font-inter overflow-hidden">
      <BackgroundGrid />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
