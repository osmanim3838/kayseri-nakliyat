import { motion } from "framer-motion";
import { Package, Truck, ShieldCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Parça Eşya Taşıma",
    text: "Tek koliden büyük parçaya; eşyanız kadar yer, eşyanız kadar ödeme.",
    img: "https://customer-assets-gfyr7b9c.emergentagent.net/job_kayseri-parcels/artifacts/126muqj3_Gemini_Generated_Image_65zfc065zfc065zf.webp",
    icon: Package,
    span: "lg:col-span-3 lg:row-span-2",
    testid: "service-parca-esya",
    hideWatermark: true,
  },
  {
    title: "Şehirler Arası Sevkiyat",
    text: "Kayseri'den Türkiye'nin her noktasına düzenli çıkış.",
    img: "https://customer-assets-gfyr7b9c.emergentagent.net/job_kayseri-parcels/artifacts/uuozptxt_sevkiyat.webp",
    icon: Truck,
    span: "lg:col-span-3",
    testid: "service-sehirler-arasi",
    hideWatermark: true,
    // zoom + anchor bottom-right to crop out the baked truck icon in the top-left
    imgClass:
      "absolute inset-0 h-full w-full origin-bottom-right scale-[1.22] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.28]",
  },
  {
    title: "Güvenli Paketleme & Teslim",
    text: "Özenli paketleme, sigortalı ve kapıdan kapıya teslimat.",
    img: "https://images.pexels.com/photos/6169044/pexels-photo-6169044.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
  return (
    <motion.div
      data-testid={s.testid}
      custom={i}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`group relative min-h-[280px] overflow-hidden rounded-lg border border-white/10 ${s.span}`}
    >
      {/* Clipped photography with spotlight darkening for text legibility */}
      <img
        src={s.img}
        alt={s.title}
        className={
          s.imgClass ||
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_7%)] via-[hsl(222_47%_9%)]/40 to-transparent" />
      {/* Mask the AI-image corner watermark with a soft radial darkening (bottom-right) */}
      {s.hideWatermark && (
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-32 w-32"
          style={{
            background:
              "radial-gradient(circle at bottom right, hsl(222 47% 7%) 38%, transparent 72%)",
          }}
        />
      )}
      <div className="relative flex h-full flex-col justify-end p-7">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/10 backdrop-blur">
          <Icon className="h-5 w-5 text-[hsl(var(--accent))]" />
        </span>
        <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {s.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">{s.text}</p>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="ne-yapiyoruz" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-14 max-w-2xl"
      >
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--accent))]">
          <span className="h-px w-10 bg-[hsl(var(--accent))]" />
          Ne Yapıyoruz
        </p>
        <h2 className="font-display text-4xl font-black leading-none tracking-tighter text-white sm:text-5xl lg:text-6xl">
          Sadece parça yük, <br /> baştan sona doğru iş.
        </h2>
      </motion.div>

      {/* Asymmetric bento grid — one hero card + two support cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        {SERVICES.map((s, i) => (
          <Card key={s.title} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}
