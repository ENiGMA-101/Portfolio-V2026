import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp, FileText, MapPin } from "lucide-react";
import { PROFILE } from "../lib/data";
import { GithubIcon, GlobeIcon } from "./icons";
import { Magnetic, Reveal, SectionTag } from "./ui";

function useDhakaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: PROFILE.timezone,
        }).format(new Date())
      );
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

const CHANNELS = [
  {
    label: "GitHub",
    value: `@${PROFILE.handle}`,
    href: PROFILE.github,
    icon: GithubIcon,
    note: "16 public repos — the real résumé",
  },
  {
    label: "Résumé",
    value: "CV of Hamdil Hasan",
    href: PROFILE.resume,
    icon: FileText,
    note: "PDF — opens from my v1 site",
  },
  {
    label: "Portfolio v1",
    value: "enigma-101.github.io",
    href: PROFILE.site,
    icon: GlobeIcon,
    note: "Where it all started",
  },
];

export default function Contact() {
  const time = useDhakaTime();

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-moss/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pt-36">
        <SectionTag index="06" label="Contact" />

        <Reveal delay={0.1}>
          <h2 className="mt-12 max-w-5xl font-serif text-[clamp(2.8rem,8vw,7rem)] leading-[1.0] tracking-tight text-ink">
            Let's turn <em className="text-moss">ideas</em> into code,
            <br className="hidden sm:block" /> and code into{" "}
            <em className="text-clay">impact</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-inksoft sm:text-lg">
            Whether it's a project, a question about my bots, or a game of chess —
            my inbox and repos are open. I'm currently open to internships and
            junior roles.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CHANNELS.map(({ label, value, href, icon: Icon, note }, i) => (
            <Reveal key={label} delay={0.1 + i * 0.08}>
              <Magnetic>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-moss hover:shadow-[0_30px_50px_-30px_rgba(42,39,30,0.4)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mossdeep transition-colors group-hover:border-clay group-hover:text-clay">
                      <Icon size={17} />
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-inkfaint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-clay"
                    />
                  </div>
                  <div className="mt-10">
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-inkfaint">
                      {label}
                    </div>
                    <div className="mt-1.5 font-serif text-xl tracking-tight text-ink">
                      {value}
                    </div>
                    <div className="mt-2 text-[13px] text-inksoft">{note}</div>
                  </div>
                </a>
              </Magnetic>
            </Reveal>
          ))}
        </div>

        {/* footer */}
        <div className="mt-24 border-t border-line pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-4">
            <div className="flex items-center gap-6">
              <span className="font-serif text-xl italic text-ink">
                {PROFILE.styled}
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-inkfaint sm:inline">
                © 2026 · Dhaka, Bangladesh
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-inksoft">
              <MapPin size={12} className="text-clay" />
              Local time — <span className="tabular-nums text-mossdeep">{time}</span>
            </div>

            <Magnetic>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/60 text-ink transition-all duration-300 hover:bg-ink hover:text-paper"
                aria-label="Back to top"
                data-cursor
              >
                <ArrowUp size={17} />
              </button>
            </Magnetic>
          </div>
          <div className="pb-6 text-center font-mono text-[9.5px] uppercase tracking-[0.3em] text-inkfaint">
            Designed & built by Hamdil Hasan · React · Tailwind · too much coffee
          </div>
        </div>
      </div>
    </section>
  );
}
