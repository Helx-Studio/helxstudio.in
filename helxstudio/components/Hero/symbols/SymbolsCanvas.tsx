"use client";

import { useEffect, useRef } from "react";
import { SymbolsEffect, SymbolsParams } from "./SymbolsEffect";

interface SymbolsCanvasProps {
  videoSrc?: string;
  className?: string;
  params?: Partial<SymbolsParams>;
}

const DEFAULT_PARAMS: SymbolsParams = {
  cell: 3,
  bandColors: ["#143952", "#f53df2", "#aaa8ff", "#d8d8d8"],
  bandStops: [0.0, 0.25, 0.5, 0.75, 1.0],
  bandGlyphs: [3, 7, 10, 18], // square, plus, diamond, spark
  zoom: 1,
  bg: "#ffffff",
};

export default function SymbolsCanvas({
  videoSrc = "/motion.mp4",
  className = "w-full h-full block",
  params = {},
}: SymbolsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const effectRef = useRef<SymbolsEffect | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mergedParams: SymbolsParams = {
      ...DEFAULT_PARAMS,
      ...params,
    };

    const effect = new SymbolsEffect(canvas, mergedParams);
    effectRef.current = effect;

    effect.setVideo(videoSrc);

    const resizeObserver = new ResizeObserver(() => {
      effect.resize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      effect.dispose();
      effectRef.current = null;
    };
  }, [videoSrc, JSON.stringify(params)]);

  return <canvas ref={canvasRef} className={className} />;
}
