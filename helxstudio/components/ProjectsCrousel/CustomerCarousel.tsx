"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft2, ChevronRight2 } from "pixelarticons/react";

export type CarouselSlide = {
  id: string;
  logo?: React.ReactNode; // pass an <img> or inline svg/text logo
  eyebrow?: string; // e.g. "FINANCIAL SERVICES"
  title?: string;
  image: string; // background image url
  video?: string; // hover video url
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
  onCardClick,
}: {
  slide: CarouselSlide;
  visibleCount: number;
  onCardClick: (e: React.MouseEvent<HTMLElement>) => void;
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
    <div
      onClick={onCardClick}
      onDragStart={(e) => e.preventDefault()}
      draggable={false}
      className="group relative shrink-0 px-2 select-none min-w-[280px] xs:min-w-[340px] sm:min-w-[380px] md:min-w-[420px]"
      style={{ width: `${100 / visibleCount}%` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/10] sm:aspect-auto sm:h-[380px] md:h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-900 pointer-events-none border border-neutral-200/60 shadow-sm">
        {slide.video ? (
          <video
            ref={videoRef}
            src={`${slide.video}#t=0.1`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={slide.image}
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
    </div>
  );
}

export default function CustomerCarousel({
  slides,
  visibleCount = 2,
}: CustomerCarouselProps) {
  const [effectiveVisibleCount, setEffectiveVisibleCount] =
    useState<number>(visibleCount);
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const hasDraggedRef: { current: boolean } = { current: false };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setEffectiveVisibleCount(1);
      } else {
        setEffectiveVisibleCount(visibleCount);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleCount]);

  const maxIndex = Math.max(0, slides.length - effectiveVisibleCount);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), maxIndex);
      setIndex(clamped);
    },
    [maxIndex],
  );

  const handlePrev = () => goTo(index - 1);
  const handleNext = () => goTo(index + 1);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Support touch types and left click
    if (e.pointerType !== "touch" && e.button !== 0) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    let diffX = e.clientX - dragStartXRef.current;

    // Rubber banding resistance at scroll boundaries
    if (index === 0 && diffX > 0) {
      diffX = Math.pow(diffX, 0.85);
    } else if (index === maxIndex && diffX < 0) {
      diffX = -Math.pow(-diffX, 0.85);
    }

    if (Math.abs(diffX) > 10) {
      hasDraggedRef.current = true;
    }
    setDragOffset(diffX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const diffX = dragOffset;
    setDragOffset(0);

    if (hasDraggedRef.current) {
      const trackWidth = trackRef.current?.clientWidth || 1;
      const slideWidthInPixels = trackWidth / effectiveVisibleCount;
      const indexOffset = Math.round(-diffX / slideWidthInPixels);

      if (indexOffset !== 0) {
        goTo(index + indexOffset);
      } else {
        goTo(index);
      }
    }
  };

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
    }
  };

  const trackWidth = trackRef.current?.clientWidth || 1;
  const dragPercent = (dragOffset / trackWidth) * 100;
  const translatePercent = -index * (100 / effectiveVisibleCount) + dragPercent;

  return (
    <div className="w-full overflow-hidden">
      {/* Track Container */}
      <div
        className="overflow-hidden rounded-2xl select-none touch-pan-y cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={trackRef}
          className="flex transition-transform w-full ease-out"
          style={{
            transform: `translateX(${translatePercent}%)`,
            transitionDuration: isDragging ? "0ms" : "500ms",
          }}
        >
          {slides.map((slide) => (
            <CarouselCard
              key={slide.id}
              slide={slide}
              visibleCount={effectiveVisibleCount}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="mt-6 flex items-center justify-between">
        {/* Pagination dots */}
        <div className="flex bg-neutral-100 px-4 py-3 rounded-lg items-center gap-2">
          {Array.from({
            length: slides.length - effectiveVisibleCount + 1,
          }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-neutral-900"
                  : "w-2 bg-neutral-400 hover:bg-neutral-500"
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
            disabled={index >= maxIndex}
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
