import Link from "next/link";

const NavLinks = ({ links }: { links: { name: string; href: string }[] }) => (
  <ul className="hidden gap-3 sm:flex">
    {links.map((link, index) => (
      <li key={index}>
        <Link key={link.name} href={link.href} className="text-md font-medium">
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
