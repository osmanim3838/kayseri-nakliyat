import { motion } from "framer-motion";

const CHAPTERS = [
  {
    no: "01",
    title: "Güven",
    text: "Her sevkiyat sigorta güvencesiyle yola çıkar. Eşyanız bizim sorumluluğumuzdadır.",
  },
  {
    no: "02",
    title: "Hız",
    text: "Kayseri çıkışlı düzenli seferler ile bekletmeden, zamanında teslim ederiz.",
  },
  {
    no: "03",
    title: "Özen",
    text: "Tek koli de olsa büyük parça da olsa; profesyonel paketleme ile taşırız.",
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

// Numbered manifesto chapters with oversized index numerals + negative space.
export default function Manifesto() {
  return (
    <section
      id="neden-biz"
      className="border-y border-white/10 bg-[hsl(222_44%_9%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 max-w-3xl font-display text-3xl font-black leading-tight tracking-tighter text-white sm:text-4xl lg:text-5xl"
        >
          Neden bizimle taşıtmalısınız?
          <span className="text-white/40">
            {" "}Çünkü işimizi üç ilkeye indirgedik.
          </span>
        </motion.h2>

        <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
          {CHAPTERS.map((c, i) => (
            <motion.div
              key={c.no}
              data-testid={`manifesto-${c.no}`}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative bg-[hsl(222_44%_11%)] p-8 transition-colors duration-300 hover:bg-[hsl(222_44%_13%)] sm:p-10"
            >
              <span className="font-display text-6xl font-black text-white/10 transition-colors duration-300 group-hover:text-[hsl(var(--accent))]/30 sm:text-7xl">
                {c.no}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
