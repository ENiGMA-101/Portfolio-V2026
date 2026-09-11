import { MARQUEE_ITEMS } from "../lib/data";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="relative overflow-hidden border-y border-line bg-mossdeep py-5">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-7 font-mono text-[12px] uppercase tracking-[0.32em] text-paper/90">
              {item}
            </span>
            <span className="text-[10px] text-gold">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
