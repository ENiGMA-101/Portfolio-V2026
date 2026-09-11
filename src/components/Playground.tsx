import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Castle, RotateCcw } from "lucide-react";
import { Reveal, SectionTag, SectionTitle } from "./ui";

const N = 6;
const TOTAL = N * N;
const MOVES = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2],
];

const inBoard = (r: number, c: number) => r >= 0 && r < N && c >= 0 && c < N;

export default function Playground() {
  const [knight, setKnight] = useState<[number, number]>([2, 2]);
  const [visited, setVisited] = useState<Map<string, number>>(new Map([["2,2", 1]]));

  const legal = useMemo(() => {
    const [r, c] = knight;
    return MOVES
      .map(([dr, dc]) => [r + dr, c + dc] as [number, number])
      .filter(([rr, cc]) => inBoard(rr, cc) && !visited.has(`${rr},${cc}`));
  }, [knight, visited]);

  const move = useCallback(
    (r: number, c: number) => {
      if (!legal.some(([rr, cc]) => rr === r && cc === c)) return;
      setKnight([r, c]);
      setVisited((v) => {
        const next = new Map(v);
        next.set(`${r},${c}`, v.size + 1);
        return next;
      });
    },
    [legal]
  );

  const reset = () => {
    setKnight([2, 2]);
    setVisited(new Map([["2,2", 1]]));
  };

  const moveCount = visited.size;
  const won = moveCount === TOTAL;
  const stuck = legal.length === 0 && !won;

  return (
    <section id="playground" className="relative border-y border-line bg-mossdeep text-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="[&_h2]:!text-paper">
          <SectionTag index="05" label="The Playground" dark />
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <SectionTitle className="!text-paper">
              I play <em className="text-gold">chess</em>.<br />
              Leave a move behind.
            </SectionTitle>
            <Reveal delay={0.15}>
              <p className="max-w-sm text-sm leading-relaxed text-paper/70">
                A knight's tour, tiny edition. Hop the knight — L-shaped moves only —
                and try to stamp every square without repeating one. It's harder than
                it looks.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1fr_auto]">
          <div className="order-2 lg:order-1">
            <div className="mx-auto w-fit">
              <div
                className="grid overflow-hidden rounded-lg border border-paper/25 shadow-[0_35px_70px_-30px_rgba(0,0,0,0.6)]"
                style={{ gridTemplateColumns: `repeat(${N}, minmax(0,1fr))` }}
              >
                {Array.from({ length: TOTAL }).map((_, idx) => {
                  const r = Math.floor(idx / N);
                  const c = idx % N;
                  const key = `${r},${c}`;
                  const step = visited.get(key);
                  const isKnight = knight[0] === r && knight[1] === c;
                  const isLegal = legal.some(([rr, cc]) => rr === r && cc === c);
                  const dark = (r + c) % 2 === 1;

                  return (
                    <button
                      key={key}
                      onClick={() => move(r, c)}
                      disabled={!isLegal}
                      data-cursor={isLegal ? true : undefined}
                      className={`relative flex h-11 w-11 items-center justify-center transition-all duration-300 sm:h-14 sm:w-14 ${
                        dark ? "bg-[#4a5340]" : "bg-[#e9e2cd]"
                      } ${isLegal ? "hover:brightness-110" : ""} ${
                        step ? "bg-opacity-90" : ""
                      }`}
                    >
                      {isLegal && (
                        <span className="pulse-dot absolute h-2.5 w-2.5 rounded-full bg-gold" />
                      )}
                      {step && !isKnight && (
                        <span
                          className={`font-mono text-[10px] sm:text-[11px] ${
                            dark ? "text-paper/60" : "text-ink/50"
                          }`}
                        >
                          {step}
                        </span>
                      )}
                      {isKnight && (
                        <motion.span
                          layoutId="knight"
                          transition={{ type: "spring", stiffness: 420, damping: 30 }}
                          className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-lg italic text-paper shadow-lg sm:h-10 sm:w-10 sm:text-xl"
                        >
                          N
                          <span className="absolute inset-0 rounded-full border border-gold/60" />
                        </motion.span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                <span>a1 — f6</span>
                <span>
                  {moveCount}/{TOTAL} squares stamped
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.1}>
              <div className="border border-paper/25 bg-paper/5 p-8 backdrop-blur-sm">
                <Castle size={22} className="text-gold" />
                <div className="mt-4 font-serif text-5xl tracking-tight text-paper">
                  {won ? "Tour complete." : stuck ? "Cornered." : `${TOTAL - moveCount} to go.`}
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
                  {won
                    ? "A perfect knight's tour — grandmaster stuff. The board belongs to you now."
                    : stuck
                      ? `Stuck after ${moveCount} moves. Even Kasparov had off days — run it back.`
                      : "Gold dots mark your legal moves. Think two hops ahead, like Warnsdorff taught us."}
                </p>

                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-paper/15">
                  <motion.div
                    className="h-full bg-gold"
                    animate={{ width: `${(moveCount / TOTAL) * 100}%` }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <button
                  onClick={reset}
                  className="mt-7 flex items-center gap-2.5 rounded-full border border-paper/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-all duration-300 hover:bg-paper hover:text-mossdeep"
                  data-cursor
                >
                  <RotateCcw size={13} />
                  Reset board
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
