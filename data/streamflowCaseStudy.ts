import englishContent from "../portfolio-documentation/projects/streamflow/STREAMFLOW_CASE_STUDY_CONTENT.json";
import arabicContent from "../portfolio-documentation/projects/streamflow/STREAMFLOW_CASE_STUDY_CONTENT_AR.json";
import type { CaseStudyContent, CaseStudyPresentation } from "../components/case-study/types";

export type StreamflowLocale = "en" | "ar";
export type StreamflowCaseStudyContent = CaseStudyContent;

const contentByLocale: Record<StreamflowLocale, StreamflowCaseStudyContent> = {
  en: englishContent as StreamflowCaseStudyContent,
  ar: arabicContent as StreamflowCaseStudyContent,
};

export const getStreamflowCaseStudyContent = (locale: StreamflowLocale): StreamflowCaseStudyContent => contentByLocale[locale];

export const streamflowVisuals: Record<string, string> = {
  "01": "/projects/streamflow/01-Home-Logged-In-Hero.webp",
  "02": "/projects/streamflow/02-Home-Landing.webp",
  "03": "/projects/streamflow/streamflow-current-home.png",
  "04": "/projects/streamflow/04-Artist-Uploads.webp",
  "05": "/projects/streamflow/streamflow-current-playlist.png",
  "06": "/projects/streamflow/streamflow-current-admin.png",
  "07": "/projects/streamflow/streamflow-architecture-before.png",
  "08": "/projects/streamflow/streamflow-architecture-before-after.png",
  "09": "/projects/streamflow/09-Search.webp",
  "10": "/projects/streamflow/11-Admin-Dashboard.webp",
  "11": "/projects/streamflow/16-Mobile-Dark.webp",
};

export const streamflowImageSide: Record<string, "start" | "end"> = {
  "02": "start",
  "04": "start",
  "06": "start",
  "08": "start",
  "10": "start",
};

export const streamflowGalleryVisuals = [
  "/projects/streamflow/03-Artist-Dashboard.webp",
  "/projects/streamflow/05-Song-Upload.webp",
  "/projects/streamflow/07-Playlist-Creation.webp",
  "/projects/streamflow/08-Playlist-View.webp",
  "/projects/streamflow/10-Artist-Profile.webp",
  "/projects/streamflow/14-Pending-Songs.webp",
  "/projects/streamflow/17-Mobile-Light.webp",
] as const;

export const streamflowCaseStudyPresentation: CaseStudyPresentation = {
  visuals: streamflowVisuals,
  galleryVisuals: streamflowGalleryVisuals,
  imageSides: streamflowImageSide,
  sectionVariants: {
    "06": "experiments",
    "07": "turning-point",
  },
};
