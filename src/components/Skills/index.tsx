import html from "assets/Icons/icons8-html5.svg"
import css from "assets/Icons/icons8-css3.svg"
import js from "assets/Icons/icons8-javascript.svg"
import ts from "assets/Icons/icons8-mecanografiado.svg"
import github from "assets/Icons/icons8-github.svg"
import git from "assets/Icons/icons8-git.svg"
import react from "assets/Icons/icons8-reaccionar.svg"
import next from "assets/Icons/icons8-siguientejs.svg"
import Image from "next/image"

const iconSkills = [
  {name: "HTML", icon: html},
  {name: "CSS", icon: css},
  {name: "JavaScript", icon: js},
  {name: "TypeScript", icon: ts},
  {name: "React.js", icon: react},
  {name: "Next.js", icon: next},
  {name: "Git", icon: git},
  {name: "GitHub", icon: github},
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-5 bg-Background">
      <h2 className="mb-20 text-Titles text-5xl text-center font-Geist-Mono font-bold">SKILLS</h2>
      <div className="grid place-items-center gap-4 grid-cols-2">
        {iconSkills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2">
            <div className="w-20 h-20">
              <Image src={skill.icon} alt={skill.name} className="w-full h-full" />
            </div>
            <p className="text-Text text-xl font-Geist">{skill.name}</p>
          </div>
          ))
        }
      </div>
    </section>
  )
}



export { Skills }