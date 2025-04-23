import Background from "@components/Background"
import Cursor from "@components/Cursor"
import Navbar from "@components/Navbar"
import Banner from "@components/Banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Cursor />
      <Background>
        <Navbar />
        <Banner />
      </Background>
    </main>
  );
}
