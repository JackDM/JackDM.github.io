import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
