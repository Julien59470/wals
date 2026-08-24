"use client";

import { useEffect } from "react";

export function MotionExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-section], [data-reveal]"));

    let pointerFrame = 0;
    let pendingX = window.innerWidth / 2;
    let pendingY = window.innerHeight / 2;
    let scrollFrame = 0;

    const renderPointer = () => {
      pointerFrame = 0;
      const nx = pendingX / Math.max(window.innerWidth, 1) - 0.5;
      const ny = pendingY / Math.max(window.innerHeight, 1) - 0.5;
      root.style.setProperty("--pointer-x", `${pendingX}px`);
      root.style.setProperty("--pointer-y", `${pendingY}px`);
      root.style.setProperty("--parallax-x", `${nx * 12}px`);
      root.style.setProperty("--parallax-y", `${ny * 9}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType === "touch") return;
      pendingX = event.clientX;
      pendingY = event.clientY;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(renderPointer);
      document.body.classList.add("has-pointer");
    };

    const onPointerLeave = () => document.body.classList.remove("has-pointer");

    const renderScroll = () => {
      scrollFrame = 0;
      const y = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", `${Math.min(Math.max(y / max, 0), 1)}`);
      header?.classList.toggle("is-scrolled", y > 28);
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(renderScroll);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const node = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            node.classList.add("is-visible", "is-motion-active");
          } else {
            node.classList.remove("is-motion-active");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    sections.forEach((node) => observer.observe(node));
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    renderScroll();

    return () => {
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      observer.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("has-pointer");
    };
  }, []);

  return (
    <div className="motion-layer" aria-hidden="true">
      <div className="scroll-progress"><span /></div>
      <div className="cursor-glow" />
      <div className="viewport-vignette" />
    </div>
  );
}
