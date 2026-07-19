import { useEffect, useRef, useState } from "react";

// A loose stack of colored squares that each drift a few px on their
// own timer. The "robotic" feel comes from the transition curve: a
// fast snap with a slight overshoot (like a servo settling), rather
// than a smooth continuous float — so each square looks like it's
// independently repositioning itself, not swaying.

const BLUES = [
  "#0b2f7a",
  "#164fc2",
  "#2f6fe0",
  "#4a90e2",
  "#5aa8f5",
  "#8ccbff",
];

// Base layout for one cluster: relative x/y offsets (px) and size (px).
// Tweak this array to change the arrangement/density of the stack.
const LAYOUT = [
  { x: 0, y: 0, size: 78 },
  { x: 58, y: 34, size: 66 },
  { x: 8, y: 78, size: 60 },
  { x: 70, y: 96, size: 52 },
  { x: -6, y: 148, size: 70 },
  { x: 54, y: 168, size: 46 },
];

function useServoOffset({ range = 7, minDelay = 1800, maxDelay = 4200 }) {
  const [offset, setOffset] = useState({ x: 0, y: 0, r: 0 });

  useEffect(() => {
    let timeout;
    const schedule = () => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);
      timeout = setTimeout(() => {
        setOffset({
          x: (Math.random() - 0.5) * range * 2,
          y: (Math.random() - 0.5) * range * 2,
          r: (Math.random() - 0.5) * 6,
        });
        schedule();
      }, delay);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, [range, minDelay, maxDelay]);

  return offset;
}

function Block({ x, y, size, color }) {
  const offset = useServoOffset({ range: 7 });
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.r}deg)`,
        transition: "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
        willChange: "transform",
      }}
    />
  );
}

function Cluster({ style }) {
  return (
    <div style={{ position: "relative", width: 148, height: 220, ...style }}>
      {LAYOUT.map((b, i) => (
        <Block
          key={i}
          x={b.x}
          y={b.y}
          size={b.size}
          color={BLUES[i % BLUES.length]}
        />
      ))}
    </div>
  );
}

export default function RoboticBlocks() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "490px",
        rotate: -180,
        overflow: "hidden",
      }}
    >
      <Cluster style={{ position: "absolute", right: "-3%", top: "-20%" }} />
    </div>
  );
}
