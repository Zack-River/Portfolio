import englishContent from "../portfolio-documentation/ABJAD_CASE_STUDY_CONTENT.json";
import arabicContent from "../portfolio-documentation/ABJAD_CASE_STUDY_CONTENT_AR.json";
import type { CaseStudyContent, CaseStudyPresentation } from "../components/case-study/types";

export type AbjadLocale = "en" | "ar";
export type AbjadCaseStudyContent = CaseStudyContent;

const contentByLocale: Record<AbjadLocale, AbjadCaseStudyContent> = {
  en: englishContent as AbjadCaseStudyContent,
  ar: arabicContent as AbjadCaseStudyContent,
};

export const getAbjadCaseStudyContent = (locale: AbjadLocale): AbjadCaseStudyContent => contentByLocale[locale];

export const abjadVisuals = {
  hook: "/projects/abjad/abjad_hero.png",
  goal: "/projects/abjad/learner_journey.png",
  "reality-check": "/projects/abjad/contextual_arabic_forms.png",
  "original-plan": "/projects/abjad/path_vs_outline.png",
  breaking: "/projects/abjad/broken_join.png",
  "failed-experiments": "/projects/abjad/whole_word_masking.png",
  "turning-point": "/projects/abjad/fragmented_system.png",
  "source-of-truth": "/projects/abjad/architecture_before_after.png",
  performance: "/projects/abjad/performance_benchmark.png",
  export: "/projects/abjad/deterministic_export.png",
  product: "/projects/abjad/final_studio.png",
  result: "/projects/abjad/completed_word.png",
} as const;

export const abjadImageSide: Record<string, "start" | "end"> = {
  goal: "start",
  "original-plan": "start",
  "failed-experiments": "start",
  "source-of-truth": "start",
  export: "start",
  result: "start",
};

export const abjadGalleryVisuals = [
  "/projects/abjad/final_studio.png",
  "/projects/abjad/broken_join.png",
  "/projects/abjad/path_vs_outline.png",
  "/projects/abjad/abjad_hero.png",
  "/projects/abjad/performance_benchmark.png",
  "/projects/abjad/deterministic_export.png",
] as const;

/** Presentation choices remain outside localized copy and can be reused by future projects. */
export const abjadCaseStudyPresentation: CaseStudyPresentation = {
  visuals: abjadVisuals,
  galleryVisuals: abjadGalleryVisuals,
  imageSides: abjadImageSide,
  sectionVariants: {
    "turning-point": "turning-point",
    "failed-experiments": "experiments",
  },
};
