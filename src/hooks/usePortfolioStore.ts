import { create } from "zustand";

export type SectionType = "home" | "skills" | "experience" | "projects" | "contact";

interface PortfolioState {
    activeSection: SectionType;
    setActiveSection: (section: SectionType) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
    activeSection: "home",
    setActiveSection: (section) => set({ activeSection: section }),
}));