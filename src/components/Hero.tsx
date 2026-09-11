import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { HERO_STATS, HERO_WORDS, PROFILE } from "../lib/data";
import { scrollToId } from "../lib/scroll";
import FloatingIcons from "./FloatingIcons";
import { EASE, Magnetic } from "./ui";

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom text-moss">
      <AnimatePresence mode="wait">
        <motion.em
          key={HERO_WORDS[index]}
          initial={{ y: "110%", rotate: 3 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: "-110%", rotate: -3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-block italic"
        >
          {HERO_WORDS[index]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background layers */}
      <div className="graph-paper pointer-events-none absolute inset-0" />
      <FloatingIcons />
      <div className="pointer-events-none absolute -right-40 top-24 h-[34rem] w-[34rem] rounded-full bg-moss/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-clay/8 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:pt-36">
        {/* meta row — role tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.3em] text-inksoft sm:text-[11px]"
        >
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-clay" />
            Software Developer — CSE Undergrad
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div style={{ y: yText }} className="relative z-10">
          <h1 className="font-serif text-[clamp(3.2rem,8.8vw,7.8rem)] leading-[0.96] tracking-tight text-ink">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.45 }}
                className="block"
              >
                Hamdil Hasan
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.58 }}
                className="block"
              >
                Building,{" "}
                <RotatingWord />
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.71 }}
                className="block"
              >
                systems<span className="text-clay">.</span>
              </motion.span>
            </span>
          </h1>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-inksoft sm:text-lg"
          >
            Developer from Mymensingh, currently studying CSE at the University
            of Asia Pacific, Dhaka. I ship Python bots, browser extensions and
            hand-crafted web experiences.{" "}
            <span className="font-serif italic text-mossdeep">{PROFILE.tagline}</span>
          </motion.p>

          {/* Buttons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-mossdeep"
                data-cursor
              >
                <Download size={15} />
                Download Resume
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollToId("work")}
                className="group flex items-center gap-3 rounded-full border border-ink/50 px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:border-clay hover:text-clay"
                data-cursor
              >
                View Work
                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </button>
            </Magnetic>
          </motion.div>

          {/* Stat cards row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-16 grid grid-cols-3 gap-4 max-w-3xl"
          >
            {HERO_STATS.map(([num, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                className="rounded-xl border border-line bg-paper/60 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-clay/40 hover:shadow-[0_15px_30px_-15px_rgba(42,39,30,0.25)]"
              >
                <div className="font-serif text-3xl text-mossdeep sm:text-4xl">{num}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-inkfaint sm:text-[10px]">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        onClick={() => scrollToId("about")}
        className="group absolute bottom-8 left-5 flex items-center gap-3 sm:left-8"
        data-cursor
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-inkfaint transition-colors group-hover:text-clay">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-clay"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
