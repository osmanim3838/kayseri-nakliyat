import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react"; 

const ITEMS = [
  "ÇANKAYA ASANSÖRLÜ NAKLİYAT",
  "SİGORTALI TAŞIMACILIK",
  "DİKMEN NAKLİYAT",
  "GÜVENLİ TESLİMAT",
  "ÖZENLİ PAKETLEME",
];

export default function TrustMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-white py-6 shadow-sm sm:py-8"
      data-testid="trust-marquee"
    >
      <Marquee
        autoFill
        pauseOnHover
        speed={35}
        gradient={false}
      >
        {ITEMS.map((item, index) => (
          <div key={index} className="flex items-center">
            
            <span className="px-8 font-display text-lg font-bold text-foreground uppercase tracking-[0.2em] sm:text-2xl">
              {item}
            </span>

            <div className="flex items-center justify-center px-2">
              <Sparkle 
                className="h-6 w-6 text-primary opacity-80" 
                strokeWidth={1.5} 
              />
            </div>
            
          </div>
        ))}
      </Marquee>
    </div>
  );
}
