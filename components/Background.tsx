"use client"
import { useEffect, useState } from "react"

interface Dot {
  id: number
  size: number
  top: string
  left: string
  opacity: number
}

export default function Background() {
  const [dots, setDots] = useState<Dot[]>([])
  
  // Garantir que o código só execute no cliente
  useEffect(() => {
    console.log("PinkBackground useEffect executando")
    
    // Gera entre 15-25 pontos aleatórios
    const dotCount = Math.floor(Math.random() * 10) + 15
    const newDots: Dot[] = []
    
    for (let i = 0; i < dotCount; i++) {
      newDots.push({
        id: i,
        // Tamanho aleatório entre 50px e 200px
        size: Math.floor(Math.random() * 150) + 50,
        // Posição aleatória
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        // Opacidade aleatória entre 0.1 e 0.4
        opacity: Math.random() * 0.3 + 0.1,
      })
    }
    
    console.log("PinkBackground gerou", newDots.length, "pontos")
    setDots(newDots)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ zIndex: -1 }}>
      {/* Fundo rosa claro */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "#fdf2f8", // bg-pink-50 equivalente
        }}
      />
      
      {/* Pontos de gradiente */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: dot.top,
            left: dot.left,
            background: `radial-gradient(circle, rgba(244,114,182,${dot.opacity}) 0%, rgba(244,114,182,0) 70%)`,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  )
}