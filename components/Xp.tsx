import WindowBox from "@components/WindowBox";

export default function Xp() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
        XP e Projetos
      </h2>
      <WindowBox title="DMTE">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://embed.figma.com/design/fap3wTHMJNwqYlGyYUQxSR/SISTEMA-DMTE?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      </WindowBox>
      <p className="text-gray-600">
        Este foi um projeto full stack em que trabalhei para a Universidade Estadual de Montes Claros para o desenvolvimento de um sistema de gestão do Departamento de Métodos e Técnicas. Criei o protótipo da aplicação
        que mais tarde eu programei utilizando React e Bootstrap.
      </p>
      <WindowBox title="DMTE">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://embed.figma.com/design/fap3wTHMJNwqYlGyYUQxSR/SISTEMA-DMTE?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      </WindowBox>
      <p className="text-gray-600">
        Este foi um projeto full stack em que trabalhei para a Universidade Estadual de Montes Claros para o desenvolvimento de um sistema de gestão do Departamento de Métodos e Técnicas. Criei o protótipo da aplicação
        que mais tarde eu programei utilizando React e Bootstrap.
      </p>
    </section>
  );
}
