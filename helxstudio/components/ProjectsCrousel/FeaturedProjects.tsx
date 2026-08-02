import CustomerCarousel, {
  CarouselSlide,
} from "@/components/ProjectsCrousel/CustomerCarousel";

const slides: CarouselSlide[] = [
  {
    id: "arvind-sahakari-bank",
    image: "/Projects/og-1.png",
  },
  {
    id: "fyyped",
    image: "/Projects/Scene 13.png",
  },
  {
    id: "mitun",
    image: "/Projects/Image0008.png",
  },
];

export default function FeatureProjects() {
  return (
    <section id="work" className="mx-auto max-w-8xl px-6 py-16 scroll-mt-20">
      <CustomerCarousel slides={slides} visibleCount={2} />
    </section>
  );
}
