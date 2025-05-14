import Link from "next/link"
import { Button } from "../../Button"
import { useStore } from "src/Store"

const Links: React.FC = () => {
  const setMenuOpen = useStore((state: Store) => state.setMenuOpen)

  return (
    <>
      <Link href="/" onClick={() => setMenuOpen(false)} className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        HOME
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link href="/#about" onClick={() => setMenuOpen(false)} className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        ABOUT ME
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link href="/projects" onClick={() => setMenuOpen(false)} className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        PORTFOLIO
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link href="#contact" onClick={() => setMenuOpen(false)} className="relative cursor-pointer">
        <Button label="CONTACT ME" />
      </Link>
    </>
  )
}

export { Links }