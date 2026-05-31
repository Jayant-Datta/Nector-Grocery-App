import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import blurBg from '../../assets/blur-bg.png';
import backArrow from '../../assets/back-arrow.svg';
import mapIllustration from '../../assets/map-illustration.svg';

export default function Location() {
  const navigate = useNavigate();
  const setLocationStore = useAuthStore((state) => state.setLocation);
  
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!zone || !area) return;
    setIsLoading(true);
    
    setTimeout(() => {
      setLocationStore(zone, area);
      setIsLoading(false);
      navigate('/home'); // We will build this next
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center">
      <img src={blurBg} alt="" className="absolute top-0 left-0 w-full h-auto opacity-70 pointer-events-none" />
      
      <div className="w-full px-6 pt-12 relative z-10">
        <button onClick={() => navigate(-1)} className="mb-10">
          <img src={backArrow} alt="Back" className="w-3 h-5" />
        </button>
      </div>
      
      <div className="flex flex-col items-center px-6 relative z-10 w-full flex-grow">
        <img src={mapIllustration} alt="Map" className="w-[220px] h-auto mb-8" />
        
        <h2 className="text-[26px] font-semibold text-darkGray mb-4 text-center">
          Select Your Location
        </h2>
        <p className="text-lightGray text-center mb-10 px-4">
          Switch on your location to stay in tune with what's happening in your area
        </p>

        <div className="w-full flex flex-col gap-6 mb-10">
          <div className="flex flex-col">
            <label className="text-lightGray text-sm mb-2">Your Zone</label>
            <select 
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full text-lg text-darkGray border-b border-[#E2E2E2] pb-2 outline-none bg-transparent appearance-none"
            >
              <option value="" disabled>Select your zone</option>
              <option value="Banasree">Banasree</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Dhanmondi">Dhanmondi</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-lightGray text-sm mb-2">Your Area</label>
            <select 
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full text-lg text-darkGray border-b border-[#E2E2E2] pb-2 outline-none bg-transparent appearance-none"
            >
              <option value="" disabled>Types of your area</option>
              <option value="Block A">Block A</option>
              <option value="Block B">Block B</option>
              <option value="Block C">Block C</option>
            </select>
          </div>
        </div>
        
        <button 
          onClick={handleSubmit}
          disabled={isLoading || !zone || !area}
          className="w-full bg-primary text-white font-semibold py-4 rounded-2xl hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center justify-center"
        >
          {isLoading ? (
             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}