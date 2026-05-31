import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import successImg from '../../assets/order-success.png'; 

export default function OrderAccepted() {
  const navigate = useNavigate();
  
  // @ts-ignore - Assuming clearCart is added to the store interface
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    // Empty the cart when they hit the success page
    if (clearCart) clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Background soft blur effect */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#f7a593] opacity-20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#b7dff5] opacity-30 rounded-full blur-[80px]"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full mt-10">
        <img src={successImg} alt="Order Success" className="w-[270px] h-auto mb-16" />
        
        <h1 className="text-[28px] font-bold text-darkGray leading-tight mb-4 max-w-[80%]">
          Your Order has been accepted
        </h1>
        
        <p className="text-base text-lightGray leading-relaxed max-w-[85%] mb-24">
          Your items has been placcd and is on it's way to being processed
        </p>

        <button 
          className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-lg mb-6"
        >
          Track Order
        </button>

        <button 
          onClick={() => navigate('/home')}
          className="text-[18px] font-bold text-darkGray hover:opacity-70 transition-opacity"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}