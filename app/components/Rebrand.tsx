'use client';

import { useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';

/* The signature moment: each click swaps the design-token layer into a fake
   partner brand. Colors only — the name's typeface is identity and never
   re-brands. The contour field reads the interpolating --accent live. */

const BRANDS = [
  { name: '', readout: '' },
  { name: 'aurora', readout: '--bg:#0e1024 · --accent:#8b87ff' },
  { name: 'koral', readout: '--bg:#fff6f2 · --accent:#c8440e' },
  { name: 'mint', readout: '--bg:#f2f8f4 · --accent:#0d7a4f' },
] as const;

export default function Rebrand() {
  const [idx, setIdx] = useState(0);

  useLayoutEffect(() => {
    const brand = BRANDS[idx].name;
    if (brand) document.documentElement.dataset.brand = brand;
    else delete document.documentElement.dataset.brand;
    window.dispatchEvent(new CustomEvent('rebrand'));
  }, [idx]);

  /* The swap runs inside a View Transition where supported — but only the
     token readout is named for it; the root crossfade is disabled in CSS so
     the live @property interpolation (which the contour field reads) stays
     visible instead of being hidden behind a snapshot fade. */
  const cycle = () => {
    const update = () =>
      flushSync(() => setIdx((prev) => (prev + 1) % BRANDS.length));
    if (
      document.startViewTransition &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.startViewTransition(update);
    } else {
      update();
    }
  };

  return (
    <>
      <p className="meta">
        Vilnius · currently at Equals
        <span className="rebrand">
          {' · '}
          <button type="button" onClick={cycle}>
            ◐ re-brand this page
          </button>
        </span>
      </p>
      <p className="token-readout" aria-live="polite">
        {idx === 0 ? '' : BRANDS[idx].readout}
      </p>
    </>
  );
}
