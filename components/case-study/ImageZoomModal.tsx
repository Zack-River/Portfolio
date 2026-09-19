import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ImageZoomModalProps = {
  src: string;
  alt: string;
  title?: string;
  onClose: () => void;
};

/** Shared fullscreen image viewer used by case-study visuals. */
const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ src, alt, title, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Zoomed image: ${title}` : "Zoomed image"}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas-dark/90 p-5 backdrop-blur-md md:p-10"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image zoom"
        className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-electric hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric md:right-8 md:top-8"
      >
        <X size={20} aria-hidden="true" />
      </button>

      <div className="flex max-h-full max-w-6xl flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
        <img src={src} alt={alt} className="max-h-[82vh] max-w-[92vw] rounded-xl object-contain shadow-2xl" />
        {title && <p className="max-w-2xl text-center font-mono text-xs tracking-[0.08em] text-white/65">{title}</p>}
      </div>
    </div>,
    document.body,
  );
};

export default ImageZoomModal;
