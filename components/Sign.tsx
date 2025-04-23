import React from "react";

export default function Sign() {
  return (
    <section className="relative w-full bg-pink-300 overflow-hidden h-23 flex items-center">
      {/* Faixa rolando em loop contínuo */}
      <div className="absolute w-full h-full flex items-center overflow-hidden">
        <div className="marquee whitespace-nowrap text-xl font-bold text-gray-700 flex items-center">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-6">EXTRA, EXTRA! DESIGNER EM AÇÃO</span>
              <img src="/megafone.png" alt="Megafone" className="w-15 h-15 mx-20 inline-block" />
              <span className="mx-6">EXTRA, EXTRA! DEV EM AÇÃO</span>
              <img src="/megafone.png" alt="Megafone" className="w-15 h-15 mx-20 inline-block" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Estilo para animação */}
      <style>
        {`
          .marquee {
            animation: marquee 65s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}
