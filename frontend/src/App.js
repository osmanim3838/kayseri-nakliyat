import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustMarquee from "@/components/site/TrustMarquee";
import WhatWeDo from "@/components/site/WhatWeDo";
import Manifesto from "@/components/site/Manifesto";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import Hakkimizda from "./components/site/Hakkimizda";
import IletisimSayfasi from "./components/site/IletisimSayfasi";

// Hizmet Sayfaları
import HizmetDetay from "./components/site/HizmetDetay";
import AsansorluNakliyat from "./components/site/AsansorluNakliyat";

function App() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      if (window.location.pathname !== "/") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -70 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App grain">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <main>
                <Hero />
                <TrustMarquee />
                <Hakkimizda />
                <WhatWeDo />
                <Manifesto />
                <Contact />
              </main>
              <Footer />
              <WhatsAppFab />
            </>
          } 
        />
        
        {/* YENİ OLUŞTURDUĞUMUZ İKİ SAYFANIN BAĞLANTILARI */}
        <Route path="/cankiri-evden-eve-nakliyat" element={<HizmetDetay />} />
        <Route path="/cankiri-asansorlu-nakliyat" element={<AsansorluNakliyat />} />
        <Route path="/iletisim" element={<IletisimSayfasi />} />
      </Routes>
    </div>
  );
}

export default App;