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
      <Navbar />
      
      {/* Main Content Area - Shifted right on desktop to accommodate vertical nav */}
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section className="flex flex-col justify-between">
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
