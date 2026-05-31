import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocationStore } from '../../store/useLocationStore';
import backArrow from '../../assets/back-arrow.svg';
import mapIllustration from '../../assets/map-illustration.svg';

export default function Location() {
  const navigate = useNavigate();
  // 1. Bring in the function to save the location
  const setLocation = useLocationStore((state) => state.setLocation);
  const [selectedZone, setSelectedZone] = useState('');

  // 10 Major Indian Cities
  const cities = [
    "Ahmedabad", "Bengaluru", "Chennai", "Delhi", 
    "Hyderabad", "Jaipur", "Kolkata", "Lucknow", 
    "Mumbai", "Pune"
  ];
  
  const directions = ["North", "South", "East", "West"];

  // Generate the full list (e.g., "Kolkata North")
  const locationOptions = cities.flatMap(city => 
    directions.map(dir => `${city} ${dir}`)
  );

  const handleSubmit = () => {
    if (selectedZone) {
      // 2. Save it to the global store
      setLocation(selectedZone); 
      // 3. Go to home
      navigate('/home');         
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-12 relative flex flex-col items-center">
      <button onClick={() => navigate(-1)} className="absolute top-12 left-4 p-2">
        <img src={backArrow} alt="Back" className="w-5 h-5" />
      </button>

      <div className="mt-10 mb-10 w-full flex justify-center">
        <img src={mapIllustration} alt="Map" className="w-48 h-auto" />
      </div>

      <h1 className="text-[26px] font-semibold text-darkGray mb-4 text-center">
        Select Your Location
      </h1>
      
      <p className="text-[#7C7C7C] text-center text-[15px] leading-relaxed px-4 mb-10">
        Switch on your location to stay in tune with what's happening in your area
      </p>

      <div className="w-full flex flex-col mb-10">
        <label className="text-[#7C7C7C] text-sm mb-2 font-medium">Your Zone</label>
        <div className="relative border-b border-[#E2E2E2] pb-2">
          <select 
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="w-full text-[18px] text-darkGray outline-none bg-transparent appearance-none"
          >
            <option value="" disabled>Select your zone</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="#7C7C7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        disabled={!selectedZone}
        className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
          selectedZone 
            ? 'bg-primary hover:bg-green-600 cursor-pointer' 
            : 'bg-primary opacity-40 cursor-not-allowed'
        }`}
      >
        Submit
      </button>
    </div>
  );
}