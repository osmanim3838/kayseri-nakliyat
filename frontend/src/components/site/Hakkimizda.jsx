import { motion } from "framer-motion";
import { ShieldCheck, FileText, ArrowUpToLine, Clock, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* SOL TARAF: Metinler ve Özellikler */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              Hakkımızda & Kurumsal Yapımız
            </p>
            
            <h2 className="font-hero text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Dikmen'nın Köklü ve Güvenilir{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Nakliyat Markası
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Arıcıoğlu Nakliyat güvencesiyle tek çatı altında buluşan firmamız, 35 yıllık köklü geçmişiyle Dikmen merkezli olarak faaliyet göstermektedir. Ankara içi nakliyat, Dikmen evden eve taşımacılık ve Türkiye'nin 81 iline yönelik şehirler arası nakliye süreçlerinizde profesyonel çözümler üretiyoruz.
              </p>
              <p>
                Ulaştırma ve Altyapı Bakanlığı tarafından onaylı K1 ve K3 Yetki Belgelerimiz ile kayıt dışı taşımacılıktan tamamen uzak duruyoruz. Tüm taşıma işlemlerimizi yazılı sözleşme ve Nakliyat Emtia Sigortası garantisi altında gerçekleştiriyoruz. Dikmen nakliye firmaları arasında, modern asansörlü taşımacılık sistemlerimiz ve güçlü ekipman altyapımızla fark yaratmaktayız.
              </p>
            </div>

            {/* Alt Kısım: 4'lü Küçük Bilgi Kutucukları */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-bold text-slate-900">35 Yıllık Tecrübe</div>
                  <div className="mt-1 text-xs text-slate-500">Köklü ve güvenilir geçmiş</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-bold text-slate-900">K1 & K3 Belgeli</div>
                  <div className="mt-1 text-xs text-slate-500">Bakanlık onaylı taşıma</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Sigortalı & Sözleşmeli</div>
                  <div className="mt-1 text-xs text-slate-500">Tam kapsamlı güvence</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5">
                <ArrowUpToLine className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Asansörlü Sistem</div>
                  <div className="mt-1 text-xs text-slate-500">Güçlü ekipman altyapısı</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a href="#iletisim" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl">
                İletişime Geç <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* SAĞ TARAF: Fotoğraflar ve Bal Rengi Işık Efekti */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* ARKADAN VURAN BAL RENGİ IŞIK EFEKTİ */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-400/40 via-orange-500/20 to-yellow-300/30 blur-[80px]" />
            
            <div className="grid grid-cols-12 gap-4 sm:gap-6">
              {/* En büyük fotoğraf (resim3.jpg) */}
              <div className="col-span-12 overflow-hidden rounded-[2rem] shadow-2xl shadow-orange-900/10 sm:col-span-7 sm:h-[500px]">
                <img
                  src="/dikmen-nakliyat-genel-3.jpg"
                  alt="Asansörlü Taşımacılık"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Sağdaki küçük fotoğraflar (resim1.jpg ve resim2.jpg) */}
              <div className="col-span-12 flex flex-col gap-4 sm:col-span-5 sm:gap-6">
                <div className="h-48 overflow-hidden rounded-[2rem] shadow-lg shadow-orange-900/5 sm:h-[238px]">
                  <img
                    src="/dikmen-evden-eve-nakliyat-1.jpg"
                    alt="Arıcıoğlu Nakliyat Araç Filosu"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="h-48 overflow-hidden rounded-[2rem] shadow-lg shadow-orange-900/5 sm:h-[238px]">
                  <img
                    src="/dikmen-sehirler-arasi-nakliyat-2.jpg"
                    alt="Profesyonel Paketleme"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Yılların Tecrübesi Rozeti (Görseldeki gibi) */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-xl shadow-slate-200/50">
              <span className="text-4xl font-black tracking-tighter text-slate-900">35+</span>
              <span className="text-xs font-semibold uppercase leading-snug tracking-wider text-slate-500">
                Yıllık kesintisiz <br /> saha tecrübesi
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}