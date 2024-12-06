import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface UserDropdownProps {
  username: string;
  image: string;
  handleSignOut: () => void;
}

const UserDropdown = ({ username, image, handleSignOut }: UserDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-3" ref={dropdownRef}>
      <button
        type="button"
        className="relative flex rounded-full bg-purple-900 text-sm p-2"
        aria-expanded={dropdownOpen}
        aria-haspopup="true"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        {image ? (
          <Image
            className="size-11 rounded-full"
            src={image}
            alt={username || "User"}
            width={32}
            height={32}
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FFFFFF"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        )}
      </button>

      {dropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-[#000_4px_4px_0px_0px] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <button
            onClick={handleSignOut}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;