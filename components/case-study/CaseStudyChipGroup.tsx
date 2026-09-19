import React from "react";

type CaseStudyChipGroupProps = {
  items: readonly string[];
  direction?: "ltr" | "rtl";
  className?: string;
};

/**
 * Inline metadata tags that can flow around a floated case-study visual.
 * Keeping the chips inline (instead of using a flex row) preserves the
 * narrative wraparound behavior when the image is taller than the copy.
 */
const CaseStudyChipGroup: React.FC<CaseStudyChipGroupProps> = ({ items, direction = "ltr", className = "" }) => (
  <div dir={direction} role="list" className={`pt-2 leading-none ${className}`}>
    {items.map((item) => (
      <span
        key={item}
        role="listitem"
        className="mr-2 mb-2 inline-flex max-w-full align-middle whitespace-nowrap rounded-full border border-canvas-dark/10 bg-white px-3 py-1.5 text-xs text-canvas-dark/70 shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-canvas-light/70"
      >
        {item}
      </span>
    ))}
  </div>
);

export default CaseStudyChipGroup;
