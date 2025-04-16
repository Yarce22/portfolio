import { create } from 'zustand'

interface Store {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  isMobile: window.innerWidth < 768,
  setIsMobile: (value: boolean) => set({ isMobile: value }),
}))
