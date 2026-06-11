import Nav from "./components/v2/Nav";
import CommandPalette from "./components/v2/interactive/CommandPalette";
import Hero from "./components/v2/Hero";
import Work from "./components/v2/Work";
import { About, NowBuilding, Stack, Contact, Footer } from "./components/v2/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <CommandPalette />
      <main>
        <Hero />
        <Work />
        <NowBuilding />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
