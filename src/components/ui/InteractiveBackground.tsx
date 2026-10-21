"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      // Lerp mouse follow
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      if (container) {
        container.style.setProperty("--mouse-x", `${currentX}px`);
        container.style.setProperty("--mouse-y", `${currentY}px`);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-[#08080a]" />

      {/* Modern subtle developer grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top ambient violet aura */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-violet-600/15 via-purple-900/10 to-transparent rounded-full blur-[120px]" />

      {/* Dynamic mouse follower light */}
      <div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          left: "var(--mouse-x, -300px)",
          top: "var(--mouse-y, -300px)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
