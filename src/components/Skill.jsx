import React from "react";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description: "Semantic and accessible web structure",
    },
    {
      name: "CSS",
      description: "Responsive and modern UI styling",
    },
    {
      name: "JavaScript",
      description: "Interactive and dynamic web applications",
    },
    {
      name: "TypeScript",
      description: "Type-safe and scalable JavaScript",
    },
    {
      name: "React",
      description: "Component-based frontend development",
    },
    {
      name: "Tailwind CSS",
      description: "Fast and responsive UI development",
    },
    {
      name: "Git & GitHub",
      description: "Version control and collaboration",
    },
    {
      name: "REST APIs",
      description: "Working with frontend API integration",
    },
  ];

  return (
    <section id="skills" className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#F97316]">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#71717A] sm:text-lg">
            Technologies and tools I use to build modern, responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-[#262626] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]"
            >
              {/* Skill Initial */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#171717] text-lg font-bold text-[#F97316] transition-colors group-hover:bg-[#F97316] group-hover:text-white">
                {skill.name.charAt(0)}
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-[#71717A]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
