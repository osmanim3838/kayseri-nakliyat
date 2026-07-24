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

export default function Manifesto() {
  return (
    <section
      id="neden-biz"
      // Arka planı ferahlatıp modern bir degrade geçiş ekledik
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-[hsl(222_44%_10%)] via-[hsl(222_47%_12%)] to-[hsl(222_44%_10%)] py-24 sm:py-32"
    >
      {/* Ferahlık katan arkadaki canlı ışık hüzmeleri */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[hsl(217_91%_60%)]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[hsl(201_96%_50%)]/10 blur-[120px]" />

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
          <h2 className="font-hero text-3xl leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Neden bizimle taşıtmalısınız?
            <br className="hidden sm:block" />
            <span className="mt-2 block bg-gradient-to-r from-white via-[hsl(201_96%_75%)] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Çünkü işimizi üç net ilkeye indirgedik.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
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
                // CAM EFEKTİ: Yarı saydam arka plan, blur ve zarif hover hareketleri
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[hsl(var(--accent))]/60 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[hsl(var(--accent))]/10 sm:p-9"
              >
                {/* Kart içi köşe parıltı efekti */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[hsl(var(--accent))]/0 blur-3xl transition-all duration-500 group-hover:bg-[hsl(var(--accent))]/30" />

                <div className="relative">
                  <span className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(201_96%_42%)] text-white shadow-lg shadow-[hsl(var(--accent))]/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="font-hero text-2xl tracking-tight text-white sm:text-[1.75rem]">
                    {c.title}
                  </h3>
                  <div className="my-5 h-px w-12 bg-white/20 transition-all duration-500 group-hover:w-24 group-hover:bg-[hsl(var(--accent))]" />
                  <p className="text-sm leading-relaxed text-white/70">{c.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}