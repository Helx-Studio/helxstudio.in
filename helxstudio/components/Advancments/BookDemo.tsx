"use client";
import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "pixelarticons/react";

const BookDemoButton = React.forwardRef<HTMLButtonElement>(() => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 shadow-[inset_1px_1px_1px_-8px_#FFF7F7] text-white font-medium py-3 flex items-center px-5 overflow-hidden"
    >
      <motion.span
        variants={{
          initial: { width: 20, opacity: 1, x: 0, marginRight: 2 },
          hover: { width: 0, opacity: 0, x: -30, marginRight: 0 },
        }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <ChevronRight />
      </motion.span>

      <span className="whitespace-nowrap">Book a Call</span>

      <motion.span
        variants={{
          initial: { width: 0, opacity: 0, x: 30, marginLeft: 0 },
          hover: { width: 20, opacity: 1, x: 0, marginLeft: 3 },
        }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <ChevronRight />
      </motion.span>
    </motion.button>
  );
});

BookDemoButton.displayName = "BookCallButton";

export default BookDemoButton;
