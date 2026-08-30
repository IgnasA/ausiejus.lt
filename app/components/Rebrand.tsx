'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { deriveBrand, type Derived } from '../lib/derive';

/* The signature moment: each click swaps the design-token layer into a fake
   partner brand. Colors only — the name's typeface is identity and never
   re-brands. The contour field reads the interpolating --accent live.
   The color well goes one further: the visitor seeds a brand of their own
   and the page derives a full AA-checked token set from it. */

const BRANDS = [
  { name: '', readout: '' },
  { name: 'aurora', readout: '--bg:#0e1024 · --accent:#8b87ff' },
  { name: 'koral', readout: '--bg:#fff6f2 · --accent:#c8440e' },
  { name: 'mint', readout: '--bg:#f2f8f4 · --accent:#0d7a4f' },
] as const;

const TOKEN_PROPS = ['--bg', '--ink', '--muted', '--accent'] as const;

const VILNIUS = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Vilnius',
});

function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(VILNIUS.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  /* Space-stable placeholder (tabular digits, same char count) so the real
     time appears with zero layout shift; stays hidden without JS. */
  return (
    <span className="clock" style={{ visibility: time ? 'visible' : 'hidden' }}>
      {' · '}
      {time || '00:00'} local
    </span>
  );
}

export default function Rebrand() {
  const [idx, setIdx] = useState(0);
  const [custom, setCustom] = useState<{ hex: string; brand: Derived } | null>(null);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (custom) {
      delete root.dataset.brand;
      root.style.setProperty('--bg', custom.brand.bg);
      root.style.setProperty('--ink', custom.brand.ink);
      root.style.setProperty('--muted', custom.brand.muted);
      root.style.setProperty('--accent', custom.brand.accent);
    } else {
      TOKEN_PROPS.forEach((p) => root.style.removeProperty(p));
      const brand = BRANDS[idx].name;
      if (brand) root.dataset.brand = brand;
      else delete root.dataset.brand;
    }
    window.dispatchEvent(new CustomEvent('rebrand'));
  }, [idx, custom]);

  /* The swap runs inside a View Transition where supported — but only the
     token readout is named for it; the root crossfade is disabled in CSS so
     the live @property interpolation (which the contour field reads) stays
     visible instead of being hidden behind a snapshot fade. */
  const cycle = () => {
    const update = () =>
      flushSync(() => {
        setCustom(null);
        setIdx((prev) => (prev + 1) % BRANDS.length);
      });
    if (
      document.startViewTransition &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      // .finished rejects if the transition is skipped (e.g. rapid clicks
      // or navigating away mid-swap); the swap itself still lands.
      document.startViewTransition(update).finished.catch(() => {});
    } else {
      update();
    }
  };

  /* No View Transition here: the well streams input events while the picker
     is dragged, and the tokens animating live is the point. */
  const onPick = (hex: string) => setCustom({ hex, brand: deriveBrand(hex) });

  const readout = custom
    ? `derived · --bg:${custom.brand.bg} · --accent:${custom.brand.accent} · AA ${custom.brand.ratio}:1`
    : BRANDS[idx].readout;

  return (
    <>
      <p className="meta" data-tokens="--muted">
        Vilnius · currently at Equals
        <span className="rebrand">
          {' · '}
          <button type="button" onClick={cycle}>
            ◐ re-brand this page
          </button>
          {' · '}
          <label className="own">
            or yours:{' '}
            <input
              type="color"
              value={custom?.hex ?? '#8b87ff'}
              onChange={(e) => onPick(e.target.value)}
              aria-label="Pick a color — the page derives a brand from it"
            />
          </label>
        </span>
        <LocalTime />
      </p>
      <p className="token-readout" aria-live="polite">
        {readout}
      </p>
    </>
  );
}
