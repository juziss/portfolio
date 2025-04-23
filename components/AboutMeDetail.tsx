import React from "react";
import { motion } from "framer-motion";

export default function AboutMeDetail() {
  return (
    <div className=" border-transparent rounded-3xl p-8 max-w-md w-full border border-white/30 backdrop-blur-sm">
      <h3 className="text-3xl font-bold mb-4 text-pink-600 flex items-center gap-2">
        Olá,
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
        Mineira de Januária, apaixonada por <span className="font-semibold text-purple-600">tecnologia</span>, 
        <span className="font-semibold text-pink-500"> design</span> e um bom cafézinho ☕.
        Estudo Sistemas de Informação na Unimontes e adoro misturar criatividade com lógica 💡
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
        Programo desde os meus 10 aninhos e nessa mesma época foi onde eu descobri photoshop criando
        capas para meus blogs feitos e estilizados por mim 😇
      </p>
      <p className="text-gray-700 leading-relaxed text-lg">
        Fora do código, me perco na <span className="italic">cozinha</span>, em jogos indie, 
        playlists da Taylor Swift e meus esboços ✍️
      </p>
    </div>
  );
}
