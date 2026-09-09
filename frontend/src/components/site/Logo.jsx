import { Link } from "react-router-dom";
import { BRAND } from "@/lib/site";

export default function Logo({ className = "", onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      data-testid="brand-logo"
      className={`group inline-flex items-center ${className}`}
      aria-label={BRAND}
    >
      <img
        src="/logo.png"
        alt={BRAND}
        className="h-12 w-auto object-contain sm:h-14"
      />
    </Link>
  );
}
