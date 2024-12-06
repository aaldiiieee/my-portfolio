import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-partials min-h-96 py-4 px-8 shadow-section rounded border-2 border-black flex items-center">
      <Link
        href="/"
        className="text-4xl font-extrabold [text-shadow:_4px_4px_#000]"
      >
        REY.TECH
      </Link>
    </footer>
  );
};

export default Footer;
