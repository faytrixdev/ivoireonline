"use client";

import { useEffect } from "react";

export function HeroMotion() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
        layers.forEach((el) => {
          const speed = Number(el.dataset.parallax || 0);
          el.style.transform = `translate3d(0, ${Math.round(progress * speed)}px, 0)`;
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let onMove: ((e: PointerEvent) => void) | null = null;
    if (hero && window.matchMedia("(pointer: fine)").matches) {
      onMove = (e: PointerEvent) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        hero.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      };
      hero.addEventListener("pointermove", onMove);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (onMove && hero) hero.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
