'use client';

import { useEffect, useRef, useState } from 'react';

/* A small design-system inspector: toggled from the footer, it annotates
   whatever the pointer is over with the tokens styling it, read live from
   getComputedStyle — so a re-brand shows the values interpolating inside
   the tooltip. Elements opt in via data-tokens="--a --b"; anchors always
   report --accent. */

type Tip = { x: number; y: number; lines: string[] };

export default function TokenInspector() {
  const [on, setOn] = useState(false);
  const [tip, setTip] = useState<Tip | null>(null);
  const currentRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!on) {
      currentRef.current?.classList.remove('inspecting');
      currentRef.current = null;
      setTip(null);
      return;
    }

    document.documentElement.classList.add('inspect');

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const host = target?.closest('[data-tokens]') ?? null;

      if (host !== currentRef.current) {
        currentRef.current?.classList.remove('inspecting');
        host?.classList.add('inspecting');
        currentRef.current = host;
      }
      if (!host) {
        setTip(null);
        return;
      }

      const tokens = (host.getAttribute('data-tokens') ?? '').split(/\s+/);
      if (target?.closest('a')) tokens.unshift('--accent');
      const style = getComputedStyle(host);
      const lines = [...new Set(tokens)].map(
        (t) => `${t}: ${style.getPropertyValue(t).trim()}`
      );
      setTip({ x: e.clientX, y: e.clientY, lines });
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOn(false);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.classList.remove('inspect');
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('keydown', onKey);
      currentRef.current?.classList.remove('inspecting');
      currentRef.current = null;
    };
  }, [on]);

  return (
    <>
      <span className="jsonly">
        <button
          type="button"
          className="inspect-toggle"
          aria-pressed={on}
          onClick={() => setOn((v) => !v)}
        >
          {on ? 'done inspecting (esc)' : '{ } inspect tokens'}
        </button>
      </span>
      {tip && tip.lines.length > 0 && (
        <div
          className="token-tip"
          style={{
            left: Math.min(tip.x + 16, innerWidth - 240),
            top: Math.min(tip.y + 18, innerHeight - 24 * tip.lines.length - 20),
          }}
        >
          {tip.lines.join('\n')}
        </div>
      )}
    </>
  );
}
