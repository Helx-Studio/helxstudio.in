"use client";
import { motion } from "motion/react";
import { ZodiacSagittarius } from "lucide-react";

const Staggerbtn = ({
  className,
  classChildren,
}: {
  className?: string;
  classChildren?: string;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      variants={{
        initial: { rotate: 0, scale: 1 },
        hovered: { rotate: -2, scale: 1.07 },
      }}
      className={`text-white flex items-center hover:shadow-2xl cursor-pointer  bg-black  font-secondary font-medium  rounded-lg ${className ? className : "gap-3 text-lg pr-2 pl-4 py-2"}`}
    >
      <span className="pr-3">
        <StaggerText text="Our Work" />
      </span>
      <span
        className={`bg-linear-to-b from-[#E9EF23] to-[#B6FA15] text-black ${classChildren ? classChildren : "p-3  rounded-md"}`}
      >
        <ZodiacSagittarius size={classChildren ? 16 : 24} />
      </span>
    </motion.div>
  );
};

export default Staggerbtn;

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
