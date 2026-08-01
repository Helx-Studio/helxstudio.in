"use client";
import { motion, MotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ZodiacSagittarius } from "lucide-react";
import { ArrowDown } from "pixelarticons/react";
import Staggerbtn from "../Advancments/Staggerbtn";
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
          <Staggerbtn />
        </div>
      </motion.div>
    </motion.div>
  );
};
export default RightSection;
