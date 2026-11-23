import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Briefcase,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas-light dark:bg-canvas-dark text-canvas-dark dark:text-canvas-light pt-12 pb-8 px-[5vw] relative z-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Massive CTA Bento Card */}
        <div className="bg-electric text-canvas-dark rounded-[2.5rem] md:rounded-4xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group shadow-[0_10px_40px_rgba(180,255,0,0.1)]">
          {/* Subtle background texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, #0d0e0d 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-4 text-canvas-dark">
              Ready to build something{" "}
              <span className="text-white opacity-90 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                remarkable
              </span>{" "}
              together?
            </h2>
            <p className="text-white/90 font-medium text-lg md:text-xl max-w-md mx-auto lg:mx-0">
              Let's turn your idea into a high-performance reality.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-canvas-dark text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white hover:text-canvas-dark hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              Let's Talk <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Standard Footer Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {/* Brand, Bio, and Address (Left) */}
          <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start justify-self-center md:justify-self-start">
            <Link
              to="/"
              className="font-black text-2xl tracking-tighter uppercase inline-block w-max"
            >
              Zack<span className="text-electric">.</span>River
            </Link>
            <p className="text-canvas-dark/60 dark:text-canvas-light/60 font-medium leading-relaxed max-w-sm">
              A passionate Software Engineer & Web Developer crafting
              high-performance digital experiences.
            </p>

            <div className="mt-2">
              <address className="not-italic text-canvas-dark/60 dark:text-canvas-light/60 font-medium leading-relaxed">
                Qalyubia, Egypt
              </address>
            </div>
          </div>

          {/* Navigation Links (Center) */}
          <div className="flex flex-col gap-4 text-center items-center justify-self-center">
            <h3 className="font-mono text-xs text-canvas-dark/60 dark:text-canvas-light/60 uppercase tracking-[0.2em] mb-2">
              Navigation
            </h3>
            <nav aria-label="Footer Navigation" className="flex flex-col gap-3 font-medium text-sm items-center">
              <Link
                to="/"
                className="hover:text-electric transition-colors w-max"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-electric transition-colors w-max"
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:text-electric transition-colors w-max"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="hover:text-electric transition-colors w-max"
              >
                Projects
              </Link>
            </nav>
          </div>

          {/* Socials & Phone (Right) */}
          <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-end text-center md:text-right justify-self-center md:justify-self-end">
            <h3 className="font-mono text-xs text-canvas-dark/60 dark:text-canvas-light/60 uppercase tracking-[0.2em] mb-2">
              Socials
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 mb-2">
              {[
                {
                  icon: Github,
                  url: `https://${PERSONAL_INFO.github}`,
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  url: `https://${PERSONAL_INFO.linkedin}`,
                  label: "LinkedIn",
                },
                {
                  icon: Briefcase,
                  url: "https://mostaql.com/u/ZackRiver",
                  label: "Mostaql",
                },
                {
                  icon: Facebook,
                  url: `https://${PERSONAL_INFO.facebook}`,
                  label: "Facebook",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-canvas-dark/10 dark:border-white/10 flex items-center justify-center hover:bg-electric hover:border-electric hover:text-canvas-dark transition-all duration-300 text-canvas-dark/70 dark:text-canvas-light/70"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-2 w-full lg:items-end">
              <h3 className="font-mono text-xs text-canvas-dark/60 dark:text-canvas-light/60 uppercase tracking-[0.2em]">
                WhatsApp
              </h3>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center justify-center lg:justify-end gap-2 font-mono text-sm text-canvas-dark/60 dark:text-canvas-light/60 hover:text-electric transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-canvas-dark/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <p className="text-xs font-medium text-canvas-dark/50 dark:text-canvas-light/50 font-mono uppercase tracking-wider text-center md:text-left justify-self-center md:justify-self-start">
            © {new Date().getFullYear()} Abdallah Wageeh
          </p>
          <p className="text-xs font-medium text-canvas-dark/50 dark:text-canvas-light/50 font-mono uppercase tracking-wider text-center justify-self-center">
            All Rights Reserved
          </p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center justify-center md:justify-end gap-2 text-xs font-medium text-canvas-dark/50 dark:text-canvas-light/50 font-mono uppercase tracking-wider hover:text-electric transition-colors justify-self-center md:justify-self-end"
          >
            <Mail size={14} /> {PERSONAL_INFO.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
