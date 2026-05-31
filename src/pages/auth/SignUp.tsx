import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blurBg from '../../assets/blur-bg.png';
import carrotLogo from '../../assets/carrot-only.svg';
import checkGreen from '../../assets/check-green.svg';

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Validation logic: All fields must be filled and passwords must match
  const isFormValid = username && email && password && confirmPassword && (password === confirmPassword);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    setError('');
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
        
        <h2 className="text-[26px] font-semibold text-darkGray mb-2">Sign Up</h2>
        <p className="text-lightGray text-base mb-10">Enter your credentials to continue</p>

        {/* Username */}
        <div className="flex flex-col mb-6">
          <label className="text-lightGray text-sm mb-2">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full text-lg text-darkGray border-b border-[#E2E2E2] pb-2 outline-none bg-transparent" />
        </div>

        {/* Email */}
        <div className="flex flex-col mb-6">
          <label className="text-lightGray text-sm mb-2">Email</label>
          <div className="relative border-b border-[#E2E2E2] pb-2 flex items-center">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-lg text-darkGray outline-none bg-transparent pr-8" />
            {email.includes('@') && <img src={checkGreen} alt="Valid" className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4" />}
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col mb-6">
          <label className="text-lightGray text-sm mb-2">Password</label>
          <div className="relative border-b border-[#E2E2E2] pb-2 flex items-center">
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full text-lg text-darkGray outline-none bg-transparent pr-10 [&::-ms-reveal]:hidden" placeholder="••••••••" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#7C7C7C]">
              {showPassword ? <EyeIconOpen /> : <EyeIconClosed />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-6">
          <label className="text-lightGray text-sm mb-2">Confirm Password</label>
          <div className="relative border-b border-[#E2E2E2] pb-2 flex items-center">
            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full text-lg text-darkGray outline-none bg-transparent pr-10 [&::-ms-reveal]:hidden" placeholder="••••••••" />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#7C7C7C]">
              {showConfirmPassword ? <EyeIconOpen /> : <EyeIconClosed />}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-8 pr-4">
          <p className="text-lightGray text-sm leading-relaxed">By continuing you agree to our <span className="text-primary font-medium cursor-pointer">Terms of Service</span> and <span className="text-primary font-medium cursor-pointer">Privacy Policy.</span></p>
        </div>
        
        <button 
          onClick={handleSignUp}
          disabled={isLoading || !isFormValid}
          className="w-full bg-primary text-white font-semibold py-4 rounded-2xl hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center justify-center mb-6"
        >
          {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Sign Up"}
        </button>

        {/* Login Link */}
        <div className="text-center">
          <span className="text-darkGray font-medium text-sm">Already have an account? </span>
          <button onClick={() => navigate('/login')} className="text-primary font-medium text-sm hover:underline">Log in</button>
        </div>
      </div>
    </div>
  );
}

// Icon Components
function EyeIconOpen() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
}

function EyeIconClosed() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>;
}