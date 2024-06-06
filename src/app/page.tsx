import { Duvidas } from "@/components/Duvidas";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { NavDesktop } from "@/components/NavDesktop";
import {SkillCarousel} from "@/components/SkillCarousel";

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
      <Duvidas />
    </>
  );
}
