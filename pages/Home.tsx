import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
// Lazy load components below the fold
import LazySection from "../components/LazySection";

const LazyAbout = React.lazy(() => import("../components/About"));
const LazySkills = React.lazy(() => import("../components/Skills"));
const LazyProjects = React.lazy(() => import("../components/Projects"));
const LazyTestimonials = React.lazy(() => import("../components/Testimonials"));
const LazyServices = React.lazy(() => import("../components/Services"));
const LazyFooter = React.lazy(() => import("../components/Footer"));
const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Abdallah Wageeh (Zack River) | Software Engineer &amp; Full-Stack
          Developer
        </title>
        <link rel="canonical" href="https://www.zackriver.com/" />
        <meta property="og:url" content="https://www.zackriver.com/" />
      </Helmet>
      <div className="scroll-smooth">
        <Hero />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh" sectionId="about">
          <LazyAbout />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh" sectionId="skills">
          <LazySkills />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh" sectionId="projects">
          <LazyProjects />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh" sectionId="testimonials">
          <LazyTestimonials />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh" sectionId="services">
          <LazyServices />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection>
          <LazyFooter />
        </LazySection>
      </div>
    </>
  );
};

export default Home;
