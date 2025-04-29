export default function Ilustracoes() {
    // const ilustracoes = [
    //   { src: "/desenho1.png", alt: "Desenho 1", desc: "Lorem ipsum dolor sit amet." },
    //   { src: "/desenho2.png", alt: "Desenho 2", desc: "Lorem ipsum dolor sit amet." },
    //   { src: "/desenho3.png", alt: "Desenho 3", desc: "Lorem ipsum dolor sit amet." },
    //   { src: "/desenho4.png", alt: "Carta 1", desc: "Carta de um projeto de GameJam cancelado." },
    //   { src: "/desenho5.png", alt: "Carta 2", desc: "Carta de um projeto de GameJam cancelado." },
    //   { src: "/desenho6.png", alt: "Carta 3", desc: "Carta de um projeto de GameJam cancelado." },
    //   { src: "/desenho7.png", alt: "Carta 4", desc: "Carta de um projeto de GameJam cancelado." },
    //   { src: "/desenho8.png", alt: "Desenho 8", desc: "Lorem ipsum dolor sit amet." },
    //   { src: "/desenho10.png", alt: "Desenho 10", desc: "Lorem ipsum dolor sit amet." },
    //   { src: "/desenho11.png", alt: "Desenho 11", desc: "Lorem ipsum dolor sit amet." },
    // ];
  
    return (
      <section className="relative py-20 px-8">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
            Ilustrações
        </h2>
        <img
          src="/desenho9.png"
          alt="Desenho 9"
          className="hidden md:block absolute right-300 top-1/2 -translate-y-1/2 w-200 lg:w-200 pointer-events-none"
        />
  
        {/* Ilustração 12 - destaque lateral direita */}
        <img
          src="/desenho12.png"
          alt="Desenho 12"
          className="hidden md:block absolute right-0 bottom-0 w-72 lg:w-96 pointer-events-none"
        />
      </section>
    );
  }
  