"use client"

import { useEffect, useState } from "react"

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <section className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Lado esquerdo - Foto de perfil com decorações */}
        <div className="relative w-full max-w-[300px]">
          <div className="relative">
            <img
              src="/profile_pic.png"
              alt="Foto de perfil"
              className="z-10 relative w-full h-auto"
              style={{ maxWidth: "300px" }}
            />

            {/* Flor decorativa */}
            <div className="absolute bottom-[-20px] left-[-20px] z-20 w-[80px] h-[80px]">
              <img src="/flower.png" alt="Flor decorativa" className="w-full h-full" />
            </div>

            {/* Ursinho decorativo */}
            <div className="absolute bottom-[-10px] right-[-10px] z-20 w-[60px] h-[60px]">
              <img src="/bear.png" alt="Ursinho decorativo" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Lado direito - Texto de boas-vindas */}
        <div className="relative flex-1 text-center md:text-left">
          <div className="relative inline-block">
            <img
              src="/welcome_text.png"
              alt="Boas Vindas ao Meu Portfólio"
              className="z-10 relative"
              style={{
                width: isMobile ? "300px" : "500px",
                height: "auto",
              }}
            />

            {/* Laço decorativo */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px]">
              <img src="/ribbon_1.png" alt="Laço decorativo" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
