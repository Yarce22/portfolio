"use client"

import { useEffect } from "react"
import { BurgerIcon } from "./BurgerMenu"
import { Links } from "./Links"
import { useStore } from "Store/index"
import Logo from "assets/logo_AM.svg"
import "./styles.css"
import Image from "next/image"
import Link from "next/link"

const Header: React.FC = () => {
	const isMobile = useStore((state: Store) => state.isMobile)
	const setIsMobile = useStore((state: Store) => state.setIsMobile)
	const menuOpen = useStore((state: Store) => state.menuOpen)
	const setMenuOpen = useStore((state: Store) => state.setMenuOpen)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, setIsMobile, setMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

	return (
		<nav className="fixed z-50 flex items-center justify-between w-full p-4 lg:px-10 font-bold text-Text bg-Background">
			<Link href="/" className="w-14 h-14 lg:w-20 lg:h-20">
				<Image src={Logo} alt="logo-icon" className="w-full h-full" />
			</Link>
			<ul className={`${!isMobile ? 'flex items-center gap-11' : 'hidden'}`}>
        <Links />
      </ul>
      {isMobile && (
        <BurgerIcon  menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}
      {isMobile && menuOpen && (
        <ul className="absolute z-50 flex flex-col gap-6 items-center top-[80px] left-0 w-full px-6 py-10 text-White text-xl font-Geist font-bold tracking-[1.36px] bg-Background">
          <Links /> 
        </ul>
      )}
		</nav>
	)
}

export { Header }