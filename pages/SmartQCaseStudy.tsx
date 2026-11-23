import React from "react";
import CaseStudyPage from "./CaseStudyPage";
import {
  getSmartQCaseStudyContent,
  smartqCaseStudyPresentation,
  type SmartQLocale,
} from "../data/smartqCaseStudy";

const SmartQCaseStudy: React.FC<{ locale?: SmartQLocale }> = ({ locale = "en" }) => {
  const canonicalPath = locale === "ar" ? "/projects/smartq/ar" : "/projects/smartq";

  return (
    <CaseStudyPage
      content={getSmartQCaseStudyContent(locale)}
      presentation={smartqCaseStudyPresentation}
      canonicalPath={canonicalPath}
      alternateHref={locale === "en" ? "/projects/smartq/ar" : "/projects/smartq"}
    />
  );
};

export default SmartQCaseStudy;
