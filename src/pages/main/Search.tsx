import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useProductStore } from '../../store/useProductStore';
import { useFilterStore } from '../../store/useFilterStore';
import ProductCard from '../../components/ui/ProductCard';

export default function Search() {
  const navigate = useNavigate();
  const { isNavVisible } = useOutletContext<{ isNavVisible: boolean }>();
  
  const products = useProductStore((state) => state.products);
  const { categories: activeFilters } = useFilterStore();
  
  const [searchQuery, setSearchQuery] = useState('');

  // Check if ANY filter is actually turned on
  const isFilterApplied = Object.values(activeFilters).some(isChecked => isChecked);

  // Advanced Filtering Logic
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : products.filter(p => {
        // 1. Must match search text
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (!matchesSearch) return false;

        // 2. If no filters are selected, show everything that matched the search
        if (!isFilterApplied) return true;

        // 3. If filters are applied, map them to keywords
        let matchesCategory = false;
        
        // If "Eggs" is checked, keep plain eggs and mayo (but not pasta/noodles)
        if (activeFilters.eggs && (p.name.includes('Chicken') || p.name.includes('Mayonnaise'))) {
          matchesCategory = true;
        }
        // If "Noodles & Pasta" is checked, keep only noodles and pasta
        if (activeFilters.noodles && (p.name.includes('Noodle') || p.name.includes('Pasta'))) {
          matchesCategory = true;
        }

        return matchesCategory;
      });

  return (
    <div className={`pt-12 px-6 flex flex-col h-full transition-[padding] duration-500 ease-in-out ${isNavVisible ? 'pb-28' : 'pb-6'}`}>
      
      {/* Search Header Area */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#F2F3F2] rounded-2xl px-4 py-4 flex items-center gap-3 flex-grow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 17.5L13.875 13.875" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            placeholder="Search Store"
            className="bg-transparent outline-none w-full text-darkGray font-semibold"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="bg-[#CCCCCC] rounded-full p-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3L3 9M3 3L9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
        
        {/* Filter Button (Now shows a tiny green dot if filters are active!) */}
        <button onClick={() => navigate('/filters')} className="p-2 relative">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 13.5H10.5M3 4.5H15M5.25 9H12.75" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isFilterApplied && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          )}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {searchResults.map((product) => (
          <div key={product.id} className="w-full">
            <ProductCard product={product} />
          </div>
        ))}
        
        {searchQuery.trim() !== '' && searchResults.length === 0 && (
          <div className="col-span-2 text-center text-lightGray mt-10">
            No products match your search and filter criteria.
          </div>
        )}

        {searchQuery.trim() === '' && (
          <div className="col-span-2 text-center text-lightGray mt-10">
            Type a product name to start searching...
          </div>
        )}
      </div>
    </div>
  );
}