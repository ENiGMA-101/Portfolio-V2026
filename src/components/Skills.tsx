import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { SKILL_CHIPS, SKILL_CORE, SKILL_DATA, type SkillBar } from "../lib/data";
import { Reveal, SectionTag, SectionTitle } from "./ui";

function Bar({ skill, delay, color }: { skill: SkillBar; delay: number; color: string }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-xl text-ink transition-colors group-hover:text-mossdeep">
            {skill.name}
          </span>
          {skill.note && (
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-inkfaint sm:inline">
              {skill.note}
            </span>
          )}
        </div>
        <span className="font-mono text-[11px] tracking-[0.15em] text-clay">
          {skill.level}%
        </span>
      </div>
      <div className="mt-2.5 h-[3px] w-full overflow-hidden rounded-full bg-ink/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-line bg-bgdeep/50">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionTag index="03" label="Skills" />
        <SectionTitle className="mt-10">
          The <em className="text-moss">toolkit</em>, honestly measured.
        </SectionTitle>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-mossdeep">
                  Languages & Craft
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <div className="space-y-8">
                {SKILL_CORE.map((s, i) => (
                  <Bar key={s.name} skill={s} delay={0.15 + i * 0.09} color="#566047" />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-clay">
                  Databases & Data Engineering
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <div className="space-y-8">
                {SKILL_DATA.map((s, i) => (
                  <Bar key={s.name} skill={s} delay={0.2 + i * 0.09} color="#a4592f" />
                ))}
              </div>
              <p className="mt-8 border-l-2 border-gold/60 pl-4 text-sm leading-relaxed text-inksoft">
                Percentages aren't marketing — they're an honest self-rating from two
                years of building, breaking and fixing. PostgreSQL and MongoDB are
                actively being leveled up.
              </p>
            </div>
          </Reveal>
        </div>

        {/* floating chip pool */}
        <Reveal delay={0.15} className="mt-20">
          <div className="relative overflow-hidden border border-line bg-paper/50 px-6 py-12 sm:px-10">
            <div className="pointer-events-none absolute inset-0 graph-paper opacity-60" />
            <div className="relative mb-8 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-inkfaint">
                Also in the pool
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-inkfaint">
                {SKILL_CHIPS.length} items
              </span>
            </div>
            <div className="relative flex flex-wrap gap-3.5">
              {SKILL_CHIPS.map((chip, i) => (
                <span
                  key={chip}
                  className="chip-float cursor-default rounded-full border border-line bg-paper px-5 py-2.5 text-[13px] text-inksoft shadow-[0_10px_20px_-14px_rgba(42,39,30,0.4)] transition-colors hover:border-clay hover:text-clay"
                  style={
                    {
                      "--dx": `${(i % 3) * 5 - 4}px`,
                      "--dy": `${-8 - (i % 4) * 3}px`,
                      "--tilt": `${(i % 5) - 2}deg`,
                      "--dur": `${6 + (i % 5)}s`,
                      "--delay": `${i * 0.35}s`,
                    } as CSSProperties
                  }
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
