import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Hexagon, ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function IletisimSayfasi() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <Header />
      
      <main className="relative overflow-hidden pb-24 pt-32 sm:pt-48">
        {/* ARKA PLAN VE PETEK DOKUSU */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-600/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='98' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '56px 98px' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
            <span>Ana Sayfa</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-amber-500">İletişim</span>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 shadow-[0_0_20px_rgba(245,158,11,0.15)] backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">İletişim Bilgileri</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bizimle <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Bağlantıya Geçin</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
              Ankara genelinde ve 81 ilde sorularınız için 7/24 hazırız. Aşağıdaki yöntemlerden biriyle bize ulaşabilirsiniz.
            </motion.p>
          </div>

          {/* 3'LÜ KART YAPISI */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* 1. KART: TELEFON */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all hover:-translate-y-2 hover:border-amber-500/50 hover:bg-slate-900/80">
              <Hexagon className="absolute -right-12 -top-12 h-48 w-48 text-amber-500/5 transition-transform group-hover:rotate-12 group-hover:text-amber-500/10" strokeWidth={1} />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-950 to-orange-950 border border-amber-500/20 text-amber-500">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">Telefon</h3>
              <p className="mb-8 text-sm text-slate-400">Hemen arayın ve profesyonel danışmanlarımızla konuşun.</p>
              <div className="mb-8 flex flex-col gap-4">
                <a href="tel:03123782010" className="flex items-center gap-3 text-lg font-black text-white hover:text-amber-400"><span className="h-2 w-2 rounded-full bg-amber-500" /> 0312 378 20 10</a>
                <a href="tel:05055979406" className="flex items-center gap-3 text-lg font-black text-white hover:text-amber-400"><span className="h-2 w-2 rounded-full bg-amber-500" /> 0505 597 94 06</a>
              </div>
              <div className="mt-auto border-t border-white/10 pt-6">
                <span className="text-xs font-medium text-slate-500">Pazartesi - Cumartesi: 08:00 - 19:00</span>
              </div>
            </motion.div>

            {/* 2. KART: WHATSAPP */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.15 }} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-slate-900/80">
              <Hexagon className="absolute -right-12 -top-12 h-48 w-48 text-emerald-500/5 transition-transform group-hover:rotate-12 group-hover:text-emerald-500/10" strokeWidth={1} />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-950 to-green-950 border border-emerald-500/20 text-emerald-500">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">WhatsApp</h3>
              <p className="mb-8 text-sm text-slate-400">Mesaj gönderin, hızlıca cevap alalım. 24 saat kullanılabilir.</p>
              <a href="https://wa.me/905055979406" target="_blank" rel="noopener noreferrer" className="mb-8 inline-flex items-center gap-2 text-lg font-black text-emerald-400 hover:text-emerald-300">
                <MessageCircle className="h-5 w-5" /> WhatsApp'ta Yazın
              </a>
              <div className="mt-auto border-t border-white/10 pt-6">
                <span className="text-xs font-medium text-slate-500">Fotoğraf ve doküman göndererek daha detaylı destek alabilirsiniz.</span>
              </div>
            </motion.div>

            {/* 3. KART: E-POSTA */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-900/80">
              <Hexagon className="absolute -right-12 -top-12 h-48 w-48 text-blue-500/5 transition-transform group-hover:rotate-12 group-hover:text-blue-500/10" strokeWidth={1} />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-950 to-indigo-950 border border-blue-500/20 text-blue-500">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">E-posta</h3>
              <p className="mb-8 text-sm text-slate-400">Detaylı bilgi için e-posta gönderin.</p>
              <a href="mailto:info@aricioglunakliyat.com" className="mb-8 inline-flex items-center gap-3 text-base font-black text-white hover:text-blue-400">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> info@aricioglunakliyat.com
              </a>
              <div className="mt-auto border-t border-white/10 pt-6">
                <span className="text-xs font-medium text-slate-500">Pazartesi - Cumartesi arası</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFab />
    </div>
  );
}