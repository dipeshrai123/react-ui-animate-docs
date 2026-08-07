import React, { useEffect, useRef } from 'react';

const SPACING = 26;
const INFLUENCE = 140;
const PUSH = 16;
const EASE = 0.12;

/**
 * The hero's dot-matrix backdrop, redone as a canvas so each dot can react
 * to the cursor: dots inside the influence radius are pushed radially
 * outward and grow slightly, then ease back once the pointer moves away —
 * a "bulge" rather than a static background-image pattern.
 */
export default function HeroMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots = [];
    let frameId;
    let running = true;

    const pointer = { x: -9999, y: -9999, active: false };

    const buildDots = () => {
      dots = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            baseX: col * SPACING,
            baseY: row * SPACING,
            ox: 0,
            oy: 0,
            scale: 1,
          });
        }
      }
    };

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
    };

    const fadeTop = height * 0.9;

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        let tx = 0;
        let ty = 0;
        let targetScale = 1;

        if (pointer.active) {
          const dx = dot.baseX - pointer.x;
          const dy = dot.baseY - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < INFLUENCE) {
            const falloff = 1 - dist / INFLUENCE;
            const eased = falloff * falloff;
            const angle = Math.atan2(dy, dx);
            tx = Math.cos(angle) * PUSH * eased;
            ty = Math.sin(angle) * PUSH * eased;
            targetScale = 1 + eased * 1.6;
          }
        }

        dot.ox += (tx - dot.ox) * EASE;
        dot.oy += (ty - dot.oy) * EASE;
        dot.scale += (targetScale - dot.scale) * EASE;

        const x = dot.baseX + dot.ox;
        const y = dot.baseY + dot.oy;

        const verticalFade = y > fadeTop ? Math.max(0, 1 - (y - fadeTop) / (height - fadeTop)) : 1;
        const alpha = 0.16 * verticalFade;
        if (alpha <= 0.002) continue;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(x, y, 1 * dot.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(step);
    };

    const toLocal = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handlePointerMove = (e) => {
      const { x, y } = toLocal(e.clientX, e.clientY);
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frameId);
      } else if (!running) {
        running = true;
        frameId = requestAnimationFrame(step);
      }
    };

    resize();

    if (prefersReducedMotion) {
      // Draw a single static frame, no rAF loop, no pointer tracking.
      step();
      running = false;
      return () => cancelAnimationFrame(frameId);
    }

    frameId = requestAnimationFrame(step);
    parent.addEventListener('pointermove', handlePointerMove);
    parent.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimer);
      parent.removeEventListener('pointermove', handlePointerMove);
      parent.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
