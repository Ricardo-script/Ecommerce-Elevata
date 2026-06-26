import { create } from "zustand";
import { LoginResponse } from "../types/authUser";

type AuthStore = {
  user: LoginResponse | null;
  setUser: (user: LoginResponse) => void;
  clearUser: () => void;
  isAuthenticated: () => boolean;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  isAuthenticated: () => get().user !== null,
}));
