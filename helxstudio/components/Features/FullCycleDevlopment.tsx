"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Phase = {
  id: string;
  label: string;
  sublabel: string;
  emoji: string;
  badgeBg: string;
  badgeRing: string;
};

const PHASES: Phase[] = [
  {
    id: "plan",
    label: "Plan",
    sublabel: "Mapping scope & requirements",
    emoji: "📋",
    badgeBg: "bg-[#0A84FF]",
    badgeRing: "ring-[#0A84FF]/40",
  },
  {
    id: "design",
    label: "Design",
    sublabel: "Crafting UI & experience",
    emoji: "🎨",
    badgeBg: "bg-[#BF5AF2]",
    badgeRing: "ring-[#BF5AF2]/40",
  },
  {
    id: "development",
    label: "Development",
    sublabel: "Building & shipping code",
    emoji: "💻",
    badgeBg: "bg-[#FF9F0A]",
    badgeRing: "ring-[#FF9F0A]/40",
  },
  {
    id: "testing-hosting",
    label: "Testing / Hosting",
    sublabel: "QA, deploy & go live",
    emoji: "🚀",
    badgeBg: "bg-[#30D158]",
    badgeRing: "ring-[#30D158]/40",
  },
];

type NotificationStackCardProps = {
  /** ms between phase changes */
  intervalMs?: number;
  /** app name shown in the notification header */
  appName?: string;
  className?: string;
};

export default function NotificationStackCard({
  intervalMs = 2600,
  appName = "AGENCY OS",
  className = "",
}: NotificationStackCardProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % PHASES.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);

  const active = PHASES[index];

  return (
    <div
      className={`relative w-full  max-w-sm rounded-xl border border-white/10 bg-neutral-50 p-5  flex flex-col mb-3 h-50 items-center ${className}`}
    >
      {/* notification stack */}
      <div className="absolute bottom-4 w-full h-[128px]">
        {/* ghost card 2 (back) */}
        <div className="absolute inset-x-6 scale-96 top-[26px] h-[92px] rounded-2xl bg-black/[0.03] border border-black/[0.06]" />
        {/* ghost card 1 (middle) */}
        <div className="absolute inset-x-3 scale-96 top-[13px] h-[92px] rounded-2xl bg-black/[0.05] border border-black/[0.08]" />

        {/* front notification */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active.id}
            initial={{ y: -36, opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 8, opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            className="absolute inset-x-0 scale-96 top-0 h-[92px] rounded-2xl bg-neutral-50 border border-black/10 backdrop-blur-xl px-4 py-3 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`w-8 h-8 shrink-0 rounded-[9px] ${active.badgeBg} ring-4 ${active.badgeRing} flex items-center justify-center text-[15px]`}
              >
                {active.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-black/45 text-[10px] font-semibold tracking-wide">
                    {appName}
                  </span>
                  <span className="text-black/35 text-[10px]">now</span>
                </div>
                <p className="text-neutral-800 text-[13.5px] font-semibold leading-tight truncate">
                  {active.label}
                </p>
              </div>
            </div>
            <p className="text-black/55 text-[12px] mt-1.5 pl-[42px] truncate">
              {active.sublabel}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
