import React, { useEffect, useRef } from 'react';

const COLORS = ['255, 255, 255'];

/**
 * Lightweight floating-particle background for the hero. Runs on a canvas
 * driven by its own rAF loop rather than React state, so it never touches
 * React's render cycle no matter how many particles are on screen.
 */
export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return undefined;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frameId;
    let running = true;

    const rand = (min, max) => Math.random() * (max - min) + min;

    const makeParticle = () => ({
      x: rand(0, width),
      y: rand(0, height),
      r: rand(0.7, 1.8),
      vx: rand(-0.08, 0.08),
      vy: rand(-0.1, -0.02),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      baseAlpha: rand(0.18, 0.42),
      twinkleSpeed: rand(0.0008, 0.002),
      twinklePhase: rand(0, Math.PI * 2),
    });

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(60, Math.max(24, Math.round((width * height) / 22000)));
      particles = Array.from({ length: count }, makeParticle);
    };

    const step = (time) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = rand(0, width);
        }

        const twinkle = 0.5 + 0.5 * Math.sin(time * p.twinkleSpeed + p.twinklePhase);
        const alpha = p.baseAlpha * (0.4 + 0.6 * twinkle);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 1.8);
        gradient.addColorStop(0, `rgba(${p.color}, ${alpha})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.r * 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, ${alpha * 0.9})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(step);
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

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    resize();
    frameId = requestAnimationFrame(step);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimer);
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
