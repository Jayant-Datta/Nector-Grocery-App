import { create } from 'zustand';

interface AuthState {
  phoneNumber: string;
  location: { zone: string; area: string } | null;
  setPhoneNumber: (phone: string) => void;
  setLocation: (zone: string, area: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  phoneNumber: '',
  location: null,
  setPhoneNumber: (phone) => set({ phoneNumber: phone }),
  setLocation: (zone, area) => set({ location: { zone, area } }),
}));