import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HomeProps {
  loading?: boolean;
}

const Home: React.FC<HomeProps> = ({ loading = false }) => {
  React.useEffect(() => {
    document.title = "Abdallah Wageeh | Software Engineer";
  }, []);

  return (
    <>
      <main className="scroll-smooth">
        <Hero loading={loading} />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <About />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <Skills />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <Projects />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <Testimonials />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <Services />
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
