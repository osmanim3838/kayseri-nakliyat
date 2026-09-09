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
    text: "Ankara çıkışlı düzenli seferler ile bekletmeden, zamanında teslim ederiz.",
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
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* BAL AKMASI (LIQUID BLOB) ANİMASYONLARI */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -80, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-amber-300/40 to-orange-500/30 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-[15%] bottom-[10%] h-[700px] w-[700px] rounded-full bg-gradient-to-tl from-yellow-300/30 to-amber-500/20 blur-[140px]"
        />
        <motion.div
          animate={{ x: [-50, 100, -50], y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[30%] top-[40%] h-[400px] w-[400px] rounded-full bg-orange-400/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Neden Biz
          </p>
          <h2 className="font-hero text-3xl leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl relative">
            Neden bizimle taşıtmalısınız?
            <br className="hidden sm:block" />
            <span className="mt-2 block bg-gradient-to-r from-slate-700 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
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
                // BEYAZ CAM EFEKTİ: Yarı saydam beyaz arka plan, blur ve zarif hover hareketleri
                className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/80 hover:shadow-2xl hover:shadow-primary/20 sm:p-9"
              >
                {/* Kart içi köşe parıltı efekti - Turuncuya uyarlandı */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                <div className="relative">
                  <span className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>

                  {/* Başlıklar koyu yapıldı ki beyazda okunsun */}
                  <h3 className="font-hero text-2xl tracking-tight text-slate-900 sm:text-[1.75rem]">
                    {c.title}
                  </h3>
                  <div className="my-5 h-px w-12 bg-slate-200 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
                  {/* Açıklama metinleri de aynı şekilde gri/lacivert tonuna çekildi */}
                  <p className="text-sm leading-relaxed text-slate-600">{c.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}