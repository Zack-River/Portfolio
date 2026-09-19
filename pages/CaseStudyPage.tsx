import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LazyMotion, domAnimation } from "framer-motion";
import Footer from "../components/Footer";
import {
  CaseStudyCta,
  CaseStudyGallery,
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudySections,
  CaseStudyStickyNav,
} from "../components/case-study";
import type { CaseStudyContent, CaseStudyPresentation } from "../components/case-study";
import { lenisScrollTo } from "../hooks/useLenis";

export type CaseStudyPageProps = {
  content: CaseStudyContent;
  presentation: CaseStudyPresentation;
  canonicalPath: string;
  alternateHref?: string;
};

/**
 * Shared details-page template for narrative portfolio case studies.
 * Project-specific pages supply only content, visual mapping, and route metadata.
 */
const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ content, presentation, canonicalPath, alternateHref }) => {
  const { project } = content;
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenisScrollTo(0, { immediate: true });
    document.title = `${project.title} | Abdallah Wageeh Portfolio`;
  }, [project.title]);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > window.innerHeight * 0.72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div dir={project.direction} className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-canvas-dark dark:text-canvas-light overflow-x-hidden">
        <Helmet>
          <html lang={project.language} dir={project.direction} />
          <title>{project.title} | Abdallah Wageeh Portfolio</title>
          <meta name="description" content={project.metaDescription} />
          <link rel="canonical" href={`https://www.zackriver.com${canonicalPath}`} />
          <meta property="og:title" content={`${project.title} | Abdallah Wageeh Portfolio`} />
          <meta property="og:description" content={project.subtitle} />
          <meta property="og:type" content="article" />
        </Helmet>

        <main>
          <CaseStudyStickyNav project={project} visible={stickyVisible} alternateHref={alternateHref} />
          <CaseStudyHero project={project} />
          <CaseStudyMeta project={project} />
          <article className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <CaseStudySections sections={content.sections} presentation={presentation} direction={project.direction} />
            <CaseStudyGallery gallery={content.gallery} visuals={presentation.galleryVisuals} direction={project.direction} />
            <CaseStudyCta content={content} />
          </article>
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default CaseStudyPage;
