import { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function MainLayout() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = () => {
    setIsNavVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setIsNavVisible(false);
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen bg-white relative flex flex-col h-screen overflow-y-auto overflow-x-hidden"
      onScroll={handleScroll}
    >
      <div className="flex-grow">
        {/* Pass the boolean state down to child routes like Home */}
        <Outlet context={{ isNavVisible }} /> 
      </div>
      
      <div 
        className={`fixed bottom-0 w-full max-w-md z-50 transition-transform duration-500 ease-in-out ${
          isNavVisible ? 'translate-y-0' : 'translate-y-[120%]'
        }`}
      >
        <BottomNav />
      </div>
    </div>
  );
}