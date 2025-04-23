import { useEffect, useState } from "react"

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false)
  const [trembleValues, setTrembleValues] = useState<{ x: number; y: number; rotate: number }[]>(
    Array(9).fill({ x: 0, y: 0, rotate: 0 }),
  )

  // Check if mobile
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

  // Tremble effect
  useEffect(() => {
    const trembleInterval = setInterval(() => {
      const newTrembleValues = Array(9)
        .fill(0)
        .map(() => ({
          x: Math.random() * 4 - 2, // -2 to 2
          y: Math.random() * 4 - 2, // -2 to 2
          rotate: Math.random() * 2 - 1, // -1 to 1
        }))
      setTrembleValues(newTrembleValues)
    }, 150)

    return () => clearInterval(trembleInterval)
  }, [])

  // Portfolio letters
  const portfolioLetters = [
    { letter: "P", src: "/public/P.png", width: 120, height: 100 },
    { letter: "O", src: "/public/O1.png", width: 120, height: 100 },
    { letter: "R", src: "/public/R.png", width: 120, height: 100 },
    { letter: "T", src: "/public/T.png", width: 120, height: 100 },
    { letter: "F", src: "/public/F.png", width: 120, height: 100 },
    { letter: "O", src: "/public/O2.png", width: 120, height: 100 },
    { letter: "L", src: "/public/L.png", width: 90, height: 100 },
    { letter: "I", src: "/public/I.png", width: 90, height: 100 },
    { letter: "O", src: "/public/O3.png", width: 120, height: 100 },
  ]

  return (
    <section className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="">
      <div className="sticky top-30 left-75 top- p-4 text-left">
      <h1 className="text-pink-500 text-2xl">JULIA COUTINHO</h1>
      <div className="bg-pink-100 inline-block">
        <h2 className="text-gray-700">DEV & DESIGNER</h2>
      </div>
    </div>


        {/* Portfolio magazine cutout letters */}
        <div className="mt-32 md:mt-16 flex flex-wrap justify-center">
          {portfolioLetters.map((item, index) => (
            <div
              key={index}
              className="relative inline-block mx-[-5px]"
              style={{
                transform: `translate(${trembleValues[index]?.x}px, ${trembleValues[index]?.y}px) rotate(${trembleValues[index]?.rotate}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.letter}
                width={isMobile ? item.width * 0.8 : item.width}
                height={isMobile ? item.height * 0.8 : item.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}