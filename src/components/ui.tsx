import { motion } from "framer-motion";
import { useRef, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span
          className={`font-mono text-[11px] tracking-[0.3em] uppercase ${
            dark ? "text-gold" : "text-clay"
          }`}
        >
          {index}
        </span>
        <span className={`h-px w-12 ${dark ? "bg-gold/60" : "bg-clay/60"}`} />
        <span
          className={`font-mono text-[11px] tracking-[0.3em] uppercase ${
            dark ? "text-paper/70" : "text-inksoft"
          }`}
        >
          {label}
        </span>
      </div>
    </Reveal>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal delay={0.08}>
      <h2
        className={`font-serif text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-ink ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  );
}

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "translate(0px, 0px)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      {children}
    </div>
  );
}
