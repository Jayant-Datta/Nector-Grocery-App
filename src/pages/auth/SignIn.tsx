import { useNavigate } from 'react-router-dom';
import topImage from '../../assets/signin-top.jpg'; // Assuming you have this or use your own image path
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Illustration */}
      <div className="w-full h-[400px]">
        <img 
          src={topImage} 
          alt="Groceries" 
          className="w-full h-full object-cover rounded-b-[30px]"
        />
      </div>

      <div className="flex-1 px-6 pt-10 flex flex-col">
        <h1 className="text-[26px] font-semibold text-darkGray leading-[1.2] mb-8">
          Get your groceries<br />with nectar
        </h1>

        {/* Fake Input that navigates to the real NumberInput screen */}
        <div 
          onClick={() => navigate('/number')}
          className="flex items-center gap-3 border-b border-[#E2E2E2] pb-3 mb-10 cursor-pointer"
        >
          <span className="text-2xl">🇮🇳</span>
          <span className="text-[18px] text-darkGray font-medium">+91</span>
        </div>

        <div className="text-center mb-8">
          <span className="text-[#828282] text-sm">Or connect with social media</span>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4">
          <button className="w-full bg-[#5383EC] text-white py-4 rounded-[19px] flex items-center justify-center gap-6 font-semibold hover:bg-blue-600 transition-colors">
            <img src={googleIcon} alt="Google" className="w-6 h-6" />
            Continue with Google
          </button>
          <button className="w-full bg-[#4A66AC] text-white py-4 rounded-[19px] flex items-center justify-center gap-6 font-semibold hover:bg-blue-800 transition-colors">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}