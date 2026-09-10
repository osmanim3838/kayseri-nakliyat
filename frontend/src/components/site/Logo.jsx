import { useNavigate } from "react-router-dom"; 

// 'forceDark' adında yeni bir akıllı özellik ekledik
export default function Logo({ className = "", forceDark = false }) {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/")} 
      className={`group inline-flex items-center cursor-pointer bg-transparent border-none p-0 ${className}`}
      aria-label="Arıcıoğlu Nakliyat Ana Sayfa"
    >
      <img 
        src="/logo.png" 
        alt="Arıcıoğlu Nakliyat" 
        /* h-12, h-14, h-16 ile boyutunu ciddi oranda büyüttük. Akıllı renk sistemi eklendi. */
        className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 h-12 sm:h-14 lg:h-16 ${
          forceDark ? "brightness-0 opacity-80 group-hover:opacity-100" : ""
        }`} 
      />
    </button>
  );
}