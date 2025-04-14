import Background from "@components/Background"
import Cursor from "@components/Cursor"
import Navbar from "@components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background />
      <Cursor />
      <Navbar />
    </main>
  )
}
