"use client";

import { useEffect } from "react";

export function MotionExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motionSections = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-section]"));

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
      root.style.setProperty("--parallax-x", `${nx * 8}px`);
      root.style.setProperty("--parallax-y", `${ny * 6}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
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

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" },
    );

    const motionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.target.classList.toggle("is-motion-active", entry.isIntersecting);
      },
      { threshold: 0.04, rootMargin: "10% 0px 10% 0px" },
    );

    for (const node of revealNodes) {
      const rect = node.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 1.05) node.classList.add("is-visible");
      else revealObserver.observe(node);
    }
    root.classList.add("motion-ready");
    motionSections.forEach((node) => motionObserver.observe(node));

    if (finePointer.matches && !reducedMotion.matches) {
      document.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    renderScroll();

    return () => {
      root.classList.remove("motion-ready");
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      revealObserver.disconnect();
      motionObserver.disconnect();
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
