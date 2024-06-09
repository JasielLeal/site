import { Duvidas } from "@/components/Duvidas";
import { Etapas } from "@/components/Etapas";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { NavDesktop } from "@/components/NavDesktop";
import { Perguntas } from "@/components/Perguntas";
import { Portifolio } from "@/components/Portifolio";
import { SkillCarousel } from "@/components/SkillCarousel";
import { Footer } from "@/components/footer";
import { Porque } from "@/components/porque";
import { Porque2 } from "@/components/porque2";
import { Servicos } from "@/components/servicos";

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
      <Etapas />
      <Servicos />
      <Perguntas />
      <Footer />
    </>
  );
}
