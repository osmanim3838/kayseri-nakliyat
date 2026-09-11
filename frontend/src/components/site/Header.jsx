import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation eklendi
import Logo from "./Logo";

const LINKS = [
  { label: "Hakkımızda", to: "/hakkimizda" },
  { 
    label: "Hizmetlerimiz", 
    subLinks: [
      { label: "Çankaya Evden Eve Nakliyat", to: "/cankaya-evden-eve-nakliyat" },
      { label: "Dikmen Asansörlü Nakliyat", to: "/dikmen-asansorlu-nakliyat" },
      { label: "Çankaya Şehirler Arası Nakliyat", to: "/cankaya-sehirler-arasi-nakliyat" }
    ]
  },
  { label: "Ne Yapıyoruz", href: "/#ne-yapiyoruz" },
  { label: "Neden Biz", href: "/#neden-biz" },
  { label: "İletişim", to: "/iletisim" }
];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("/#", "");
    
    if (window.location.pathname !== "/") {
      navigate("/");
      // Başka sayfadan geliyorsak 300 milisaniye bekle ve kaydır
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      // Zaten ana sayfadaysak menünün kapanma animasyonunu bekle (300ms) ve öyle kaydır
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };
  const location = useLocation(); // Hangi sayfada olduğumuzu bulur

  // İŞTE SİHİR BURADA: Ana sayfada değilsek, menüyü her zaman "kaydırılmış (renkli)" gibi göster.
  const isInnerPage = location.pathname !== "/";
  const isHeaderActive = scrolled || isInnerPage;

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
        isHeaderActive ? "glass border-slate-200 shadow-sm bg-white/95 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
        <div className={`transition-colors duration-300 ${isHeaderActive ? "text-slate-900" : "text-white"}`}>
          <Logo className="text-xl sm:text-2xl" forceDark={isHeaderActive} />
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l, i) => (
            l.subLinks ? (
              <div key={i} className="group relative py-2">
                <span className={`flex cursor-pointer items-center gap-1 text-sm font-bold transition-colors duration-200 ${isHeaderActive ? "text-slate-700 hover:text-amber-500" : "text-white/90 hover:text-white"}`}>
                  {l.label} <ChevronDown className="h-3 w-3" />
                </span>
                <div className="absolute left-0 top-full mt-2 hidden w-56 flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl group-hover:flex">
                  {l.subLinks.map((sub, j) => (
                    <button 
                      key={j} 
                      onClick={() => navigate(sub.to)} 
                      className="w-full text-left border-b border-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-amber-50 hover:text-amber-600"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : l.to ? (
              <button 
                key={i} 
                onClick={() => navigate(l.to)} 
                className={`text-sm font-bold transition-colors duration-200 ${isHeaderActive ? "text-slate-700 hover:text-amber-500" : "text-white/90 hover:text-white"}`}
              >
                {l.label}
              </button>
            ) : (
              <a
                key={i}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className={`text-sm font-bold transition-colors duration-200 ${isHeaderActive ? "text-slate-700 hover:text-amber-500" : "text-white/90 hover:text-white"}`}
              >
                {l.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate("/teklif-al")}
            className="hidden md:flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/40"
          >
            Teklif Al →
          </button>

          <a
            href="tel:05055979406"
            className={`group relative flex items-center gap-3 rounded-full p-1 pr-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:ring-amber-500/50 ${isHeaderActive ? "bg-slate-900 ring-slate-800" : "bg-slate-900/40 ring-white/10"}`}
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
          
          <button onClick={() => setOpen(!open)} className={`flex h-11 w-11 items-center justify-center rounded-md border md:hidden ${isHeaderActive ? "border-slate-200 bg-slate-100 text-slate-900" : "border-white/10 bg-black/20 text-white"}`}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="glass overflow-hidden border-t border-slate-200 bg-white/95 md:hidden">
            <div className="flex flex-col px-5 py-4">
              {LINKS.map((l, i) => (
                l.subLinks ? (
                  <div key={i} className="flex flex-col border-b border-slate-100 py-2">
                    <span className="py-2 text-base font-bold text-slate-800">{l.label}</span>
                    <div className="flex flex-col pl-4">
                      {l.subLinks.map((sub, j) => (
                        <button 
                          key={j} 
                          onClick={() => { setOpen(false); navigate(sub.to); }} 
                          className="w-full text-left py-2 text-sm font-semibold text-slate-500 hover:text-amber-500"
                        >
                          - {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : l.to ? (
                  <button 
                    key={i} 
                    onClick={() => { setOpen(false); navigate(l.to); }} 
                    className="w-full text-left border-b border-slate-100 py-3 text-base font-bold text-slate-800 hover:text-amber-500"
                  >
                    {l.label}
                  </button>
                ) : (
                 <a 
  key={i} 
  href={l.href} 
  onClick={(e) => { 
    setOpen(false); 
    handleAnchorClick(e, l.href); 
  }} 
  className="w-full text-left border-b border-slate-100 py-3 text-base font-bold text-slate-800 hover:text-amber-500"
>
  {l.label}
</a>
                )
              ))}

              <button
                onClick={() => { setOpen(false); navigate("/teklif-al"); }}
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-3 text-center text-sm font-bold text-white shadow-lg"
              >
                Teklif Al →
              </button>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}