"use client"
import Image from "next/image"
import { useEffect } from "react"
import { useStore } from "src/Store"
import { GET } from "src/app/api/netlify/route"
import { Button } from "../shared/Button"
import Link from "next/link"

const Portfolio: React.FC = () => {
  const fetchProjects = useStore((state) => state.projectsNetlify)
  const pushFetch = useStore((state) => state.setProjectsNetlify)

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await GET();
      const data = await response.json();
      const lastProjects = data.slice(0, 6)
      pushFetch(lastProjects);
    }

    fetchProjects();
  }, [pushFetch])
  
  return (
    <section id="portfolio" className="flex flex-col items-center py-32 px-6 bg-BackgroundHero">
      <h2 className="mb-12 text-Titles text-5xl text-center font-Geist-Mono font-bold">PORTFOLIO</h2>
      <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {fetchProjects.map((project) => (
          <div key={project.id} className="mb-10">
            <h2 className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">
              {project.name.split("-").slice(0, -1).join(" ")}
            </h2>
            <a href={project.url} className="w-screen">
              <Image
                src={project.screen}
                alt={project.name}
                layout="responsive"
                width={1}
                height={1}
              />
            </a>
          </div>
        ))}
      </div>
      <Link href="/projects">
        <Button label="View all projects" />
      </Link>
    </section>
  )
}

export { Portfolio }
