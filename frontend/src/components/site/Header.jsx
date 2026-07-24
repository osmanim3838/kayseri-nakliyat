import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const LINKS = [
  { label: "Ne Yapıyoruz", href: "#ne-yapiyoruz" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "glass" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo className="text-xl sm:text-2xl" />

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.href.replace("#", "")}`}
              className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* YENİ TEKNOLOJİK BUTON: Mobilde görünür, radar sinyalli, katmanlı yapı */}
          <a
            href={`tel:${PHONE_TEL}`}
            data-testid="header-call-btn"
            className="group relative flex items-center gap-3 rounded-full bg-slate-900/40 p-1 pr-4 shadow-[0_0_15px_rgba(37,99,235,0.15)] ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-slate-900/80 hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:ring-[hsl(var(--accent))]/50"
          >
            {/* Sol Kısım: İkon ve Sinyal Işığı */}
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-blue-600 shadow-inner">
              {/* Online olduğunu belli eden ping (radar) animasyonu */}
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <Phone className="h-4 w-4 text-white" />
            </div>

            {/* Sağ Kısım: 7/24 Etiketi ve Numara */}
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">7/24 Aktif</span>
              <span className="text-xs font-black tracking-wide text-white sm:text-sm">{PHONE_DISPLAY}</span>
            </div>
          </a>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/20 text-white backdrop-blur-sm md:hidden"
            aria-label="Menü"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 text-base font-medium text-white/80"
                >
                  {l.label}
                </a>
              ))}
              {/* Mobil menünün içindeki eski buton da yeni tasarıma uyduruldu */}
              <a
                href={`tel:${PHONE_TEL}`}
                data-testid="mobile-call-btn"
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--accent))] py-3 font-bold text-white shadow-lg shadow-[hsl(var(--accent))]/20"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}