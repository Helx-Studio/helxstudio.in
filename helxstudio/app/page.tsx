import Navbar from "@/components/Advancments/Navbar";
import FeatureProjects from "@/components/ProjectsCrousel/FeaturedProjects";
import Hero from "@/components/Hero/Hero";
import FeatureSection from "@/components/Features/FeatureSection";
import PricingSection from "@/components/Pricing/PrcingPage";
import FaqsSections from "@/components/Faq/FaqsSections";
import Footer from '@/components/Footer/Footer'
export default function Home() {
  return (
    <div className="flex   items-center justify-center  font-sans ">
      <main className=" w-full relative h-full max-w-[85rem] flex-col items-center border-x border-neutral-200">
        <Navbar />
        <Hero />
        <FeatureProjects />
        <FeatureSection />
        <PricingSection />
        <FaqsSections />
        <Footer/>
      </main>
    </div>
  );
}
