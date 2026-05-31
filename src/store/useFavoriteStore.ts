import { create } from 'zustand';
import type { Product } from '../types';
import { mockProducts } from '../data/mockData';

interface FavoriteState {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  // Pre-load with the exact mock data from your screenshot
  favorites: mockProducts.filter(p => ['9', '10', '11', '13', '14'].includes(p.id)),
  
  addFavorite: (product) => set((state) => ({ favorites: [...state.favorites, product] })),
  
  removeFavorite: (productId) => set((state) => ({
    favorites: state.favorites.filter((p) => p.id !== productId),
  })),
  
  toggleFavorite: (product) => {
    const isFav = get().isFavorite(product.id);
    if (isFav) {
      get().removeFavorite(product.id);
    } else {
      get().addFavorite(product);
    }
  },
  
  isFavorite: (productId) => get().favorites.some((p) => p.id === productId),
}));