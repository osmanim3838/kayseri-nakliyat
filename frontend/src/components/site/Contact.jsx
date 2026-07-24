import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
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

// Trust + Contact section: persuasive copy, prominent phone, styled Google Map.
export default function Contact() {
  return (
    <section id="iletisim" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Persuasive column */}
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--accent))]">
            <span className="h-px w-10 bg-[hsl(var(--accent))]" />
            İletişim
          </p>
          <h2 className="font-hero text-4xl leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Eşyanız yola <br className="hidden sm:block" />çıkmaya hazır.
            <span className="mt-2 block bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(201_96%_60%)] bg-clip-text text-transparent">
              Tek yapmanız gereken aramak.
            </span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-[1.7] text-white/65 sm:text-lg">
            Fiyat almak, sevkiyat planlamak veya sadece bilgi almak için hemen bize ulaşın.
            Kayseri&apos;den şehirler arası parça yük ve parça eşya taşımada,{" "}
            <span className="font-semibold text-white">dakikalar içinde net yanıt</span> alırsınız.
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

          <div className="mt-9 space-y-4 border-t border-white/10 pt-8">
            <div className="flex items-start gap-3" data-testid="contact-address">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--accent))]" />
              <p className="text-sm text-white/75">{ADDRESS}</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-[hsl(var(--accent))]" />
              <p className="text-sm text-white/75">Pazartesi – Cumartesi: 08:00 – 19:00</p>
            </div>
          </div>
        </motion.div>

        {/* Map column with styled frame */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg border border-white/10"
        >
          <iframe
            title="kayseriparsiyel konum"
            data-testid="contact-map"
            src={MAPS_EMBED}
            className="h-full min-h-[380px] w-full grayscale-[0.35] transition-all duration-500 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={MAPS_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-directions-btn"
            className="glass absolute bottom-4 left-4 flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
          >
            <Navigation className="h-4 w-4 text-[hsl(var(--accent))]" />
            Yol Tarifi Al
          </a>
        </motion.div>
      </div>
    </section>
  );
}
