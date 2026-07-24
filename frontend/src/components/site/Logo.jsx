import { motion } from "framer-motion";
import { BRAND } from "@/lib/site";

/**
 * CSS-only text logo. Mixes Cabinet Grotesk weights:
 * "kayseri" heavy + "parsiyel" light, with an accent dot to signal a "package/point".
 */
export default function Logo({ className = "", onClick }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      data-testid="brand-logo"
      className={`group inline-flex items-baseline font-display leading-none tracking-tighter ${className}`}
      aria-label={BRAND}
    >
      <span className="font-black text-white">kayseri</span>
      <span className="font-light text-white/70 transition-colors duration-300 group-hover:text-white">
        parsiyel
      </span>
      <motion.span
        aria-hidden
        className="ml-1 h-2 w-2 translate-y-[-2px] rounded-full bg-[hsl(var(--accent))]"
        animate={{ opacity: [1, 0.35, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </a>
  );
}
