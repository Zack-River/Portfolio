import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // If there's any lenis or scroll logic, ensure we scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Abdallah Wageeh (Zack River) | Software Engineer</title>
        <meta 
          name="description" 
          content="Abdallah Wageeh (Zack River) is a Software Engineer and Full-Stack Developer based in Egypt. Learn about my technical background, expertise, and journey." 
        />
        <link rel="canonical" href="https://www.zackriver.com/about" />
      </Helmet>
      
      <main className="pt-[15vh] pb-[10vh] px-[5vw] max-w-7xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-electric mb-8">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-canvas-light/80 text-lg leading-relaxed">
          <div className="space-y-6">
            <p>
              I am <strong>Abdallah Wageeh</strong>, also known professionally as <strong>Zack River</strong>. I am a Software Engineer and Full-Stack Developer based in Egypt, specializing in crafting highly scalable, performant, and visually stunning web applications.
            </p>
            <p>
              My expertise spans the entire software development lifecycle—from architecting robust backends and scalable APIs, to designing intricate and interactive frontend experiences. I believe that engineering is an art form, and I strive to bridge the gap between complex technical logic and seamless user experience.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Technically, I am well-versed in building robust architectures using <strong>Node.js</strong>, <strong>NestJS</strong>, and <strong>Express</strong> for the backend, coupled with powerful databases like <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and <strong>Neo4j</strong>. 
            </p>
            <p>
              On the frontend, I specialize in <strong>React</strong> and <strong>Next.js</strong>, integrating advanced WebGL and physics-based animations (like GSAP and Three.js) to deliver premium, immersive interfaces. I also bring strong experience in Software QA, ensuring reliability across all my deployments.
            </p>
          </div>
        </div>

        {/* Links to professional profiles */}
        <div className="mt-16 flex flex-wrap gap-6">
          <a href="https://github.com/Zack-River" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline font-bold uppercase tracking-widest text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com/in/abdallah-wageeh" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline font-bold uppercase tracking-widest text-sm">
            LinkedIn
          </a>
          <a href="/projects" className="text-canvas-light hover:text-electric transition-colors font-bold uppercase tracking-widest text-sm">
            View My Projects
          </a>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
