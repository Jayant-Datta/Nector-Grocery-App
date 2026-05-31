import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blurBg from '../../assets/blur-bg.png';
import backArrow from '../../assets/back-arrow.svg';
import arrowRight from '../../assets/arrow-right.svg';

export default function Verification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    if (otp.length !== 4) return;
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/location');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <img src={blurBg} alt="" className="absolute top-0 left-0 w-full h-auto opacity-70 pointer-events-none" />
      
      <div className="px-6 pt-12 relative z-10 flex-grow">
        <button onClick={() => navigate(-1)} className="mb-14">
          <img src={backArrow} alt="Back" className="w-3 h-5" />
        </button>
        
        <h2 className="text-[26px] font-semibold text-darkGray leading-tight mb-8">
          Enter your 4-digit code
        </h2>
        
        <div className="flex flex-col mb-8">
          <label className="text-lightGray text-base mb-2">Code</label>
          <input 
            type="text"
            maxLength={4}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            className="w-full text-lg tracking-[0.5em] text-darkGray border-b border-[#E2E2E2] pb-2 outline-none bg-transparent"
            placeholder="- - - -"
            autoFocus
          />
        </div>
      </div>

      <div className="px-6 pb-12 flex justify-between items-center relative z-10">
        <button className="text-primary font-medium hover:opacity-80 transition-opacity">
          Resend Code
        </button>
        <button 
          onClick={handleVerify}
          disabled={isLoading || otp.length !== 4}
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