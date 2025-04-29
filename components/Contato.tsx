import React, { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [mensagemStatus, setMensagemStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const response = await fetch("https://formspree.io/f/mjkwgoko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          mensagem: formData.mensagem,
        }),
      });

      if (response.ok) {
        setMensagemStatus("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setMensagemStatus("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      setMensagemStatus("Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setEnviando(false);
      setTimeout(() => setMensagemStatus(""), 5000);
    }
  };

  return (
    <section id="contato" className="relative py-20 px-8">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-16 text-center">
        Contato
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-700 mb-6">
            Envie uma mensagem
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-600 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-gray-700 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2  text-gray-700 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-gray-600 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2  text-gray-700 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex justify-center"
            >
              {enviando ? <span>Enviando...</span> : <span>Enviar mensagem</span>}
            </button>

            {mensagemStatus && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-center">
                {mensagemStatus}
              </div>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Informações de contato
            </h3>
            <p className="text-gray-600 mb-6">
              Estou disponível para projetos freelance, colaborações e
              oportunidades de trabalho.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:juliacoutinho@exemplo.com"
                className="flex items-center text-gray-700 hover:text-pink-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                julianeta26@gmail.com
              </a>

              <a
                href="https://wa.me/5538998459457"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-pink-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Me encontre nas redes
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/jucoutinho"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full transition duration-300"
              >
                {/* LinkedIn SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#d1416d"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761... (conteúdo reduzido para brevidade) ..." />
                </svg>
              </a>

              <a
                href="https://github.com/juziss"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full transition duration-300"
              >
                {/* GitHub SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#d1416d"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0... (conteúdo reduzido para brevidade) ..." />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
