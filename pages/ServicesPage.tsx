import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end development of scalable, custom web applications using React, Next.js, and Node.js ecosystems.",
    },
    {
      title: "Frontend Development",
      description: "Crafting visually stunning, highly interactive user interfaces with advanced animations using GSAP, Framer Motion, and Three.js.",
    },
    {
      title: "Backend & API Development",
      description: "Architecting robust, secure RESTful APIs and server-side logic utilizing Express, NestJS, and Laravel.",
    },
    {
      title: "Database Development",
      description: "Designing efficient data models and integrating powerful databases such as PostgreSQL, MongoDB, and Neo4j.",
    },
    {
      title: "Custom Software & SaaS Development",
      description: "Building tailored software solutions and SaaS platforms engineered for high performance and scalability.",
    },
    {
      title: "WordPress & Shopify Development",
      description: "Creating custom headless or integrated e-commerce and CMS solutions tailored to business needs.",
    },
    {
      title: "QA & Software Testing",
      description: "Ensuring reliability and flawless execution through rigorous quality assurance and testing protocols.",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Abdallah Wageeh (Zack River) - Software Engineer</title>
        <meta 
          name="description" 
          content="Explore the professional services offered by Abdallah Wageeh, including Full-Stack Development, Custom Software, SaaS, and API Architecture." 
        />
        <link rel="canonical" href="https://www.zackriver.com/services" />
      </Helmet>
      
      <main className="pt-[15vh] pb-[10vh] px-[5vw] max-w-7xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-electric mb-4">
          Professional Services
        </h1>
        <p className="text-canvas-light/60 max-w-2xl text-lg mb-12">
          Delivering high-performance digital architectures and artistic UI/UX design.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-canvas-light/10 rounded-lg hover:border-electric/50 transition-colors bg-canvas-light/5 hover:bg-canvas-light/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                {service.title}
              </h2>
              <p className="text-canvas-light/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
