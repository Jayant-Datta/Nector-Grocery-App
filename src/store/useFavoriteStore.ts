import { create } from 'zustand';
import type { Product } from '../types';

interface FavoriteState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  // 1. Start completely empty! No pre-stored favorites.
  favorites: [], 
  
  // 2. Toggle logic: If it exists, remove it. If it doesn't, add it.
  toggleFavorite: (product) => set((state) => {
    const isAlreadyFavorite = state.favorites.some((p) => p.id === product.id);
    
    if (isAlreadyFavorite) {
      // Remove it
      return { favorites: state.favorites.filter((p) => p.id !== product.id) };
    } else {
      // Add it
      return { favorites: [...state.favorites, product] };
    }
  }),
}));