import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/onboarding-bg.jpg';
import logoWhite from '../../assets/logo-white.svg';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col justify-end pb-12 px-6 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <img src={logoWhite} alt="Logo" className="w-10 h-auto mb-6" />
        <h1 className="text-white text-4xl font-semibold leading-tight mb-2">
          Welcome<br />to our store
        </h1>
        <p className="text-white/80 text-sm mb-10">
          Get your groceries in as fast as one hour {/* Corrected Figma typo "Ger" to "Get" */}
        </p>
        
        <button 
          onClick={() => navigate('/signin')}
          className="w-full bg-primary text-white font-semibold py-4 rounded-2xl hover:bg-green-600 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}