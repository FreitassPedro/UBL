import NavbarAvatar from "@/components/layout/navbar/navbar-avatar";
import Navigation from "@/components/layout/navbar/navigation/navigation";
import NavigationMobile from "@/components/layout/navbar/navigation/navigation-mobile";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="h-14 border-b border-secondary bg-card">
      <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-4xl font-bold text-white">UBL</h1>
        </Link>
        <Navigation className="hidden md:flex" />
        <div className="flex items-center justify-self-end gap-3">
          <NavbarAvatar />
          <NavigationMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
