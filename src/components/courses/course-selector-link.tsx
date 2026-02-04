"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CourseSelectorLinkProps {
  slug: string;
  className?: string;
  children: React.ReactNode;
}

const CourseSelectorLink = ({
  slug,
  className,
  children,
}: CourseSelectorLinkProps) => {
  const pathname: string = usePathname();
  const activePathname: string = `/grade-curricular/${slug}`;

  return (
    <Link
      href={
        pathname === activePathname || pathname.startsWith(activePathname + "/")
          ? "/grade-curricular"
          : `/grade-curricular/${slug}`
      }
      className={className}
    >
      {children}
    </Link>
  );
};

export default CourseSelectorLink;
