import React, { useState } from 'react';
import { Menu, X, Home, User, Layers, Mail, Code } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: Layers, label: 'Works' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-stone-900 border border-stone-800 rounded-full text-stone-200 shadow-xl backdrop-blur-md bg-opacity-80"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-void/95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-2xl font-serif text-stone-300 hover:text-amber-500 transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Vertical Nav */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-24 bg-charcoal/50 border-r border-white/5 backdrop-blur-sm z-40 items-center justify-between py-12">
        <div className="font-serif font-bold text-2xl tracking-tighter text-stone-200 rotate-180" style={{ writingMode: 'vertical-rl' }}>
          ZackRiver
        </div>
        
        <div className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative flex items-center justify-center p-3 rounded-xl transition-all hover:bg-white/5"
            >
              <item.icon size={20} className="text-stone-500 group-hover:text-amber-500 transition-colors" />
              <span className="absolute left-14 bg-stone-800 px-2 py-1 rounded text-xs text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-stone-700">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="h-24 w-[1px] bg-gradient-to-b from-stone-800 to-transparent"></div>
      </nav>
    </>
  );
};

export default Navbar;