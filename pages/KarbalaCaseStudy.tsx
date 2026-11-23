import React from "react";
import CaseStudyPage from "./CaseStudyPage";
import {
  getKarbalaCaseStudyContent,
  karbalaCaseStudyPresentation,
  type KarbalaLocale,
} from "../data/karbalaCaseStudy";

const KarbalaCaseStudy: React.FC<{ locale?: KarbalaLocale }> = ({ locale = "en" }) => {
  const canonicalPath = locale === "ar" ? "/projects/karbala/ar" : "/projects/karbala";

  return (
    <CaseStudyPage
      content={getKarbalaCaseStudyContent(locale)}
      presentation={karbalaCaseStudyPresentation}
      canonicalPath={canonicalPath}
      alternateHref={locale === "en" ? "/projects/karbala/ar" : "/projects/karbala"}
    />
  );
};

export default KarbalaCaseStudy;
