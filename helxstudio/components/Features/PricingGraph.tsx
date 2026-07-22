"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PATH_D =
  "M0.402344 140.344C12.7357 123.678 40.7023 90.1444 53.9023 89.3444C70.4023 88.3444 73.4023 109.844 82.4023 110.844C91.4023 111.844 129.402 110.844 132.902 110.844C136.402 110.844 159.902 70.8447 166.902 70.8447C173.902 70.8447 246.902 70.8447 248.402 70.8447C249.602 70.8447 294.569 23.8447 316.902 0.344727";

export function SweepLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  // How long the "comet" streak is relative to the full path
  const dashLength = length * 0.28;

  return (
    <svg
      width="318"
      height="142"
      viewBox="0 0 318 142"
      fill="none"
      className="scale-110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft fade at the head/tail of the moving streak */}
        <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2bfb2d" stopOpacity="0" />
          <stop offset="50%" stopColor="#2bfb2d" stopOpacity="1" />
          <stop offset="100%" stopColor="#2bfb2d" stopOpacity="0" />
        </linearGradient>

        <filter id="sweepGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base static line (bottom layer) */}
      <path d={PATH_D} stroke="#91ff92" strokeWidth="1" />

      {/* Faint full blue line underneath the traveling streak, so the path reads even between passes */}
      <path d={PATH_D} stroke="#2bfb2d" strokeOpacity="0.15" strokeWidth="1" />

      {/* Invisible path used only to measure total length */}
      <path ref={pathRef} d={PATH_D} stroke="none" fill="none" />

      {/* Traveling highlight streak (top layer) */}
      {length > 0 && (
        <motion.path
          d={PATH_D}
          stroke="url(#sweepGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#sweepGlow)"
          style={{
            strokeDasharray: `${dashLength} ${length - dashLength}`,
          }}
          initial={{ strokeDashoffset: dashLength }}
          animate={{ strokeDashoffset: -length }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.8, // pause between passes = the "interval"
          }}
        />
      )}
    </svg>
  );
}
