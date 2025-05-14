import { create } from 'zustand'
import { Project } from 'src/types'

interface Store {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  projectsNetlify: Project[];
  setProjectsNetlify: (projects: Project[]) => void;
  certificates: [];
  setCertificates: (certificates: []) => void;
  contentfulData: [];
  setContentfulData: (contentfulData: []) => void;
}


export const useStore = create<Store>((set) => ({
  isMobile: false,
  setIsMobile: (value: boolean) => set({ isMobile: value }),
  menuOpen: false,
  setMenuOpen: (value: boolean) => set({ menuOpen: value }),
  projectsNetlify: [],
  setProjectsNetlify: (projects: Project[]) => set({ projectsNetlify: projects }),
  certificates: [],
  setCertificates: (certificates: []) => set({ certificates: certificates }),
  contentfulData: [],
  setContentfulData: (contentfulData: []) => set({ contentfulData: contentfulData }),
}))

