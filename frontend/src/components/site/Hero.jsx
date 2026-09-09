import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowDown, User, Map, Calendar, Package } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const HERO_BG = "/resim.jpg";

const LINES = [
  ["Çankaya", "Şehirler", "Arası"], 
  ["Nakliyat", "&", "Ev"],
  ["Taşıma"],
];

const wordVariants = {
  hidden: { y: "112%", opacity: 0 },
  show: (i) => ({
    y: "0%",
    opacity: 1,
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

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt="Kayseri Parsiyel Nakliyat Asansörlü Taşıma"
          className="h-full w-full object-cover"
        />
        
        {/* Örnekteki gibi net ve koyu arka plan (Bulanıklık tamamen kaldırıldı) */}
        <div className="absolute inset-0 bg-slate-950/40" />
        
        {/* Yazıların okunması için soldan sağa açılan karanlık gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/10" />
        
        {/* Kurumsal hissiyatı artıran ince noktalı doku (Pattern) */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        />
      </motion.div>

      {/* Ekranı ikiye bölen modern Grid yapısı */}
      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 gap-12 px-5 pb-24 pt-32 lg:grid-cols-12 sm:px-8">
        
        {/* SOL TARAF: Yazılar ve Butonlar */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white drop-shadow-md"
          >
            <span className="h-px w-10 bg-primary" />
            ANKARA • Türkiye Geneli Sevkiyat
          </motion.p>
          
          <h1 className="hero-title-shadow drop-shadow-2xl max-w-4xl font-hero text-[10vw] leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
            {LINES.map((words, li) => {
              const offset = LINES.slice(0, li).reduce((n, w) => n + w.length, 0);
              return (
                <span key={li} className="flex flex-wrap gap-x-[0.2em]">
                  {words.map((word, wi) => (
                    <span key={word + wi} className="reveal-mask inline-flex">
                      <motion.span
                        className={`inline-block ${
                          word === "&" ? "text-primary font-serif italic font-normal" : "text-white"
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
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${PHONE_TEL}`}
              data-testid="hero-call-btn"
              className="flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              Hemen Ara: {PHONE_DISPLAY}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="flex items-center justify-center gap-3 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 flex items-center gap-2 text-sm font-medium text-white/70"
          >
            <MapPin className="h-4 w-4 text-primary" />
            1986'dan beri — Ankara merkezli profesyonel taşımacılık
          </motion.div>

          {/* İSTATİSTİKLER */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-y-6 border-t border-white/15 pt-8"
          >
            {[
              { num: "800K", suffix: "+", label: "MUTLU MÜŞTERİ" },
              { num: "81", suffix: " İL", label: "HİZMET AĞI" },
              { num: "40", suffix: "+", label: "YIL DENEYİM" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col border-r border-white/15 pr-6 mr-6 last:border-r-0 last:mr-0 last:pr-0 sm:pr-8 sm:mr-8"
              >
                <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.num}
                  <span className="text-primary">{stat.suffix}</span>
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SAĞ TARAF: Modern Teklif Formu */}
        <motion.div 
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center lg:col-span-5"
        >
          <div className="w-full rounded-[1.5rem] bg-white p-6 shadow-2xl sm:p-8 relative overflow-hidden">
            {/* Form Üst Bilgi */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Size Özel Taşıma Teklifi</h3>
                <p className="text-xs text-muted-foreground mt-1">Taşınma detaylarınızı paylaşın, fiyatınızı hemen hazırlayalım.</p>
              </div>
            </div>

            {/* Form Alanları (Görsel Arayüz) */}
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Adınız ve Soyadınız *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                  <input type="text" placeholder="Adınızı yazınız" className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-10 pr-4 text-sm text-foreground outline-none focus:border-primary focus:bg-white transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Telefon *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <input type="tel" placeholder="05XX XXX XX XX" className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-10 pr-4 text-sm text-foreground outline-none focus:border-primary focus:bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Taşınma Tarihi</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <input type="text" placeholder="GG.AA.YYYY" className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-10 pr-4 text-sm text-foreground outline-none focus:border-primary focus:bg-white transition-colors" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Çıkış Adresi *</label>
                  <div className="relative">
                    <Map className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <input type="text" placeholder="İl / İlçe" className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-10 pr-4 text-sm text-foreground outline-none focus:border-primary focus:bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Varış Adresi *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <input type="text" placeholder="İl / İlçe" className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-10 pr-4 text-sm text-foreground outline-none focus:border-primary focus:bg-white transition-colors" />
                  </div>
                </div>
              </div>

              <button type="button" className="mt-2 w-full rounded-xl bg-primary py-4 font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98]">
                Hızlı Teklif Al →
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Keşfet</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}