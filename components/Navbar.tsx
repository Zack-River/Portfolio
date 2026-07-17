import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Layers, Users, Briefcase } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 50) {
      setIsVisible(false);
    } else if (latest < previous || latest <= 50) {
      setIsVisible(true);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -150,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="flex items-center space-x-1 md:space-x-2 px-4 py-2 md:px-6 md:py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-canvas-dark/5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`group flex items-center justify-center px-3 py-3 md:px-4 md:py-2.5 rounded-full transition-all duration-300 hover:bg-canvas-dark/5 ${activeSection === item.id ? 'bg-canvas-dark/5' : ''}`}
            aria-label={item.label}
          >
            <item.icon size={18} className={`transition-colors ${activeSection === item.id ? 'text-electric' : 'text-canvas-dark/70 group-hover:text-electric'}`} />
            <span className={`hidden md:inline-block ml-2.5 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-electric' : 'text-canvas-dark/80 group-hover:text-electric'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;