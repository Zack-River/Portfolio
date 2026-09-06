import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Layers, Users, Briefcase } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Layers, label: 'Works' },
  { id: 'testimonials', icon: Users, label: 'Clients' },
  { id: 'services', icon: Briefcase, label: 'Services' },
];


const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const previous = lastScrollY.current;
      if (current > previous && current > 50) {
        setIsVisible(false);
      } else if (current < previous || current <= 50) {
        setIsVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const detectActiveSection = () => {
      const viewportMid = window.innerHeight * 0.4;
      for (const item of [...navItems].reverse()) {
        if (item.id === 'home') continue;
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportMid) {
          setActiveSection(item.id);
          return;
        }
      }
      setActiveSection('home');
    };

    const onScroll = () => {
      // Throttle to one check per animation frame to avoid layout thrashing
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        detectActiveSection();
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    detectActiveSection();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-6 md:bottom-auto md:top-6 left-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? '-translate-x-1/2 translate-y-0 opacity-100 pointer-events-auto' 
          : '-translate-x-1/2 translate-y-32 md:-translate-y-32 opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex items-center space-x-1 md:space-x-2 px-4 py-2 md:px-6 md:py-3 bg-white/80 dark:bg-canvas-dark/80 backdrop-blur-lg rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-canvas-dark/5 dark:border-white/10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`group flex items-center justify-center px-3 py-3 md:px-4 md:py-2.5 rounded-full transition-all duration-300 hover:bg-canvas-dark/5 dark:hover:bg-white/30 ${activeSection === item.id ? 'bg-canvas-dark/5 dark:bg-white/10' : ''}`}
            aria-label={item.label}
          >
            <item.icon size={18} className={`transition-colors ${activeSection === item.id ? 'text-electric' : 'text-canvas-dark/70 dark:text-canvas-light/70 group-hover:text-electric dark:group-hover:text-electric'}`} />
            <span className={`hidden md:inline-block ml-2.5 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-electric' : 'text-canvas-dark/80 dark:text-canvas-light/80 group-hover:text-electric dark:group-hover:text-electric'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;