import { cn } from "@/lib/utils";

interface FooterProps {
  marginTop?: boolean;
}

const Footer = ({ marginTop }: FooterProps) => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;

  return (
    <footer
      className={cn(
        "relative w-full h-14 border-t border-zinc-800 bg-zinc-900 text-center flex items-center justify-center",
        marginTop && "mt-10"
      )}
    >
      <p className="text-xs text-zinc-600">
        © {yearLabel} Universidade Brasileira Livre.
      </p>
    </footer>
  );
};

export default Footer;
