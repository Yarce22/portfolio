import Image from "next/image"
import { Button } from "../Button"
import Logo from "assets/logo_AM.svg"
import github from "assets/Icons/icons8-github-white.svg"
import linkedin from "assets/Icons/icons8-linkedin.svg"
import whatsapp from "assets/Icons/icons8-whatsapp.svg"

const socialMedia = [
  {name: "Whatsapp", icon: whatsapp,  url: "https://wa.me/573123119897"},
  {name: "LinkedIn", icon: linkedin, url: "https://www.linkedin.com/in/alejandro-mira-yarce-49789816b/"},
  {name: "github", icon: github, url: "https://github.com/Yarce22"},
]

const Footer = () => {
  return(
    <footer id="contact" className="bg-Background">
      <div className="flex flex-col items-center px-6 py-20 bg-linear-to-l from-Titles to-green-950 rounded-t-[80px] opacity-80">
        <h2 className="pb-10 text-Text text-4xl font-Geist font-bold">CONTACT</h2>
        <p className="px-5 pb-5 text-Text font-Geist">Transformemos juntos los obstáculos en oportunidades. Mi compromiso es entregar un trabajo de calidad que no solo cumpla, sino que supere tus expectativas.</p>

        <form action="" className="w-full flex flex-col gap-3 px-6 py-8 bg-linear-to-br from-Titles to-green-950 rounded-2xl">
          <input type="text" placeholder="Name" className="w-full h-12 px-5 text-Text font-Geist bg-Background rounded-xl" />
          <input type="text" placeholder="Email" className="w-full h-12 px-5 text-Text font-Geist bg-Background rounded-xl" />
          <textarea name="" id="" placeholder="Message" className="w-full h-24 px-5 py-2 text-Text font-Geist bg-Background rounded-xl" />
          <Button label="Send" />
        </form>

        <hr className="bg-Text h-[3px] w-full my-20 opacity-50" />

        <div className="flex justify-between w-full">
          <div>
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </div>

          <div className="flex gap-2">
            {socialMedia.map(({ name, icon, url }) => (
              <a href={url} key={name}>
                <Image src={icon} alt={name} width={40} height={40} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }