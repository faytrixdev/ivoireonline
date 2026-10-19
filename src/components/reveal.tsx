"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealSetup() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-ready");

    const pending = new Set<Element>();

    const show = (el: Element) => {
      el.classList.add("is-visible");
      pending.delete(el);
    };

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    const observe = (el: Element) => {
      if (pending.has(el)) return;
      pending.add(el);
      io.observe(el);
    };

    document.querySelectorAll(".reveal").forEach(observe);

    // Safety net: any pending node currently inside the viewport becomes visible.
    // Guarantees content shows even with fast/programmatic scrolling.
    let raf = 0;
    const sweep = () => {
      raf = 0;
      pending.forEach((el) => {
        const r = el.getBoundingClientRect();
        // In viewport, or already scrolled past (missed during a fast jump) → show.
        if (r.top < window.innerHeight - 40) {
          show(el);
          io.unobserve(el);
        }
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();

    // Nodes injected after mount (client navigation, tabs, drawers…)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.classList.contains("reveal")) observe(node);
          node.querySelectorAll(".reveal").forEach(observe);
        });
      });
      schedule();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      mo.disconnect();
      pending.clear();
    };
  }, [pathname]);

  return null;
}
