import { create } from "zustand";

type DashboardView = "sprintVelocity" | "openIssues" | "tasksDone" | "uptime";

interface DashboardState {
  activeView: DashboardView;
  setActiveView: (view: DashboardView) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  activeView: "sprintVelocity",
  setActiveView: (view) => set({ activeView: view }),
}));
