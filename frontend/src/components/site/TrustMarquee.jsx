import Marquee from "react-fast-marquee";

const ITEMS = [
  "GÜVENLİ TESLİMAT",
  "SİGORTALI TAŞIMACILIK",
  "ZAMANINDA TESLİMAT",
  "PARÇA YÜK UZMANI",
  "KAPIDAN KAPIYA",
  "ÖZENLİ PAKETLEME",
];

// Slow editorial ribbon of trust keywords bridging hero → services.
export default function TrustMarquee() {
  return (
    <div
      data-testid="trust-marquee"
      className="border-y border-white/10 bg-[hsl(222_44%_9%)] py-5"
    >
      <Marquee speed={40} gradient={false} autoFill>
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-display text-lg font-medium uppercase tracking-tight text-white/80 sm:text-2xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
