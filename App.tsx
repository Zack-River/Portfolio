import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './pages/Home';

// Lazy load heavy routes to reduce initial bundle size
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));

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

  // Synchronously expose loader state so child components (like Hero) can check it on mount
  if (typeof window !== 'undefined') {
    (window as any).__LOADER_ACTIVE__ = loading;
  }

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
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <div className={`bg-canvas-dark min-h-screen text-canvas-light selection:bg-electric/90 selection:text-white transition-colors duration-500 ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center text-canvas-dark/40 font-mono text-sm animate-pulse">Loading Route...</div>}>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </main>
        </React.Suspense>
      </div>
    </>
  );
}

export default App;