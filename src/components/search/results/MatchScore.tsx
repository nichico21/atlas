"use client";

import { useEffect, useState } from "react";

type MatchScoreProps = {
  score: number;
  level: "strong" | "potential" | "related";
};

const config = {
  strong: {
    color: "#16a34a",
    background: "#DCFCE7",
    border: "#86EFAC",
    text: "Strong Match",
  },
  potential: {
    color: "#D97706",
    background: "#FEF3C7",
    border: "#FCD34D",
    text: "Potential Match",
  },
  related: {
    color: "#2563EB",
    background: "#DBEAFE",
    border: "#93C5FD",
    text: "Related Capability",
  },
};

export default function MatchScore({
  score,
  level,
}: MatchScoreProps) {

    const [animatedScore, setAnimatedScore] = useState(0);
    
  const size = 86;
  const stroke = 6;

  const radius = (size - stroke) / 2;

  const circumference = 2 * Math.PI * radius;

  const progress =
  circumference - (animatedScore / 100) * circumference;

  const theme = config[level];
  

useEffect(() => {
  let current = 0;

  const timer = setInterval(() => {
    current += 2;

    if (current >= score) {
      current = score;
      clearInterval(timer);
    }

    setAnimatedScore(current);
  }, 12);

  return () => clearInterval(timer);
}, [score]);

  return (
    <div className="flex w-[120px] flex-col items-center">

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
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={theme.color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            className="transition-all duration-700"
          />

        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-[30px] font-bold leading-none text-slate-900">
            {animatedScore}%
          </span>

          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
            STRONG
          </span>

        </div>

      </div>

      <span
        className="mt-4 rounded-full border px-3 py-1 text-xs font-semibold"
        style={{
          color: theme.color,
          borderColor: theme.border,
          backgroundColor: theme.background,
        }}
      >
        {theme.text}
      </span>

    </div>
  );
}