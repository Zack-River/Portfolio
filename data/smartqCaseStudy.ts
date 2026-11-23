import englishContent from "./content/smartq/content.en.json";
import arabicContent from "./content/smartq/content.ar.json";
import type { CaseStudyContent, CaseStudyPresentation } from "../components/case-study/types";

export type SmartQLocale = "en" | "ar";
export type SmartQCaseStudyContent = CaseStudyContent;

const contentByLocale: Record<SmartQLocale, SmartQCaseStudyContent> = {
  en: englishContent as SmartQCaseStudyContent,
  ar: arabicContent as SmartQCaseStudyContent,
};

export const getSmartQCaseStudyContent = (locale: SmartQLocale): SmartQCaseStudyContent => contentByLocale[locale];

export const smartqVisuals: Record<string, string> = {
  "01": "/projects/smartq/01-Landing-Hero-Dark.webp",
  "02": "/projects/smartq/06-Student-Home.webp",
  "03": "/projects/smartq/07-Student-Quiz-Menu.webp",
  "04": "/projects/smartq/10-Student-Quiz-Game.webp",
  "05": "/projects/smartq/11-Student-Answer.webp",
  "06": "/projects/smartq/12-Student-Quiz-Result.webp",
  "07": "/projects/smartq/13-Admin-Dashboard-Home.webp",
  "08": "/projects/smartq/14-Admin-Quizes-Manage.webp",
  "09": "/projects/smartq/09-Student-Settings.webp",
  "10": "/projects/smartq/21-Admin-Dashboard-Dark.webp",
  "11": "/projects/smartq/02-Landing-Hero-Light.webp",
};

export const smartqImageSide: Record<string, "start" | "end"> = {
  "02": "start",
  "04": "start",
  "06": "start",
  "08": "start",
  "10": "start",
};

export const smartqGalleryVisuals = [
  "/projects/smartq/01-Landing-Hero-Dark.webp",
  "/projects/smartq/08-Student-LeaderBoard.webp",
  "/projects/smartq/10-Student-Quiz-Game.webp",
  "/projects/smartq/13-Admin-Dashboard-Home.webp",
  "/projects/smartq/17-Admin-Categories-Manage.webp",
  "/projects/smartq/19-Admin-Settings-Main.webp",
] as const;

/** Presentation choices stay separate from localized copy so the shared case-study system remains reusable. */
export const smartqCaseStudyPresentation: CaseStudyPresentation = {
  visuals: smartqVisuals,
  galleryVisuals: smartqGalleryVisuals,
  imageSides: smartqImageSide,
  sectionVariants: {
    "07": "turning-point",
  },
};
