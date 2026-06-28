import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading of assets
  useEffect(() => {
    // In a real app, this might wait for images, fonts, or 3D models.
    // Here we let the Loader component control the duration via its internal logic + onComplete callback.
  }, []);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="bg-canvas-light grain-overlay-container min-h-screen text-canvas-dark selection:bg-electric/90 selection:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;