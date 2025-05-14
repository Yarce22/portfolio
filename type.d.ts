interface Store {
  isMobile: boolean,
  setIsMobile: (value: boolean) => void,
  menuOpen: boolean,
  setMenuOpen: (value: boolean) => void
}

interface Certificate {
  title: string,
  img: {
    url: string
  }
}
