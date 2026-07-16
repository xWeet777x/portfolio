"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let animationFrame = 0;

    root.classList.add("reveal-enabled");

    const reveal = (element: Element) => {
      element.classList.add("is-revealed");
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
        });
      },
      { rootMargin: "12% 0px 12% 0px", threshold: 0.01 },
    );

    elements.forEach(element => observer.observe(element));

    const revealVisible = () => {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;

      elements.forEach(element => {
        if (element.classList.contains("is-revealed")) return;
        const bounds = element.getBoundingClientRect();
        if (bounds.top < viewportHeight * 1.12 && bounds.bottom > -viewportHeight * 0.12) {
          reveal(element);
        }
      });
    };

    const scheduleCheck = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(revealVisible);
    };

    revealVisible();
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, []);

  return null;
}
