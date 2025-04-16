import Link from "next/link"
import { Button } from "../../Button"

const Links: React.FC = () => {
  return (
    <>
      <Link href="/" className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        HOME
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link href="/" className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        ABOUT ME
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link href="/" className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        PORTFOLIO
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link href="/" className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        CERTIFICATES
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link href="/" className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles">
        EXPERIENCE
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Button label="CONTACT ME" />
    </>
  )
}

export { Links }