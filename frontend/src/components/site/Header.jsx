import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const HOME_LINKS = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Ne Yapıyoruz", href: "#ne-yapiyoruz" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "İletişim", href: "#iletisim" },
  { label: "Teklif Al", to: "/teklif-al" },
];

const OFFER_LINKS = [
  { label: "Anasayfa", to: "/" },
  { label: "İletişim", to: "/#iletisim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isOfferPage = location.pathname === "/teklif-al";
  const links = isOfferPage ? OFFER_LINKS : HOME_LINKS;

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
        scrolled ? "glass border-border shadow-sm" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        
        <div className={`transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
          <Logo className="text-xl sm:text-2xl" />
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) =>
            l.href ? (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-${l.href.replace("#", "")}`}
                className={`text-sm font-bold transition-colors duration-200 ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-bold transition-colors duration-200 ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {!isOfferPage && (
            <Link
              to="/teklif-al"
              data-testid="header-offer-btn"
              className={`hidden rounded-full border px-4 py-2 text-sm font-bold transition-colors duration-200 md:inline-flex ${
                scrolled
                  ? "border-primary bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
              }`}
            >
              Teklif Al
            </Link>
          )}
          
          {/* GÜNCELLENEN TELEFON BUTONU (ÇİFT NUMARA) */}
          <a
            href="tel:05055979406"
            data-testid="header-call-btn"
            className={`group relative flex items-center gap-3 rounded-full p-1 pr-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:ring-primary/50 ${
              scrolled ? "bg-slate-900 ring-slate-800" : "bg-slate-900/40 ring-white/10"
            }`}
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-600 shadow-inner">
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <Phone className="h-4 w-4 text-white" />
            </div>

            <div className="flex flex-col justify-center leading-tight">
              <span className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-400">7/24 Aktif</span>
              <span className="text-xs font-black tracking-wide text-white">0505 597 94 06</span>
              <span className="text-[10px] font-bold tracking-wide text-white/70">0312 378 20 10</span>
            </div>
          </a>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border backdrop-blur-sm transition-colors md:hidden ${
              scrolled ? "border-border bg-secondary text-foreground" : "border-white/10 bg-black/20 text-white"
            }`}
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
            className="glass overflow-hidden border-t border-border bg-white/95 md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l) =>
                l.href ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/50 py-3 text-base font-bold text-foreground/80 hover:text-primary"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/50 py-3 text-base font-bold text-foreground/80 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                )
              )}
              {!isOfferPage && (
                <Link
                  to="/teklif-al"
                  onClick={() => setOpen(false)}
                  data-testid="mobile-offer-btn"
                  className="mt-4 flex items-center justify-center gap-2 rounded-md bg-slate-900 py-3 font-bold text-white shadow-lg shadow-slate-900/20"
                >
                  Teklif Al
                </Link>
              )}
              {/* MOBİL MENÜ ÇİFT NUMARA GÜNCELLEMESİ */}
              <a
                href="tel:05055979406"
                data-testid="mobile-call-btn"
                className="mt-3 flex flex-col items-center justify-center gap-1 rounded-md bg-primary py-3 font-bold text-white shadow-lg shadow-primary/20"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 0505 597 94 06
                </div>
                <div className="text-sm opacity-90">0312 378 20 10</div>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}