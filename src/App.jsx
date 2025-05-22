import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ParticlesBG from "./components/ParticlesBG";
import { ExperienceSection, EducationSection } from "./components/LevelsSections";

const App = () => {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <ParticlesBG />
      <Hero />
      <Projects />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </main>
  );
};

export default App;
