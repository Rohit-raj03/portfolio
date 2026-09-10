import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* About */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact */}
      </main>
      {/* Footer */}
    </div>
  );
};

export default App;
