import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fullLogo from '../../assets/full-logo-white.svg'; 

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      {/* Using the explicit width from the Figma dimensions */}
      <img src={fullLogo} alt="Nectar Online Groceriet" className="w-[267px] h-auto" />
    </div>
  );
}