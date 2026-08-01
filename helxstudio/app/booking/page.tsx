import Navbar from "@/components/Advancments/Navbar";
import Footer from "@/components/Footer/Footer";
import BookingCalEmbed from "@/components/Booking/BookingCalEmbed";
import StudioLogo from "@/components/extra/Studio-Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call | Helx Studio",
  description: "Schedule a call with Helx Studio to discuss your project, timeline, and next steps to collaborate.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] relative overflow-hidden font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Subtle Background Pattern / Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/40 via-purple-50/20 to-transparent blur-3xl opacity-70" />
        
        {/* Decorative background beam stripes matching reference */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-[0.07] stroke-neutral-900"
          fill="none"
          viewBox="0 0 1200 600"
        >
          <line x1="200" y1="0" x2="400" y2="600" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="400" y1="0" x2="600" y2="600" strokeWidth="1.5" />
          <line x1="800" y1="0" x2="600" y2="600" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="1000" y1="0" x2="800" y2="600" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-6xl mx-auto w-full">
        {/* Helx Studio Logo Badge Container (matching reference image UI) */}
        <div className="mb-6 group">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-pink-200 via-purple-200 via-sky-200 to-amber-100 shadow-md transition-transform duration-300 group-hover:scale-105">
            <div className="p-3.5 rounded-full bg-white/90 backdrop-blur-md shadow-inner flex items-center justify-center border border-white/60">
              <StudioLogo width={30} height={27} className="text-neutral-900" />
            </div>
          </div>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            Book a 15-min call
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Please select the time that fits you or just{" "}
            <br className="hidden sm:inline" />
            Email us at{" "}
            <a
              href="mailto:helxstudio@gmail.com"
              className="text-neutral-900 underline underline-offset-4 font-medium hover:text-neutral-600 transition-colors"
            >
              helxstudio@gmail.com
            </a>
          </p>
        </div>

        {/* Cal.com Embed Widget */}
        <div className="w-full max-w-5xl flex justify-center">
          <BookingCalEmbed />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
