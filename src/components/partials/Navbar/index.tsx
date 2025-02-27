"use client";

// import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
import Link from "next/link";

const Navbar = () => {
  // const NavLink = [
  //   { name: "Projects", href: "/projects" },
  //   { name: "Blog", href: "/blog" },
  // ];

  return (
    <nav className="bg-partials w-full rounded shadow-section border-2 border-black">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className="text-2xl font-extrabold text-white [text-shadow:_4px_4px_#000]"
              >
                REY.TECH
              </Link>
            </div>
          </div>
          {/* <NavLinks links={NavLink} /> */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <UserDropdown username="test" image="" handleSignOut={() => {}} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
