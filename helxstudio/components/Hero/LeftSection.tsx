"use client";
import { motion, MotionValue } from "motion/react";
import RoboticBlocks from "@/components/Advancments/MatrixBG";
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
        <div className="absolute  inset-0 h-8 top-0 right-0">
          <RoboticBlocks />
        </div>
        <motion.h1
          style={{
            y: leftHeadingX,
          }}
          className="text-6xl font-Main px-6  mt-53 font-semibold text-neutral-900"
        >
          {" "}
          Tell your Idea. <br />
          Wake up launched.
        </motion.h1>
      </div>
      <div className="w-full h-95 relative bg-gray-600">
        <div className="w-full inset-0  absolute h-full">
          {" "}
          <video src="./motion.mp4" loop autoPlay className="w-full" />
        </div>
      </div>
    </motion.div>
  );
};
export default LeftSection;
