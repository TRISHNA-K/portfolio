import React, { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Toc } from "./components/Toc";
import { Work } from "./components/Work";
import { Lab } from "./components/Lab";
import { Competencies } from "./components/Competencies";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  useEffect(() => {
    let lenis;
    let rafId;
    let handleAnchorClick;

    try {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Smooth glide on clicking any anchor jump link
      handleAnchorClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, {
            offset: -12,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      };

      document.addEventListener("click", handleAnchorClick);
    } catch (e) {
      console.warn("Lenis initialization error:", e);
    }

    return () => {
      if (handleAnchorClick) {
        document.removeEventListener("click", handleAnchorClick);
      }
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div id="top" className="grain bg-[#f5f1e8] text-[#141413] min-h-screen selection:bg-[#c23a22] selection:text-[#f5f1e8]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Toc />
        <Work />
        <Lab />
        <Competencies />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
