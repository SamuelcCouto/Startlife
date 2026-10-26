"use client";

import { useEffect, useState } from "react";

type Drop = {
  left: number;
  w: number;
  dur: number;
  delay: number;
  spin: number;
  dir: "normal" | "reverse";
  yellow: boolean;
};

const KEY = "sl_vc_intro";

function rnd(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function Intro() {
  const [drops, setDrops] = useState<Drop[] | null>(null);
  const [gone, setGone] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const force = (window.location.hash || "").replace("#", "") === "intro";
    let seen = false;
    try {
      seen = localStorage.getItem(KEY) === "1";
    } catch {}
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    if (reduce || (seen && !force)) {
      setGone(true);
      return;
    }

    const N = 34;
    const arr: Drop[] = [];
    let maxEnd = 0;
    for (let i = 0; i < N; i++) {
      const delay = rnd(0, 1.1);
      const dur = rnd(1.5, 2.8);
      if (delay + dur > maxEnd) maxEnd = delay + dur;
      arr.push({
        left: rnd(-2, 99),
        w: rnd(36, 78),
        dur,
        delay,
        spin: rnd(1.4, 3.2),
        dir: Math.random() < 0.5 ? "normal" : "reverse",
        yellow: Math.random() < 0.45,
      });
    }
    setDrops(arr);

    const t1 = setTimeout(() => setFade(true), maxEnd * 1000 + 300);
    const t2 = setTimeout(() => setGone(true), maxEnd * 1000 + 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone || !drops) return null;

  return (
    <div className="intro" aria-hidden="true" style={fade ? { opacity: 0 } : undefined}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <radialGradient id="gb" cx="37%" cy="30%" r="80%">
            <stop offset="0" stopColor="#5a5a5a" />
            <stop offset="42%" stopColor="#1b1b1b" />
            <stop offset="100%" stopColor="#040404" />
          </radialGradient>
          <radialGradient id="gy" cx="37%" cy="30%" r="80%">
            <stop offset="0" stopColor="#ffe59a" />
            <stop offset="45%" stopColor="#FDB92E" />
            <stop offset="100%" stopColor="#a9780d" />
          </radialGradient>
        </defs>
      </svg>
      {drops.map((d, i) => (
        <div
          key={i}
          className="idrop"
          style={{
            left: `${d.left}%`,
            width: `${d.w}px`,
            animationDuration: `${d.dur}s`,
            animationDelay: `${d.delay}s`,
          }}
        >
          <div
            className="spin"
            style={{ animationDuration: `${d.spin}s`, animationDirection: d.dir }}
          >
            <svg viewBox="0 0 104 48">
              <rect x="30" y="17" width="44" height="14" rx="7" fill={d.yellow ? "url(#gy)" : "url(#gb)"} />
              <circle cx="24" cy="24" r="22" fill={d.yellow ? "url(#gy)" : "url(#gb)"} />
              <circle cx="80" cy="24" r="22" fill={d.yellow ? "url(#gy)" : "url(#gb)"} />
              <ellipse cx="16" cy="15" rx="7" ry="4.5" fill="rgba(255,255,255,.45)" />
              <ellipse cx="72" cy="15" rx="7" ry="4.5" fill="rgba(255,255,255,.45)" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
