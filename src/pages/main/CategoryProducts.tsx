import { useParams, useNavigate } from 'react-router-dom';
import { useProductStore } from '../../store/useProductStore';
import ProductCard from '../../components/ui/ProductCard';
import filterIcon from '../../assets/filter-icon.svg';

export default function CategoryProducts() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const products = useProductStore((state) => state.products);

  // Filter products matching the URL category
  const categoryProducts = products.filter(p => p.category === categoryId);

  // Map the strict ID to a readable title
  const getTitle = () => {
    switch (categoryId) {
      case 'BEVERAGES': return 'Beverages';
      case 'FRESH_PRODUCE': return 'Fresh Fruits & Vegetables';
      case 'MEAT': return 'Meat & Fish';
      default: return 'Products';
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pb-10">
      
      {/* Header */}
      <div className="pt-12 pb-6 px-6 flex justify-between items-center bg-white sticky top-0 z-10 border-b border-[#E2E2E2]/50">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 9L9 17" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-darkGray">
          {getTitle()}
        </h1>
        <button className="p-2 -mr-2">
          <img src={filterIcon} alt="Filter" className="w-5 h-5" />
        </button>
      </div>

      {/* Grid */}
      <div className="px-6 pt-6">
        <div className="grid grid-cols-2 gap-4">
          {categoryProducts.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {categoryProducts.length === 0 && (
          <div className="text-center text-lightGray mt-20">
            No products found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
