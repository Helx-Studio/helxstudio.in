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
        <motion.div
          style={{
            y: leftHeadingX,
          }}
          className="text-md flex items-center bg-yellow-50 border border-yellow-200 text-yellow-700  justify-center gap-1 font-secondary px-2 py-1 rounded-md ml-8 absolute top-80 font-medium "
        >
          {" "}
          <Star fill="#FFDB58" size={18} className="text-amber-400" />
          Senior Talent
        </motion.div>
        <motion.div
          style={{
            y: leftHeadingX,
          }}
          className="text-md flex items-center bg-green-50 border border-green-200 text-green-700  justify-center gap-1 font-secondary px-2 py-1 rounded-md ml-45 absolute top-80 font-medium "
        >
          {" "}
          <Timer size={18} className="text-green-400" />
          Fast Delivery
        </motion.div>
      </div>
      <div className="w-full h-105 relative bg-gray-600">
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
