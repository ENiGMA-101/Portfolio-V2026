import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { GithubIcon } from "./icons";
import { PROFILE } from "../lib/data";
import { scrollToId } from "../lib/scroll";
import { EASE } from "./ui";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "playground", label: "Playground" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-baseline gap-2.5"
            data-cursor
          >
            <span className="font-serif text-xl italic leading-none text-ink transition-colors group-hover:text-clay">
              Hamdil Hasan
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-inkfaint sm:inline">
              /{PROFILE.handle}
            </span>
          </button>

          <div className="hidden items-center gap-5 xl:flex">
            {LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`navlink font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  active === id ? "active text-mossdeep" : "text-inksoft hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-ink/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-ink hover:text-paper sm:flex"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-mossdeep px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-paper transition-all duration-300 hover:bg-ink sm:flex"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              onClick={onToggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/50 bg-paper/60 text-ink transition-all duration-300 hover:border-clay hover:text-clay"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              data-cursor
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper/60 text-ink lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-x-4 top-20 z-[79] rounded-2xl border border-line bg-paper p-6 shadow-[0_30px_60px_-30px_rgba(42,39,30,0.4)] lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {LINKS.map(({ id, label }, i) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="flex items-center justify-between border-b border-line py-3.5 text-left last:border-0"
                >
                  <span className="font-serif text-2xl text-ink">{label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
                    0{i + 1}
                  </span>
                </button>
              ))}
              <div className="mt-3 flex gap-3">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/60 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-all hover:bg-ink hover:text-paper"
                >
                  GitHub
                </a>
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-mossdeep py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-paper transition-all hover:bg-ink"
                >
                  Resume
                </a>
              </div>
              <button
                onClick={onToggleTheme}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-all hover:border-clay hover:text-clay"
              >
                {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
                Switch to {theme === "dark" ? "Light" : "Dark"} mood
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
