import Image from "next/image"
import { Button } from "../shared/Button"
import profilePhoto from "assets/profilePhoto.png"
import Link from "next/link"

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="flex flex-col items-center py-30 px-6 bg-Background">
      <div className="w-[80%]">
        <Image src={profilePhoto} alt="profile-photo" className="w-full h-full" />
      </div>
      <h2 className="mt-20 mb-10 text-Titles text-5xl text-center font-Geist-Mono font-bold">
        ABOUT ME
      </h2>
      <p className="mt-5 text-Text text-2xl font-Geist">
      I&apos;m Alejandro Mira, a passionate Front-end Developer with one year of experience building personal projects with React. My journey in web development has been driven by a constant desire to learn and grow in this ever-evolving field.
      </p>
      <p className="mt-2.5 mb-10 text-Text text-2xl font-Geist">
        I embrace new challenges with enthusiasm and I am always eager to expand my skill set. My experience with React has given me a solid foundation in modern web development, and I&apos;m excited to continue growing as a developer while taking on new and challenging projects.
      </p>
      <Link href="https://export-download.canva.com/xDuys/DAGk0bxDuys/17/0-8372656178358177474.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250503%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250503T061335Z&X-Amz-Expires=65364&X-Amz-Signature=de753e42cc6d492980eb60c2321ecfa76496ba6b20bd869c4728d9ba519c27bc&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Curr%25C3%25ADculum%2520Marketing%2520Moderno%2520Verde%2520y%2520gris.pdf&response-expires=Sun%2C%2004%20May%202025%2000%3A22%3A59%20GMT">
        <Button label="CURRICULUM" />
      </Link>
    </section>
  )
}

export { AboutMe }