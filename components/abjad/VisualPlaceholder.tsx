import React from "react";
import { ImageIcon } from "lucide-react";

type VisualPlaceholderProps = {
  label: string;
  subtitle?: string;
  className?: string;
  variant?: "hero" | "architecture" | "performance" | "default";
};

const VisualPlaceholder: React.FC<VisualPlaceholderProps> = ({
  label,
  subtitle,
  className = "",
  variant = "default",
}) => {
  const isArchitecture = variant === "architecture";
  const isPerformance = variant === "performance";

  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-canvas-dark text-white shadow-xl ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#c7f000_1px,transparent_1px),linear-gradient(to_bottom,#c7f000_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative min-h-72 md:min-h-96 p-6 md:p-10 flex flex-col justify-between">
        {variant === "hero" && (
          <div className="flex-1 flex items-center justify-center" aria-hidden="true">
            <div className="text-[clamp(5rem,16vw,12rem)] leading-none font-serif text-electric/90">أبجد</div>
          </div>
        )}
        {isArchitecture && (
          <div className="grid grid-cols-2 gap-4 md:gap-8 items-center flex-1 py-8" aria-hidden="true">
            <div className="space-y-3 opacity-45">
              {["Fixtures", "Studio", "Gallery", "Export"].map((item) => (
                <div key={item} className="border border-white/20 px-3 py-2 font-mono text-xs">{item}</div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="border border-electric/70 bg-electric/10 px-3 py-3 font-mono text-xs text-electric">Canonical pipeline</div>
              <div className="h-px bg-electric/60" />
              <div className="grid grid-cols-2 gap-2 font-mono text-[10px] text-white/70">
                <span>Studio</span><span>Exports</span><span>Editor</span><span>Renderer</span>
              </div>
            </div>
          </div>
        )}
        {isPerformance && (
          <div className="flex-1 flex items-center justify-center gap-5 md:gap-10 font-mono" aria-hidden="true">
            <div className="text-center"><span className="block text-3xl md:text-5xl text-white/45">~256ms</span><span className="text-[10px] text-white/40">unprepared frame</span></div>
            <div className="text-electric text-2xl">→</div>
            <div className="text-center"><span className="block text-3xl md:text-5xl text-electric">2.22ms</span><span className="text-[10px] text-white/40">prepared frame</span></div>
          </div>
        )}
        {variant === "default" && (
          <div className="flex-1 flex items-center justify-center" aria-hidden="true">
            <div className="w-3/4 h-1/2 border border-electric/40 rounded-full rotate-[-8deg]" />
          </div>
        )}
        {subtitle && <figcaption className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.08em] text-white/55">
          <ImageIcon size={12} className="text-electric/75 shrink-0" />
          <span>{subtitle}</span>
        </figcaption>}
      </div>
    </figure>
  );
};

export default VisualPlaceholder;
