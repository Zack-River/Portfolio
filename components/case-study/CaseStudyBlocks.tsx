import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ImageIcon, Maximize2 } from "lucide-react";
import { m } from "framer-motion";
import type { CaseStudyContent, CaseStudyPresentation, CaseStudyGalleryItem } from "./types";
import ImageZoomModal from "./ImageZoomModal";
import CaseStudyChipGroup from "./CaseStudyChipGroup";

type Project = CaseStudyContent["project"];

export const CaseStudyImage: React.FC<{ src?: string; label: string; subtitle?: string; contain?: boolean }> = ({ src, label, subtitle, contain = true }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const canZoom = Boolean(src && !src.startsWith("[IMAGE:"));

  return <>
    <figure className="overflow-hidden rounded-2xl border border-canvas-dark/10 dark:border-white/10 bg-canvas-dark shadow-xl">
      <div className={`relative bg-[#111722] ${!canZoom ? "aspect-video flex items-center justify-center p-8" : ""}`}>
        {canZoom ? <button type="button" onClick={() => setIsZoomed(true)} aria-label={`Zoom image: ${label}`} className="group relative block w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric">
          <img src={src} alt={label} loading="lazy" decoding="async" className={`w-full aspect-video ${contain ? "object-contain" : "object-cover"}`} />
          <span className="pointer-events-none absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-canvas-dark/55 text-white/75 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true"><Maximize2 size={15} /></span>
        </button> : <p className="max-w-xl text-center font-mono text-xs leading-6 tracking-[0.08em] text-white/65">{label}</p>}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />
      </div>
      {subtitle && <figcaption className="flex items-center gap-2 px-5 py-3 font-mono text-[10px] md:text-xs tracking-[0.08em] text-white/55">
        <ImageIcon size={12} className="text-electric/75 shrink-0" /><span>{subtitle}</span>
      </figcaption>}
    </figure>
    {isZoomed && src && <ImageZoomModal src={src} alt={label} title={subtitle} onClose={() => setIsZoomed(false)} />}
  </>;
};

export const CaseStudyHero: React.FC<{ project: Project }> = ({ project }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return <>
    <section className="relative h-[90vh] min-h-[34rem] flex items-end overflow-hidden bg-canvas-dark text-white">
      <m.div initial={{ scale: 1.04 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="absolute inset-0">
        <img src={project.heroImage} alt={project.heroImageAlt} className="w-full h-full object-cover object-center" fetchPriority="high" />
      </m.div>
      <div className="absolute inset-0 bg-canvas-dark/55" /><div className="absolute inset-0 bg-linear-to-t from-canvas-dark via-canvas-dark/45 to-transparent" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#c7f000_1px,transparent_1px),linear-gradient(to_bottom,#c7f000_1px,transparent_1px)] [background-size:40px_40px]" />
      <button type="button" onClick={() => setIsZoomed(true)} aria-label={`Zoom image: ${project.title}`} className="absolute inset-0 z-[1] cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-electric" />
      <Link to="/projects" className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full transition-colors z-10" dir={project.direction}><ArrowLeft size={14} /> {project.ui.back}</Link>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-14 md:pb-20">
        <m.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-mono text-electric text-xs tracking-[0.3em] uppercase mb-4" dir={project.direction}>{project.ui.heroEyebrow}</m.p>
        <m.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18, ease: "circOut" }} className="font-display text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-[-0.04em]">{project.title}</m.h1>
        <m.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-5 max-w-3xl text-lg md:text-2xl leading-relaxed text-white/78">{project.subtitle}</m.p><div className="mt-7 h-0.5 w-24 bg-electric" />
      </div>
    </section>
    {isZoomed && <ImageZoomModal src={project.heroImage} alt={project.heroImageAlt} title={project.title} onClose={() => setIsZoomed(false)} />}
  </>;
};

export const CaseStudyStickyNav: React.FC<{ project: Project; visible: boolean; alternateHref?: string }> = ({ project, visible, alternateHref }) => (
  <m.nav initial={{ y: -80 }} animate={{ y: visible ? 0 : -80 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="fixed top-0 left-0 right-0 z-50 bg-canvas-light dark:bg-canvas-dark/85 backdrop-blur-xl border-b border-canvas-dark/10 dark:border-white/10 flex items-center justify-between px-6 md:px-12 h-16">
    <Link to="/projects" className="flex items-center gap-2 text-canvas-dark/60 dark:text-canvas-light/60 hover:text-canvas-dark dark:hover:text-canvas-light text-sm font-medium transition-colors" dir={project.direction}><ArrowLeft size={16} /> {project.ui.backToProjects}</Link>
    <span className="font-display font-medium text-canvas-dark dark:text-canvas-light hidden md:block">{project.title}</span>
    <div className="flex items-center gap-3" dir="ltr">
      {alternateHref && <Link to={alternateHref} aria-label={`${project.ui.languageStatus}: ${project.language.toUpperCase()}. ${project.ui.switchLanguage}`} className="inline-flex items-center gap-2 rounded-full border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-canvas-dark/70 dark:text-white/70 transition-colors hover:border-electric hover:text-electric"><span className="text-canvas-dark/40 dark:text-white/40">{project.ui.languageStatus}</span><span className="text-electric">{project.language.toUpperCase()}</span><span className="text-canvas-dark/50 dark:text-white/50">→ {project.ui.switchLanguage}</span></Link>}
      <span className="font-mono text-xs text-electric uppercase tracking-widest">{project.ui.caseStudy}</span>
    </div>
  </m.nav>
);

export const CaseStudyMeta: React.FC<{ project: Project }> = ({ project }) => {
  const hasRole = project.role.length > 0;

  return <section className="bg-canvas-dark text-white border-t border-white/10"><div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10 grid grid-cols-1 ${hasRole ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-8 md:gap-0 md:divide-x md:divide-x-reverse divide-white/10`}>
    {hasRole && <div className="sm:pl-8"><p className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-3" dir="ltr">{project.ui.roleLabel}</p><p className="text-white font-medium leading-relaxed" dir="ltr">{project.role.join(" · ")}</p></div>}
    <div className="sm:px-8"><p className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-3" dir="ltr">{project.ui.contextLabel}</p><p className="text-white font-medium">{project.ui.contextValue}</p></div>
    <div className="sm:pr-8"><p className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-3" dir="ltr">{project.ui.stackLabel}</p><p className="text-white/85 leading-relaxed" dir="ltr">{project.coreStack.join(" · ")}</p></div>
  </div></section>;
};

const NarrativeSection: React.FC<{ eyebrow: string; title: string; imageLabel?: string; imageSubtitle?: string; imageSrc?: string; imageSide: "start" | "end"; direction: "ltr" | "rtl"; textLayout?: "default" | "wide" | "columns" | "wrap"; children: React.ReactNode }> = ({ eyebrow, title, imageLabel, imageSubtitle, imageSrc, imageSide, direction, textLayout = "wrap", children }) => {
  const wrapLayout = textLayout === "wrap";
  const textSpan = textLayout === "wide" || textLayout === "columns" ? "lg:col-span-7" : "lg:col-span-5";
  const imageSpan = textLayout === "wide" || textLayout === "columns" ? "lg:col-span-5" : "lg:col-span-7";
  const bodyLayout = textLayout === "columns" ? "lg:columns-2 lg:gap-8 [&>p]:break-inside-avoid" : "";
  const floatImage = direction === "rtl" ? (imageSide === "start" ? "float-right mr-0 ml-10" : "float-left ml-0 mr-10") : (imageSide === "start" ? "float-left ml-0 mr-10" : "float-right mr-0 ml-10");
  const renderHeader = () => <><p className="font-mono text-electric text-xs tracking-[0.22em] uppercase mb-4">{eyebrow}</p><h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.15] text-canvas-dark dark:text-canvas-light">{title}</h2><div className="mt-6 h-0.5 w-14 bg-electric" /></>;
  if (wrapLayout) {
    return <section className="py-16 md:py-28"><div className="w-full"><m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>{renderHeader()}<div className="mt-8 flow-root"><div className={`hidden lg:block ${floatImage} w-[48%] mb-6`}><CaseStudyImage src={imageSrc} label={imageLabel ?? ""} subtitle={imageSubtitle} /></div><div className="space-y-5 text-base md:text-lg leading-8 text-canvas-dark/75 dark:text-canvas-light/75">{children}</div><div className="lg:hidden mt-8">{imageLabel && imageSrc && <CaseStudyImage src={imageSrc} label={imageLabel} subtitle={imageSubtitle} />}</div></div></m.div></div></section>;
  }
  return (
  <section className="py-16 md:py-28"><div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
    <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className={`${textSpan} ${imageSide === "start" ? "lg:order-2" : ""}`}>
      {renderHeader()}<div className={`mt-8 space-y-5 text-base md:text-lg leading-8 text-canvas-dark/75 dark:text-canvas-light/75 ${bodyLayout}`}>{children}</div>
    </m.div>
    {imageLabel && imageSrc && <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.08 }} className={`${imageSpan} ${imageSide === "start" ? "lg:order-1" : ""}`}><CaseStudyImage src={imageSrc} label={imageLabel} subtitle={imageSubtitle} /></m.div>}
  </div></section>
  );
};

export const CaseStudySections: React.FC<{ sections: CaseStudyContent["sections"]; presentation: CaseStudyPresentation; direction: Project["direction"] }> = ({ sections, presentation, direction }) => <>
  {sections.map((section) => {
    const imageSrc = presentation.visuals[section.id];
    const placeholderSrc = section.primaryImage?.startsWith("[IMAGE:") ? section.primaryImage : undefined;
    const imageSide = presentation.imageSides?.[section.id] ?? "end";
    const variant = presentation.sectionVariants?.[section.id] ?? "default";
    const textLayout = presentation.textLayouts?.[section.id] ?? "wrap";
    const imageSubtitle = section.imageSubtitle ?? section.title ?? section.imageAlt ?? (section.primaryImage && !section.primaryImage.startsWith("/") ? section.primaryImage : undefined);
    if (variant === "turning-point") return <section key={section.id} className="py-16 md:py-24 border-y border-canvas-dark/10 dark:border-white/10"><div className="max-w-4xl mx-auto text-center"><p className="font-mono text-electric text-xs tracking-[0.22em] uppercase mb-6" dir="ltr">{section.eyebrow}</p><h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{section.titleLines?.length ? section.titleLines.map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>) : section.title}</h2><p className="mt-7 text-lg leading-8 text-canvas-dark/70 dark:text-canvas-light/70">{section.paragraphs?.[0]}</p></div>{(imageSrc || placeholderSrc) && section.primaryImage && <div className="mt-10 max-w-4xl mx-auto"><CaseStudyImage src={imageSrc || placeholderSrc} label={section.imageAlt ?? section.primaryImage} subtitle={imageSubtitle} /></div>}</section>;
    const renderLines = (value?: string | string[]) => value ? Array.isArray(value) ? value.map((line) => <span key={line} className="block">{line}</span>) : value : null;
    const body = variant === "experiments" ? <>{section.intro && <p className="text-sm font-mono text-canvas-dark/60 dark:text-canvas-light/60">{section.intro}</p>}<div className={`space-y-5 text-sm md:text-base ${textLayout === "columns" ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 [&>p]:mb-5" : ""}`}>{section.experiments?.map((experiment, index) => <p key={`${experiment.title ?? experiment.problem}-${index}`}><strong className="text-canvas-dark dark:text-canvas-light">{experiment.title ?? experiment.problem}</strong>{experiment.title ? ". " : " — "}{experiment.title ? experiment.problem : null} {experiment.idea} {experiment.whyItSeemedReasonable} {experiment.whatFailed} {experiment.whatWeLearned}</p>)}</div></> : <>{section.flow && <div dir="ltr" className="font-mono text-xs md:text-sm leading-7 border-l-2 border-electric pl-4 text-canvas-dark/70 dark:text-canvas-light/70">{renderLines(section.flow)}</div>}{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.evidence && <div className="text-sm border-l-2 border-electric pl-4">{renderLines(section.evidence)}</div>}{section.chips && <CaseStudyChipGroup items={section.chips} direction="ltr" />}</>;
    return <NarrativeSection key={section.id} eyebrow={section.eyebrow} title={section.title ?? ""} imageLabel={section.imageAlt ?? section.primaryImage} imageSubtitle={imageSubtitle} imageSrc={imageSrc || placeholderSrc} imageSide={imageSide} direction={direction} textLayout={textLayout}>{body}</NarrativeSection>;
  })}
</>;

export const CaseStudyGallery: React.FC<{ gallery: CaseStudyContent["gallery"]; visuals: readonly string[]; direction: Project["direction"] }> = ({ gallery, visuals, direction }) => <section className="py-16 md:py-24 border-t border-canvas-dark/10 dark:border-white/10"><div className="flex flex-wrap items-end justify-between gap-5 mb-10"><div><p className="font-mono text-electric text-xs tracking-[0.22em] uppercase mb-3" dir={direction}>{gallery.eyebrow}</p><h2 className="font-display text-3xl md:text-4xl font-bold">{gallery.title}</h2></div><p className="max-w-md text-sm leading-6 text-canvas-dark/60 dark:text-canvas-light/60">{gallery.description}</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{gallery.items.map((item: CaseStudyGalleryItem, index) => { const fallback = visuals[index]; const src = typeof item === "string" ? fallback : item.src || fallback; const label = typeof item === "string" ? item : item.alt; const subtitle = typeof item === "string" ? item : item.caption; return src ? <CaseStudyImage key={`${label}-${index}`} src={src} label={label} subtitle={subtitle} /> : null; })}</div></section>;

export const CaseStudyCta: React.FC<{ content: CaseStudyContent }> = ({ content }) => <section className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8"><div><p className="font-mono text-electric text-xs tracking-[0.2em] uppercase mb-3" dir={content.project.direction}>{content.cta.eyebrow}</p><h2 className="font-display text-3xl md:text-4xl font-bold">{content.cta.title}</h2></div><Link to={content.cta.href} className="btn-primary" dir={content.project.direction}>{content.cta.label} {content.project.direction === "rtl" ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</Link></section>;
