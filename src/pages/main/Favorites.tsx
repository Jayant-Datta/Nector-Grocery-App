import { useOutletContext, useNavigate } from 'react-router-dom';
import { useFavoriteStore } from '../../store/useFavoriteStore';
import { useCartStore } from '../../store/useCartStore';

export default function Favorites() {
  const navigate = useNavigate();
  const { isNavVisible } = useOutletContext<{ isNavVisible: boolean }>();
  
  const favorites = useFavoriteStore((state) => state.favorites);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddAllToCart = () => {
    favorites.forEach(product => {
      addToCart(product);
    });
    // Send user to the cart to see their newly added items!
    navigate('/cart');
  };

  return (
    <div className={`min-h-screen bg-white flex flex-col pt-12 transition-[padding] duration-500 ease-in-out ${isNavVisible ? 'pb-32' : 'pb-6'}`}>
      
      {/* Header */}
      <div className="pb-6 px-6 flex items-center justify-center border-b border-[#E2E2E2]">
        <h1 className="text-xl font-bold text-darkGray">Favourite</h1>
      </div>

      {/* List / Empty State */}
      <div className="flex-grow px-6 overflow-y-auto">
        {favorites.length === 0 ? (
          // BEAUTIFUL EMPTY STATE
          <div className="flex flex-col items-center justify-center h-full text-center mt-20">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#E2E2E2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-6">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <h2 className="text-2xl font-bold text-darkGray mb-2">No favorites yet</h2>
            <p className="text-[#7C7C7C] mb-8 px-4">
              Save your favorite grocery items here to easily find them later.
            </p>
            <button 
              onClick={() => navigate('/explore')}
              className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-sm"
            >
              Explore Products
            </button>
          </div>
        ) : (
          favorites.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(`/product/${item.id}`)}
              className="flex items-center py-6 border-b border-[#E2E2E2] cursor-pointer"
            >
              {/* Image */}
              <div className="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center mr-4">
                <img src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain" />
              </div>
              
              {/* Info */}
              <div className="flex-grow flex flex-col">
                <h2 className="text-base font-bold text-darkGray">{item.name}</h2>
                <p className="text-sm text-lightGray">{item.unit}</p>
              </div>

              {/* Price & Chevron */}
              <div className="flex items-center gap-4">
                <span className="text-[16px] font-bold text-darkGray">
                  ${item.price.toFixed(2)}
                </span>
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.16669L7.33333 7.00002L1.5 12.8334" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add All To Cart Button (Only shows if there are favorites) */}
      {favorites.length > 0 && (
        <div className={`fixed w-full max-w-md px-6 z-40 transition-all duration-500 ${isNavVisible ? 'bottom-[100px]' : 'bottom-6'}`}>
          <button 
            onClick={handleAddAllToCart}
            className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-lg"
          >
            Add All To Cart
          </button>
        </div>
      )}
    </div>
  );
}