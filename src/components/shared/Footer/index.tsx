import Image from "next/image"
import Logo from "assets/logo_AM.svg"
import github from "assets/Icons/icons8-github-white.svg"
import linkedin from "assets/Icons/icons8-linkedin.svg"
import whatsapp from "assets/Icons/icons8-whatsapp.svg"
import { Form } from "src/components/Form"
import Link from "next/link"

const socialMedia = [
  {name: "Whatsapp", icon: whatsapp,  url: "https://wa.me/573123119897"},
  {name: "LinkedIn", icon: linkedin, url: "https://www.linkedin.com/in/alejandro-mira-yarce-49789816b/"},
  {name: "github", icon: github, url: "https://github.com/Yarce22"},
]

const Footer = () => {
  return(
    <footer id="contact" className="bg-Background">
      <div className="flex flex-col items-center pt-32 pb-10 bg-linear-to-l from-Titles to-green-950 rounded-t-[80px] opacity-80">
        <h2 className="pb-10 px-8 text-Text text-4xl text-center font-Geist font-bold">CONTACT ME</h2>
        <p className="px-8 pb-10 lg:px-40 text-xl text-Text font-Geist">Transformemos juntos los obstáculos en oportunidades. Mi compromiso es entregar un trabajo de calidad que no solo cumpla, sino que supere tus expectativas.</p>

        <Form />

        <hr className="bg-Text h-[3px] w-full mt-20 mb-10 opacity-50" />

        <div className="flex justify-between items-center px-8 lg:px-40 w-full">
          <Link href="/" className="cursor-pointer">
            <Image src={Logo} alt="Logo" className="w-14 h-14 lg:w-20 lg:h-20" />
          </Link>

          <div className="flex gap-2 lg:gap-6">
            {socialMedia.map(({ name, icon, url }) => (
              <a href={url} key={name}>
                <Image src={icon} alt={name} className="w-10 h-10 lg:w-14 lg:h-14" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }