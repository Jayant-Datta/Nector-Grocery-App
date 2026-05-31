import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    // Prevent clicking the button from also clicking the card and navigating
    e.stopPropagation(); 
    addToCart(product);
  };

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="min-w-[173px] flex-1 border border-[#E2E2E2] rounded-[18px] p-4 flex flex-col cursor-pointer hover:border-primary transition-colors bg-white"
    >
      <div className="h-[100px] flex items-center justify-center mb-4">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="max-h-full object-contain drop-shadow-sm" 
        />
      </div>
      
      <h3 className="text-base font-bold text-darkGray mb-1 leading-tight tracking-tight">
        {product.name}
      </h3>
      <p className="text-sm text-lightGray mb-5">
        {product.unit}
      </p>
      
      <div className="mt-auto flex items-center justify-between">
        <span className="text-[18px] font-bold text-darkGray tracking-wide">
          ${product.price.toFixed(2)}
        </span>
        
        <button 
          onClick={handleAddToCart}
          className="w-[45px] h-[45px] bg-primary text-white rounded-[17px] flex items-center justify-center text-2xl font-light hover:bg-green-600 active:bg-green-700 active:scale-90 transition-all duration-150 shadow-sm pb-1"
        >
          +
        </button>
      </div>
    </div>
  );
}