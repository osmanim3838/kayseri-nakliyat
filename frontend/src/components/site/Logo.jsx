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
        src="/logo2.png" 
        alt="Arıcıoğlu Nakliyat" 
        className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 h-12 sm:h-14 lg:h-16 ${
          !forceDark ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" : ""
        }`} 
      />
    </button>
  );
}