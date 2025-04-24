import Background from "@components/Background"
import Cursor from "@components/Cursor"
import Navbar from "@components/Navbar"
import Banner from "@components/Banner"
import AboutMe from "@components/AboutMe"
import Skills from "@components/Skills"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Cursor />
      <Background>
        <Navbar />
        <Banner />
        <AboutMe />
        <Skills />
      </Background>
    </main>
  );
}
