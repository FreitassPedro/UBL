"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface RedirectLinkProps {
  href: string;
  activeHref?: string;
  className?: string;
  children: React.ReactNode;
}

const RedirectLink = ({
  href,
  activeHref,
  className,
  children,
}: RedirectLinkProps) => {
  const pathname: string = usePathname();

  return (
    <Link
      href={
        activeHref !== undefined
          ? pathname === activeHref || pathname.startsWith(activeHref + "/")
            ? href
            : activeHref
          : href
      }
      className={className}
    >
      {children}
    </Link>
  );
};

export default RedirectLink;
