"use client";

import { useEffect, useMemo, useState } from "react";

type MatchLevel = "strong" | "potential" | "related";

type MatchScoreProps = {
  score: number;
  level: MatchLevel;
};

const CONFIG = {
  strong: {
    color: "#16A34A",
    badgeBg: "#DCFCE7",
    badgeBorder: "#86EFAC",
    badgeText: "Strong Match",
    label: "STRONG",
  },
  potential: {
    color: "#D97706",
    badgeBg: "#FEF3C7",
    badgeBorder: "#FCD34D",
    badgeText: "Potential Match",
    label: "GOOD",
  },
  related: {
    color: "#2563EB",
    badgeBg: "#DBEAFE",
    badgeBorder: "#93C5FD",
    badgeText: "Related Capability",
    label: "MATCH",
  },
};

export default function MatchScore({
  score,
  level,
}: MatchScoreProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;

    const duration = 900;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;

      const t = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);

      setProgress(score * eased);

      if (t < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [score]);

  const theme = CONFIG[level];

  const size = 88;
  const stroke = 6;

  const radius = (size - stroke) / 2;

  const circumference = 2 * Math.PI * radius;

  /**
   * On laisse volontairement un espace d'environ 12 %
   * pour reproduire le cercle du mockup.
   */
  const visibleArc = circumference * 0.99;

  const dashOffset = useMemo(() => {
    return visibleArc - (progress / 100) * visibleArc;
  }, [progress, visibleArc]);

  return (
    <div className="flex flex-col items-center">

      <div className="relative">

        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={stroke}
            strokeDasharray={`${visibleArc} ${circumference}`}
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={theme.color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${visibleArc} ${circumference}`}
            strokeDashoffset={dashOffset}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-[30px] font-bold leading-none text-slate-900">
            {Math.round(progress)}%
          </span>

          <span className="mt-1 text-[10px] font-bold tracking-[0.15em] text-slate-500">
            {theme.label}
          </span>

        </div>

      </div>

      <span
        className="mt-4 rounded-full border px-3 py-1 text-xs font-semibold"
        style={{
          background: theme.badgeBg,
          borderColor: theme.badgeBorder,
          color: theme.color,
        }}
      >
        {theme.badgeText}
      </span>

    </div>
  );
}