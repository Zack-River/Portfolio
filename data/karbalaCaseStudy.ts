import englishContent from "../portfolio-documentation/projects/karbala/KARBALA_CASE_STUDY_CONTENT.json";
import arabicContent from "../portfolio-documentation/projects/karbala/KARBALA_CASE_STUDY_CONTENT_AR.json";
import type { CaseStudyContent, CaseStudyPresentation } from "../components/case-study/types";

export type KarbalaLocale = "en" | "ar";
export type KarbalaCaseStudyContent = CaseStudyContent;

const contentByLocale: Record<KarbalaLocale, KarbalaCaseStudyContent> = {
  en: englishContent as KarbalaCaseStudyContent,
  ar: arabicContent as KarbalaCaseStudyContent,
};

export const getKarbalaCaseStudyContent = (locale: KarbalaLocale): KarbalaCaseStudyContent => contentByLocale[locale];

export const karbalaVisuals: Record<string, string> = {
  "01": "/projects/karbala/01-Home-Hero.webp",
  "02": "/projects/karbala/02-Home-About.webp",
  "03": "/projects/karbala/03-Home-Nights.webp",
  "04": "/projects/karbala/04-Home-Gallery.webp",
  "05": "/projects/karbala/05-Home-Footer.webp",
  "06": "/projects/karbala/06-Cards-Page.webp",
  "07": "/projects/karbala/07-Magales-Page.webp",
  "08": "/projects/karbala/08-Admin-Home.webp",
  "09": "/projects/karbala/09-Admin-Season.webp",
  "10": "/projects/karbala/10-Admin-Author.webp",
  "11": "/projects/karbala/11-Admin-Nights.webp",
};

export const karbalaImageSide: Record<string, "start" | "end"> = {
  "02": "start",
  "04": "start",
  "06": "start",
  "08": "start",
  "10": "start",
};

export const karbalaGalleryVisuals = [
  "/projects/karbala/01-Home-Hero.webp",
  "/projects/karbala/03-Home-Nights.webp",
  "/projects/karbala/12-Admin-Quizes.webp",
  "/projects/karbala/17-Admin-Gallery.webp",
  "/projects/karbala/08-Admin-Home.webp",
  "/projects/karbala/06-Cards-Page.webp",
] as const;

/** Presentation choices stay separate from localized copy so the same design system works in both directions. */
export const karbalaCaseStudyPresentation: CaseStudyPresentation = {
  visuals: karbalaVisuals,
  galleryVisuals: karbalaGalleryVisuals,
  imageSides: karbalaImageSide,
  sectionVariants: {
    "07": "turning-point",
  },
};
