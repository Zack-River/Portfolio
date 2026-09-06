import React from 'react';
import SectionHeader from './SectionHeader';
import { SITE_CONTENT } from "../constants";
import GSAPReveal from './GSAPReveal';
import { Layout, AppWindow, Stethoscope, ArrowRight, Calendar } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: "branding",
    title: "Branding Websites",
    description: "High-end digital experiences designed to showcase your brand with impact and style.",
    includes: ["Portfolios", "Landing Pages", "Brand Showcase Websites"],
    icon: <Layout className="text-electric" size={32} />,
    action: {
      text: "Order Service",
      link: "#contact",
      type: "internal"
    }
  },
  {
    id: "webapps",
    title: "Websites & Web Apps",
    description: "Complex, scalable systems built with modern architecture and seamless user experiences.",
    includes: ["ERPs", "CMS", "E-Commerce", "Online SaaS Apps"],
    icon: <AppWindow className="text-electric" size={32} />,
    action: {
      text: "Order Service",
      link: "#contact",
      type: "internal"
    }
  },
  {
    id: "consultation",
    title: "Online Consultation",
    description: "Expert guidance on system design, code architecture, and technical problem-solving.",
    includes: ["Frontend / Backend", "Desktop & Mobile Apps", "System Architecture", "Projects Document Writing", "QA Testing"],
    icon: <Stethoscope className="text-electric" size={32} />,
    action: {
      text: "Book ($10/h)",
      link: "https://cal.com/zack-river",
      type: "external"
    }
  }
];

const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>, serviceId: string) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // We can optionally set the select value via an event or global state, 
      // but for now scrolling there is enough.
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-canvas-light dark:bg-canvas-dark transition-colors duration-500 text-canvas-dark dark:text-canvas-light relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <GSAPReveal>
          <SectionHeader 
            title="Professional Services" 
            subtitle="What I Do" 
            number="05" 
          />
        </GSAPReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <GSAPReveal key={idx} delay={idx * 0.1} className={`h-full ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="card-base p-8 card-hover h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-canvas-dark/5 rounded-bl-full transition-all group-hover:bg-electric/5"></div>
                
                <div className="mb-6 p-4 bg-canvas-light dark:bg-canvas-dark/50 rounded-2xl w-fit border border-canvas-dark/5 dark:border-white/10">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-display font-medium text-canvas-dark dark:text-canvas-light mb-4">
                  {service.title}
                </h3>
                
                <p className="text-secondary dark:text-canvas-light/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="grow mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-mono text-canvas-dark/50 dark:text-canvas-light/50 mb-3">Includes</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-sm text-canvas-dark/80 dark:text-canvas-light/80 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-electric rounded-full mt-1.5 shrink-0"></span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  {service.action.type === 'internal' ? (
                    <a 
                      href={service.action.link}
                      onClick={(e) => scrollToContact(e, service.id)}
                      className="w-full py-3 px-4 bg-white/5 border border-electric text-electric rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-electric/10 hover:shadow-[0_0_15px_rgba(180,255,0,0.2)] transition-all"
                    >
                      {service.action.text}
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <a 
                      href={service.action.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 bg-white/5 border border-electric text-electric rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-electric/10 hover:shadow-[0_0_15px_rgba(180,255,0,0.2)] transition-all"
                    >
                      <Calendar size={16} />
                      {service.action.text}
                    </a>
                  )}
                </div>
              </div>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
