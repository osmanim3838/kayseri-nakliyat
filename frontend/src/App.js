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
import HakkimizdaSayfasi from './components/site/HakkimizdaSayfasi';
import IletisimSayfasi from "./components/site/IletisimSayfasi";
import DikmenSehirlerarasi from "./components/site/DikmenSehirlerarasi";
import NeYapiyoruzSayfasi from './components/site/NeYapiyoruzSayfasi';
import NedenBizSayfasi from './components/site/NedenBizSayfasi';
import DikmenOfisTasimaciligi from './components/site/DikmenOfisTasimaciligi';
import DikmenDepolamaSayfasi from './components/site/DikmenDepolamaSayfasi';
import EvdenEveNakliyatSayfasi from './components/site/EvdenEveNakliyatSayfasi';

// Hizmet Sayfaları
import HizmetDetay from "./components/site/HizmetDetay";
import AsansorluNakliyat from "./components/site/AsansorluNakliyat";
import OfferPage from "./components/site/OfferPage";

// YENİ EKLENEN SEO BİLEŞENLERİ
import FAQ from "./components/site/FAQ";
import Testimonials from "./components/site/Testimonials";

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
      if (!id || id === "#" || id.startsWith("#/")) return;
      if (window.location.pathname !== "/") return;
      
      try {
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: -70 });
      } catch (error) {
        console.warn("Geçersiz seçici:", id);
      }
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
                
                {/* YENİ BÖLÜMLERİ BURAYA, İLETİŞİMİN HEMEN ÜSTÜNE EKLEDİK */}
                <Testimonials />
                <FAQ />
                
                <Contact />
              </main>
              <Footer />
              <WhatsAppFab />
            </>
          } 
        />
        
        {/* YENİ OLUŞTURDUĞUMUZ İKİ SAYFANIN BAĞLANTILARI */}
        <Route path="/ne-yapiyoruz" element={<NeYapiyoruzSayfasi />} />
        <Route path="/neden-biz" element={<NedenBizSayfasi />} />
        <Route path="/dikmen-evden-eve-nakliyat" element={<HizmetDetay />} />
        <Route path="/dikmen-asansorlu-nakliyat" element={<AsansorluNakliyat />} />
        <Route path="/dikmen-ofis-tasimaciligi" element={<DikmenOfisTasimaciligi />} />
        <Route path="/dikmen-esya-depolama" element={<DikmenDepolamaSayfasi />} />
        <Route path="/evden-eve-nakliyat" element={<EvdenEveNakliyatSayfasi />} />
        
        <Route path="/iletisim" element={<IletisimSayfasi />} />
        <Route path="/teklif-al" element={<OfferPage />} />
        <Route path="/dikmen-sehirler-arasi-nakliyat" element={<DikmenSehirlerarasi />} />
        <Route path="/hakkimizda" element={<HakkimizdaSayfasi />} />
      </Routes>
    </div>
  );
}

export default App;