import React from "react";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ParticlesBG from "./components/ParticlesBG";
import { ExperienceSection, EducationSection } from "./components/LevelsSections";

function ScrollIndicator() {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY < 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="scroll-indicator">
      <svg viewBox="0 0 24 24">
        <path d="M12 16.5c-.28 0-.53-.11-.71-.29l-5-5a1.003 1.003 0 0 1 1.42-1.42L12 13.59l4.29-4.3a1.003 1.003 0 0 1 1.42 1.42l-5 5c-.18.18-.43.29-.71.29z" />
      </svg>
      <span>Desliza para explorar</span>
    </div>
  );
}

const App = () => {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <ParticlesBG />
      <ScrollIndicator />
      <Projects />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </main>
  );
};

export default App;
