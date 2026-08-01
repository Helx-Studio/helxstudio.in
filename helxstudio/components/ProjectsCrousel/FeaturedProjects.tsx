import CustomerCarousel, {
  CarouselSlide,
} from "@/components/ProjectsCrousel/CustomerCarousel";

const slides: CarouselSlide[] = [
  {
    id: "arvind-sahakari-bank",
    image: "/Projects/arvind-sahakari-bank.png",
    video: "/Projects/arvind-sahakari-bank.mp4",
    href: "/projects/arvind-sahakari-bank",
  },
  {
    id: "fyyped",
    image: "/Projects/fyypedvideo.png",
    video: "/Projects/fyypedvideo.mp4",
    href: "/projects/fyyped",
  },
  {
    id: "mitun",
    image: "/Projects/mitun.png",
    video: "/Projects/mitun.mp4",
    href: "/projects/mitun",
  },
  {
    id: "softech",
    image: "/Projects/softech.png",
    video: "/Projects/softech.mp4",
    href: "/projects/softech",
  },
];

export default function FeatureProjects() {
  return (
    <section id="work" className="mx-auto max-w-8xl px-6 py-16 scroll-mt-20">
      <CustomerCarousel slides={slides} visibleCount={2} />
    </section>
  );
}
