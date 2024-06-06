import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
      <>
        <div className="">
          <NavBar />
        </div>
        <div className="h-screen w-full bg-gradient-to-b from-black to-transparent">
          <Hero />
        </div>
      </>
  );
}
