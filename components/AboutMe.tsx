import type React from "react";
import AboutMeCard from "@components/AboutMeCard";
import AboutMeDetail from "@components/AboutMeDetail";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row py-12 px-4 md:px-8 lg:px-16" id="sobre">
      <div className="w-full md:w-1/2 pr-6 md:pr-10 pl-4 sm:pl-6 md:pl-10 lg:pl-30">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-gray-700">
          <div className="hidden md:block">
            <AboutMeCard
              imageSrc="/croche.png"
              altText="Pintura"
              overlayText="Sempre tive amor por desenhar ✍️"
            />
          </div>
          <div className="hidden md:block">
            <AboutMeCard
              imageSrc="/sketches.png"
              altText="Esboços"
              overlayText="Amo ficar por dentro de tendências 👠"
            />
          </div>
          <div className="hidden md:block">
            <AboutMeCard
              imageSrc="/videogame.png"
              altText="Videogames"
              overlayText="Gosto de explorar jogos indie e pixelados 🎮"
            />
          </div>
          <div className="hidden md:block">
            <AboutMeCard
              imageSrc="/tay.png"
              altText="Taylor Swift"
              overlayText="Sou apaixonada por música — Taylor Swift no repeat 🎵"
            />
          </div>
          <div className="hidden md:block">
            <AboutMeCard
              imageSrc="/tech.png"
              altText="Tecnologia"
              overlayText="Tecnologia sempre foi meu universo favorito 💻"
            />
          </div>
          <div className="hidden md:block">
            <AboutMeCard
              imageSrc="/cooking.png"
              altText="Cozinhando"
              overlayText="Cozinhar virou uma forma de criar e relaxar 🍳"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
        <AboutMeDetail />
      </div>
    </section>
  );
}
