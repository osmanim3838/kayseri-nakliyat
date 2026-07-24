import { Phone, MessageCircle, MapPin } from "lucide-react";
import Logo from "./Logo";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, ADDRESS } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/10 bg-[hsl(222_44%_9%)]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <Logo className="text-2xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
  Kayseri Şehirler Arası parsel Yük & Parsel Eşya Taşıma
</p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Hızlı İletişim
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            data-testid="footer-call-btn"
            className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white transition-colors hover:text-[hsl(var(--accent))]"
          >
            <Phone className="h-5 w-5 text-[hsl(var(--accent))]" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp-btn"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <MessageCircle className="h-4 w-4 text-[hsl(var(--wa))]" /> WhatsApp&apos;tan yazın
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Adres
          </p>
          <p className="flex items-start gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
            {ADDRESS}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-white/40 sm:text-left">
          © {new Date().getFullYear()} kayseriparsiyel — Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
