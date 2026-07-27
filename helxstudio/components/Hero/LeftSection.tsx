"use client";
import { motion, MotionValue } from "motion/react";
import PixelSquares from "@/components/Advancments/MatrixBG";
import vind from '@/public/Projects/arvind-sahakari-bank.png'
import second from '@/public/Projects/fyypedvideo.png'
import thrid from '@/public/Projects/mitun.png'
import { ImagesBadge } from "../Advancments/image-badge";
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
        
        <motion.div
          style={{
            y: leftHeadingX,
          }}
          className=" gap-3 flex flex-col  px-6  mt-46  text-neutral-900"
        >
          {" "}
          <div><ImagesBadge images={[`${vind.src}`, `${second.src}`, `${thrid.src}`]} text="10+ Projects Completed"/> </div>
         <h1 className="text-6xl font-semibold font-Main"> Tell your Idea. <br />
          Wake up launched.</h1>
        </motion.div>
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
