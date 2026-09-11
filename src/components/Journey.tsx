import { Award, GraduationCap, Medal, Trophy } from "lucide-react";
import { EDUCATION } from "../lib/data";
import { Reveal, SectionTag, SectionTitle } from "./ui";

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "3× Golden A+",
    body: "Talentpool Scholarship recipient at JSC, SSC and HSC levels — a perfect national grade, three times running.",
  },
  {
    icon: Medal,
    title: "Mymensingh → Dhaka",
    body: "From Mymensingh Zilla School to the University of Asia Pacific — carrying a scholarship streak into CSE.",
  },
  {
    icon: Award,
    title: "Shipped before junior year",
    body: "A World Cup browser extension and a Telegram bot in production while still an undergrad.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionTag index="04" label="The Journey" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <SectionTitle>
            Education, with a
            <br />
            <em className="text-clay">golden</em> streak.
          </SectionTitle>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-inksoft">
              Three national scholarships in a row — then on to computer science.
              The through-line: showing up, doing the work, collecting the Golden
              A+.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-20 lg:grid-cols-[1.3fr_1fr]">
          {/* timeline */}
          <div className="relative">
            <span className="absolute bottom-4 left-[7px] top-4 w-px bg-line" />
            <div className="space-y-14">
              {EDUCATION.map((edu, i) => (
                <Reveal key={edu.title} delay={i * 0.08}>
                  <div className="group relative pl-12">
                    <span
                      className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 transition-colors ${
                        edu.current
                          ? "border-clay bg-clay/20"
                          : "border-moss bg-bg group-hover:bg-moss/25"
                      }`}
                    />
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-clay">
                      {edu.year}
                    </div>
                    <h3 className="mt-2.5 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                      {edu.title}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-2 text-sm text-inksoft">
                      <GraduationCap size={14} className="text-moss" />
                      {edu.school}
                    </div>
                    <p
                      className={`mt-2.5 text-sm ${
                        edu.detail.includes("Golden")
                          ? "font-medium text-gold"
                          : "text-inksoft"
                      }`}
                    >
                      {edu.detail}
                    </p>
                    {edu.current && (
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-mossdeep px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-paper">
                        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" />
                        In progress
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* achievements */}
          <div className="space-y-6 lg:pt-2">
            {ACHIEVEMENTS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.1}>
                <div className="group relative overflow-hidden border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_45px_-30px_rgba(42,39,30,0.4)]">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-[1.8]" />
                  <Icon size={22} className="relative text-clay" />
                  <h4 className="relative mt-4 font-serif text-2xl tracking-tight text-ink">
                    {title}
                  </h4>
                  <p className="relative mt-2 text-sm leading-relaxed text-inksoft">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
