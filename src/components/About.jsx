import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#F97316]">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            A little bit about me
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-base leading-8 text-[#A1A1AA] sm:text-lg">
              I'm Rohit Raj, a Frontend Developer focused on building clean,
              responsive and user-friendly web applications.
            </p>

            <p className="mt-5 text-base leading-8 text-[#A1A1AA] sm:text-lg">
              I work mainly with JavaScript, React, TypeScript and Tailwind CSS.
              I enjoy turning ideas and designs into functional, responsive
              interfaces.
            </p>

            <p className="mt-5 text-base leading-8 text-[#A1A1AA] sm:text-lg">
              Currently, I'm expanding my skills in backend development and
              working towards becoming a full-stack MERN developer.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-bold text-white">React</p>
                <p className="mt-1 text-sm text-[#71717A]">Frontend</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">JS</p>
                <p className="mt-1 text-sm text-[#71717A]">JavaScript</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">TS</p>
                <p className="mt-1 text-sm text-[#71717A]">TypeScript</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">CSS</p>
                <p className="mt-1 text-sm text-[#71717A]">Tailwind CSS</p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#262626] pt-6">
              <p className="text-sm leading-6 text-[#71717A]">
                Always learning, building and improving one project at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
