import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, MapPin, User, Map, Calendar, Package, Hexagon, Mail, ChevronDown, ShieldCheck, Truck, Home } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const HERO_BG = "/dikmen-asansorlu-nakliyat-hero.jpg";

const LINES = [
  ["Arıcıoğlu", "Şehirler", "Arası"], 
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
      
      {/* ARKA PLAN */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
       <img
  src={HERO_BG}
  alt="Arıcıoğlu Nakliyat Asansörlü Taşıma"
  className="h-full w-full object-cover"
  /* style kodu ile resmin tam olarak %85 sağ tarafına (asansörün olduğu yere) odaklanmasını zorunlu kıldık */
  style={{ objectPosition: "85% center" }} 
/>
        <div className="absolute inset-0 bg-slate-950/45" />
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay backdrop-blur-[2px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='98' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '56px 98px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
      </motion.div>

      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 gap-12 px-5 pb-24 pt-32 lg:grid-cols-12 sm:px-8">
        
        {/* SOL TARAF */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 drop-shadow-md"
          >
            <span className="h-px w-10 bg-amber-400" />
            ANKARA • Türkiye Geneli Sevkiyat
          </motion.p>
          
          <h1 className="hero-title-shadow drop-shadow-2xl max-w-4xl font-hero text-[10vw] leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.5rem]">
            {LINES.map((words, li) => {
              const offset = LINES.slice(0, li).reduce((n, w) => n + w.length, 0);
              return (
                <span key={li} className="flex flex-wrap gap-x-[0.2em] pb-1">
                  {words.map((word, wi) => {
                    const isHoney = word === "Arıcıoğlu" || word === "Nakliyat" || word === "&";
                    return (
                      <span key={word + wi} className="reveal-mask inline-flex">
                        <motion.span
                          className={`inline-block ${
                            isHoney
                              ? "bg-gradient-to-b from-amber-200 via-orange-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.4)]"
                              : "text-white"
                          } ${word === "&" ? "font-serif italic font-normal" : ""}`}
                          custom={offset + wi}
                          variants={wordVariants}
                          initial="hidden"
                          animate="show"
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h1>

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-300 drop-shadow-md"
          >
            Yarım asra yaklaşan Dikmen merkezli deneyimimizle nakliyat süreçlerinizi baştan sona profesyonellikle planlıyoruz. Gelişmiş asansör sistemlerimiz, uzman ambalajlama ekibimiz ve sigortalı altyapımızla eşyalarınızı değil, güven taşıyoruz.
          </motion.p>

          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <a
              href="tel:05055979406"
              data-testid="hero-call-btn"
              className="group relative overflow-hidden flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform group-hover:translate-y-0" />
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Phone className="h-5 w-5" />
              </div>
              <div className="relative z-10 flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-white/90 mb-0.5">Hemen Ara</span>
                <span className="text-base font-black">0505 597 94 06</span>
                <span className="text-[11px] font-bold text-white/90">0312 378 20 10</span>
              </div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="flex items-center justify-center gap-3 rounded-full bg-white/10 border border-white/25 px-8 py-5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5 text-emerald-400" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-2 text-sm font-medium text-white/90"
          >
            <MapPin className="h-4 w-4 text-amber-500" />
            1986'dan beri — Dikmen merkezli profesyonel taşımacılık
          </motion.div>

          {/* İSTATİSTİKLER */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-wrap gap-y-6 border-t border-white/20 pt-8"
          >
            {[
              { num: "800K", suffix: "+", label: "MUTLU MÜŞTERİ" },
              { num: "81", suffix: " İL", label: "HİZMET AĞI" },
              { num: "40", suffix: "+", label: "YIL DENEYİM" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col border-r border-white/20 pr-6 mr-6 last:border-r-0 last:mr-0 last:pr-0 sm:pr-8 sm:mr-8 relative"
              >
                <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.num}
                  <span className="text-amber-500">{stat.suffix}</span>
                </span>
                <span className="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                  <Hexagon className="h-3 w-3 text-amber-500" />
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SAĞ TARAF: GÜNCELLENMİŞ DETAYLI TEKLİF FORMU */}
        <motion.div 
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-amber-500/15 blur-[60px] -z-10" />

          <div className="w-full rounded-[2rem] border border-white/50 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8 relative overflow-hidden">
            
            <div className="mb-8 flex items-center gap-4 relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 shadow-lg shadow-amber-500/20">
                <Truck className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Size Özel Taşıma Teklifi</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Taşınma detaylarınızı paylaşın, fiyatınızı hemen hazırlayalım.</p>
              </div>
            </div>

            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              {/* Satır 1: Ad Soyad */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Adınız ve Soyadınız *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Adınızı ve soyadınızı yazınız" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all" />
                </div>
              </div>

              {/* Satır 2: Telefon ve E-Posta */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Telefon *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input type="tel" placeholder="05XX XXX XX XX" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">E-Posta *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input type="email" placeholder="ornek@eposta.com" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all" />
                  </div>
                </div>
              </div>

              {/* Satır 3: Çıkış ve Varış Adresi */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Çıkış Adresi *</label>
                  <div className="relative">
                    <Map className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="İl / İlçe" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Varış Adresi *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="İl / İlçe" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all" />
                  </div>
                </div>
              </div>

              {/* Satır 4: Taşınma Tarihi ve Taşınacak Yer (Açılır Menü) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Taşınma Tarihi</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="GG.AA.YYYY" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Taşınacak Yer</label>
                  <div className="relative">
                    <Home className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-10 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all cursor-pointer">
                      <option value="1+1">1+1 Daire</option>
                      <option value="2+1" selected>2+1 Daire</option>
                      <option value="3+1">3+1 Daire</option>
                      <option value="4+1">4+1 veya daha büyük</option>
                      <option value="ofis">Ofis / İş Yeri</option>
                      <option value="parca">Parça Eşya</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Buton */}
              <button type="button" onClick={() => alert("Teklif talebiniz başarıyla alındı! Müşteri temsilcimiz en kısa sürede sizinle iletişime geçecektir.")} className="mt-4 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-4 font-bold text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all active:translate-y-0">
                Hızlı Teklif Al →
              </button>

              {/* Alt Bilgi / Güven Rozetleri */}
              <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Ücretsiz keşif · Sabit fiyat garantisi · Sürpriz ek ücret yok</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}