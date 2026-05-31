import { useNavigate } from 'react-router-dom';
import topImage from '../../assets/signin-top.jpg';
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import nectarLogo from '../../assets/nectar-colored-logo.svg';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Header Image Composition Area */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Background Groceries: Increased size to 150% and shifted slightly down */}
        <img 
          src={topImage} 
          alt="Groceries" 
          className="absolute w-[150%] max-w-none left-1/2 -translate-x-1/2 -top-6"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
          }}
        />
        
        {/* Logo: Centered, straight, and moved down over the paper bag */}
        <img 
          src={nectarLogo} 
          alt="Nectar" 
          /* If your SVG is permanently rotated, add `-rotate-[155deg]` here to counter it */
          className="absolute w-[70px] top-[245px] left-1/2 -translate-x-1/2 -rotate-[219deg]"
        />
      </div>
      
      <div className="px-6 flex flex-col flex-grow z-10">
        <h2 className="text-[26px] font-semibold text-darkGray leading-tight mb-6 mt-2">
          Get your groceries<br />with nectar
        </h2>
        
        {/* Phone Input Placeholder */}
        <div 
          className="flex items-center gap-3 border-b border-[#E2E2E2] pb-3 mb-10 cursor-text"
          onClick={() => navigate('/number')} 
        >
          <span className="text-xl">🇧🇩</span> 
          <span className="text-lg text-darkGray font-medium">+880</span>
        </div>
        
        <div className="text-center text-lightGray text-sm mb-8">
          Or connect with social media
        </div>
        
        <button className="relative w-full bg-google text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-8 mb-4 hover:opacity-90 transition-opacity">
          <img src={googleIcon} alt="Google" className="w-5 h-5 absolute left-10" />
          Continue with Google
        </button>
        
        <button className="relative w-full bg-facebook text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-8 mb-8 hover:opacity-90 transition-opacity">
          <img src={facebookIcon} alt="Facebook" className="w-5 h-5 absolute left-10" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}