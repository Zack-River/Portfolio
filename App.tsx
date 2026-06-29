import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsPage from './pages/ProjectsPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import Navbar from './components/Navbar';



function App() {
  const [loading, setLoading] = useState(true);

  // Lenis removed: Conflicted with Three.js WebGL rAF loop and caused massive layout thrashing.
  // We rely entirely on native CSS 'scroll-smooth' (already in index.html) for 0 CPU cost.
  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="bg-canvas-light grain-overlay-container min-h-screen text-canvas-dark selection:bg-electric/90 selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;