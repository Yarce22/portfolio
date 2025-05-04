import { Button } from "../shared/Button"

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 px-6">
      <span className="px-1 text-Titles text-3xl font-Geist font-bold">I&apos;m a</span>
      <h1 className="mb-10 mt-5 text-Text text-6xl font-Geist-Mono">Frontend Developer</h1>
      <a href="#portfolio">
        <Button label="Previous Projects" />
      </a>
    </section>
  )
}

export { Hero }
