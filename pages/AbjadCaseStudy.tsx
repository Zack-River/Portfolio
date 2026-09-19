import React from "react";
import CaseStudyPage from "./CaseStudyPage";
import {
  abjadCaseStudyPresentation,
  getAbjadCaseStudyContent,
  type AbjadLocale,
} from "../data/abjadCaseStudy";

/** Abjad is now a thin, locale-aware configuration for the shared case-study system. */
const AbjadCaseStudy: React.FC<{ locale?: AbjadLocale }> = ({ locale = "en" }) => {
  const canonicalPath = locale === "ar" ? "/projects/abjad/ar" : "/projects/abjad";

  return (
    <CaseStudyPage
      content={getAbjadCaseStudyContent(locale)}
      presentation={abjadCaseStudyPresentation}
      canonicalPath={canonicalPath}
      alternateHref={locale === "en" ? "/projects/abjad/ar" : "/projects/abjad"}
    />
  );
};

export default AbjadCaseStudy;
