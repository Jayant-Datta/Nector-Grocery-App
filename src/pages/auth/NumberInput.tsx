import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/back-arrow.svg';

export default function NumberInput() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  // Validation: Exactly 10 digits
  const isValid = phoneNumber.length === 10;

  const handleNext = () => {
    if (isValid) {
      navigate('/verification', { state: { phone: `+91 ${phoneNumber}` } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isValid) {
        handleNext();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    if (digitsOnly.length <= 10) {
      setPhoneNumber(digitsOnly);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-12 relative flex flex-col">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-16 -ml-2 p-2"
      >
        <img src={backArrow} alt="Back" className="w-5 h-5" />
      </button>

      <h1 className="text-[26px] font-semibold text-darkGray mb-8">
        Enter your mobile number
      </h1>

      <div className="flex flex-col mb-10">
        <label className="text-lightGray text-sm mb-2 font-medium">Mobile Number</label>
        <div className="flex items-center gap-3 border-b border-[#E2E2E2] pb-2">
          <span className="text-[18px] text-darkGray font-medium">IN</span>
          <span className="text-[18px] text-darkGray font-medium">+91</span>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            value={phoneNumber}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 text-[18px] text-darkGray outline-none bg-transparent ml-2"
            placeholder="1234567890"
          />
        </div>
      </div>

      {/* Floating Next Button */}
      <div className="absolute bottom-10 right-6">
        <button 
          onClick={handleNext}
          disabled={!isValid}
          className={`w-[67px] h-[67px] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isValid 
              ? 'bg-primary hover:bg-green-600 cursor-pointer' 
              : 'bg-primary opacity-40 cursor-not-allowed'
          }`}
        >
          {/* Bold SVG Arrow */}
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.5L8.5 9L1.5 16.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}