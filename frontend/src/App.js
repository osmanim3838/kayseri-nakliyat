import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    // Lenis: premium momentum smooth-scrolling. Respect reduced-motion.
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

    // Smoothly scroll to in-page anchors through Lenis.
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
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
    </div>
  );
}
export default App;