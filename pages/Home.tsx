import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      {/* Main Content Area - Shifted right on desktop to accommodate vertical nav */}
      <main className="scroll-smooth">
        <Hero />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <About />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <Skills />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <Projects />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <section className="flex flex-col justify-between">
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
