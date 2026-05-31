import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

export default function Cart() {
  const navigate = useNavigate();
  const { isNavVisible } = useOutletContext<{ isNavVisible: boolean }>();
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCartStore();
  
  const [showCheckout, setShowCheckout] = useState(false);

  const handlePlaceOrder = () => {
    navigate('/order-accepted');
  };

  return (
    <div className={`min-h-screen bg-white flex flex-col pt-12 transition-[padding] duration-500 ease-in-out ${isNavVisible ? 'pb-32' : 'pb-6'}`}>
      
      {/* Header */}
      <div className="pb-6 px-6 flex items-center justify-center border-b border-[#E2E2E2]">
        <h1 className="text-xl font-bold text-darkGray">My Cart</h1>
      </div>

      {/* Cart Items List / Empty State */}
      <div className="flex-grow px-6 overflow-y-auto">
        {cart.length === 0 ? (
          // BEAUTIFUL EMPTY STATE
          <div className="flex flex-col items-center justify-center h-full text-center mt-20">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#E2E2E2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-6">
              <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h2 className="text-2xl font-bold text-darkGray mb-2">Your cart is empty</h2>
            <p className="text-[#7C7C7C] mb-8 px-4">
              Looks like you haven't added anything to your cart yet.
            </p>
            <button 
              onClick={() => navigate('/home')}
              className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-sm"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center py-6 border-b border-[#E2E2E2]">
              <div className="w-[70px] h-[70px] flex-shrink-0 flex items-center justify-center mr-4">
                <img src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain" />
              </div>
              
              <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-base font-bold text-darkGray leading-tight w-[80%]">{item.name}</h2>
                  <button onClick={() => removeFromCart(item.id)} className="p-1 -mt-1 -mr-1 hover:opacity-70">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 1L1 13M1 1L13 13" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <p className="text-sm text-lightGray mb-3">{item.unit}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-11 h-11 border border-[#E2E2E2] rounded-[17px] flex items-center justify-center text-[#B3B3B3] text-2xl font-light hover:bg-gray-50 transition-colors pb-1">-</button>
                    <span className="text-base font-semibold text-darkGray min-w-[12px] text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-11 h-11 border border-[#E2E2E2] rounded-[17px] flex items-center justify-center text-primary text-2xl font-light hover:bg-gray-50 transition-colors pb-1">+</button>
                  </div>
                  <span className="text-[18px] font-bold text-darkGray tracking-wide">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Floating Go to Checkout Button (Only shows if cart has items) */}
      {cart.length > 0 && (
        <div className={`fixed w-full max-w-md px-6 z-30 transition-all duration-500 ${isNavVisible ? 'bottom-[100px]' : 'bottom-6'}`}>
          <button 
            onClick={() => setShowCheckout(true)}
            className="relative w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-lg flex justify-center items-center"
          >
            Go to Checkout
            <span className="absolute right-6 bg-[#489E67] text-white text-xs font-semibold px-2 py-1 rounded-[4px]">
              ${getTotalPrice().toFixed(2)}
            </span>
          </button>
        </div>
      )}

      {/* Dark Overlay for Checkout */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 z-[60] max-w-md mx-auto" onClick={() => setShowCheckout(false)} />
      )}

      {/* Checkout Bottom Sheet */}
      <div className={`fixed bottom-0 w-full max-w-md bg-[#F2F3F2] rounded-t-[30px] z-[70] transition-transform duration-300 ease-in-out ${showCheckout ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="px-6 py-6 flex justify-between items-center border-b border-[#E2E2E2]/50">
          <h2 className="text-[24px] font-bold text-darkGray">Checkout</h2>
          <button onClick={() => setShowCheckout(false)} className="p-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13M1 1L13 13" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 flex flex-col gap-6">
          {/* Delivery */}
          <div className="flex justify-between items-center cursor-pointer border-b border-[#E2E2E2]/50 pb-4">
            <span className="text-lg font-semibold text-lightGray">Delivery</span>
            <div className="flex items-center gap-4">
              <span className="text-base font-semibold text-darkGray">Select Method</span>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.16669L7.33333 7.00002L1.5 12.8334" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          
          {/* Payment */}
          <div className="flex justify-between items-center cursor-pointer border-b border-[#E2E2E2]/50 pb-4">
            <span className="text-lg font-semibold text-lightGray">Payment</span>
            <div className="flex items-center gap-4">
              <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#EB001B"/><circle cx="14.5" cy="7.5" r="7.5" fill="#F79E1B" fillOpacity="0.8"/></svg>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.16669L7.33333 7.00002L1.5 12.8334" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex justify-between items-center cursor-pointer border-b border-[#E2E2E2]/50 pb-4">
            <span className="text-lg font-semibold text-lightGray">Promo Code</span>
            <div className="flex items-center gap-4">
              <span className="text-base font-semibold text-darkGray">Pick discount</span>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.16669L7.33333 7.00002L1.5 12.8334" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>

          {/* Total Cost */}
          <div className="flex justify-between items-center cursor-pointer pb-2">
            <span className="text-lg font-semibold text-lightGray">Total Cost</span>
            <div className="flex items-center gap-4">
              <span className="text-base font-semibold text-darkGray">${getTotalPrice().toFixed(2)}</span>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.16669L7.33333 7.00002L1.5 12.8334" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>

          <p className="text-[13px] text-lightGray leading-relaxed w-[90%]">
            By placing an order you agree to our <span className="text-darkGray font-semibold">Terms</span> And <span className="text-darkGray font-semibold">Conditions</span>
          </p>

          <button 
            onClick={handlePlaceOrder}
            className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-lg mt-2 mb-4"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}