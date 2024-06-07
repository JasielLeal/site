import { Duvidas } from "@/components/Duvidas";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { NavDesktop } from "@/components/NavDesktop";
import { Portifolio } from "@/components/Portifolio";
import { SkillCarousel } from "@/components/SkillCarousel";
import { Porque } from "@/components/porque";
import { Porque2 } from "@/components/porque2";

export default function Home() {
  return (
    <>
      <div className="lg:hidden">
        <NavBar />
      </div>
      <div className="hidden lg:block">
        <NavDesktop />
      </div>
      <Hero />
      <SkillCarousel />
      <Porque />
      <Porque2 />
      <Portifolio />
    </>
  );
}
