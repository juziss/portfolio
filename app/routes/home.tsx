import Background from "@components/Background"
import Cursor from "@components/Cursor"
import Navbar from "@components/Navbar"
import Banner from "@components/Banner"
import AboutMe from "@components/AboutMe"
import Skills from "@components/Skills"
import Xp from "@components/Xp"
import Ilustrações from "@components/Ilustrações"
import Contato from "@components/Contato"
import Footer from "@components/Footer"
import ColorfulSelect from "@components/ColorfulSelect"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background>
      <ColorfulSelect >
      <Cursor />
        <Navbar />
        <Banner />
        <AboutMe />
        <Skills />
        <Xp />
        <Ilustrações />
        <Contato />
      </ColorfulSelect>
      </Background>
        <Footer />
    </main>
  );
}
