import { TracingBeamDemo } from './components/home/blog';
import ToolExperince from './components/home/experince';
import Grid from './components/home/grid';
import HeroSection from './components/home/homeHeroSection'
import Project from './components/home/project';
import { InfiniteMovingCardsDemo } from './components/home/techstackCard';


export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white   ">
      <HeroSection />
      <Grid />
      <ToolExperince />
      <Project />
      <section id="blog">
        <TracingBeamDemo />
      </section>
      <InfiniteMovingCardsDemo />
    </main>
  );
}
