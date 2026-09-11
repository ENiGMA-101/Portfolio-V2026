import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  ExternalLink,
  GitFork,
  Star,
  Terminal,
} from "lucide-react";
import { LANGUAGE_COLORS, PROFILE } from "../lib/data";
import { formatUpdated, type Repo, useGithub } from "../lib/useGithub";
import { GithubIcon } from "./icons";
import { EASE, Reveal, SectionTag, SectionTitle } from "./ui";

type PreviewKind = "fifa" | "bot" | "chat" | "portfolio" | "code";

function previewKind(name: string): PreviewKind {
  const slug = name.toLowerCase();
  if (slug.includes("reminder-extension")) return "fifa";
  if (slug.includes("telegram")) return "bot";
  if (slug.includes("chatpal")) return "chat";
  if (slug.includes("portfolio") || slug.includes("dev")) return "portfolio";
  return "code";
}

function WindowDots() {
  return (
    <span className="flex gap-1.5">
      <i className="h-2 w-2 rounded-full bg-[#f06a62]" />
      <i className="h-2 w-2 rounded-full bg-[#efc65a]" />
      <i className="h-2 w-2 rounded-full bg-[#63c073]" />
    </span>
  );
}

function ProjectPreview({ repo }: { repo: Repo }) {
  const kind = previewKind(repo.name);

  if (kind === "fifa") {
    return (
      <div className="work-preview work-preview-fifa flex items-center justify-center px-6 py-8 sm:px-10">
        <div className="work-preview-art mini-window w-full max-w-sm overflow-hidden rounded-xl p-4 text-[#eaf7ee] sm:p-5">
          <div className="flex items-center justify-between">
            <WindowDots />
            <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#c9dfd1]">
              FIFA 2026
            </span>
          </div>
          <div className="mt-6 flex items-center justify-between text-center">
            <div>
              <div className="text-2xl">ARG</div>
              <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-[#bad4c2]">
                Argentina
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl italic">2 : 1</div>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#eb795d] px-2 py-1 font-mono text-[8px] tracking-[0.15em] text-white">
                <i className="h-1 w-1 rounded-full bg-white" /> LIVE 72'
              </span>
            </div>
            <div>
              <div className="text-2xl">JPN</div>
              <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-[#bad4c2]">
                Japan
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-3 font-mono text-[8px] uppercase tracking-[0.17em] text-[#c9dfd1]">
            <span>Match centre</span>
            <span>Notifications on</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "bot") {
    return (
      <div className="work-preview work-preview-bot flex items-center justify-center px-6 py-8 sm:px-10">
        <div className="work-preview-art mini-window w-full max-w-sm overflow-hidden rounded-xl text-[#ecf7fb]">
          <div className="flex items-center gap-3 border-b border-white/15 px-4 py-3">
            <WindowDots />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#c7e2ec]">
              WC26 Match Bot
            </span>
          </div>
          <div className="space-y-3 px-4 py-5 text-[11px]">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/12 px-3 py-2.5 text-[#daf0f6]">
              Next match starts in 15 minutes.
            </div>
            <div className="ml-auto max-w-[76%] rounded-2xl rounded-tr-sm bg-[#4e9cba] px-3 py-2.5 text-white">
              Remind me when it begins.
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/12 px-3 py-2.5 text-[#daf0f6]">
              Done. I will send kickoff, half-time and full-time updates.
            </div>
          </div>
          <div className="mx-4 mb-4 rounded-lg border border-white/15 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-[#a9d2df]">
            /fixtures · /subscribe · /scores
          </div>
        </div>
      </div>
    );
  }

  if (kind === "chat") {
    return (
      <div className="work-preview work-preview-chat flex items-center justify-center px-6 py-8 sm:px-10">
        <div className="work-preview-art mini-window w-full max-w-sm overflow-hidden rounded-xl text-[#f0eafb]">
          <div className="flex items-center justify-between border-b border-white/15 px-4 py-3">
            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#e2d9f8]">
              <Bot size={13} /> chatPal AI
            </span>
            <WindowDots />
          </div>
          <div className="px-5 py-7">
            <div className="font-serif text-2xl italic text-white">How can I help?</div>
            <div className="mt-5 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-[11px] leading-relaxed text-[#ded6f2]">
              Give me a concise plan for a reliable reminder system.
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-[#c8bce9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a995e8]" />
              Thinking through the details...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "portfolio") {
    return (
      <div className="work-preview work-preview-portfolio flex items-center justify-center px-6 py-8 sm:px-10">
        <div className="work-preview-art mini-window w-full max-w-sm overflow-hidden rounded-xl p-5 text-[#eff2e6]">
          <div className="flex items-center justify-between">
            <WindowDots />
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#d7dfc8]">
              index.tsx
            </span>
          </div>
          <div className="mt-7 grid grid-cols-[18px_1fr] gap-x-3 font-mono text-[10px] leading-6">
            <span className="text-[#b4c097]">01</span>
            <span><b className="text-[#e7bd70]">const</b> developer = {'{'}</span>
            <span className="text-[#b4c097]">02</span>
            <span className="pl-4"><b className="text-[#abc6e8]">name</b>: <i className="text-[#e99870]">'Hamdil'</i>,</span>
            <span className="text-[#b4c097]">03</span>
            <span className="pl-4"><b className="text-[#abc6e8]">mode</b>: <i className="text-[#e99870]">'building'</i>,</span>
            <span className="text-[#b4c097]">04</span>
            <span className="pl-4"><b className="text-[#abc6e8]">status</b>: <i className="text-[#e99870]">'available'</i></span>
            <span className="text-[#b4c097]">05</span>
            <span>{'}'};</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="work-preview work-preview-code flex items-center justify-center px-6 py-8 sm:px-10">
      <div className="work-preview-art mini-window w-full max-w-sm overflow-hidden rounded-xl p-5 text-[#d9e2df]">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#9cb1a9]">
          <Terminal size={13} /> ~/enigma-101/{repo.name}
        </div>
        <div className="mt-7 space-y-3 font-mono text-[11px] leading-relaxed">
          <p><span className="text-[#c6d98d]">$</span> git status</p>
          <p className="text-[#99b6a4]">On branch main<br />nothing to commit, working tree clean</p>
          <p><span className="text-[#c6d98d]">$</span> npm run build</p>
          <p className="text-[#7cd89a]">✓ compiled successfully</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { repos, profile, live, loading } = useGithub();

  return (
    <section id="work" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-clay/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag index="02" label="Selected Work" />
            <SectionTitle className="mt-10">
              Work worth a <em className="text-clay">closer look</em>.
            </SectionTitle>
          </div>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 rounded-full border border-line bg-paper/70 px-4 py-2.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  loading
                    ? "pulse-dot bg-gold"
                    : live
                      ? "pulse-dot bg-moss"
                      : "bg-clay"
                }`}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-inksoft">
                {loading
                  ? "Contacting GitHub..."
                  : live
                    ? `Live from GitHub · ${profile.publicRepos} repos`
                    : "Offline snapshot · GitHub unreachable"}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-inksoft sm:text-lg">
            Tools for match-day fans, small experiments in AI, and a growing
            collection of software made to be useful, clear and fun to explore.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${repo.title} on GitHub`}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }}
              className="work-entry group grid overflow-hidden border border-line bg-paper shadow-[0_25px_50px_-38px_rgba(42,39,30,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-moss hover:shadow-[0_34px_65px_-34px_rgba(42,39,30,0.52)] lg:grid-cols-2"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <ProjectPreview repo={repo} />
              </div>

              <div className={`flex min-h-[250px] flex-col justify-between p-7 sm:p-10 ${i % 2 ? "lg:order-1" : ""}`}>
                <div>
                  <div className="flex items-center justify-between gap-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-clay">
                      Project {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-inkfaint">
                      <i
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: LANGUAGE_COLORS[repo.language] ?? "#a98436" }}
                      />
                      {repo.language}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-3xl leading-none tracking-tight text-ink transition-colors group-hover:text-mossdeep sm:text-4xl">
                      {repo.title}
                    </h3>
                    {repo.homepage && (
                      <span className="flex items-center gap-1.5 rounded-full border border-moss/50 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-mossdeep">
                        <ExternalLink size={10} />
                        Live site
                      </span>
                    )}
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-inksoft sm:text-[15px]">
                    {repo.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {repo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.15em] text-inkfaint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                  <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-inkfaint">
                    <span className="flex items-center gap-1.5"><Star size={12} className="text-gold" /> {repo.stars}</span>
                    <span className="flex items-center gap-1.5"><GitFork size={12} className="text-gold" /> {repo.forks}</span>
                    <span>Updated {formatUpdated(repo.updated)}</span>
                  </div>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors group-hover:text-clay">
                    View source
                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={15} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <a
            href={`${PROFILE.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-full border border-ink/60 px-8 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-ink hover:text-paper"
          >
            <GithubIcon size={15} />
            Browse all {profile.publicRepos} repositories
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}