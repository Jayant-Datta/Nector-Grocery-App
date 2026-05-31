import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductStore } from '../../store/useProductStore';
import { useCartStore } from '../../store/useCartStore';
import { useFavoriteStore } from '../../store/useFavoriteStore'; // <-- Imported favorite store

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const products = useProductStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);
  
  // <-- Grab favorites and the toggle function from the store
  const { favorites, toggleFavorite } = useFavoriteStore(); 
  
  // Safely find the product
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  // MUST return early if product is not found to prevent a blank screen crash
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-xl font-semibold text-darkGray mb-4">Product not found.</p>
        <button onClick={() => navigate('/home')} className="text-primary font-semibold text-lg hover:underline">
          Return to Home
        </button>
      </div>
    );
  }

  // <-- Check if THIS specific product is currently favorited
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const handleAddQuantity = () => setQuantity(prev => prev + 1);
  const handleSubtractQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToBasket = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate(-1); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative pb-28">
      {/* Top Header & Image Section with curved background */}
      <div className="bg-[#F2F3F2] rounded-b-[40px] pt-12 pb-12 px-6 relative mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:opacity-70 transition-opacity">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9L9 17" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="p-2 -mr-2 hover:opacity-70 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9V17H18V9H15.5" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2V12" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 5.5L12 2L15.5 5.5" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Enlarged Image Container */}
        <div className="flex justify-center items-center h-[280px] w-full">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-[85%] h-[85%] object-contain drop-shadow-xl scale-125" 
          />
        </div>
      </div>

      <div className="px-6 flex-grow flex flex-col">
        {/* Title and Favorite Button */}
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-[24px] font-bold text-darkGray leading-tight max-w-[80%]">
            {product.name}
          </h1>
          
          {/* <-- Dynamic Interactive Heart Button --> */}
          <button 
            onClick={() => toggleFavorite(product)}
            className="hover:opacity-70 transition-transform active:scale-90 mt-1 p-1"
          >
            {isFavorite ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF4B4B" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C7C7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            )}
          </button>
        </div>
        
        {/* Unit */}
        <p className="text-base text-lightGray font-semibold mb-8">
          {product.unit}
        </p>

        {/* Quantity and Price */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button onClick={handleSubtractQuantity} className="w-11 h-11 flex items-center justify-center text-[#B3B3B3] text-3xl font-light hover:text-darkGray pb-1 transition-colors">
              -
            </button>
            <div className="w-11 h-11 border border-[#E2E2E2] rounded-2xl flex items-center justify-center text-darkGray font-semibold text-lg">
              {quantity}
            </div>
            <button onClick={handleAddQuantity} className="w-11 h-11 flex items-center justify-center text-primary text-3xl font-light pb-1 hover:opacity-80 transition-opacity">
              +
            </button>
          </div>
          <span className="text-[24px] font-bold text-darkGray tracking-wide">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>

        <hr className="border-[#E2E2E2] mb-4" />

        {/* Product Detail Accordion */}
        <div className="flex justify-between items-center py-2 cursor-pointer mb-2 group">
          <h3 className="text-base font-semibold text-darkGray group-hover:text-primary transition-colors">Product Detail</h3>
          <span className="text-darkGray font-bold text-xl group-hover:text-primary transition-colors">⌄</span>
        </div>
        <p className="text-[13px] text-lightGray leading-relaxed mb-4">
          {product.description} Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
        </p>

        <hr className="border-[#E2E2E2] mb-4" />

        {/* Nutritions */}
        <div className="flex justify-between items-center py-2 cursor-pointer mb-4 group">
          <h3 className="text-base font-semibold text-darkGray group-hover:text-primary transition-colors">Nutritions</h3>
          <div className="flex items-center gap-4">
            <span className="bg-[#EBEBEB] text-[#7C7C7C] text-[10px] font-semibold px-2 py-1 rounded-[5px]">100gr</span>
            <span className="text-darkGray font-bold text-lg group-hover:text-primary transition-colors">›</span>
          </div>
        </div>

        <hr className="border-[#E2E2E2] mb-4" />

        {/* Reviews */}
        <div className="flex justify-between items-center py-2 cursor-pointer mb-8 group">
          <h3 className="text-base font-semibold text-darkGray group-hover:text-primary transition-colors">Review</h3>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[#F3603F] text-lg">★</span>
              ))}
            </div>
            <span className="text-darkGray font-bold text-lg group-hover:text-primary transition-colors">›</span>
          </div>
        </div>
      </div>

      {/* Floating Add to Basket Button */}
      <div className="fixed bottom-0 w-full max-w-md bg-white/95 backdrop-blur-md px-6 py-6 pb-8 z-50 border-t border-[#E2E2E2]/50 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
        <button 
          onClick={handleAddToBasket}
          className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-[0_10px_20px_rgba(83,177,117,0.3)]"
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
}