"use client";
import { motion, MotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ZodiacSagittarius } from "lucide-react";
import { ArrowDown } from "pixelarticons/react";
const RightSection = ({
  rightWidth,
  leftRight,
  leftBottom,
  line1X,
  line2X,
  line3X,
  line1F,
  line2F,
  line3F,
  iconDiv,
  svgMove,
}: {
  rightWidth: MotionValue<string>;
  leftRight: MotionValue<string>;
  leftBottom: MotionValue<string>;
  line1X: MotionValue<number>;
  line2X: MotionValue<number>;
  line3X: MotionValue<number>;
  line1F: MotionValue<number>;
  line2F: MotionValue<number>;
  line3F: MotionValue<number>;
  iconDiv: MotionValue<number>;
  svgMove: MotionValue<number>;
}) => {
  const [active, setActive] = useState(0);
  const svgMove18 = useTransform(svgMove, (value) => value * 18);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 2) % 3);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        width: rightWidth,
      }}
      className="h-full     max-h-181 bg-[#fcfcfc] relative  flex flex-col"
    >
      <motion.div
        style={{ top: iconDiv }}
        className="w-45 gap-3.5 flex items-center justify-between  -translate-x-1/2 left-1/2 -translate-y-1/2   h-6 absolute "
      ></motion.div>

      <motion.div
        style={{ height: leftRight }}
        className="flex items-center relative  border-l border-b border-neutral-300 justify-center "
      >
        <div className="text-xl bg-neutral-50 font-secondary flex flex-col realtive  -space-y-2  font-medium text-neutral-900">
          <motion.p
            style={{ x: line1X, fontSize: line1F }}
            className="whitespace-nowrap"
          >
            We design, develop, and launch
          </motion.p>

          <motion.p
            style={{ x: line2X, fontSize: line2F }}
            className="whitespace-nowrap"
          >
            high-performance websites crafted
          </motion.p>

          <motion.p
            style={{ x: line3X, fontSize: line3F }}
            className="whitespace-nowrap"
          >
            to engage users and accelerate growth.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        style={{ height: leftBottom }}
        id="backgounf"
        className="px-3 flex flex-col bg-white overflow-hidden "
      >
        <div className="flex pt-4 h-full flex-col">
          {Array.from({ length: 3 }).map((_, index) => (
            <ArrowDown
              key={index}
              className={`transition-colors duration-200 ${
                active === index ? "text-neutral-700" : "text-neutral-300"
              }`}
            />
          ))}
        </div>
        <div className="flex mb-16 items-center justify-end">
          <motion.div
            initial="initial"
            whileHover="hovered"
            variants={{
              initial: { rotate: 0, scale: 1 },
              hovered: { rotate: -2, scale: 1.07 },
            }}
            className="text-white flex items-center hover:shadow-2xl cursor-pointer gap-3 bg-black text-lg font-secondary font-medium pr-2 pl-4 py-2 rounded-lg"
          >
            <span className="pr-3">
              <StaggerText text="Our Work" />
            </span>
            <span className="p-3 bg-linear-to-b from-[#E9EF23] to-[#B6FA15] text-black rounded-md">
              <ZodiacSagittarius />
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default RightSection;

function StaggerText({ text }: { text: string }) {
  return (
    <span className="relative inline-flex overflow-hidden whitespace-nowrap">
      {text.split("").map((char, i) => (
        <span key={i} className="relative inline-block overflow-hidden">
          {/* First line (slides up and out) */}
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.3,
              ease: [0.6, 0.01, -0.05, 0.95],
              delay: i * 0.02,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>

          {/* Second line (slides up and in) */}
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.6, 0.01, -0.05, 0.95],
              delay: i * 0.02,
            }}
            className="absolute left-0 top-0 inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
