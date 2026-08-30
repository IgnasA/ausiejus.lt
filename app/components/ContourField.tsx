'use client';

import { useEffect, useRef } from 'react';

/* Token-aware topographic contour field (tracker/tickets/004): marching
   squares over animated value noise, one contour tinted with the live
   --accent (so the @property interpolation shows during a re-brand), and a
   soft bend around the cursor — or a finger, on touch. Decorative only:
   aria-hidden, pointer-events none, frozen under prefers-reduced-motion.

   Easter egg: pressing H swaps this <canvas> renderer for a Houdini twin —
   the same field drawn by a CSS paint() worklet (public/topo.js), animated
   by a registered @property number with zero JavaScript per frame. */

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

let hinted = false;

export default function ContourField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0, height = 0;
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let houdini = document.documentElement.classList.contains('houdini');
    let workletLoaded = false;
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

    const startTicking = () => {
      if (!reduced && !houdini && !raf) raf = requestAnimationFrame(tick);
    };
    const stopTicking = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    /* In Houdini mode the paint worklet reads the pointer through registered
       number properties — each write invalidates paint(), so the bend works
       there too. */
    const syncPointer = (x: number, y: number) => {
      mouse.x = x;
      mouse.y = y;
      if (houdini && paintRef.current) {
        paintRef.current.style.setProperty('--topo-mx', x.toFixed(1));
        paintRef.current.style.setProperty('--topo-my', y.toFixed(1));
      }
    };

    const onMove = (e: MouseEvent) => syncPointer(e.clientX, e.clientY);

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) syncPointer(t.clientX, t.clientY);
    };

    /* The easter egg toggle. Chromium-only by nature; elsewhere it says so
       in the console and leaves the canvas alone. */
    const onKey = (e: KeyboardEvent) => {
      if ((e.key !== 'h' && e.key !== 'H') || e.metaKey || e.ctrlKey || e.altKey)
        return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable))
        return;
      const paintWorklet = (CSS as unknown as { paintWorklet?: { addModule(url: string): Promise<void> } })
        .paintWorklet;
      if (!paintWorklet) {
        console.info('◐ no CSS Paint API here — the Houdini twin needs Chromium.');
        return;
      }
      const apply = () => {
        houdini = !houdini;
        document.documentElement.classList.toggle('houdini', houdini);
        if (houdini) stopTicking();
        else startTicking();
        if (reduced) draw(0);
      };
      if (!houdini && !workletLoaded) {
        paintWorklet.addModule('/topo.js').then(() => {
          workletLoaded = true;
          apply();
        });
      } else {
        apply();
      }
    };

    // Reduced motion: static field, redrawn at the ends of the token
    // transition so a re-brand still lands without continuous animation.
    const onRebrand = () => {
      if (!reduced) return;
      draw(0);
      timeouts.push(setTimeout(() => draw(0), 700));
    };

    if (!hinted) {
      hinted = true;
      console.info(
        '%c◐ contour field: <canvas> renderer.%c There is a Houdini twin — ' +
          'press H to switch to a CSS paint() worklet driven by an animated ' +
          '@property (Chromium). Source: https://github.com/IgnasA/ausiejus.lt',
        'font-weight:600',
        ''
      );
    }

    size();
    addEventListener('resize', size);
    addEventListener('rebrand', onRebrand);
    addEventListener('keydown', onKey);
    if (!reduced) {
      addEventListener('mousemove', onMove, { passive: true });
      addEventListener('touchstart', onTouch, { passive: true });
      addEventListener('touchmove', onTouch, { passive: true });
      startTicking();
    }

    return () => {
      stopTicking();
      timeouts.forEach(clearTimeout);
      removeEventListener('resize', size);
      removeEventListener('rebrand', onRebrand);
      removeEventListener('keydown', onKey);
      removeEventListener('mousemove', onMove);
      removeEventListener('touchstart', onTouch);
      removeEventListener('touchmove', onTouch);
    };
  }, []);

  return (
    <>
      <canvas id="field" ref={canvasRef} aria-hidden="true" />
      <div id="field-paint" ref={paintRef} aria-hidden="true" />
    </>
  );
}
