"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "pixelarticons/react";
const RightSection = ({
  rightWidth,
  leftRight,
  leftBottom,
  line1X,
  line2X,
  line3X,
  line1F,
  line2F,
  line3F,
  iconDiv,
  svgMove,
}: {
  rightWidth: MotionValue<string>;
  leftRight: MotionValue<string>;
  leftBottom: MotionValue<string>;
  line1X: MotionValue<number>;
  line2X: MotionValue<number>;
  line3X: MotionValue<number>;
  line1F: MotionValue<number>;
  line2F: MotionValue<number>;
  line3F: MotionValue<number>;
  iconDiv: MotionValue<number>;
  svgMove: MotionValue<number>;
}) => {
  const [active, setActive] = useState(0);
  const svgMove18 = useTransform(svgMove, (value) => value * 18);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 2) % 3);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        width: rightWidth,
      }}
      className="h-full bg-[#fcfcfc] relative  flex flex-col"
    >
      <motion.div
        style={{ top: iconDiv }}
        className="w-45 gap-3.5 flex items-center justify-between  -translate-x-1/2 left-1/2 -translate-y-1/2   h-6 absolute "
      >
        {/* Icon 1 */}
        <motion.svg
          style={{ y: svgMove }}
          width="58"
          height="58"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.625 11.875C13.125 16.25 6.875 16.25 4.375 11.875"
            stroke="#466BFF"
            strokeWidth="0.78125"
            strokeLinecap="round"
          />
          <path
            d="M15.625 11.875L17.5 15.625"
            stroke="#286BFF"
            strokeWidth="0.625"
            strokeLinecap="round"
          />
          <path
            d="M4.375 11.875L2.5 15.625"
            stroke="#286BFF"
            strokeWidth="0.625"
            strokeLinecap="round"
          />
          <path
            d="M17.5 16.4062C17.0685 16.4062 16.7188 16.0565 16.7188 15.625C16.7188 15.1935 17.0685 14.8438 17.5 14.8438C17.9315 14.8438 18.2812 15.1935 18.2812 15.625C18.2812 16.0565 17.9315 16.4062 17.5 16.4062Z"
            fill="black"
            stroke="#286BFF"
            strokeWidth="0.3125"
          />
          <path
            d="M2.5 16.4062C2.06853 16.4062 1.71875 16.0565 1.71875 15.625C1.71875 15.1935 2.06853 14.8438 2.5 14.8438C2.93147 14.8438 3.28125 15.1935 3.28125 15.625C3.28125 16.0565 2.93147 16.4062 2.5 16.4062Z"
            fill="black"
            stroke="#286BFF"
            strokeWidth="0.3125"
          />
          <path
            d="M15 12.8125H16.25C16.4226 12.8125 16.5625 12.6726 16.5625 12.5V11.25C16.5625 11.0774 16.4226 10.9375 16.25 10.9375H15C14.8274 10.9375 14.6875 11.0774 14.6875 11.25V12.5C14.6875 12.6726 14.8274 12.8125 15 12.8125Z"
            fill="#B8CEFF"
            stroke="#286BFF"
            strokeWidth="0.78125"
          />
          <path
            d="M3.75 12.8125H5C5.17259 12.8125 5.3125 12.6726 5.3125 12.5V11.25C5.3125 11.0774 5.17259 10.9375 5 10.9375H3.75C3.57741 10.9375 3.4375 11.0774 3.4375 11.25V12.5C3.4375 12.6726 3.57741 12.8125 3.75 12.8125Z"
            fill="#B8CEFF"
            stroke="#286BFF"
            strokeWidth="0.78125"
          />
          <path
            d="M11.875 10.625L10 11.875L8.125 10.625L9.375 6.875L10 3.125L10.625 6.875L11.875 10.625Z"
            fill="#BDD2FF"
            stroke="#125DFF"
            strokeWidth="0.78125"
            stroke-linejoin="round"
          />
          <path
            d="M10 8.125V5"
            stroke="#0051FF"
            strokeWidth="0.625"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Icon 2 */}
        <motion.svg
          style={{ y: svgMove }}
          width="58"
          height="58"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.875 3.125H3.125C2.43464 3.125 1.875 3.68464 1.875 4.375V15.625C1.875 16.3154 2.43464 16.875 3.125 16.875H16.875C17.5654 16.875 18.125 16.3154 18.125 15.625V4.375C18.125 3.68464 17.5654 3.125 16.875 3.125Z"
            stroke="url(#paint0_linear_118_340)"
            strokeWidth="0.78125"
          />
          <path
            d="M1.875 6.25H18.125"
            stroke="url(#paint1_linear_118_340)"
            strokeWidth="0.78125"
          />
          <path
            d="M3.4375 5.0625C3.64461 5.0625 3.8125 4.89461 3.8125 4.6875C3.8125 4.48039 3.64461 4.3125 3.4375 4.3125C3.23039 4.3125 3.0625 4.48039 3.0625 4.6875C3.0625 4.89461 3.23039 5.0625 3.4375 5.0625Z"
            fill="#FF4040"
          />
          <path
            d="M4.84375 5.0625C5.05086 5.0625 5.21875 4.89461 5.21875 4.6875C5.21875 4.48039 5.05086 4.3125 4.84375 4.3125C4.63664 4.3125 4.46875 4.48039 4.46875 4.6875C4.46875 4.89461 4.63664 5.0625 4.84375 5.0625Z"
            fill="#F9FF4C"
          />
          <path
            d="M6.25 5.0625C6.45711 5.0625 6.625 4.89461 6.625 4.6875C6.625 4.48039 6.45711 4.3125 6.25 4.3125C6.04289 4.3125 5.875 4.48039 5.875 4.6875C5.875 4.89461 6.04289 5.0625 6.25 5.0625Z"
            fill="#12FF2E"
          />
          <path
            opacity="0.35"
            d="M9.53125 8.125H4.21875C3.95987 8.125 3.75 8.33487 3.75 8.59375C3.75 8.85263 3.95987 9.0625 4.21875 9.0625H9.53125C9.79013 9.0625 10 8.85263 10 8.59375C10 8.33487 9.79013 8.125 9.53125 8.125Z"
            fill="#E042FF"
          />
          <path
            opacity="0.25"
            d="M7.5 10.3125H4.375C4.02982 10.3125 3.75 10.5923 3.75 10.9375V14.0625C3.75 14.4077 4.02982 14.6875 4.375 14.6875H7.5C7.84518 14.6875 8.125 14.4077 8.125 14.0625V10.9375C8.125 10.5923 7.84518 10.3125 7.5 10.3125Z"
            fill="#ED63FA"
          />
          <path
            opacity="0.25"
            d="M15.7812 10.3125H9.84375C9.58487 10.3125 9.375 10.5224 9.375 10.7812V11.7188C9.375 11.9776 9.58487 12.1875 9.84375 12.1875H15.7812C16.0401 12.1875 16.25 11.9776 16.25 11.7188V10.7812C16.25 10.5224 16.0401 10.3125 15.7812 10.3125Z"
            fill="#89FF89"
          />
          <path
            opacity="0.25"
            d="M15.7812 13.125H9.84375C9.58487 13.125 9.375 13.3349 9.375 13.5938V14.2188C9.375 14.4776 9.58487 14.6875 9.84375 14.6875H15.7812C16.0401 14.6875 16.25 14.4776 16.25 14.2188V13.5938C16.25 13.3349 16.0401 13.125 15.7812 13.125Z"
            fill="#FF9CB5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_340"
              x1="1.875"
              y1="10"
              x2="18.125"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4B4B4B" />
              <stop offset="1" stop-color="#3C3C39" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_118_340"
              x1="1.875"
              y1="6.75"
              x2="18.125"
              y2="6.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4B4B4B" />
              <stop offset="1" stop-color="#3C3C39" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Icon 3 */}
        <motion.svg
          width="58"
          height="58"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33325 11.6662C3.17555 11.6668 3.02094 11.6226 2.88737 11.5387C2.75381 11.4549 2.64677 11.3349 2.5787 11.1926C2.51063 11.0504 2.48432 10.8917 2.50283 10.7351C2.52133 10.5785 2.5839 10.4304 2.68325 10.3079L10.9332 1.8079C10.9951 1.73647 11.0795 1.6882 11.1724 1.67101C11.2653 1.65382 11.3613 1.66874 11.4447 1.71332C11.528 1.7579 11.5937 1.82948 11.631 1.91632C11.6683 2.00317 11.675 2.10011 11.6499 2.19123L10.0499 7.2079C10.0027 7.33417 9.98689 7.47 10.0037 7.60374C10.0206 7.73748 10.0696 7.86513 10.1467 7.97576C10.2237 8.08638 10.3264 8.17666 10.446 8.23887C10.5656 8.30107 10.6985 8.33334 10.8332 8.3329H16.6666C16.8243 8.33236 16.9789 8.37658 17.1125 8.46042C17.246 8.54426 17.3531 8.66427 17.4211 8.80652C17.4892 8.94877 17.5155 9.10741 17.497 9.26402C17.4785 9.42063 17.4159 9.56877 17.3166 9.69123L9.06658 18.1912C9.00469 18.2627 8.92036 18.3109 8.82743 18.3281C8.73449 18.3453 8.63848 18.3304 8.55514 18.2858C8.4718 18.2412 8.40609 18.1697 8.3688 18.0828C8.33151 17.996 8.32485 17.899 8.34991 17.8079L9.94991 12.7912C9.99709 12.665 10.0129 12.5291 9.99609 12.3954C9.97924 12.2617 9.9302 12.134 9.85317 12.0234C9.77615 11.9128 9.67344 11.8225 9.55385 11.7603C9.43427 11.6981 9.30138 11.6658 9.16658 11.6662H3.33325Z"
            fill="url(#paint0_linear_118_351)"
            stroke="url(#paint1_linear_118_351)"
            strokeWidth="0.7"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.75 3C3.6727 3.37761 3.37761 3.6727 3 3.75L3.14089 3.80603C3.44343 3.92633 3.66995 4.18441 3.75 4.5C3.90886 4.17436 4.17468 3.90951 4.5 3.75C4.18306 3.67 3.9241 3.44218 3.80435 3.13803L3.75 3Z"
            fill="#FFBF33"
          />
          <path
            d="M15.75 16C15.6727 16.3776 15.3776 16.6727 15 16.75L15.1409 16.806C15.4434 16.9263 15.6699 17.1844 15.75 17.5C15.9089 17.1744 16.1747 16.9095 16.5 16.75C16.1831 16.67 15.9241 16.4422 15.8043 16.138L15.75 16Z"
            fill="#FFBF33"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_351"
              x1="13.5"
              y1="-6"
              x2="11"
              y2="20.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F4FF5D" />
              <stop offset="1" stop-color="#FFB833" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_118_351"
              x1="9.99991"
              y1="1.66406"
              x2="17.5"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFDE5B" />
              <stop offset="1" stop-color="#F5FE00" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      <motion.div
        style={{ height: leftRight }}
        className="flex items-center relative  border-l border-b border-neutral-300 justify-center "
      >
        <div className="text-xl bg-neutral-50 font-secondary flex flex-col realtive  -space-y-2  font-medium text-neutral-900">
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
        id="backgounf"
        className="px-3 flex flex-col bg-white overflow-hidden "
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

        <div className="flex py-14 items-center justify-end">
          <button className="text-white bg-neutral-900 px-4 py-2 rounded-md">
            Our Work
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default RightSection;
