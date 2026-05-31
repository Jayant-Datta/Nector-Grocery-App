import { create } from 'zustand';
import type { Product } from '../types';
import { mockProducts } from '../data/mockData';

interface ProductState {
  products: Product[];
  favorites: string[]; // Array of product IDs
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: mockProducts, // Load our mock data
  favorites: [],
  toggleFavorite: (productId) => set((state) => ({
    favorites: state.favorites.includes(productId) 
      ? state.favorites.filter(id => id !== productId)
      : [...state.favorites, productId]
  })),
  isFavorite: (productId) => get().favorites.includes(productId),
}));