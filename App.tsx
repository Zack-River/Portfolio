import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading of assets
  useEffect(() => {
    // In a real app, this might wait for images, fonts, or 3D models.
    // Here we let the Loader component control the duration via its internal logic + onComplete callback.
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="bg-stone-950 min-h-screen text-stone-100 selection:bg-amber-500/30 selection:text-amber-200">
          <Navbar />
          
          {/* Main Content Area - Shifted right on desktop to accommodate vertical nav */}
          <main className="md:pl-24">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </main>

          <Chatbot />
        </div>
      )}
    </>
  );
}

export default App;