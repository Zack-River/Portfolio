import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Lazy load components below the fold
import LazySection from "../components/LazySection";

const LazyAbout = React.lazy(() => import("../components/About"));
const LazySkills = React.lazy(() => import("../components/Skills"));
const LazyProjects = React.lazy(() => import("../components/Projects"));
const LazyTestimonials = React.lazy(() => import("../components/Testimonials"));
const LazyServices = React.lazy(() => import("../components/Services"));
const LazyContact = React.lazy(() => import("../components/Contact"));

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "Abdallah Wageeh | Software Engineer";
  }, []);

  return (
    <>
      <main className="scroll-smooth">
        <Hero />
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh">
          <LazyAbout />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh">
          <LazySkills />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh">
          <LazyProjects />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh">
          <LazyTestimonials />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh">
          <LazyServices />
        </LazySection>
        <div className="border-t border-canvas-dark/10 w-full max-w-7xl mx-auto"></div>
        <LazySection placeholderHeight="100vh">
          <section className="flex flex-col justify-between">
            <LazyContact />
            <Footer />
          </section>
        </LazySection>
      </main>
    </>
  );
};

export default Home;
