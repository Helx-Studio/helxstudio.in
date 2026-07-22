"use client";
import { motion } from "motion/react";
const Performance = () => {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden flex items-center justify-center">
      {[0, 0.6].map((delay) => (
        <motion.span
          key={delay}
          className="absolute w-20 h-20 rounded-full border-2 border-emerald-400/50"
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* White rounded card */}
      <motion.svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: [1, 1.15, 1],
          filter: [
            "drop-shadow(0 0 0px rgba(16,185,129,0.6))",
            "drop-shadow(0 0 10px rgba(16,185,129,0.85))",
            "drop-shadow(0 0 0px rgba(16,185,129,0.6))",
          ],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient
            id="boltGradGreen"
            x1="4"
            y1="2"
            x2="20"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="45%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <path
          d="M13 2 L4.5 13.5 H11 L10.2 22 L19.5 10 H13 L13 2 Z"
          fill="url(#boltGradGreen)"
        />
      </motion.svg>
    </div>
  );
};

export default Performance;
