import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation, ShieldCheck } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  ADDRESS,
  MAPS_EMBED,
  MAPS_DIRECTIONS,
} from "@/lib/site";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <section id="iletisim" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* ÜST KISIM: İLETİŞİM BİLGİLERİ VE HARİTA */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--accent))]">
              <span className="h-px w-10 bg-[hsl(var(--accent))]" />
              İletişim
            </p>
            <h2 className="font-hero text-4xl leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.75rem]">
              Eşyanız yola <br className="hidden sm:block" />çıkmaya hazır.
              <span className="mt-2 block bg-gradient-to-r from-slate-600 via-[hsl(var(--accent))] to-[hsl(201_96%_40%)] bg-clip-text text-transparent">
                Tek yapmanız gereken aramak.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-[1.7] text-slate-600 sm:text-lg">
              Fiyat almak, sevkiyat planlamak veya sadece bilgi almak için hemen bize ulaşın.
              Arıcıoğlu&apos;den şehirler arası nakliyat ve ev taşıma hizmetinde,{" "}
              <span className="font-semibold text-slate-900">dakikalar içinde net yanıt</span> alırsınız.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                data-testid="contact-call-btn"
                className="group flex items-center justify-center gap-3 rounded-full bg-[hsl(var(--accent))] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[hsl(217_91%_60%)]/25 transition-colors duration-200 hover:bg-[hsl(217_91%_66%)]"
              >
                <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[hsl(var(--wa))] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[hsl(var(--wa))]/25 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span className="relative">WhatsApp</span>
              </a>
            </div>

            <div className="mt-12 space-y-3">
              <div 
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md"
                data-testid="contact-address"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <MapPin className="h-5 w-5 text-[hsl(var(--accent))]" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Merkez Ofis</span>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <Clock className="h-5 w-5 text-[hsl(var(--accent))]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Çalışma Saatleri</span>
                  <p className="mt-1 text-sm font-medium text-slate-700">Pazartesi – Cumartesi: 08:00 – 19:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative mt-10 lg:ml-8 lg:mt-0"
          >
            <div className="absolute -inset-4 z-0 rounded-[2.5rem] bg-gradient-to-r from-[hsl(var(--accent))]/30 to-[hsl(201_96%_40%)]/30 blur-2xl" />
            
            <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
              <iframe
                title="kayseriparsiyel konum"
                data-testid="contact-map"
                src={MAPS_EMBED}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              <div className="absolute bottom-6 left-6 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--accent))] opacity-40"></span>
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-directions-btn"
                  className="relative flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[hsl(var(--accent))]"
                >
                  <Navigation className="h-5 w-5" />
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* YENİ EKLENEN KISIM: TEKNOLOJİK GÜVENLİK AFİŞİ (TRUST BANNER) */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-[hsl(222_44%_9%)] px-6 py-16 text-center shadow-2xl sm:mt-32 sm:px-16 sm:py-24"
        >
          {/* Arka plan teknolojik ızgara deseni */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Köşelerdeki holografik ışık parlamaları */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[hsl(var(--accent))]/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[80px]" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            {/* Turuncu Güven Rozeti */}
            <span className="mb-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/25">
              <ShieldCheck className="h-4 w-4" />
              Arıcıoğlu Nakliyat  Güvencesi
            </span>
            
            {/* Ana Başlık */}
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-[1.1]">
              Eşyalarınız gideceği yere kadar sigortalı, <span className="text-[hsl(var(--accent))]">gününde ve saatinde teslim!</span>
            </h3>
            
            {/* Alt Metin */}
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Kafanızdaki tüm soru işaretlerini ve endişeleri bir kenara bırakın. Arıcıoğlu Nakliyat, her taşımacılık sürecini yasal sigortalar ve resmi taahhütlerle garanti altına alır.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}