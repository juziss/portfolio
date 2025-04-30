import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre Mim", to: "#sobre" },
    { name: "Skills", to: "#habilidades" },
    { name: "Experiência", to: "#experiencia" },
    { name: "Ilustrações", to: "#ilustracoes" },
    { name: "Contato", to: "#contato" },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-4 py-4 scroll-smooth">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 backdrop-blur-md transition-all duration-300 border ${
          scrolled ? "border-white/10 bg-white/10 shadow-gray-900" : "border-transparent bg-white/10"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">
            <img src="/favicon.ico" alt="Logo" className="size-10" />
          </a>
        </div>

        {/* Navegação Desktop */}
        <div className="hidden space-x-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className="rounded-full px-6 py-2 text-sm text-gray-500 hover:text-pink-500 font-medium transition-colors hover:bg-white/100/50 border border-transparent hover:border-white/30"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-gray-800 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="mt-2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
