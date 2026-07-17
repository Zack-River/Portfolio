import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';

// Lazy load heavy routes to reduce initial bundle size
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
import { useLenis } from './hooks/useLenis';

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
  useLenis(); // Init Lenis smooth scroll + GSAP ScrollTrigger proxy
  const location = useLocation();
  // Only show the loader on the home page — other pages have no 3D assets to wait for
  const isHome = location.pathname === '/';
  const [loading, setLoading] = useState(isHome);

  useEffect(() => {
    // Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable Keyboard Shortcuts for inspecting
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I / Cmd+Option+I (Inspect)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+J / Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
      }
      // Prevent Ctrl+U / Cmd+Option+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lenis removed: Conflicted with Three.js WebGL rAF loop and caused massive layout thrashing.
  // We rely entirely on native CSS 'scroll-smooth' (already in index.html) for 0 CPU cost.
  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <div className={`bg-canvas-light grain-overlay-container min-h-screen text-canvas-dark selection:bg-electric/90 selection:text-white ${loading ? 'h-screen overflow-hidden' : ''}`}>
        {location.pathname === '/' && <Navbar />}
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center text-canvas-dark/40 font-mono text-sm animate-pulse">Loading Route...</div>}>
          <Routes>
            <Route path="/" element={<Home loading={loading} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </React.Suspense>
      </div>
    </>
  );
}

export default App;