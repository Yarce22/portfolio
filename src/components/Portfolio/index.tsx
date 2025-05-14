"use client"
import { useState } from "react";
import { Projects } from "../Projects";
import { Certificates } from "../Certificates";
import { Skills } from "../Skills";

const Portfolio: React.FC = () => {
  const [navProjects, setNavProjects] = useState([
    {id: 1, name: "Projects", isActive: true, Component: Projects},
    {id: 2, name: "Certificates", isActive: false, Component: Certificates},
    {id: 3, name: "Skills", isActive: false, Component: Skills},
  ]);

  const handleNavActive = (id: number) => {
    const newStateNavProjects = navProjects.map((project) => {
      if (project.id === id) {
        return { ...project, isActive: true };
      } else {
        return { ...project, isActive: false };
      }
    })
    setNavProjects(newStateNavProjects);
  };

  return (
    <section  id="portfolio" className="flex flex-col items-center py-32 px-6 bg-BackgroundHero">
      <h2 className="mb-12 text-Titles text-5xl text-center font-Geist-Mono font-bold">PORTFOLIO</h2>
      <div>
        <ul className="flex flex-row gap-10 items-center justify-between w-full px-4 pt-4 pb-12 lg:px-10 font-bold text-Text">
          {navProjects.map(({ id, name, isActive }) => (
            <li
              key={id}
              onClick={() => handleNavActive(id)}
              className={`relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles ${isActive ? "text-Titles" : "text-White"}`}
            >
              {name.toUpperCase()}
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {navProjects.map(({ id, isActive, Component }) => {
          if (isActive) {
            return <Component key={id} />;
          }
        })}
      </div>
    </section>
  )
};

export { Portfolio }