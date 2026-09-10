import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full border-b border-[#262626] bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          {/* Logo Mark */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#262626] bg-[#111111]">
            <span className="text-xl font-bold">
              <span className="text-white">R</span>
              <span className="text-[#F97316]">R</span>
            </span>
          </div>

          {/* Name */}
          <div className="text-xl font-bold">
            <span className="text-white">Rohit </span>
            <span className="text-[#F97316]">Raj</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#F97316]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 md:flex">
          {/* GitHub */}
          <a
            href="https://github.com/Rohit-raj03"
            target="_blank"
            rel="noreferrer"
            className="text-[#A1A1AA] transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={21} />
          </a>

          {/* Download CV */}
          <a
            href="/Rohit-Raj-CV.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-[#F97316] px-4 py-2 text-sm font-medium text-[#F97316] transition-all hover:bg-[#F97316] hover:text-white"
          >
            <Download size={17} />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#262626] text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#262626] px-4 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-[#A1A1AA] transition-colors hover:bg-[#111111] hover:text-[#F97316]"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-2 flex items-center gap-4 border-t border-[#262626] pt-4">
              <a
                href="https://github.com/Rohit-raj03"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#A1A1AA] hover:text-white"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="/Rohit-Raj-CV.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-[#F97316] px-3 py-2 text-sm text-[#F97316]"
              >
                <Download size={16} />
                CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
