export default function Ilustracoes() {
  const ilustracoes = [
    { id: 1, src: "/desenho1.png", alt: "Desenho 1" },
    { id: 2, src: "/desenho2.png", alt: "Desenho 2" },
    { id: 3, src: "/desenho3.png", alt: "Desenho 3" },
    { id: 8, src: "/desenho8.png", alt: "Desenho 8" },
    { id: 10, src: "/desenho10.png", alt: "Desenho 10" },
    { id: 11, src: "/desenho11.png", alt: "Desenho 11" },
  ];

  return (
    <section className="relative py-20 px-8 overflow-hidden" id="ilustracoes">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-16 text-center z-10 relative">
        Ilustrações
      </h2>

      <img
        src="/desenho9.png"
        alt="Desenho 9"
        className="hidden lg:block absolute right-280 top-0 h-full max-w-[60rem] object-contain pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto pl-0 lg:pl-24 z-10 relative">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {ilustracoes.map((ilustracao) => (
            <div 
              key={ilustracao.id} 
              className="transform transition hover:scale-105 cursor-pointer"
              style={{ 
                width: `${Math.max(180, Math.random() * 80 + 160)}px`,
                maxWidth: '280px'
              }}
            >
              <img
                src={ilustracao.src}
                alt={ilustracao.alt}
                className="w-full object-contain rounded-md shadow"
                style={{ maxHeight: `${Math.max(160, Math.random() * 70 + 140)}px` }}
              />
            </div>
          ))}
        </div>
      </div>

      <img
        src="/desenho12.png"
        alt="Desenho 12"
        className="hidden md:block absolute right-10 bottom-[4rem] w-[14rem] pointer-events-none z-0"
      />
    </section>
  );
}