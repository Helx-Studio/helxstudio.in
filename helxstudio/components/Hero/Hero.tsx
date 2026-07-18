"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "pixelarticons/react";
const Hero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 2) % 3);
    }, 400);

    return () => clearInterval(interval);
  }, []);
  const leftWidth = useTransform(scrollYProgress, [0, 1], ["66.666%", "0%"]);
  const rightWidth = useTransform(scrollYProgress, [0, 1], ["33.333%", "100%"]);
  const leftHeadingX = useTransform(scrollYProgress, [0, 0.4], [0, -850]);
  const leftRight = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const leftBottom = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  const line1X = useTransform(scrollYProgress, [0, 0.8], [0, 65]);
  const line2X = useTransform(scrollYProgress, [0, 0.8], [0, 53]);
  const line3X = useTransform(scrollYProgress, [0, 0.8], [0, 20]);
  const line1F = useTransform(scrollYProgress, [0, 0.8], [20, 35]);
  const line2F = useTransform(scrollYProgress, [0, 0.8], [20, 34]);
  const line3F = useTransform(scrollYProgress, [0, 0.8], [20, 34]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [35, 0]);
  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <main
        className="
          sticky top-0
          flex
          h-screen
          w-full
          overflow-hidden
          bg-white
        "
      >
        {/* LEFT */}
        <motion.div
          style={{
            width: leftWidth,
          }}
          className="
              h-full
              bg-amber-100
              flex
              flex-col
            "
        >
          <div className="flex  h-full   ">
            {" "}
            <motion.h1
              style={{
                y: leftHeadingX,
              }}
              className="text-5xl font-Main px-6  mt-53 font-semibold text-neutral-900"
            >
              {" "}
              Turning Your Ideas <br />
              Into Websites That Converts.
            </motion.h1>
          </div>
          <div className="w-full h-95 bg-gray-600">video</div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={{
            width: rightWidth,
          }}
          className="h-full bg-blue-100 flex flex-col"
        >
          <motion.div
            style={{ height: leftRight }}
            className="flex items-center justify-center"
          >
            <div className="text-xl font-secondary flex flex-col  -space-y-2  font-medium text-neutral-900">
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
            className="px-3 flex flex-col bg-red-100 overflow-hidden"
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

            <div className="flex py-4 items-center justify-end">
              <button className="text-white bg-neutral-900 px-4 py-2 rounded-md">
                Book a Call
              </button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};
export default Hero;
