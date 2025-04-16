"use client"

import { useEffect, useState } from "react"
import { BurgerIcon } from "./BurgerMenu"
import { Links } from "./Links"
import { useStore } from "Store/index"
import Logo from "assets/logo_AM.svg"
import "./styles.css"
import Image from "next/image"

const Header: React.FC = () => {
	const isMobile = useStore((state: Store) => state.isMobile)
	const setIsMobile = useStore((state: Store) => state.setIsMobile)
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, setIsMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

	return (
		<nav className="fixed flex items-center justify-between w-full p-4 font-bold text-Text bg-Background">
			<div className="w-14 h-14 lg:w-8 lg:h-8">
				<Image src={Logo} alt="logo-icon" className="w-full h-full" />
			</div>
			<ul className={`${!isMobile ? 'flex items-center gap-11' : 'hidden'}`}>
        <Links />
      </ul>
      {isMobile && (
        <BurgerIcon  menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}
      {isMobile && menuOpen && (
        <ul className="absolute z-50 flex flex-col gap-6 items-center top-[80px] left-0 w-full px-6 py-10 text-White text-xl font-Karla font-bold tracking-[1.36px]">
          <Links /> 
        </ul>
      )}
		</nav>
	)
}

export { Header }