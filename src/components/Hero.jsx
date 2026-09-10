import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-73px)] w-full">
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Small Intro */}
            <p className="mb-4 text-sm font-medium tracking-wide text-[#F97316]">
              FRONTEND DEVELOPER
            </p>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-[#F97316]">Rohit Raj</span>
              <span className="ml-2">👋</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#A1A1AA] sm:text-lg">
              I build clean, responsive and user-friendly web experiences using
              React and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
              >
                View Projects
                <FiArrowUpRight size={18} />
              </a>

              <a
                href="/Rohit-Raj-CV.pdf"
                download
                className="flex items-center justify-center gap-2 rounded-lg border border-[#262626] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#F97316] hover:text-[#F97316]"
              >
                Download CV
                <FaArrowDown size={14} />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/Rohit-raj03"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[#71717A] transition-colors hover:text-white"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/rohit-raj-95680b40a/"
                aria-label="LinkedIn"
                target="_blank"
                className="text-[#71717A] transition-colors hover:text-[#F97316]"
              >
                <FaLinkedinIn size={21} />
              </a>

              <a
                href="Rohitrajchy03@gmail.com"
                className="text-sm text-[#71717A] transition-colors hover:text-[#F97316]"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Right Side - Profile */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Orange Glow */}
              <div className="absolute inset-0 rounded-full bg-[#F97316] opacity-10 blur-3xl" />

              {/* Profile Image */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-[#262626] bg-[#111111] sm:h-80 sm:w-80">
                <img
                  src="\profile.png"
                  alt="Rohit Raj - Frontend Developer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
