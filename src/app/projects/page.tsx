"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { useStore } from "src/Store"
import { GET } from "src/app/api/netlify/route"

const Projects: React.FC = () => {
  const fetchProjects = useStore((state) => state.projectsNetlify)
  const pushFetch = useStore((state) => state.setProjectsNetlify)

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await GET();
      const data = await response.json();
      console.log(data)
      pushFetch(data);
    }

    fetchProjects();
  }, [pushFetch])
  
  return (
    <section id="portfolio" className="flex flex-col items-center py-40 px-6 bg-BackgroundHero">
      <h2 className="mb-12 text-Titles text-5xl text-center font-Geist-Mono font-bold">PORTFOLIO</h2>
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {fetchProjects.map((project) => (
          <div key={project.id} className="mb-10">
            <Link href={project.url} className="w-screen">
              <h2 className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">
                {project.name.split("-").slice(0, -1).join(" ")}
              </h2>
              <Image
                src={project.screen}
                alt={project.name}
                layout="responsive"
                width={1}
                height={1}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
