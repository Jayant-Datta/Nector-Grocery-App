import { useNavigate, useOutletContext } from 'react-router-dom';
import searchIcon from '../../assets/search-icon.svg';

// Category Images
import catFruits from '../../assets/cat-fruits.png';
import catOil from '../../assets/cat-oil.png';
import catMeat from '../../assets/cat-meat.png';
import catBakery from '../../assets/cat-bakery.png';
import catDairy from '../../assets/cat-dairy.png';
import catBeverages from '../../assets/cat-beverages.png';

export default function Explore() {
  const navigate = useNavigate();
  const { isNavVisible } = useOutletContext<{ isNavVisible: boolean }>();

  const categories = [
    { id: 'FRESH_PRODUCE', name: 'Frash Fruits & Vegetable', img: catFruits, bg: 'bg-[#53B175]/10', border: 'border-[#53B175]/70' },
    { id: 'COOKING_OIL', name: 'Cooking Oil & Ghee', img: catOil, bg: 'bg-[#F8A44C]/10', border: 'border-[#F8A44C]/70' },
    { id: 'MEAT', name: 'Meat & Fish', img: catMeat, bg: 'bg-[#F7A593]/10', border: 'border-[#F7A593]/70' },
    { id: 'BAKERY', name: 'Bakery & Snacks', img: catBakery, bg: 'bg-[#D3B0E0]/10', border: 'border-[#D3B0E0]/70' },
    { id: 'DAIRY', name: 'Dairy & Eggs', img: catDairy, bg: 'bg-[#FDE598]/10', border: 'border-[#FDE598]/70' },
    { id: 'BEVERAGES', name: 'Beverages', img: catBeverages, bg: 'bg-[#B7DFF5]/10', border: 'border-[#B7DFF5]/70' },
  ];

  return (
    <div className={`pt-12 px-6 flex flex-col transition-[padding] duration-500 ease-in-out ${isNavVisible ? 'pb-28' : 'pb-6'}`}>
      
      <h1 className="text-xl font-bold text-darkGray text-center mb-6">
        Find Products
      </h1>

      {/* CLICKABLE SEARCH BAR */}
      <div 
        onClick={() => navigate('/search')}
        className="bg-[#F2F3F2] rounded-2xl px-4 py-4 flex items-center gap-3 mb-8 cursor-pointer"
      >
        <img src={searchIcon} alt="Search" className="w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search Store" 
          readOnly // Prevents the keyboard from opening on this screen
          className="bg-transparent outline-none w-full text-darkGray font-medium cursor-pointer pointer-events-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => navigate(`/explore/${cat.id}`)}
            className={`flex flex-col items-center justify-center p-4 rounded-[18px] border ${cat.bg} ${cat.border} hover:shadow-md transition-shadow h-[190px]`}
          >
            <img src={cat.img} alt={cat.name} className="w-[100px] h-[75px] object-contain mb-6 drop-shadow-sm" />
            <span className="text-base font-bold text-darkGray text-center leading-tight">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}