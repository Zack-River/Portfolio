import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-void border-t border-stone-900 text-center">
      <p className="text-stone-600 text-sm font-mono">
        © {new Date().getFullYear()} Abdallah Wageeh. Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;