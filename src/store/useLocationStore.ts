import { create } from 'zustand';

interface LocationState {
  location: string;
  setLocation: (newLocation: string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: 'Delhi North', // A default fallback just in case
  setLocation: (newLocation) => set({ location: newLocation }),
}));