import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowDown } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const HERO_BG =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_kayseri-parcels/artifacts/xpr0e3s1_Gemini_Generated_Image_ln53n9ln53n9ln53.webp";

const LINES = [
  ["Kayseri", "Şehirler", "Arası"],
  ["parsel", "Yük", "&", "Parsel"],
  ["Eşya", "Taşıma"],
];

const wordVariants = {
  hidden: { y: "112%", opacity: 0, filter: "blur(6px)" },
  show: (i) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.19, 1, 0.22, 1] },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.9 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt="Kayseri Parsiyel Nakliyat tırı Erciyes önünde şehirler arası yolda"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(222_47%_7%)]/68" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_9%)] via-[hsl(222_47%_10%)]/45 to-[hsl(222_47%_10%)]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_8%)] via-[hsl(222_47%_9%)]/60 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8"
      >
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white drop-shadow-md"
        >
          <span className="h-px w-10 bg-[hsl(var(--accent))]" />
          Kayseri • Türkiye Geneli Sevkiyat
        </motion.p>
        {/* BAŞLIK KÜÇÜLTÜLDÜ: text-[13vw] -> text-[10vw], lg:text-8xl -> lg:text-7xl yapıldı */}
        <h1 className="hero-title-shadow max-w-5xl font-hero text-[10vw] leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {LINES.map((words, li) => {
            const offset = LINES.slice(0, li).reduce((n, w) => n + w.length, 0);
            return (
              <span key={li} className="flex flex-wrap gap-x-[0.2em]">
                {words.map((word, wi) => (
                  <span key={word + wi} className="reveal-mask inline-flex">
                    <motion.span
                      className={`inline-block ${
                        word === "&" ? "text-[hsl(var(--accent))] font-serif italic font-normal" : "hero-gradient-text"
                      }`}
                      custom={offset + wi}
                      variants={wordVariants}
                      initial="hidden"
                      animate="show"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            );
          })}
        </h1>

        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          {/* TEKNOLOJİK ARAMA BUTONU */}
          <a
            href={`tel:${PHONE_TEL}`}
            data-testid="hero-call-btn"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-900/60 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] ring-1 ring-[hsl(var(--accent))]/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:ring-[hsl(var(--accent))]"
          >
            {/* İç aydınlatma (Glow) efekti */}
            <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent))]/0 via-[hsl(var(--accent))]/15 to-[hsl(var(--accent))]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--accent))] shadow-inner">
              <Phone className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="relative tracking-wide">Hemen Ara: {PHONE_DISPLAY}</span>
          </a>

          {/* TEKNOLOJİK WHATSAPP BUTONU */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-emerald-950/40 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-emerald-900/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:ring-emerald-400"
          >
            {/* İç aydınlatma (Glow) efekti */}
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/15 to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 shadow-inner">
              <MessageCircle className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="relative tracking-wide">WhatsApp</span>
          </a>
        </motion.div>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 flex items-center gap-2 text-sm text-white/50"
        >
          <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
          Talas / Kayseri merkezli — Türkiye&apos;nin her noktasına
        </motion.div>

        {/* YENİ EKLENEN İSTATİSTİKLER BÖLÜMÜ */}
        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap gap-y-6 border-t border-white/10 pt-8"
        >
          {[
            { num: "800K", suffix: "+", label: "MUTLU MÜŞTERİ" },
            { num: "81", suffix: " İL", label: "HİZMET AĞI" },
            { num: "40", suffix: "+", label: "YIL DENEYİM" },
            { num: "65", suffix: "+", label: "ARAÇ FİLOSU" },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col border-r border-white/10 pr-6 mr-6 last:border-r-0 last:mr-0 last:pr-0 sm:pr-10 sm:mr-10"
            >
              <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.num}
                <span className="text-[hsl(var(--accent))]">{stat.suffix}</span>
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Keşfet</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}