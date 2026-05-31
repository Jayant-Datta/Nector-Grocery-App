import { useNavigate, useOutletContext } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();
  const { isNavVisible } = useOutletContext<{ isNavVisible: boolean }>();

  const handleLogout = () => {
    // In a real app, you would clear the user's auth token from Zustand or LocalStorage here
    
    // Navigate to login and replace the history so they can't hit "Back" to re-enter the app
    navigate('/login', { replace: true });
  };

  // Mock list of account settings
  const menuItems = [
    { id: 1, label: 'Orders', icon: <path d="M4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7M4 7L20 7M4 7L4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V7M8 11H16" stroke="#181725" strokeWidth="1.5" strokeLinecap="round"/> },
    { id: 2, label: 'My Details', icon: <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 11C7.58172 11 4 14.5817 4 19H20C20 14.5817 16.4183 11 12 11Z" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
    { id: 3, label: 'Delivery Address', icon: <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13ZM12 13C12 13 19 16 19 21H5C5 16 12 13 12 13Z" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
    { id: 4, label: 'Payment Methods', icon: <path d="M4 8H20M4 16H20M5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4Z" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
    { id: 5, label: 'Promo Cord', icon: <path d="M9 15L15 9M10 9H10.01M14 15H14.01M3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8Z" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
    { id: 6, label: 'Notifications', icon: <path d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22ZM18 16V11C18 7.68629 15.3137 5 12 5C8.68629 5 6 7.68629 6 11V16L4 18H20L18 16ZM12 5V3" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
    { id: 7, label: 'Help', icon: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 17V16.5M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
    { id: 8, label: 'About', icon: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 16V12M12 8H12.01" stroke="#181725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
  ];

  return (
    <div className={`min-h-screen bg-white flex flex-col pt-12 transition-[padding] duration-500 ease-in-out ${isNavVisible ? 'pb-32' : 'pb-6'}`}>
      
      {/* Profile Header */}
      <div className="px-6 flex items-center gap-5 pb-8 border-b border-[#E2E2E2]">
        <div className="w-[64px] h-[64px] rounded-[27px] overflow-hidden border border-[#E2E2E2] flex items-center justify-center bg-gray-100 flex-shrink-0">
          {/* Fallback avatar if no image */}
          <span className="text-2xl font-bold text-darkGray">A</span>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-2">
            <h1 className="text-[20px] font-bold text-darkGray leading-tight">Afsar Hossen</h1>
            <button className="text-primary hover:opacity-70 mt-1">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 12.5H12.5M4.5 10.5L10.5 4.5C11.0523 3.94772 11.9477 3.94772 12.5 4.5C13.0523 5.05228 13.0523 5.94772 12.5 6.5L6.5 12.5H4.5V10.5Z" stroke="#53B175" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="text-base text-lightGray">Imshuvo97@gmail.com</p>
        </div>
      </div>

      {/* Menu List */}
      <div className="flex-grow overflow-y-auto">
        {menuItems.map((item) => (
          <button 
            key={item.id} 
            className="w-full px-6 py-5 flex items-center justify-between border-b border-[#E2E2E2] hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-darkGray">
                {item.icon}
              </svg>
              <span className="text-[18px] font-semibold text-darkGray group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </div>
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.16669L7.33333 7.00002L1.5 12.8334" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-8 mb-4">
        <button 
          onClick={handleLogout}
          className="relative w-full bg-[#F2F3F2] text-primary font-semibold py-5 rounded-[19px] hover:bg-[#e4e5e4] transition-colors flex justify-center items-center gap-3"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="#53B175" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[18px]">Log Out</span>
        </button>
      </div>
    </div>
  );
}