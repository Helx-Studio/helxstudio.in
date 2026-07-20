"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft2, ChevronRight2, ArrowRight } from "pixelarticons/react";
export type CarouselSlide = {
  id: string;
  logo?: React.ReactNode; // pass an <img> or inline svg/text logo
  eyebrow?: string; // e.g. "FINANCIAL SERVICES"
  title?: string;
  image: string; // background image url
  video?: string; // hover video url
  href: string;
  theme?: "dark" | "light"; // controls eyebrow/text contrast if needed
};

interface CustomerCarouselProps {
  slides: CarouselSlide[];
  /** how many cards are visible at once on desktop */
  visibleCount?: number;
}

function CarouselCard({
  slide,
  visibleCount,
}: {
  slide: CarouselSlide;
  visibleCount: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        if (err.name !== "AbortError") {
          console.warn("Video play interrupted:", err);
        }
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // Seek back to the thumbnail frame
      videoRef.current.currentTime = 0.1;
    }
  };

  return (
    <a
      href={slide.href}
      className="group relative shrink-0 px-2"
      style={{ width: `${100 / visibleCount}%` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-900">
        {slide.video ? (
          <video
            ref={videoRef}
            src={`${slide.video}#t=0.1`}
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
    </a>
  );
}

export default function CustomerCarousel({
  slides,
  visibleCount = 2,
}: CustomerCarouselProps) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, slides.length - visibleCount);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), maxIndex);
      setIndex(clamped);
    },
    [maxIndex],
  );

  const handlePrev = () => goTo(index - 1);
  const handleNext = () => goTo(index + 1);

  return (
    <div className="w-full">
      {/* Track */}
      <div className="overflow-hidden rounded-2xl">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {slides.map((slide) => (
            <CarouselCard
              key={slide.id}
              slide={slide}
              visibleCount={visibleCount}
            />
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="mt-6 flex  items-center justify-between">
        {/* Pagination dots */}
        <div className="flex bg-gray-100 px-4 py-3 rounded-lg  items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(Math.min(i, maxIndex))}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-neutral-900"
                  : "w-2 bg-neutral-500 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            aria-label="Previous slide"
            className="flex h-10 w-10 outline-2 outline-neutral-200 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft2 className="h-5 w-5 font-semibold" />
          </button>
          <button
            onClick={handleNext}
            disabled={index === maxIndex}
            aria-label="Next slide"
            className="flex h-10 w-10 outline-2 outline-neutral-200 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight2 className="h-5 w-5 font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
}
