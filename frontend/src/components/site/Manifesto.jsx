import { motion } from "framer-motion";
import { ShieldCheck, Zap, PackageCheck } from "lucide-react";

const CHAPTERS = [
  {
    no: "01",
    title: "Güven",
    text: "Her sevkiyat sigorta güvencesiyle yola çıkar. Eşyanız bizim sorumluluğumuzdadır.",
    icon: ShieldCheck,
  },
  {
    no: "02",
    title: "Hız",
    text: "Kayseri çıkışlı düzenli seferler ile bekletmeden, zamanında teslim ederiz.",
    icon: Zap,
  },
  {
    no: "03",
    title: "Özen",
    text: "Tek koli de olsa büyük parça da olsa; profesyonel paketleme ile taşırız.",
    icon: PackageCheck,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Numbered manifesto chapters — modern glass cards with accent icons + hover lift.
export default function Manifesto() {
  return (
    <section
      id="neden-biz"
      className="relative overflow-hidden border-y border-white/10 bg-[hsl(222_44%_9%)] py-24 sm:py-32"
    >
      {/* Soft accent glow to add depth behind the cards */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[hsl(217_91%_60%)]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--accent))]">
            <span className="h-px w-10 bg-[hsl(var(--accent))]" />
            Neden Biz
          </p>
          <h2 className="font-display text-3xl font-black leading-[1.05] tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Neden bizimle taşıtmalısınız?
            <br className="hidden sm:block" />
            <span className="text-white/55"> Çünkü işimizi üç net ilkeye indirgedik.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {CHAPTERS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.no}
                data-testid={`manifesto-${c.no}`}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[hsl(var(--accent))]/40"
              >
                {/* top accent line that expands on hover */}
                <span className="absolute inset-x-0 top-0 h-[3px] w-0 bg-[hsl(var(--accent))] transition-all duration-500 group-hover:w-full" />

                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[hsl(var(--accent))]/12 text-[hsl(var(--accent))] transition-colors duration-300 group-hover:bg-[hsl(var(--accent))] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-hero text-5xl leading-none text-white/10 transition-colors duration-300 group-hover:text-[hsl(var(--accent))]/40">
                    {c.no}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{c.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
