import { useNavigate, useLocation } from "react-router-dom";
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, 
  Package, User, Calendar, ArrowRight 
} from "lucide-react";

const FOOTER_LINKS = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Kurumsal", path: "/#hakkimizda" },
  { label: "Evden Eve Nakliyat", path: "/evden-eve-nakliyat" },
  { label: "Dikmen Evden Eve Nakliyat", path: "/dikmen-evden-eve-nakliyat" },
  { label: "Dikmen Asansörlü Nakliyat", path: "/dikmen-asansorlu-nakliyat" },
  { label: "Dikmen Şehirler Arası Nakliyat", path: "/dikmen-sehirler-arasi-nakliyat" },
  { label: "Dikmen Ofis Taşımacılığı", path: "/dikmen-ofis-tasimaciligi" },
  { label: "Dikmen Eşya Depolama", path: "/dikmen-esya-depolama" },
  { label: "İletişim", path: "/iletisim" }
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert("Teklif talebiniz başarıyla alındı! Müşteri temsilcimiz en kısa sürede sizinle iletişime geçecektir.");
  };

  const handleFooterLink = (e, path) => {
    e.preventDefault();
    
    if (!path.includes("#")) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = path.split("#")[1];
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-20 pb-10 text-slate-200">
      
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 70px"
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-slate-950 via-orange-950/60 to-amber-900/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          <div className="flex flex-col lg:col-span-3">
            <a href="/" onClick={(e) => handleFooterLink(e, "/")} className="flex cursor-pointer items-baseline font-display text-3xl tracking-tighter drop-shadow-lg">
              <span className="font-black text-white">Arıcıoğlu</span>
              <span className="font-light text-amber-500">Nakliyat</span>
              <span className="ml-1 h-2 w-2 rounded-full bg-amber-500" />
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">
              Arıcıoğlu Nakliyat bünyesinde 35 yılı aşkın tecrübeyle Ankara ve Türkiye genelinde sigortalı evden eve nakliyat, asansörlü taşımacılık ve depolama hizmetleri.
            </p>
            <div className="mt-6 flex w-fit items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-colors hover:bg-amber-500/20">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-bold text-amber-500">K1 & K3 Yetki Belgeli Nakliyat</span>
            </div>
          </div>

          <div className="lg:col-span-3 lg:ml-4">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white drop-shadow-md">
              Hızlı Bağlantılar
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.path} 
                    onClick={(e) => handleFooterLink(e, item.path)}
                    className="group flex cursor-pointer items-center gap-2 text-sm text-slate-300 transition-colors hover:text-amber-400"
                  >
                    <ChevronRight className="h-3 w-3 text-amber-600 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white drop-shadow-md">
              İletişim
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-300">
              <li className="flex items-start gap-3 transition-colors hover:text-amber-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>İncili Sokak 48/B Etlik Mah.<br/>Keçiören / ANKARA</span>
              </li>
              <li className="flex items-center gap-3 transition-colors hover:text-amber-400">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="tel:03123782010">0312 378 20 10</a>
              </li>
              <li className="flex items-center gap-3 transition-colors hover:text-amber-400">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="tel:05055979406">0505 597 94 06</a>
              </li>
              <li className="flex items-center gap-3 transition-colors hover:text-amber-400">
                <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="mailto:info@dikmennakliyat.com">info@dikmennakliyat.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-amber-500" />
                <span>Pazartesi - Cumartesi: 08:00 - 19:00</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-orange-900/40">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <Package className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black tracking-tight text-slate-900">Size Özel Taşıma Teklifi</h4>
                  <p className="mt-0.5 text-xs text-slate-500">Taşınma detaylarınızı paylaşın, fiyatınızı hemen hazırlayalım.</p>
                </div>
              </div>

              <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Adınız ve Soyadınız *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Adınızı yazınız" required className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Telefon *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="tel" placeholder="05XX XXX XX XX" required className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Taşınma Tarihi</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="text" placeholder="GG.AA.YYYY" className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Çıkış Adresi *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="text" placeholder="İl / İlçe" required className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Varış Adresi *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="text" placeholder="İl / İlçe" required className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                    </div>
                  </div>
                </div>

                <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:scale-[1.02] hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/40 active:scale-[0.98]">
                  Hızlı Teklif Al <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Arıcıoğlu Nakliyat — Tüm hakları saklıdır.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <a href="/" onClick={(e) => handleFooterLink(e, "/")} className="cursor-pointer text-xs text-slate-400 transition-colors hover:text-amber-400">Gizlilik Politikası</a>
            <a href="/" onClick={(e) => handleFooterLink(e, "/")} className="cursor-pointer text-xs text-slate-400 transition-colors hover:text-amber-400">Kullanım Şartları</a>
          </div>
        </div>

      </div>
    </footer>
  );
}