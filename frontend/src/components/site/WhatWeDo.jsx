import { motion } from "framer-motion";
import { Package, Truck, ShieldCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Dikmen & Dikmen Evden Eve Nakliyat",
    features: [
      "Dikmen bölgelerinde hızlı ve güvenli taşımacılık.",
      "Yeni evinize sıfır hasar ve %100 müşteri memnuniyeti garantisi.",
      "Alanında uzman, güler yüzlü ve profesyonel taşıma ekibi.",
    ],
    eyebrow: "01 / Şehir İçi Taşıma",
    caption: "Ankara'nın merkezinde stressiz taşınma",
    img: "/dikmen-hizmetlerimiz-6.jpg", // Senin yeni eklediğin logolu araç resmi
    icon: Package,
    span: "lg:col-span-3 lg:row-span-2",
    testid: "service-parca-esya",
    hideWatermark: true,
  },
  {
    title: "Ankara Çıkışlı Şehirler Arası Nakliye",
    features: [
      "Ankara'dan tüm Türkiye'ye sigortalı ve sözleşmeli sevkiyat.",
      "Geniş araç filomuzla uzun mesafede sıfır risk güvencesi.",
      "Tam zamanında teslimat ve anlık araç takip bilgilendirmesi.",
    ],
    eyebrow: "02 / Şehirler Arası",
    caption: "Uzun mesafede net plan, tek muhatap",
    img: "https://customer-assets-gfyr7b9c.emergentagent.net/job_kayseri-parcels/artifacts/uuozptxt_sevkiyat.webp", // Bu orta resim aynı kaldı
    icon: Truck,
    span: "lg:col-span-3",
    testid: "service-sehirler-arasi",
    hideWatermark: true,
    imgClass:
      "absolute inset-0 h-full w-full origin-bottom-right scale-[1.22] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.28]",
  },
  {
    title: "Asansörlü Taşımacılık & Güvenli Paketleme",
    features: [
      "Yüksek katlı binalar için son teknoloji modüler asansör kurulumu.",
      "Kırılacak eşyalarınıza özel, darbe emici patpat ambalajlama.",
      "Yeni evinizde beyaz eşya ve mobilya de-montaj/montaj desteği.",
    ],
    eyebrow: "03 / Asansör & Ambalaj",
    caption: "Montaj ve teslim sonrası yerleşim desteği",
    img: "/dikmen-hizmetlerimiz-7.jpg", // Senin asansörlü araç fotoğrafın
    icon: ShieldCheck,
    span: "lg:col-span-3",
    testid: "service-paketleme",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 48 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Card({ s, i }) {
  const Icon = s.icon;

  const openDetail = () => {
    document.getElementById(s.anchor)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      data-testid={s.testid}
      custom={i}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      onClick={openDetail}
      className={`group relative min-h-[320px] cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/40 bg-white/60 backdrop-blur-md shadow-[0_18px_50px_-30px_rgba(243,130,21,0.15)] transition-transform duration-500 hover:-translate-y-1 ${s.span}`}
    >
      <img
        src={s.img}
        alt={s.title}
        className={
          s.imgClass ||
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        }
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/40 to-transparent" />

      {s.hideWatermark && (
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-32 w-32"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(15,23,42,0.9) 38%, transparent 72%)",
          }}
        />
      )}
      <div className="relative flex h-full flex-col justify-end p-7 sm:p-8">
        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
          {s.eyebrow}
        </span>
        <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 shadow-lg shadow-amber-500/20">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {s.title}
        </h3>
        
        {/* ESKİ PARAGRAF YERİNE ŞIK MADDELER EKLENDİ */}
        <ul className="mt-4 space-y-2">
          {s.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-sm border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          {s.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="ne-yapiyoruz" className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      
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

      {/* İÇERİK KISMI */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 drop-shadow-sm">
            <span className="h-px w-10 bg-amber-500" />
            Ne Yapıyoruz
          </p>
          <h2 className="font-display text-4xl font-black leading-none tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl relative">
            Güvenli nakliyat işi,
            <br className="hidden sm:block" />
            <span className="mt-2 block pb-2 bg-gradient-to-r from-slate-700 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
              baştan sona doğru iş.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 relative">
          {SERVICES.map((s, i) => (
            <Card key={s.title} s={s} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}