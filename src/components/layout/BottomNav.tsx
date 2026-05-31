import { useLocation, useNavigate } from 'react-router-dom';

import shopActive from '../../assets/nav-shop-active.svg';
import shopInactive from '../../assets/nav-shop-inactive.svg';
import exploreActive from '../../assets/nav-explore-active.svg';
import exploreInactive from '../../assets/nav-explore-inactive.svg';
import cartActive from '../../assets/nav-cart-active.svg';
import cartInactive from '../../assets/nav-cart-inactive.svg';
import favouriteActive from '../../assets/nav-favourite-active.svg';
import favouriteInactive from '../../assets/nav-favourite-inactive.svg';
import accountActive from '../../assets/nav-account-active.svg';
import accountInactive from '../../assets/nav-account-inactive.svg';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Shop', path: '/home', active: shopActive, inactive: shopInactive },
    { name: 'Explore', path: '/explore', active: exploreActive, inactive: exploreInactive },
    { name: 'Cart', path: '/cart', active: cartActive, inactive: cartInactive },
    { name: 'Favourite', path: '/favorites', active: favouriteActive, inactive: favouriteInactive },
    { name: 'Account', path: '/account', active: accountActive, inactive: accountInactive },
  ];

  return (
    <div className="w-full bg-white rounded-t-[30px] shadow-[0_-10px_25px_rgba(0,0,0,0.06)] px-6 py-4 flex justify-between items-center">
      {navItems.map((item) => {
        const isActive = location.pathname.includes(item.path);
        return (
          <button 
            key={item.name}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center justify-center min-w-[50px] transition-transform active:scale-95"
          >
            {/* We removed the <span> text and made the SVG larger to fit the space */}
            <img 
              src={isActive ? item.active : item.inactive} 
              alt={item.name} 
              className="h-11 w-auto object-contain" 
            />
          </button>
        );
      })}
    </div>
  );
}