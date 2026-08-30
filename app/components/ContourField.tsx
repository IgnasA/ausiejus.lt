'use client';

import { useEffect, useRef } from 'react';

/* Token-aware topographic contour field (tracker/tickets/004): marching
   squares over animated value noise, one contour tinted with the live
   --accent (so the @property interpolation shows during a re-brand), and a
   soft bend around the cursor. Decorative only: aria-hidden, pointer-events
   none, frozen under prefers-reduced-motion. */

const CELL = 26;
const THRESHOLDS = [0.38, 0.48, 0.58, 0.68];
const ACCENT_INDEX = 2;

const SEGMENTS: Record<number, [number, number][]> = {
  1: [[3, 2]], 2: [[2, 1]], 3: [[3, 1]], 4: [[1, 0]],
  5: [[3, 0], [1, 2]], 6: [[2, 0]], 7: [[3, 0]], 8: [[0, 3]],
  9: [[0, 2]], 10: [[0, 1], [2, 3]], 11: [[0, 1]],
  12: [[1, 3]], 13: [[1, 2]], 14: [[2, 3]],
};

function hash(ix: number, iy: number, iz: number) {
  const n = Math.sin(ix * 127.1 + iy * 311.7 + iz * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

const smooth = (t: number) => t * t * (3 - 2 * t);

function noise(x: number, y: number, z: number) {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = smooth(x - ix), fy = smooth(y - iy), fz = smooth(z - iz);
  let v = 0;
  for (let dz = 0; dz <= 1; dz++)
    for (let dy = 0; dy <= 1; dy++)
      for (let dx = 0; dx <= 1; dx++)
        v += hash(ix + dx, iy + dy, iz + dz) *
          (dx ? fx : 1 - fx) * (dy ? fy : 1 - fy) * (dz ? fz : 1 - fz);
  return v;
}

export default function ContourField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0, height = 0;
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const fieldAt = (x: number, y: number, t: number) => {
      const d2 = (x - mouse.x) ** 2 + (y - mouse.y) ** 2;
      return noise(x * 0.004, y * 0.004, t) + 0.22 * Math.exp(-d2 / 26000);
    };

    const draw = (t: number) => {
      const style = getComputedStyle(document.body);
      const ink = style.color;
      const accent = style.getPropertyValue('--accent').trim() || ink;
      ctx.clearRect(0, 0, width, height);

      const nx = Math.ceil(width / CELL) + 1;
      const ny = Math.ceil(height / CELL) + 1;
      const grid = new Float32Array(nx * ny);
      for (let j = 0; j < ny; j++)
        for (let i = 0; i < nx; i++)
          grid[j * nx + i] = fieldAt(i * CELL, j * CELL, t);

      THRESHOLDS.forEach((th, k) => {
        ctx.strokeStyle = k === ACCENT_INDEX ? accent : ink;
        ctx.globalAlpha = k === ACCENT_INDEX ? 0.13 : 0.07;
        ctx.beginPath();
        for (let j = 0; j < ny - 1; j++) {
          for (let i = 0; i < nx - 1; i++) {
            const tl = grid[j * nx + i], tr = grid[j * nx + i + 1];
            const br = grid[(j + 1) * nx + i + 1], bl = grid[(j + 1) * nx + i];
            const idx =
              (tl > th ? 8 : 0) | (tr > th ? 4 : 0) |
              (br > th ? 2 : 0) | (bl > th ? 1 : 0);
            const segs = SEGMENTS[idx];
            if (!segs) continue;
            const x = i * CELL, y = j * CELL;
            const point = (e: number): [number, number] => {
              if (e === 0) return [x + (CELL * (th - tl)) / (tr - tl), y];
              if (e === 1) return [x + CELL, y + (CELL * (th - tr)) / (br - tr)];
              if (e === 2) return [x + (CELL * (th - bl)) / (br - bl), y + CELL];
              return [x, y + (CELL * (th - tl)) / (bl - tl)];
            };
            for (const [a, b] of segs) {
              const [ax, ay] = point(a);
              const [bx, by] = point(b);
              if ([ax, ay, bx, by].every(Number.isFinite)) {
                ctx.moveTo(ax, ay);
                ctx.lineTo(bx, by);
              }
            }
          }
        }
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    };

    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      width = innerWidth;
      height = innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0);
    };

    const tick = (ms: number) => {
      draw(ms * 0.00003);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Reduced motion: static field, redrawn at the ends of the token
    // transition so a re-brand still lands without continuous animation.
    const onRebrand = () => {
      if (!reduced) return;
      draw(0);
      timeouts.push(setTimeout(() => draw(0), 700));
    };

    size();
    addEventListener('resize', size);
    addEventListener('rebrand', onRebrand);
    if (!reduced) {
      addEventListener('mousemove', onMove, { passive: true });
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      timeouts.forEach(clearTimeout);
      removeEventListener('resize', size);
      removeEventListener('rebrand', onRebrand);
      removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas id="field" ref={canvasRef} aria-hidden="true" />;
}
