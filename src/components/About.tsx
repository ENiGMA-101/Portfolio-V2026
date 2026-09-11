import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Camera,
  Castle,
  Code2,
  Gamepad2,
  GraduationCap,
  Music2,
  Plane,
  Trophy,
} from "lucide-react";
import { useRef } from "react";
import { HOBBIES, PROFILE } from "../lib/data";
import { Reveal, SectionTag, SectionTitle } from "./ui";

const HOBBY_ICONS: Record<string, typeof BookOpen> = {
  book: BookOpen,
  music: Music2,
  chess: Castle,
  plane: Plane,
  camera: Camera,
  game: Gamepad2,
};

const CURRENTLY = [
  {
    icon: GraduationCap,
    title: "Studying",
    body: "B.Sc. in CSE — University of Asia Pacific, Dhaka (2023 — present)",
  },
  {
    icon: Code2,
    title: "Building",
    body: "FIFA World Cup 2026 tooling — a browser extension & a Telegram bot",
  },
  {
    icon: Trophy,
    title: "Chasing",
    body: "Deeper CS fundamentals — systems, data engineering and clean software craft",
  },
];

export default function About() {
  const bandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-58%"]);

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionTag index="01" label="About" />

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <SectionTitle>
              Curious by default,
              <br />
              <em className="text-moss">builder</em> by choice.
            </SectionTitle>

            <Reveal delay={0.15} className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-inksoft sm:text-lg">
              <p>
                Welcome to my digital workspace. I'm Hamdil — developer, explorer,
                dreamer. For the past two years and counting I've been turning
                curiosity into software: bots that ping you before kickoff,
                extensions that put the World Cup in your toolbar, and sites like
                this one.
              </p>
              <p>
                My toolkit grew from the ground up —{" "}
                <span className="text-ink">C/C++ and Java</span> for fundamentals,{" "}
                <span className="text-ink">Python</span> for automation,{" "}
                <span className="text-ink">SQL</span> for data, and the open web for
                everything else. I care about things that work well and read like
                they were made by a human.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <blockquote className="mt-10 max-w-xl border-l-2 border-clay pl-6 font-serif text-2xl italic leading-snug text-mossdeep sm:text-3xl">
                "{PROFILE.quote}"
              </blockquote>
            </Reveal>

            <Reveal delay={0.28} className="mt-12">
              <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-inkfaint">
                Beyond the keyboard
              </div>
              <div className="flex flex-wrap gap-2.5">
                {HOBBIES.map(({ icon, label }, i) => {
                  const Icon = HOBBY_ICONS[icon];
                  return (
                    <motion.span
                      key={label}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                      className="flex items-center gap-2 rounded-full border border-line bg-paper/60 px-4 py-2 text-[13px] text-inksoft transition-all duration-300 hover:-translate-y-0.5 hover:border-moss hover:text-mossdeep"
                    >
                      <Icon size={14} className="text-clay" />
                      {label}
                    </motion.span>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* currently card */}
          <div className="lg:pt-24">
            <Reveal delay={0.2}>
              <div className="relative border border-line bg-paper p-8 shadow-[0_25px_50px_-30px_rgba(42,39,30,0.35)]">
                <div className="absolute -top-3 left-6 bg-mossdeep px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-paper">
                  Currently
                </div>
                <div className="mt-2 space-y-8">
                  {CURRENTLY.map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg text-clay">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mossdeep">
                          {title}
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-inksoft">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-line pt-6 font-mono text-[10px] uppercase leading-loose tracking-[0.18em] text-inkfaint">
                  &gt; status: online
                  <br />
                  &gt; mode: learning & shipping
                  <br />
                  &gt; coffee level: critical
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* giant scrolling band */}
      <div ref={bandRef} className="relative overflow-hidden border-y border-line py-6">
        <motion.div style={{ x }} className="flex w-max items-center gap-10 whitespace-nowrap">
          {["Ideas", "→", "Code", "→", "Impact"].map((w, i) => (
            <span
              key={i}
              className={
                w === "→"
                  ? "font-serif text-[clamp(3rem,9vw,8rem)] italic text-clay"
                  : `font-serif text-[clamp(3rem,9vw,8rem)] leading-none tracking-tight ${
                      i % 2 === 0 ? "text-ink" : "text-outline"
                    }`
              }
            >
              {w}
            </span>
          ))}
          {["Ideas", "→", "Code", "→", "Impact"].map((w, i) => (
            <span
              key={`b-${i}`}
              className={
                w === "→"
                  ? "font-serif text-[clamp(3rem,9vw,8rem)] italic text-clay"
                  : `font-serif text-[clamp(3rem,9vw,8rem)] leading-none tracking-tight ${
                      i % 2 === 0 ? "text-ink" : "text-outline"
                    }`
              }
            >
              {w}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
