import { Button } from "../shared/Button"

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex flex-col justify-center px-6 py-20 lg:h-screen lg:py-0">
      <span className="px-1 text-Titles text-3xl lg:text-5xl font-Geist font-semibold">I&apos;m a</span>
      <h1 className="mb-10 mt-5 lg:w-[500px] text-Text text-6xl lg:text-8xl font-Geist-Mono font-bold">Frontend Developer</h1>
      <a href="#portfolio" className="block w-60 lg:w-72">
        <Button label="Previous Projects" />
      </a>
    </section>
  )
}

export { Hero }
