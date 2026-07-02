import { Menu } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Projects",
  "Contact",
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between px-6 py-4">

          {/* Logo */}

          <h1 className="text-2xl font-bold tracking-wide">
            Nidhi<span className="text-cyan-400">.</span>
          </h1>

          {/* Desktop Menu */}

          <nav className="hidden md:flex gap-10 text-gray-300">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-white transition duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume Button */}

          <button
            className="
            hidden md:block
            px-5
            py-2
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-cyan-500
            hover:scale-105
            transition
            "
          >

            <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>

          </button>

          {/* Mobile */}

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;