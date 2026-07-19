import Navbar from "@/components/Advancments/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex   items-center justify-center bg-zinc-50 font-sans ">
      <main className=" w-full relative h-full max-w-[102rem] flex-col items-center border-x">
        <Navbar />
        <Hero />
        <div className="h-screen bg-yellow-700">Page 2</div>
        <div className="h-screen bg-purple-500">Page 3</div>
      </main>
    </div>
  );
}
