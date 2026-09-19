import React from "react";
import { m } from "framer-motion";
import VisualPlaceholder from "./VisualPlaceholder";
import StoryImage from "./StoryImage";

type NarrativeSectionProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  imageLabel?: string;
  imageSubtitle?: string;
  imageSrc?: string;
  imageContain?: boolean;
  imageVariant?: "architecture" | "performance" | "default";
  imageSide?: "start" | "end";
  direction?: "ltr" | "rtl";
  compact?: boolean;
};

const NarrativeSection: React.FC<NarrativeSectionProps> = ({
  eyebrow,
  title,
  children,
  imageLabel,
  imageSubtitle,
  imageSrc,
  imageContain = true,
  imageVariant,
  imageSide = "end",
  direction = "ltr",
  compact = false,
}) => {
  const visual = imageLabel
    ? imageSrc
      ? <StoryImage src={imageSrc} label={imageLabel} subtitle={imageSubtitle} contain={imageContain} />
      : <VisualPlaceholder label={imageLabel} subtitle={imageSubtitle} variant={imageVariant} />
    : null;

  const floatImage = direction === "rtl"
    ? imageSide === "start" ? "float-right ml-10" : "float-left mr-10"
    : imageSide === "start" ? "float-left mr-10" : "float-right ml-10";

  return (
    <section className={`py-16 md:py-28 ${compact ? "md:py-18" : ""}`}>
      <div className="w-full">
        <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-electric text-xs tracking-[0.22em] uppercase mb-4">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.15] text-canvas-dark dark:text-canvas-light">{title}</h2>
          <div className="mt-6 h-0.5 w-14 bg-electric" />
          <div className="mt-8 flow-root">
            {visual && <div className={`hidden lg:block ${floatImage} w-[48%] mb-6`}>{visual}</div>}
            <div className="space-y-5 text-base md:text-lg leading-8 text-canvas-dark/75 dark:text-canvas-light/75">{children}</div>
            {visual && <div className="lg:hidden mt-8">{visual}</div>}
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default NarrativeSection;
