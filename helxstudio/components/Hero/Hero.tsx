"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSecton";
import { ImagesBadge } from "../Advancments/image-badge";
import vind from "@/public/Projects/arvind-sahakari-bank.png";
import second from "@/public/Projects/fyypedvideo.png";
import thrid from "@/public/Projects/mitun.png";
import Staggerbtn from "@/components/Advancments/Staggerbtn";
const Hero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const leftWidth = useTransform(scrollYProgress, [0, 1], ["66.666%", "0%"]);
  const rightWidth = useTransform(scrollYProgress, [0, 1], ["33.333%", "100%"]);
  const leftHeadingX = useTransform(scrollYProgress, [0, 0.4], [0, -850]);
  const leftDiv = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const leftRight = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const leftBottom = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const line1X = useTransform(scrollYProgress, [0, 0.8], [0, 65]);
  const line2X = useTransform(scrollYProgress, [0, 0.8], [0, 53]);
  const line3X = useTransform(scrollYProgress, [0, 0.8], [0, 20]);
  const line1F = useTransform(scrollYProgress, [0, 0.8], [20, 35]);
  const line2F = useTransform(scrollYProgress, [0, 0.8], [20, 34]);
  const line3F = useTransform(scrollYProgress, [0, 0.8], [20, 34]);
  const iconDiv = useTransform(scrollYProgress, [0, 1], [140, 230]);
  const svgMove = useTransform(scrollYProgress, [0, 1], [0, -32]);
  return (
    <>
      <section ref={sectionRef} className="relative lg:block hidden  h-[200vh]">
        <main
          className="
          sticky top-0
          flex
          // h-screen
          w-full
          overflow-hidden
          bg-white
        "
        >
          {/* LEFT */}
          <LeftSection
            leftWidth={leftWidth}
            leftDiv={leftDiv}
            leftHeadingX={leftHeadingX}
          />
          {/* RIGHT */}

          <RightSection
            rightWidth={rightWidth}
            leftBottom={leftBottom}
            leftRight={leftRight}
            line1F={line1F}
            line1X={line1X}
            line2F={line2F}
            line2X={line2X}
            line3F={line3F}
            line3X={line3X}
            iconDiv={iconDiv}
            svgMove={svgMove}
          />
        </main>
      </section>

      <section className="lg:hidden items-start px-8 py-8 relative flex flex-col">
        <ImagesBadge
          images={[`${vind.src}`, `${second.src}`, `${thrid.src}`]}
          text="10+ Projects Completed"
        />
        <h1 className="md:text-4xl tracking-tight text-neutral-900 text-2xl mt-4 mb-2 font-semibold font-Main">
          {" "}
          Tell your Idea. <br />
          Wake up launched.
        </h1>
        <h4 className="max-w-md text-sm text-neutral-700 mb-4">
          {" "}
          We design, develop, and launch <br /> high-performance websites
          crafted to <br /> engage users and accelerate growth.
        </h4>
        <Staggerbtn
          className=" text-md pr-2 pl-2 py-2"
          classChildren="p-2 rounded-lg"
        />
      </section>
    </>
  );
};
export default Hero;
