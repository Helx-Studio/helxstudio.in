"use client";
import { motion, MotionValue } from "motion/react";
import PixelSquares from "@/components/Advancments/MatrixBG";
import { Star, Timer } from "lucide-react";
import clock from "@/public/clocl.gif";
import Image from "next/image";
const LeftSection = ({
  leftWidth,
  leftHeadingX,
  leftDiv,
}: {
  leftWidth: MotionValue<string>;
  leftHeadingX: MotionValue<number>;
  leftDiv: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        width: leftWidth,
        y: leftDiv,
      }}
      className="
              h-full
              max-h-180
              flex
              flex-col
            "
    >
      <div className="flex  h-full relative  ">
        {" "}
        <div className="absolute  inset-0 h-8 top-0 left-0">
          <PixelSquares />
        </div>
        <motion.h1
          style={{
            y: leftHeadingX,
          }}
          className="text-6xl font-Main px-6  mt-46 font-semibold text-neutral-900"
        >
          {" "}
          Tell your Idea. <br />
          Wake up launched.
        </motion.h1>
      </div>
      <div className="w-full h-105 relative bg-transparent">
        <div className="w-full inset-0  absolute h-full">
          {" "}
          <video
            src="./motion.mp4"
            loop
            autoPlay={false}
            className="w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default LeftSection;
