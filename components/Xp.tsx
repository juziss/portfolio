import WindowBox from "@components/WindowBox";

export default function Xp() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
        XP e Projetos
      </h2>

      {/* Projeto DMTE */}
      <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
        <div className="flex-1">
          <WindowBox title="DMTE">
            <iframe
              className="w-full h-64 md:h-80"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              src="https://embed.figma.com/design/fap3wTHMJNwqYlGyYUQxSR/SISTEMA-DMTE?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
          </WindowBox>
        </div>
        <div className="flex-1 text-gray-600">
          <p>
            Esse foi um projeto full stack que desenvolvi para o Departamento de Métodos e Técnicas da Universidade Estadual de Montes Claros. Primeiro, criei o protótipo da aplicação, pensando em um fluxo de navegação prático e eficiente. Depois, coloquei a mão no código e dei vida ao sistema usando React e Bootstrap, garantindo uma interface moderna e fácil de usar.
          </p>
        </div>
      </div>

      {/* Projeto Landing Page */}
      <div className="flex flex-col md:flex-row-reverse gap-8 mb-16 items-center">
        <div className="flex-1">
          <WindowBox title="Projeto de Landing Page - Minicurso de Design UI/UX">
            <iframe
              className="w-full h-64 md:h-80"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              src="https://embed.figma.com/design/tDnQ6V1ckPtzQYQlQQOfnQ/Untitled?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
          </WindowBox>
        </div>
        <div className="flex-1 text-gray-600">
          <p>
            Durante um minicurso de Design UI/UX na Universidade Estadual de Montes Claros, participei de uma competição para criar a melhor landing page — e o meu projeto foi o vencedor! Trabalhei bastante na organização visual, usabilidade e estética da página, aplicando na prática tudo o que aprendemos sobre experiência do usuário e design.
          </p>
        </div>
      </div>

      {/* Projeto GAMECHECK */}
      <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
        <div className="flex-1">
          <WindowBox title="GAMECHECK - Plataforma de Avaliação de Jogos">
          <img
            src="/gamecheck.gif"
            alt="Demonstração do projeto GAMECHECK"
            className="w-full h-64 md:h-80 object-contain rounded-md"
          />
          </WindowBox>
        </div>
        <div className="flex-1 text- text-gray-600 flex flex-col gap-4">
          <p>
            Projeto full stack desenvolvido para a disciplina de Banco de Dados II na Unimontes. O GAMECHECK é uma plataforma onde usuários podem avaliar jogos, criar listas personalizadas e interagir com a comunidade. Trabalhei no front-end (HTML, CSS, JavaScript) e banco de dados (MySQL), além de estruturar toda a aplicação e versionar o projeto no GitHub. Destaque para recursos como cadastro de usuários, avaliações com estrelas e busca avançada de jogos.
          </p>
          <a
            href="https://github.com/juziss/GameCheck"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-600 transition-colors w-fit"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
