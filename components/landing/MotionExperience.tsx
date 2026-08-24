"use client";

import { useEffect } from "react";

const tiltTargets = [
  [".story-visual", 5.5],
  [".workflow-step", 4],
  [".dashboard-frame", 2.6],
  [".field-statement", 3],
  [".build-copy", 2.4],
] as const;

export function MotionExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const disposers: Array<() => void> = [];
    const removableNodes: HTMLElement[] = [];

    root.classList.add("motion-ready");

    const cursorRing = document.querySelector<HTMLElement>(".cursor-ring");
    const cursorGlow = document.querySelector<HTMLElement>(".cursor-glow");
    const trailDots = Array.from(document.querySelectorAll<HTMLElement>(".cursor-trail-dot"));
    const header = document.querySelector<HTMLElement>(".site-header");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let glowX = targetX;
    let glowY = targetY;
    const trail = trailDots.map(() => ({ x: targetX, y: targetY }));
    let cursorFrame = 0;
    let scrollFrame = 0;

    const setPointerVars = (clientX: number, clientY: number) => {
      const nx = clientX / Math.max(window.innerWidth, 1) - 0.5;
      const ny = clientY / Math.max(window.innerHeight, 1) - 0.5;

      root.style.setProperty("--mouse-x-1", `${nx * 5}px`);
      root.style.setProperty("--mouse-x-2", `${nx * 11}px`);
      root.style.setProperty("--mouse-x-3", `${nx * 20}px`);
      root.style.setProperty("--mouse-x-neg", `${nx * -13}px`);
      root.style.setProperty("--mouse-y-1", `${ny * 6}px`);
      root.style.setProperty("--mouse-y-2", `${ny * 14}px`);
      root.style.setProperty("--phone-a-x", `${nx * 16}px`);
      root.style.setProperty("--phone-a-y", `${ny * 11}px`);
      root.style.setProperty("--phone-b-x", `${nx * -13}px`);
      root.style.setProperty("--phone-b-y", `${ny * -9}px`);
    };

    const animateCursor = () => {
      ringX += (targetX - ringX) * 0.22;
      ringY += (targetY - ringY) * 0.22;
      glowX += (targetX - glowX) * 0.095;
      glowY += (targetY - glowY) * 0.095;

      if (cursorRing) {
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      if (cursorGlow) {
        cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }

      let leaderX = ringX;
      let leaderY = ringY;
      trail.forEach((point, index) => {
        const follow = Math.max(0.14, 0.3 - index * 0.022);
        point.x += (leaderX - point.x) * follow;
        point.y += (leaderY - point.y) * follow;
        trailDots[index]?.style.setProperty(
          "transform",
          `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`,
        );
        leaderX = point.x;
        leaderY = point.y;
      });

      cursorFrame = window.requestAnimationFrame(animateCursor);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType === "touch") return;
      targetX = event.clientX;
      targetY = event.clientY;
      setPointerVars(event.clientX, event.clientY);
      document.body.classList.add("has-pointer");
    };

    const onPointerLeave = () => document.body.classList.remove("has-pointer");

    const onPointerOver = (event: PointerEvent) => {
      if (!cursorRing) return;
      const target = event.target as Element | null;
      if (target?.closest("a, button, .motion-tilt, .story-specs span, .micro-card, .dashboard-table .table-row")) {
        cursorRing.classList.add("is-hovering");
      }
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!cursorRing) return;
      const related = event.relatedTarget as Element | null;
      if (!related?.closest?.("a, button, .motion-tilt, .story-specs span, .micro-card, .dashboard-table .table-row")) {
        cursorRing.classList.remove("is-hovering");
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches) return;
      cursorRing?.classList.add("is-down");
      const burst = document.createElement("span");
      burst.className = "mouse-burst";
      burst.style.left = `${event.clientX}px`;
      burst.style.top = `${event.clientY}px`;
      document.body.appendChild(burst);
      burst.addEventListener("animationend", () => burst.remove(), { once: true });
    };

    const onPointerUp = () => cursorRing?.classList.remove("is-down");

    const updateScroll = () => {
      scrollFrame = 0;
      const y = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(y / max, 0), 1);
      const heroProgress = Math.min(y / Math.max(window.innerHeight * 0.9, 1), 1);

      root.style.setProperty("--scroll-progress", progress.toFixed(5));
      root.style.setProperty("--hero-copy-scroll", `${heroProgress * -42}px`);
      root.style.setProperty("--hero-stage-scroll", `${heroProgress * 68}px`);
      root.style.setProperty("--hero-fade", `${Math.max(0.42, 1 - heroProgress * 0.58)}`);
      root.style.setProperty("--scroll-orbit", `${heroProgress * 62}px`);
      root.style.setProperty("--scroll-grid", `${heroProgress * 34}px`);
      root.style.setProperty("--build-shift", `${Math.max(-70, Math.min(70, (y - max * 0.78) * 0.035))}px`);
      header?.classList.toggle("is-scrolled", y > 28);
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });

    if (finePointer.matches && !reducedMotion.matches) cursorFrame = window.requestAnimationFrame(animateCursor);
    updateScroll();

    const magneticNodes = Array.from(
      document.querySelectorAll<HTMLElement>(".primary-link, .header-status, .desktop-nav a, .launch-pill"),
    );

    magneticNodes.forEach((node) => {
      node.classList.add("motion-magnetic");
      const move = (event: PointerEvent) => {
        if (!finePointer.matches || reducedMotion.matches) return;
        const rect = node.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        node.style.setProperty("--mag-x", `${x * 0.16}px`);
        node.style.setProperty("--mag-y", `${y * 0.16}px`);
      };
      const leave = () => {
        node.style.setProperty("--mag-x", "0px");
        node.style.setProperty("--mag-y", "0px");
      };
      node.addEventListener("pointermove", move, { passive: true });
      node.addEventListener("pointerleave", leave);
      disposers.push(() => {
        node.removeEventListener("pointermove", move);
        node.removeEventListener("pointerleave", leave);
      });
    });

    tiltTargets.forEach(([selector, strength]) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((node) => {
        node.classList.add("motion-tilt");
        const shine = document.createElement("span");
        shine.className = "tilt-shine";
        shine.setAttribute("aria-hidden", "true");
        node.appendChild(shine);
        removableNodes.push(shine);

        const move = (event: PointerEvent) => {
          if (!finePointer.matches || reducedMotion.matches) return;
          const rect = node.getBoundingClientRect();
          const x = (event.clientX - rect.left) / Math.max(rect.width, 1);
          const y = (event.clientY - rect.top) / Math.max(rect.height, 1);
          node.style.setProperty("--tilt-ry", `${(x - 0.5) * strength * 2}deg`);
          node.style.setProperty("--tilt-rx", `${(0.5 - y) * strength * 2}deg`);
          node.style.setProperty("--shine-x", `${x * 100}%`);
          node.style.setProperty("--shine-y", `${y * 100}%`);
          node.style.setProperty("--shine-opacity", "1");
        };
        const leave = () => {
          node.style.setProperty("--tilt-rx", "0deg");
          node.style.setProperty("--tilt-ry", "0deg");
          node.style.setProperty("--shine-opacity", "0");
        };
        node.addEventListener("pointermove", move, { passive: true });
        node.addEventListener("pointerleave", leave);
        disposers.push(() => {
          node.removeEventListener("pointermove", move);
          node.removeEventListener("pointerleave", leave);
        });
      });
    });

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".feature-story, .workflow-step, .field-statement, .cockpit-copy, .dashboard-frame, .build-copy, .story-specs span, .micro-card, .dashboard-metrics > div, .dashboard-table .table-row, .build-roadmap span",
      ),
    );

    revealTargets.forEach((node, index) => {
      node.classList.add("motion-reveal");
      node.style.setProperty("--motion-delay", `${(index % 5) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("motion-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    revealTargets.forEach((node) => revealObserver.observe(node));

    disposers.push(() => revealObserver.disconnect());

    return () => {
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScroll);
      disposers.forEach((dispose) => dispose());
      removableNodes.forEach((node) => node.remove());
      root.classList.remove("motion-ready");
      document.body.classList.remove("has-pointer");
    };
  }, []);

  return (
    <div className="motion-layer" aria-hidden="true">
      <div className="scroll-progress"><span /></div>
      <div className="cursor-glow" />
      <div className="cursor-ring"><i /></div>
      <div className="cursor-trail">
        {Array.from({ length: 7 }).map((_, index) => <span className="cursor-trail-dot" key={index} />)}
      </div>
      <div className="viewport-vignette" />
    </div>
  );
}
