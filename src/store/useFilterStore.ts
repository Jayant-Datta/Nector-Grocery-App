import { create } from 'zustand';

interface FilterState {
  categories: {
    eggs: boolean;
    noodles: boolean;
    chips: boolean;
    fastFood: boolean;
  };
  brands: {
    individual: boolean;
    cocola: boolean;
    ifad: boolean;
    kazi: boolean;
  };
  setFilters: (categories: FilterState['categories'], brands: FilterState['brands']) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  categories: { eggs: false, noodles: false, chips: false, fastFood: false },
  brands: { individual: false, cocola: false, ifad: false, kazi: false },
  
  setFilters: (categories, brands) => set({ categories, brands }),
  
  clearFilters: () => set({
    categories: { eggs: false, noodles: false, chips: false, fastFood: false },
    brands: { individual: false, cocola: false, ifad: false, kazi: false }
  })
}));