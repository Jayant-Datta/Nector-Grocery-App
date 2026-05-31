import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import blurBg from '../../assets/blur-bg.png';
import backArrow from '../../assets/back-arrow.svg';
import arrowRight from '../../assets/arrow-right.svg';

export default function NumberInput() {
  const navigate = useNavigate();
  const setPhoneNumber = useAuthStore((state) => state.setPhoneNumber);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (input.length < 5) return; // Basic validation
    setIsLoading(true);
    
    // Simulate API Call per assignment rules
    setTimeout(() => {
      setPhoneNumber(`+880${input}`);
      setIsLoading(false);
      navigate('/verification');
    }, 800); 
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      {/* Background Blur */}
      <img src={blurBg} alt="" className="absolute top-0 left-0 w-full h-auto opacity-70 pointer-events-none" />
      
      <div className="px-6 pt-12 relative z-10 flex-grow">
        <button onClick={() => navigate(-1)} className="mb-14">
          <img src={backArrow} alt="Back" className="w-3 h-5" />
        </button>
        
        <h2 className="text-[26px] font-semibold text-darkGray leading-tight mb-8">
          Enter your mobile number
        </h2>
        
        <div className="flex flex-col mb-10">
          <label className="text-lightGray text-base mb-2">Mobile Number</label>
          <div className="flex items-center gap-3 border-b border-[#E2E2E2] pb-2">
            <span className="text-2xl">🇧🇩</span>
            <span className="text-lg text-darkGray font-medium">+880</span>
            <input 
              type="tel"
              value={input}
              onChange={(e) => setInput(e.target.value.replace(/\D/g, ''))} // Numbers only
              className="w-full text-lg text-darkGray outline-none bg-transparent placeholder-gray-300"
              placeholder="123456789"
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="px-6 pb-12 flex justify-end relative z-10">
        <button 
          onClick={handleNext}
          disabled={isLoading || input.length < 5}
          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-green-600 transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <img src={arrowRight} alt="Next" className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}