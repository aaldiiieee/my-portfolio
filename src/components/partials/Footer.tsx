import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-partials text-white py-8 lg:px-8 shadow-section rounded border-2 border-black">
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <Link
            href="/"
            className="text-4xl font-extrabold [text-shadow:_4px_4px_#000]"
          >
            REY.TECH
          </Link>
          <p className="mt-4">
            Empowering technology for a better future.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/projects" className="hover:text-green-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/aaldiiieee"
              className="hover:text-gray-400 text-2xl"
              aria-label="GitHub"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pramudya-reynaldi-salim-88a8b8237/"
              className="hover:text-gray-400 text-2xl"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 REY.TECH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
