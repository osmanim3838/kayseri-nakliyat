import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link 
      to="/" 
      className={`group inline-flex items-center ${className}`}
      aria-label="Arıcıoğlu Nakliyat Ana Sayfa"
    >
      <img 
        src="/logo.png" 
        alt="Arıcıoğlu Nakliyat" 
        className="h-10 w-auto object-contain sm:h-14 transition-transform duration-300 group-hover:scale-105" 
      />
    </Link>
  );
}