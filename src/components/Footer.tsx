import { cn } from "@/lib/utils";

interface FooterProps {
  marginTop?: boolean;
}

const Footer = ({ marginTop }: FooterProps) => {
  return (
    <footer
      className={cn(
        "relative w-full h-20 border-t border-zinc-800 bg-zinc-900 py-8 text-center",
        marginTop && "mt-10"
      )}
    >
      <p className="text-xs text-zinc-600">
        © 2025 Universidade Brasileira Livre.
      </p>
    </footer>
  );
};

export default Footer;
