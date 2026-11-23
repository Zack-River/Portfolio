import englishContent from "./content/abjad/content.en.json";
import arabicContent from "./content/abjad/content.ar.json";
import type { CaseStudyContent, CaseStudyPresentation } from "../components/case-study/types";

export type AbjadLocale = "en" | "ar";
export type AbjadCaseStudyContent = CaseStudyContent;

const contentByLocale: Record<AbjadLocale, AbjadCaseStudyContent> = {
  en: englishContent as AbjadCaseStudyContent,
  ar: arabicContent as AbjadCaseStudyContent,
};

export const getAbjadCaseStudyContent = (locale: AbjadLocale): AbjadCaseStudyContent => contentByLocale[locale];

export const abjadVisuals = {
  hook: "/projects/abjad/abjad_hero.webp",
  goal: "/projects/abjad/learner_journey.webp",
  "reality-check": "/projects/abjad/contextual_arabic_forms.webp",
  "original-plan": "/projects/abjad/path_vs_outline.webp",
  breaking: "/projects/abjad/broken_join.webp",
  "failed-experiments": "/projects/abjad/whole_word_masking.webp",
  "turning-point": "/projects/abjad/fragmented_system.webp",
  "source-of-truth": "/projects/abjad/architecture_before_after.webp",
  performance: "/projects/abjad/performance_benchmark.webp",
  export: "/projects/abjad/deterministic_export.webp",
  product: "/projects/abjad/final_studio.webp",
  result: "/projects/abjad/completed_word.webp",
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
  "/projects/abjad/final_studio.webp",
  "/projects/abjad/broken_join.webp",
  "/projects/abjad/path_vs_outline.webp",
  "/projects/abjad/abjad_hero.webp",
  "/projects/abjad/performance_benchmark.webp",
  "/projects/abjad/deterministic_export.webp",
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
