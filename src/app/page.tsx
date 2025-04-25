import { Hero } from "src/components/Hero";
import { AboutMe } from "src/components/AboutMe";
import { Skills } from "src/components/Skills";
import { Portfolio } from "src/components/Portfolio";

export default function Page() {
  return (
    <main className="pt-[88px]">
      <Hero />
      <AboutMe />
      <Portfolio />
      <Skills />
    </main>
  )
}
