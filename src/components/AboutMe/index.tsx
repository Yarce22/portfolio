import Image from "next/image"
import { Button } from "../shared/Button"
import profilePhoto from "assets/profilePhoto.png"

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="flex flex-col items-center py-20 px-6 bg-Background">
      <div className="w-[80%]">
        <Image src={profilePhoto} alt="profile-photo" className="w-full h-full" />
      </div>
      <h2 className="mt-20 mb-10 text-Titles text-5xl text-center font-Geist-Mono font-bold">
        ABOUT ME
      </h2>
      <p className="mt-5 text-Text text-2xl font-Geist">
      I'm Alejandro Mira, a passionate Front-end Developer with one year of experience building personal projects with React. My journey in web development has been driven by a constant desire to learn and grow in this ever-evolving field.
      </p>
      <p className="mt-2.5 mb-10 text-Text text-2xl font-Geist">
        I embrace new challenges with enthusiasm and I am always eager to expand my skill set. My experience with React has given me a solid foundation in modern web development, and I'm excited to continue growing as a developer while taking on new and challenging projects.
      </p>
      <Button label="CURRICULUM" />
    </section>
  )
}

export { AboutMe }