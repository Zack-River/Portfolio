import React, { useState } from "react";
import { ImageIcon, Maximize2 } from "lucide-react";
import ImageZoomModal from "../case-study/ImageZoomModal";

type StoryImageProps = {
  src: string;
  label: string;
  subtitle?: string;
  contain?: boolean;
};

const StoryImage: React.FC<StoryImageProps> = ({ src, label, subtitle, contain = true }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return <>
    <figure className="overflow-hidden rounded-2xl border border-canvas-dark/10 dark:border-white/10 bg-canvas-dark shadow-xl">
      <div className="relative bg-[#111722]">
        <button type="button" onClick={() => setIsZoomed(true)} aria-label={`Zoom image: ${label}`} className="group relative block w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric">
          <img
            src={src}
            alt={label}
            loading="lazy"
            decoding="async"
            className={`w-full aspect-video ${contain ? "object-contain" : "object-cover"}`}
          />
          <span className="pointer-events-none absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-canvas-dark/55 text-white/75 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true"><Maximize2 size={15} /></span>
        </button>
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />
      </div>
      {subtitle && <figcaption className="flex items-center gap-2 px-5 py-3 font-mono text-[10px] md:text-xs tracking-[0.08em] text-white/55">
        <ImageIcon size={12} className="text-electric/75 shrink-0" />
        <span>{subtitle}</span>
      </figcaption>}
    </figure>
    {isZoomed && <ImageZoomModal src={src} alt={label} title={subtitle} onClose={() => setIsZoomed(false)} />}
  </>;
};

export default StoryImage;
