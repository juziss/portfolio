import type React from "react";
import AboutMeCard from "@components/AboutMeCard";
import AboutMeDetail from "@components/AboutMeDetail";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row py-12 px-4 md:px-8 lg:px-16"  id="sobre">
      {/* Cards - lado esquerdo */}
      <div className="w-full md:w-1/2 pr-6 md:pr-10 pl-4 sm:pl-6 md:pl-10 lg:pl-30">
        <div className="grid md:grid-cols-3 gap-5">
          <AboutMeCard
            imageSrc="/public/croche.png"
            altText="Pintura"
            overlayText="Sempre tive amor por desenhar ✍️"
          />
          <AboutMeCard
            imageSrc="/public/sketches.png"
            altText="Esboços"
            overlayText="Amo ficar por dentro de tendências 👠"
          />
          <AboutMeCard
            imageSrc="/public/videogame.png"
            altText="Videogames"
            overlayText="Gosto de explorar jogos indie e pixelados 🎮"
          />
          <AboutMeCard
            imageSrc="/public/tay.png"
            altText="Taylor Swift"
            overlayText="Sou apaixonada por música — Taylor Swift no repeat 🎵"
          />
          <AboutMeCard
            imageSrc="/public/tech.png"
            altText="Tecnologia"
            overlayText="Tecnologia sempre foi meu universo favorito 💻"
          />
          <AboutMeCard
            imageSrc="/public/cooking.png"
            altText="Cozinhando"
            overlayText="Cozinhar virou uma forma de criar e relaxar 🍳"
          />
        </div>
      </div>

      {/* Carta - lado direito */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
        <AboutMeDetail />
      </div>
    </section>
  );
}
