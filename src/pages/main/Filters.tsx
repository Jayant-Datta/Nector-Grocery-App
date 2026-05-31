import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFilterStore } from '../../store/useFilterStore';

export default function Filters() {
  const navigate = useNavigate();
  
  // Pull current global state so filters remember what was checked if you come back
  const globalFilters = useFilterStore();

  // Local state for the UI while the user is clicking around
  const [categories, setCategories] = useState(globalFilters.categories);
  const [brands, setBrands] = useState(globalFilters.brands);

  const handleApplyFilter = () => {
    // Save to global Zustand store so Search.tsx can see it
    globalFilters.setFilters(categories, brands);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      
      {/* Header */}
      <div className="pt-12 pb-6 px-6 flex items-center justify-center relative bg-white">
        <button onClick={() => navigate(-1)} className="absolute left-6 p-2 -ml-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-darkGray">Filters</h1>
      </div>

      {/* Gray Content Area */}
      <div className="bg-[#F2F3F2] rounded-t-[30px] flex-grow px-6 pt-8 pb-32 flex flex-col gap-10">
        
        {/* Categories Section */}
        <div>
          <h2 className="text-[24px] font-semibold text-darkGray mb-6">Categories</h2>
          <div className="flex flex-col gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={categories.eggs} onChange={(e) => setCategories({...categories, eggs: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${categories.eggs ? 'text-primary' : 'text-darkGray'}`}>Eggs</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={categories.noodles} onChange={(e) => setCategories({...categories, noodles: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${categories.noodles ? 'text-primary' : 'text-darkGray'}`}>Noodles & Pasta</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={categories.chips} onChange={(e) => setCategories({...categories, chips: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${categories.chips ? 'text-primary' : 'text-darkGray'}`}>Chips & Crisps</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={categories.fastFood} onChange={(e) => setCategories({...categories, fastFood: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${categories.fastFood ? 'text-primary' : 'text-darkGray'}`}>Fast Food</span>
            </label>
          </div>
        </div>

        {/* Brand Section */}
        <div>
          <h2 className="text-[24px] font-semibold text-darkGray mb-6">Brand</h2>
          <div className="flex flex-col gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={brands.individual} onChange={(e) => setBrands({...brands, individual: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${brands.individual ? 'text-primary' : 'text-darkGray'}`}>Individual Collection</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={brands.cocola} onChange={(e) => setBrands({...brands, cocola: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${brands.cocola ? 'text-primary' : 'text-darkGray'}`}>Cocola</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={brands.ifad} onChange={(e) => setBrands({...brands, ifad: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${brands.ifad ? 'text-primary' : 'text-darkGray'}`}>Ifad</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={brands.kazi} onChange={(e) => setBrands({...brands, kazi: e.target.checked})} className="w-6 h-6 rounded-[8px] border-[#B1B1B1] accent-primary" />
              <span className={`text-base ${brands.kazi ? 'text-primary' : 'text-darkGray'}`}>Kazi Farmas</span>
            </label>
          </div>
        </div>
      </div>

      {/* Floating Apply Button */}
      <div className="fixed bottom-0 w-full max-w-md bg-transparent px-6 py-8 z-50">
        <button 
          onClick={handleApplyFilter}
          className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-lg"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}