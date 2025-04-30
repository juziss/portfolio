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
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
              >
                {/* LinkedIn SVG */}
                  <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" id="Linkedin--Streamline-Unicons" height="30" width="30"><desc>Linkedin Streamline Icon: https://streamlinehq.com</desc><path d="M27.45075 0.30025H2.5492500000000002C2.2693749999999997 0.29625 1.991375 0.347625 1.73125 0.451125 1.47125 0.55475 1.234125 0.7084999999999999 1.033375 0.903625 0.83275 1.098875 0.6725000000000001 1.3316249999999998 0.561875 1.5887499999999999c-0.11075 0.257125 -0.16962499999999997 0.533625 -0.17350000000000002 0.8135000000000001v25.195500000000003c0.003875 0.279875 0.06275 0.556375 0.17350000000000002 0.8135000000000001s0.270875 0.48987500000000006 0.4715 0.685125c0.20074999999999998 0.19525 0.437875 0.349 0.697875 0.4525 0.260125 0.103625 0.538125 0.15487499999999998 0.818 0.150875h24.9015c0.279875 0.004 0.557875 -0.04725 0.817875 -0.150875 0.26025 -0.1035 0.49724999999999997 -0.25725000000000003 0.698 -0.4525 0.200625 -0.19525 0.360875 -0.42812500000000003 0.4715 -0.685125 0.11075 -0.257125 0.16962499999999997 -0.533625 0.17350000000000002 -0.8135000000000001V2.40225c-0.003875 -0.279875 -0.06275 -0.55625 -0.17350000000000002 -0.8135000000000001 -0.110625 -0.257125 -0.270875 -0.48987500000000006 -0.4715 -0.685125 -0.20074999999999998 -0.195125 -0.43775000000000003 -0.349 -0.698 -0.4525 -0.26 -0.1035 -0.538 -0.15487499999999998 -0.817875 -0.150875ZM9.252375 24.907625000000003h-4.41V11.677875h4.41v13.22975ZM7.047375000000001 9.825625c-0.608125 0 -1.1913749999999999 -0.24150000000000002 -1.6215 -0.671625 -0.42999999999999994 -0.42999999999999994 -0.671625 -1.01325 -0.671625 -1.6215 0 -0.608125 0.241625 -1.1915 0.671625 -1.6215 0.43012500000000004 -0.43012500000000004 1.013375 -0.671625 1.6215 -0.671625 0.323 -0.036625 0.65 -0.004625000000000001 0.9597500000000001 0.093875 0.30974999999999997 0.09849999999999999 0.595125 0.261375 0.8375 0.47787499999999994 0.2425 0.2165 0.436375 0.48175 0.56925 0.778375 0.13275 0.296625 0.2015 0.618 0.2015 0.943 0 0.325 -0.06875 0.646375 -0.2015 0.943 -0.13287500000000002 0.296625 -0.32675000000000004 0.561875 -0.56925 0.778375 -0.24237499999999998 0.2165 -0.52775 0.379375 -0.8375 0.47787499999999994 -0.30974999999999997 0.09862499999999999 -0.6367499999999999 0.130625 -0.9597500000000001 0.094ZM25.157500000000002 24.907625000000003h-4.4098749999999995v-7.1c0 -1.7786250000000001 -0.632125 -2.9398750000000002 -2.234375 -2.9398750000000002 -0.495875 0.0036249999999999998 -0.97875 0.159125 -1.3835 0.445625s-0.712 0.6901250000000001 -0.8802500000000001 1.156625c-0.115125 0.3455 -0.165 0.709375 -0.147 1.073v7.35H11.692499999999999V11.663125h4.41v1.866875c0.4005 -0.695125 0.98325 -1.267875 1.6851250000000002 -1.656375 0.702125 -0.3885 1.49675 -0.578125 2.2984999999999998 -0.548625 2.94 0 5.071375 1.8962499999999998 5.071375 5.968125v7.6145Z" fill="#ff3996" stroke-width="1.25"></path></svg>
              </a>

              <a
                href="https://github.com/juziss"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
              >
                {/* GitHub SVG */}
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" id="Github--Streamline-Unicons" height="30" width="30"><desc>Github Streamline Icon: https://streamlinehq.com</desc><path d="M14.999875 0.66275c-3.4905000000000004 0.000125 -6.867125 1.242375 -9.525500000000001 3.50425C2.815875 6.428875 1.049 9.563 0.48987500000000006 13.008500000000002c-0.559125 3.445375 0.126 6.977375 1.93275 9.963999999999999 1.806625 2.986375 4.617125000000001 5.232625 7.9285000000000005 6.336625 0.735 0.12862500000000002 1.010625 -0.312375 1.010625 -0.69825 0 -0.349125 -0.018375 -1.50675 -0.018375 -2.7378750000000003 -3.6933749999999996 0.679875 -4.648875 -0.90025 -4.942875 -1.727125 -0.32625000000000004 -0.804125 -0.843375 -1.51675 -1.50675 -2.076375 -0.5145000000000001 -0.275625 -1.2495 -0.9555 -0.018375 -0.973875 0.470125 0.051000000000000004 0.920875 0.21462499999999998 1.314375 0.476875 0.393375 0.26225 0.717875 0.615625 0.9457500000000001 1.0298749999999999 0.201 0.361125 0.471375 0.679125 0.7955 0.935625 0.324125 0.2565 0.69575 0.446625 1.0935000000000001 0.559125 0.39775 0.112625 0.81375 0.14575 1.22425 0.09737499999999999s0.8075 -0.17725000000000002 1.168 -0.379375c0.063625 -0.747375 0.39675000000000005 -1.446125 0.93725 -1.966125 -3.27075 -0.3675 -6.6884999999999994 -1.635375 -6.6884999999999994 -7.258125 -0.020625 -1.4608750000000001 0.518375 -2.874375 1.50675 -3.9505 -0.44937499999999997 -1.2697500000000002 -0.396875 -2.6632499999999997 0.147 -3.8955 0 0 1.231 -0.38587499999999997 4.0425 1.50675 2.4052499999999997 -0.6615 4.9445 -0.6615 7.349875 0 2.811375 -1.911 4.0425 -1.50675 4.0425 -1.50675 0.543875 1.23225 0.5965 2.62575 0.147 3.8955 0.991125 1.0742500000000001 1.530875 2.489125 1.50675 3.9505 0 5.641125000000001 -3.4361249999999997 6.890625 -6.706875 7.258125 0.35075 0.3555 0.620875 0.7825 0.7921250000000001 1.2516250000000002 0.17125 0.469375 0.2395 0.97 0.200125 1.4678749999999998 0 1.96625 -0.018375 3.54625 -0.018375 4.042375 0 0.38587499999999997 0.275625 0.8452500000000001 1.010625 0.69825 3.3055000000000003 -1.112875 6.107875 -3.364375 7.906874999999999 -6.352375 1.799125 -2.9881249999999997 2.4776249999999997 -6.518375 1.914625 -9.9605 -0.5630000000000001 -3.442 -2.330875 -6.572 -4.98825 -8.831125C21.8615 1.905875 18.487750000000002 0.6646249999999999 14.999875 0.66275Z" fill="#ff3996" stroke-width="1.25"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
