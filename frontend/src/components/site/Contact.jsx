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
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
              <span className="h-px w-10 bg-amber-500" />
              İletişim
            </p>
            <h2 className="font-hero text-4xl leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.75rem]">
              Eşyanız yola <br className="hidden sm:block" />çıkmaya hazır.
              <span className="mt-2 block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Tek yapmanız gereken aramak.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-[1.7] text-slate-600 sm:text-lg">
              Fiyat almak, sevkiyat planlamak veya sadece bilgi almak için hemen bize ulaşın.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_TEL}`} className="group flex items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-amber-500/25 transition-colors duration-200 hover:bg-amber-600">
                <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-500/25 transition-transform duration-200 hover:scale-[1.02]">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <div className="mt-12 space-y-3">
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                  <MapPin className="h-5 w-5 text-amber-500" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Merkez Ofis</span>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Çalışma Saatleri</span>
                  <p className="mt-1 text-sm font-medium text-slate-700">Pazartesi – Cumartesi: 08:00 – 19:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10 lg:ml-8 lg:mt-0">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
              <iframe title="konum" src={MAPS_EMBED} className="h-full min-h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="absolute bottom-6 left-6 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-40"></span>
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-xl hover:scale-105 hover:bg-amber-500 transition-all">
                  <Navigation className="h-5 w-5" />
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* ALT GÜVENLİK AFİŞİ */}
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-16 text-center shadow-2xl sm:mt-32 sm:px-16 sm:py-24">
          <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: "40px 70px" }} />
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-slate-950 via-orange-950/60 to-amber-900/30" />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            <span className="mb-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
              <ShieldCheck className="h-4 w-4" /> Arıcıoğlu Nakliyat Güvencesi
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Eşyalarınız gideceği yere kadar sigortalı, <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">gününde ve saatinde teslim!</span>
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}