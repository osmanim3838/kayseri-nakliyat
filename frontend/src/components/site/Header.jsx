import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const LINKS = [
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { 
    label: "Hizmetlerimiz", 
    subLinks: [
      { label: "Evden Eve Nakliyat", to: "/cankiri-evden-eve-nakliyat" },
      { label: "Asansörlü Nakliyat", to: "/cankiri-asansorlu-nakliyat" }
    ]
  },
  { label: "Ne Yapıyoruz", href: "/#ne-yapiyoruz" },
  { label: "Neden Biz", href: "/#neden-biz" },
  { label: "İletişim", to: "/iletisim" },
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "glass border-border shadow-sm" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <div className={`transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
          <Logo className="text-xl sm:text-2xl" />
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l, i) => (
            l.subLinks ? (
              <div key={i} className="group relative py-2">
                <span className={`flex cursor-pointer items-center gap-1 text-sm font-bold transition-colors duration-200 ${scrolled ? "text-foreground/80 hover:text-amber-500" : "text-white/80 hover:text-white"}`}>
                  {l.label} <ChevronDown className="h-3 w-3" />
                </span>
                <div className="absolute left-0 top-full mt-2 hidden w-56 flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl group-hover:flex">
                  {l.subLinks.map((sub, j) => (
                    <Link key={j} to={sub.to} className="border-b border-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-amber-50 hover:text-amber-600">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : l.to ? (
              <Link key={i} to={l.to} className={`text-sm font-bold transition-colors duration-200 ${scrolled ? "text-foreground/80 hover:text-amber-500" : "text-white/80 hover:text-white"}`}>
                {l.label}
              </Link>
            ) : (
              <a key={i} href={l.href} className={`text-sm font-bold transition-colors duration-200 ${scrolled ? "text-foreground/80 hover:text-amber-500" : "text-white/80 hover:text-white"}`}>
                {l.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:05055979406"
            className={`group relative flex items-center gap-3 rounded-full p-1 pr-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:ring-amber-500/50 ${scrolled ? "bg-slate-900 ring-slate-800" : "bg-slate-900/40 ring-white/10"}`}
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">7/24 Aktif</span>
              <span className="text-xs font-black text-white">0505 597 94 06</span>
            </div>
          </a>
          <button onClick={() => setOpen(!open)} className={`flex h-11 w-11 items-center justify-center rounded-md border md:hidden ${scrolled ? "border-border bg-secondary text-foreground" : "border-white/10 bg-black/20 text-white"}`}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="glass overflow-hidden border-t border-border bg-white/95 md:hidden">
            <div className="flex flex-col px-5 py-4">
              {LINKS.map((l, i) => (
                l.subLinks ? (
                  <div key={i} className="flex flex-col border-b border-border/50 py-2">
                    <span className="py-2 text-base font-bold text-foreground/80">{l.label}</span>
                    <div className="flex flex-col pl-4">
                      {l.subLinks.map((sub, j) => (
                        <Link key={j} to={sub.to} onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-amber-500">
                          - {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : l.to ? (
                  <Link key={i} to={l.to} onClick={() => setOpen(false)} className="border-b border-border/50 py-3 text-base font-bold text-foreground/80 hover:text-amber-500">
                    {l.label}
                  </Link>
                ) : (
                  <a key={i} href={l.href} onClick={() => setOpen(false)} className="border-b border-border/50 py-3 text-base font-bold text-foreground/80 hover:text-amber-500">
                    {l.label}
                  </a>
                )
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}