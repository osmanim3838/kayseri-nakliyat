import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react"; 

const ITEMS = [
  "GÜVENLİ TESLİMAT",
  "SİGORTALI TAŞIMACILIK",
  "ZAMANINDA TESLİM",
  "PARÇA YÜK UZMANI",
  "KAPIDAN KAPIYA",
  "ÖZENLİ PAKETLEME",
];

export default function TrustMarquee() {
  return (
    // 1. CAM EFEKTİ (Glassmorphism): Arka planı hafif saydam ve bulanık (backdrop-blur-md) yaptık.
    // py-6 ve sm:py-8 ile şeride yukarıdan aşağıdan rahat nefes alacağı bir boşluk verdik.
    <div
      className="relative overflow-hidden border-y border-white/10 bg-[hsl(222_47%_11%)]/50 py-6 backdrop-blur-md sm:py-8"
      data-testid="trust-marquee"
    >
      <Marquee
        autoFill
        pauseOnHover
        speed={35} // Editoryal ve zarif durması için akış hızını biraz yavaşlattık
        gradient={false}
      >
        {ITEMS.map((item, index) => (
          <div key={index} className="flex items-center">
            
            {/* 2. MODERN TİPOGRAFİ: Harf aralıkları (tracking-[0.2em]) açıldı, text-white/90 ile çiğ beyazlık kırıldı */}
            <span className="px-8 font-display text-xl font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-2xl">
              {item}
            </span>

            {/* 3. YENİ AYIRAÇ: O sıkıcı noktaların yerine çok daha modern duran ince hatlı Sparkle (parıltı) ikonu */}
            <div className="flex items-center justify-center px-2">
              <Sparkle 
                className="h-6 w-6 text-[hsl(var(--accent))] opacity-80" 
                strokeWidth={1.5} 
              />
            </div>
            
          </div>
        ))}
      </Marquee>
    </div>
  );
}