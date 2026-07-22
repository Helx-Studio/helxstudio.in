"use client";
import { motion, type Variants } from "motion/react";
import CardFirstSvg from "./CardFirstSvg";
import coin from "@/public/Feature/coin.png";
import growth from "@/public/Feature/growth.png";
import Image from "next/image";
import Performance from "./Performance";
const FeatureSection = () => {
  return (
    <div className="h-screen px-8 border-t border-neutral-200 relative">
      <div className="h-3 w-3 bg-transparent border-neutral-600 absolute top-0 border-t border-l left-0" />
      <div className="absolute uppercase font-mono w-fit bg-white -top-3 px-2  left-12">
        <p>BENEFITS</p>
      </div>
      {/* Upper Text */}
      <div className="pt-10 flex flex-col ">
        {" "}
        <h1 className="text-3xl tracking-tight font-semibold font-Mistral">
          What Working With Us Looks Like.
        </h1>
        <p className="leading-4 ">
          Premium quality, expert execution, half the cost. <br /> See why we're
          different.
        </p>
      </div>

      {/* BentoLayout */}
      <div className="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/*
           */}
          {/* Card 1 */}
          <div className="lg:col-span-3 outline-3 outline-yellow-200 outline-offset-1 rounded-lg border border-neutral-200 p-5">
            <div className="h-50 relative bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#f5f5f5_10px,#f5f5f5_11px)]  flex items-center justify-center overflow-hidden bg-neutral-50 rounded-xl mb-3">
              <motion.div
                animate={{
                  x: [0, 4, -2],
                  y: [0, -3, 2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute z-3 h-15 w-15 top-4 left-26"
              >
                <Image src={coin} alt="coin" className=" h-15 w-15" />
              </motion.div>
              <motion.div
                animate={{
                  x: [0, 4],
                  y: [0, -3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute z-3 h-15 w-15 bottom-2 right-26"
              >
                <Image src={growth} alt="growth" className=" h-15 w-15 " />
              </motion.div>
              <CardFirstSvg />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold">
                Design that Converts.
              </h3>
              <p className=" text-sm sm:text-base">
                Crafted to turn visitors into loyal customers.
                <br className="hidden sm:block" />
                Every detail designed for measurable ROI and lasting growth.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-3 outline-3 outline-green-200 outline-offset-1 border rounded-lg  border-neutral-200 p-5">
            <div className="h-50 relative  flex items-center justify-center overflow-hidden bg-green-50 rounded-xl mb-3">
              <Performance />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold">
                Build to Perform
              </h3>

              <p className="text-sm sm:text-base">
                Design decisions backed by usability, not guesswork.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="lg:col-span-2 border border-neutral-200 p-5">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold">
                Post Launch Support.
              </h3>

              <p className=" text-sm sm:text-base">
                We stay with you even after launch.
                <br className="hidden sm:block" />
                12-month code warranty, full code ownership, andupdates, and
                ongoing improvements as your business grows.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-2 border border-neutral-200 p-5">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold">
                Transparent Pricing.
              </h3>

              <p className=" text-sm sm:text-base">
                One flat rate, no hidden fees, no surprises.
                <br className="hidden sm:block" />
                Predictable pricing that makes budgeting effortless.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="md:col-span-2 lg:col-span-2 border border-neutral-200 p-5">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold">
                Full Cycle Development.
              </h3>

              <p className=" text-sm sm:text-base">
                .Design, development, and deployment. All in one place. Just
                seamless execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
