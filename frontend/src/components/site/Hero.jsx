import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowDown } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const HERO_BG =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_kayseri-parcels/artifacts/xpr0e3s1_Gemini_Generated_Image_ln53n9ln53n9ln53.webp";

// Headline split into masked lines for the signature on-load reveal.
const LINES = ["Kayseri Şehirler Arası", "Parça Yük & Parça", "Eşya Taşıma"];

const lineVariants = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
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
        <div className="absolute inset-0 bg-[hsl(222_47%_7%)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_11%)] via-[hsl(222_47%_11%)]/30 to-[hsl(222_47%_11%)]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_9%)]/90 via-[hsl(222_47%_9%)]/45 to-transparent" />
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

        <h1 className="max-w-5xl font-hero text-[13vw] leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-8xl">
          {LINES.map((line, i) => (
            <span key={line} className="reveal-mask">
              <motion.span
                className="hero-gradient-text block"
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="show"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Tek koliden büyük parçaya kadar; eşyanızı Kayseri&apos;den şehirler arası,
          <span className="text-white"> güvenli, sigortalı ve zamanında </span>
          kapıdan kapıya taşıyoruz. Sadece kapladığı yer kadar ödersiniz.
        </motion.p>

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
            className="group flex items-center justify-center gap-3 rounded-md bg-[hsl(var(--accent))] px-7 py-4 text-base font-bold text-white transition-colors duration-200 hover:bg-[hsl(217_91%_66%)]"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Hemen Ara: {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="group flex items-center justify-center gap-3 rounded-md border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition-colors duration-200 hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5 text-[hsl(var(--wa))]" />
            WhatsApp&apos;tan Yaz
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
