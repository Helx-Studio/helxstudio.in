import { motion, Variants } from "motion/react";

const HELX3D = ({
  width = 672,
  height = 537,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  const lineVariants: Variants = {
    animate: {
      strokeDashoffset: [0, -500],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 672 537`}
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="rgbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(255, 0, 0)" />
          <stop offset="33%" stopColor="rgb(0, 255, 0)" />
          <stop offset="66%" stopColor="rgb(0, 0, 255)" />
          <stop offset="100%" stopColor="rgb(255, 0, 0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern
          id="pattern0_262_12"
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(27.5 0 0 74 13.6172 0.648438)"
          preserveAspectRatio="none"
          viewBox="1.95038e-06 0 27.5 74"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(-55 -148)"
          />
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(-27.5 -148)"
          />
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(0 -148)"
          />
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(-55 -74)"
          />
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(-27.5 -74)"
          />
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(0 -74)"
          />
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(-55 0)"
          />
          <use
            xlinkHref="#pattern0_262_12_inner"
            transform="translate(-27.5 0)"
          />
          <g id="pattern0_262_12_inner">
            <line
              x1="55.4687"
              y1="0.174173"
              x2="0.468683"
              y2="148.174"
              stroke="black"
            />
          </g>
        </pattern>
      </defs>

      <path d="M455.117 435.648L669.117 349.148V335.648" stroke="#646464" />
      <path
        d="M368.117 293.148L374.617 323.648L455.117 435.648L461.117 419.148"
        stroke="#646464"
      />
      <path
        d="M368.617 293.148L374.117 324.148L362.117 467.148"
        stroke="#646464"
      />
      <path
        d="M217.117 530.648L362.117 467.148L360.617 445.148"
        stroke="#646464"
      />
      <path
        d="M0.617188 203.648L217.117 530.148L219.117 505.648"
        stroke="#646464"
      />

      <path
        d="M31.6172 67.6484L155.117 0.648438L367.617 291.648L411.617 168.648L531.617 112.148L669.117 335.648L461.117 419.648L367.617 291.648L360.617 445.148L219.117 506.648L13.6172 199.648L31.6172 67.6484Z"
        fill="white"
      />
      <path
        d="M31.6172 67.6484L155.117 0.648438L367.617 291.648L411.617 168.648L531.617 112.148L669.117 335.648L461.117 419.648L367.617 291.648L360.617 445.148L219.117 506.648L13.6172 199.648L31.6172 67.6484Z"
        fill="url(#pattern0_262_12)"
        fillOpacity="0.03"
      />

      {/* Static gray outline */}
      <path
        d="M367.617 291.648L360.617 445.148L219.117 506.648L13.6172 199.648L31.6172 67.6484L155.117 0.648438L367.617 291.648ZM367.617 291.648L411.617 168.648L531.617 112.148L669.117 335.648L461.117 419.648L367.617 291.648Z"
        stroke="#616161"
        strokeWidth="1"
      />

      {/* Animated RGB line on outline with glow */}
      <motion.path
        d="M367.617 291.648L360.617 445.148L219.117 506.648L13.6172 199.648L31.6172 67.6484L155.117 0.648438L367.617 291.648ZM367.617 291.648L411.617 168.648L531.617 112.148L669.117 335.648L461.117 419.648L367.617 291.648Z"
        stroke="url(#rgbGradient)"
        strokeWidth="1"
        strokeDasharray="1050"
        strokeLinecap="round"
        filter="url(#glow)"
        variants={lineVariants}
        animate="animate"
      />

      <path
        d="M30.6172 68.1484L18.1172 91.6484L0.617188 203.648L13.6172 199.648"
        stroke="#646464"
      />
    </svg>
  );
};

export default HELX3D;
