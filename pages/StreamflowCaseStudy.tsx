import React from "react";
import CaseStudyPage from "./CaseStudyPage";
import {
  getStreamflowCaseStudyContent,
  streamflowCaseStudyPresentation,
  type StreamflowLocale,
} from "../data/streamflowCaseStudy";

const StreamflowCaseStudy: React.FC<{ locale?: StreamflowLocale }> = ({ locale = "en" }) => {
  const canonicalPath = locale === "ar" ? "/projects/streamflow/ar" : "/projects/streamflow";

  return (
    <CaseStudyPage
      content={getStreamflowCaseStudyContent(locale)}
      presentation={streamflowCaseStudyPresentation}
      canonicalPath={canonicalPath}
      alternateHref={locale === "en" ? "/projects/streamflow/ar" : "/projects/streamflow"}
    />
  );
};

export default StreamflowCaseStudy;
