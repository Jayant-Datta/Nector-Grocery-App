import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blurBg from '../../assets/blur-bg.png';
import carrotLogo from '../../assets/carrot-only.svg';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/location'); 
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center">
      <img src={blurBg} alt="" className="absolute top-0 left-0 w-full h-auto opacity-70 pointer-events-none" />
      
      <div className="w-full px-6 pt-16 pb-12 relative z-10 flex flex-col flex-grow">
        <div className="flex justify-center mb-16">
          <img src={carrotLogo} alt="Nectar" className="w-12 h-auto" />
        </div>
        
        <h2 className="text-[26px] font-semibold text-darkGray mb-2">
          Login to your account
        </h2>
        <p className="text-lightGray text-base mb-10">
          Enter your emails and password
        </p>

        <div className="flex flex-col mb-6">
          <label className="text-lightGray text-sm mb-2">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-lg text-darkGray border-b border-[#E2E2E2] pb-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lightGray text-sm mb-2">Password</label>
          <div className="relative border-b border-[#E2E2E2] pb-2 flex items-center">
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              /* [&::-ms-reveal]:hidden hides the browser's default eye icon */
              className="w-full text-lg text-darkGray outline-none bg-transparent pr-10 [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
              placeholder="••••••••"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#7C7C7C] hover:text-darkGray transition-colors"
            >
              {/* Toggle between open and closed eye SVGs */}
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end mb-8">
          <button className="text-darkGray text-sm font-medium hover:text-primary transition-colors">
            Forgot Password?
          </button>
        </div>
        
        <button 
          onClick={handleLogin}
          disabled={isLoading || !email}
          className="w-full bg-primary text-white font-semibold py-4 rounded-2xl hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center justify-center mb-6"
        >
          {isLoading ? (
             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Log In"
          )}
        </button>

        <div className="text-center flex justify-center items-center gap-1">
          <span className="text-darkGray font-medium text-sm">Don't have an account?</span>
          <button 
            onClick={() => navigate('/signup')} 
            className="text-primary font-medium text-sm hover:underline"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}