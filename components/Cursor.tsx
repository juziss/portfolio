import { useEffect, useState } from "react"
interface TrailDot {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export default function Cursor() {
  const [trail, setTrail] = useState<TrailDot[]>([])

  useEffect(() => {
    console.log("Efeito CursorTrail rodando")

    let trailCounter = 0

    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prevTrail) => {

        const newTrail = [...prevTrail]
        newTrail.push({
          id: trailCounter++,
          x: e.clientX,
          y: e.clientY,
          size: 30,
          opacity: 0.6,
        })

        if (newTrail.length > 20) {
          newTrail.shift()
        }

        return newTrail
      })
    }

    const fadeInterval = setInterval(() => {
      setTrail((prevTrail) =>
        prevTrail
          .map((dot) => ({
            ...dot,
            opacity: dot.opacity > 0 ? dot.opacity - 0.03 : 0,
            size: dot.size + 1,
          }))
          .filter((dot) => dot.opacity > 0),
      )
    }, 50)

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(fadeInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      <div className="hidden">CursorTrail está renderizando</div>

      {trail.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.x - dot.size / 2}px`,
            top: `${dot.y - dot.size / 2}px`,
            background: `radial-gradient(circle, rgba(244,114,182,${dot.opacity}) 0%, rgba(244,114,182,0) 70%)`,
            transition: "opacity 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out",
          }}
        ></div>
      ))}
    </div>
  )
}
