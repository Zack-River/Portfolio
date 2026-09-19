export type CaseStudyDirection = "ltr" | "rtl";
export type CaseStudyLocale = "en" | "ar";

export type CaseStudyExperiment = {
  title?: string;
  problem: string;
  idea: string;
  whyItSeemedReasonable: string;
  whatFailed: string;
  whatWeLearned: string;
};

export type CaseStudySection = {
  id: string;
  eyebrow: string;
  title?: string;
  titleLines?: string[];
  paragraphs?: string[];
  intro?: string;
  flow?: string | string[];
  evidence?: string | string[];
  chips?: string[];
  experiments?: CaseStudyExperiment[];
  primaryImage?: string;
  imageAlt?: string;
  /** Short, human-facing caption shown beneath the visual. Keep file paths out of this field. */
  imageSubtitle?: string;
  visualNote?: string;
  sourceRefs?: string[];
};

export type CaseStudyGalleryItem = string | {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyContent = {
  project: {
    title: string;
    subtitle: string;
    language: CaseStudyLocale;
    direction: CaseStudyDirection;
    heroImage: string;
    heroImageAlt: string;
    metaDescription: string;
    role: string[];
    coreStack: string[];
    ui: {
      languageStatus: string;
      switchLanguage: string;
      backToProjects: string;
      back: string;
      caseStudy: string;
      heroEyebrow: string;
      roleLabel: string;
      contextLabel: string;
      contextValue: string;
      stackLabel: string;
    };
  };
  sections: CaseStudySection[];
  gallery: { eyebrow: string; title: string; description: string; items: CaseStudyGalleryItem[] };
  cta: { eyebrow: string; title: string; label: string; href: string };
};

export type CaseStudyPresentation = {
  visuals: Record<string, string>;
  galleryVisuals: readonly string[];
  imageSides?: Record<string, "start" | "end">;
  sectionVariants?: Record<string, "default" | "turning-point" | "experiments">;
  /** Optional per-section overrides; the reusable default is wraparound text. */
  textLayouts?: Record<string, "default" | "wide" | "columns" | "wrap">;
};
