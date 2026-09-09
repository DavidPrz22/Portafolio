"use client";

import React, { useEffect, useRef } from 'react';
import { ConstellationConfig, Particle } from '@/app/lib/types';

interface ConstellationFieldProps {
  config?: Partial<ConstellationConfig>;
  className?: string;
  onParticleStatsChange?: (stats: { count: number; connections: number }) => void;
}

const DEFAULT_CONFIG: ConstellationConfig = {
  particleCount: 65,
  connectionDistance: 130,
  mouseRadius: 150,
  speed: 0.4,
  triangles: true,
  glowEffect: true,
  interactive: true,
};

export const ConstellationField: React.FC<ConstellationFieldProps> = ({
  config: userConfig,
  className = '',
  onParticleStatsChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const config = { ...DEFAULT_CONFIG, ...userConfig };

  // Mouse state
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: config.mouseRadius,
  });

  // Ripples from clicks
  const ripplesRef = useRef<Array<{ x: number; y: number; radius: number; maxRadius: number; alpha: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // High DPI scaling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Particle collection
    let particles: Particle[] = [];

    const colors = [
      { r: 45, g: 212, b: 191 }, // Teal #2dd4bf
      { r: 56, g: 189, b: 248 }, // Cyan #38bdf8
      { r: 94, g: 234, b: 212 }, // Light mint #5eead4
      { r: 147, g: 197, b: 253 }, // Soft sky blue #93c5fd
    ];

    const initParticles = () => {
      particles = [];
      // Calculate particle count based on screen area to ensure optimal density
      const area = width * height;
      const calculatedCount = Math.min(
        Math.max(Math.floor(area / 9000), 40),
        95
      );
      const count = userConfig?.particleCount ?? calculatedCount;

      for (let i = 0; i < count; i++) {
        // Distribute particles with natural weight toward right and center
        // Giving a subtle organic star cluster shape
        const xBias = Math.pow(Math.random(), 0.85);
        const x = xBias * width;
        const y = Math.random() * height;

        const speedMultiplier = (0.5 + Math.random() * 0.8) * config.speed;
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * speedMultiplier;
        const vy = Math.sin(angle) * speedMultiplier;

        const isHub = Math.random() < 0.14;
        // Keep normal particles visible as before; moderate the hub particles so they aren't glaringly bright
        const baseRadius = isHub ? 2.4 + Math.random() * 1.0 : 1.2 + Math.random() * 1.4;
        const baseAlpha = isHub ? 0.52 + Math.random() * 0.16 : 0.35 + Math.random() * 0.40;

        const colorObj = colors[Math.floor(Math.random() * colors.length)];
        const color = `${colorObj.r}, ${colorObj.g}, ${colorObj.b}`;

        particles.push({
          x,
          y,
          vx,
          vy,
          baseRadius,
          radius: baseRadius,
          alpha: baseAlpha,
          baseAlpha,
          twinkleSpeed: 0.015 + Math.random() * 0.03,
          twinklePhase: Math.random() * Math.PI * 2,
          color,
          isHub,
          glowRadius: isHub ? 10 + Math.random() * 8 : 0,
        });
      }
    };

    initParticles();

    // Mouse listeners relative to container
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Add a subtle expanding ripple
      ripplesRef.current.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.4,
      });

      // Give slight impulse to nearby particles
      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160 && dist > 1) {
          const force = (1 - dist / 160) * 2.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    };

    if (config.interactive) {
      window.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseLeave);
      container.addEventListener('click', onClick);
    }

    let frameCount = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      const mouse = mouseRef.current;
      let activeConnections = 0;

      // Update ripples
      for (let r = ripplesRef.current.length - 1; r >= 0; r--) {
        const ripple = ripplesRef.current[r];
        ripple.radius += 3;
        ripple.alpha = (1 - ripple.radius / ripple.maxRadius) * 0.4;

        if (ripple.radius >= ripple.maxRadius || ripple.alpha <= 0) {
          ripplesRef.current.splice(r, 1);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(45, 212, 191, ${ripple.alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Update and draw particles
      const count = particles.length;

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Organic movement
        p.x += p.vx;
        p.y += p.vy;

        // Subtle friction/damping so impulse doesn't drift infinitely
        p.vx *= 0.992;
        p.vy *= 0.992;

        // Gentle floating restoring velocity
        if (Math.abs(p.vx) < 0.1) p.vx += (Math.random() - 0.5) * 0.04;
        if (Math.abs(p.vy) < 0.1) p.vy += (Math.random() - 0.5) * 0.04;

        // Wrap or bounce softly on boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Twinkle phase - restored natural twinkling with controlled brightness
        p.twinklePhase += p.twinkleSpeed;
        const twinkle = Math.sin(p.twinklePhase) * 0.2;
        p.alpha = Math.max(0.18, Math.min(0.72, p.baseAlpha + twinkle));

        // Mouse interaction: subtle attraction or gentle repulsion
        if (mouse.x !== null && mouse.y !== null && config.interactive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Gentle magnetic attraction towards cursor
            const force = (1 - dist / mouse.radius) * 0.02;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;

            // Constellation line to mouse cursor
            const mouseLineAlpha = (1 - dist / mouse.radius) * 0.32;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${mouseLineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
            activeConnections++;
          }
        }
      }

      // Draw connection lines between neighboring particles
      for (let i = 0; i < count; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < config.connectionDistance) {
            activeConnections++;
            // Calculate opacity proportional to proximity
            const distRatio = 1 - dist / config.connectionDistance;
            const lineAlpha = distRatio * distRatio * 0.20;

            // Draw line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${lineAlpha})`;
            ctx.lineWidth = distRatio * 0.85 + 0.3;
            ctx.stroke();

            // Optional subtle constellation triangle faces
            if (config.triangles && dist < config.connectionDistance * 0.75) {
              for (let k = j + 1; k < count; k++) {
                const p3 = particles[k];
                const d1 = Math.hypot(p1.x - p3.x, p1.y - p3.y);
                const d2 = Math.hypot(p2.x - p3.x, p2.y - p3.y);

                if (d1 < config.connectionDistance * 0.75 && d2 < config.connectionDistance * 0.75) {
                  const triAlpha = Math.min(distRatio, 1 - d1 / config.connectionDistance) * 0.022;
                  ctx.beginPath();
                  ctx.moveTo(p1.x, p1.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.lineTo(p3.x, p3.y);
                  ctx.closePath();
                  ctx.fillStyle = `rgba(45, 212, 191, ${triAlpha})`;
                  ctx.fill();
                }
              }
            }
          }
        }
      }

      // Draw particle nodes (with moderate, non-glaring brightness on hub nodes)
      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Soft, balanced glow halo on hub nodes without harsh over-saturation
        if (config.glowEffect && p.isHub) {
          const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowRadius);
          glowGrad.addColorStop(0, `rgba(${p.color}, ${p.alpha * 0.24})`);
          glowGrad.addColorStop(0.65, `rgba(${p.color}, ${p.alpha * 0.06})`);
          glowGrad.addColorStop(1, `rgba(${p.color}, 0)`);

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw core node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        // Very gentle center highlight (eliminating the previous high-glare blinding white hotspot)
        if (p.isHub) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.22})`;
          ctx.fill();
        }
      }

      // Report stats periodically
      if (frameCount % 30 === 0 && onParticleStatsChange) {
        onParticleStatsChange({
          count,
          connections: activeConnections,
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (config.interactive) {
        window.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseLeave);
        container.removeEventListener('click', onClick);
      }
    };
  }, [config.particleCount, config.connectionDistance, config.speed, config.triangles, config.glowEffect, config.interactive]);

  return (
    <div
      ref={containerRef}
      id="constellation-particle-field"
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        // Soft gradient mask so particles fade subtly on the left towards the portfolio text
        maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,1) 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,1) 100%)',
      }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-crosshair"
      />
      {/* Subtle ambient light aura behind the constellation cluster */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-sky-500/5 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
    </div>
  );
};
