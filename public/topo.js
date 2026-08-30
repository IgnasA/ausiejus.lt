/* The Houdini twin of the canvas contour field (press H on the page).
   Same marching squares over the same value noise, but drawn by a CSS
   paint() worklet: time arrives as an animated registered @property
   (--topo-t), the pointer as --topo-mx/--topo-my, and the accent contour
   reads the live --accent token — zero JavaScript per frame. */

const CELL = 26;
const THRESHOLDS = [0.38, 0.48, 0.58, 0.68];
const ACCENT_INDEX = 2;

const SEGMENTS = {
  1: [[3, 2]], 2: [[2, 1]], 3: [[3, 1]], 4: [[1, 0]],
  5: [[3, 0], [1, 2]], 6: [[2, 0]], 7: [[3, 0]], 8: [[0, 3]],
  9: [[0, 2]], 10: [[0, 1], [2, 3]], 11: [[0, 1]],
  12: [[1, 3]], 13: [[1, 2]], 14: [[2, 3]],
};

function hash(ix, iy, iz) {
  const n = Math.sin(ix * 127.1 + iy * 311.7 + iz * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

const smooth = (t) => t * t * (3 - 2 * t);

function noise(x, y, z) {
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

const num = (v) => parseFloat(String(v)) || 0;

registerPaint(
  'topo',
  class {
    static get inputProperties() {
      return ['color', '--accent', '--topo-t', '--topo-mx', '--topo-my'];
    }

    paint(ctx, size, props) {
      const ink = String(props.get('color')).trim() || '#000';
      const accent = String(props.get('--accent')).trim() || ink;
      const t = num(props.get('--topo-t'));
      const mx = num(props.get('--topo-mx')) || -9999;
      const my = num(props.get('--topo-my')) || -9999;

      const fieldAt = (x, y) => {
        const d2 = (x - mx) ** 2 + (y - my) ** 2;
        return noise(x * 0.004, y * 0.004, t) + 0.22 * Math.exp(-d2 / 26000);
      };

      const nx = Math.ceil(size.width / CELL) + 1;
      const ny = Math.ceil(size.height / CELL) + 1;
      const grid = new Float32Array(nx * ny);
      for (let j = 0; j < ny; j++)
        for (let i = 0; i < nx; i++)
          grid[j * nx + i] = fieldAt(i * CELL, j * CELL);

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
            const point = (e) => {
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
    }
  }
);
