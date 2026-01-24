const Footer = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;

  return (
    <footer className="relative w-full h-14 border-t border-zinc-800 bg-zinc-900 text-center flex items-center justify-center">
      <p className="text-xs text-zinc-600">
        © {yearLabel} Universidade Brasileira Livre.
      </p>
    </footer>
  );
};

export default Footer;
