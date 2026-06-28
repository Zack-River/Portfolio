import React, { useState, useEffect } from 'react';
import { Home, User, Layers, Mail, Code } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: Layers, label: 'Works' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar if scrolling down and past 50px
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } 
      // Show navbar if scrolling up or at the top
      else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] md:-translate-y-[150%] opacity-0'
      }`}
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
    </div>
  );
};

export default Navbar;