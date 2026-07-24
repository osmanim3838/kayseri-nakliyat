import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowDown } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const HERO_BG =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_kayseri-parcels/artifacts/xpr0e3s1_Gemini_Generated_Image_ln53n9ln53n9ln53.webp";

// Headline split into lines → words for a modern, staggered mask reveal.
const LINES = [
  ["Kayseri", "Şehirler", "Arası"],
  ["Parça", "Yük", "&", "Parça"],
  ["Eşya", "Taşıma"],
];

// Premium per-word reveal: each word slides up out of its own clip-mask with a
// subtle blur → sharp transition, staggered for a kinetic "type-set" feel.
const wordVariants = {
  hidden: { y: "112%", opacity: 0, filter: "blur(6px)" },
  show: (i) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.19, 1, 0.22, 1] },
  }),
};

const WORD_COUNT = 8; // total words across all lines (for underline timing)

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
  // Subtle parallax: background drifts + slight zoom-out as user scrolls.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Parallax background image, heavily darkened for legibility */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt="Kayseri Parsiyel Nakliyat tırı Erciyes önünde şehirler arası yolda"
          className="h-full w-full object-cover"
        />
        {/* Layered darkening tuned for the bright daytime photo so white text stays readable */}
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
          className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--accent))]"
        >
          <span className="h-px w-10 bg-[hsl(var(--accent))]" />
          Kayseri • Türkiye Geneli Sevkiyat
        </motion.p>

        <h1 className="hero-title-shadow max-w-5xl font-hero text-[13vw] leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl">
          {LINES.map((words, li) => {
            // running index across all words for a continuous stagger
            const offset = LINES.slice(0, li).reduce((n, w) => n + w.length, 0);
            return (
              <span key={li} className="flex flex-wrap gap-x-[0.2em]">
                {words.map((word, wi) => (
                  // Each word gets its own clip-mask so it slides up cleanly
                  <span key={word + wi} className="reveal-mask inline-flex">
                    <motion.span
                      className={`inline-block ${word === "&" ? "text-[hsl(var(--accent))]" : ""}`}
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

        {/* Accent underline that draws itself in after the words finish revealing */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.15 + WORD_COUNT * 0.08 + 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 block h-[5px] w-28 origin-left rounded-full bg-[hsl(var(--accent))]"
        />

        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={`tel:${PHONE_TEL}`}
            data-testid="hero-call-btn"
            className="group flex items-center justify-center gap-3 rounded-full bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[hsl(217_91%_60%)]/25 transition-colors duration-200 hover:bg-[hsl(217_91%_66%)]"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Hemen Ara: {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[hsl(var(--wa))] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[hsl(var(--wa))]/25 transition-transform duration-200 hover:scale-[1.02]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-4 w-4" />
            </span>
            <span className="relative">WhatsApp&apos;tan Yaz</span>
          </a>
        </motion.div>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex items-center gap-2 text-sm text-white/50"
        >
          <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
          Talas / Kayseri merkezli — Türkiye&apos;nin her noktasına
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
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
