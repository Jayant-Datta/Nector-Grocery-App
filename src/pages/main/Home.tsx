import { useOutletContext, useNavigate } from 'react-router-dom';
import { useProductStore } from '../../store/useProductStore';
import ProductCard from '../../components/ui/ProductCard';
import { ProductCategory } from '../../types'; 

import carrotLogo from '../../assets/carrot-only.svg';
import locationPin from '../../assets/location-pin.svg';
import searchIcon from '../../assets/search-icon.svg';
import banner from '../../assets/home-banner.png';
import pulsesImg from '../../assets/pulses.png';
import riceImg from '../../assets/rice.png';

export default function Home() {
  const navigate = useNavigate();
  const products = useProductStore((state) => state.products);
  
  // Grab the visibility state from the Layout for dynamic padding
  const { isNavVisible } = useOutletContext<{ isNavVisible: boolean }>();

  const exclusiveOffers = products.filter(p => ['1', '2', '7'].includes(p.id));
  const bestSelling = products.filter(p => ['3', '4'].includes(p.id));
  const meatProducts = products.filter(p => p.category === ProductCategory.MEAT);

  return (
    <div className={`pt-12 px-6 flex flex-col transition-[padding] duration-500 ease-in-out ${isNavVisible ? 'pb-24' : 'pb-6'}`}>
      
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <img src={carrotLogo} alt="Nectar" className="w-8 h-auto mb-2" />
        <div className="flex items-center gap-2">
          <img src={locationPin} alt="Location" className="w-4 h-4" />
          <span className="text-lg text-darkGray font-semibold">Dhaka, Banassre</span>
        </div>
      </div>

      {/* CLICKABLE Search Bar */}
      <div 
        onClick={() => navigate('/search')}
        className="bg-[#F2F3F2] rounded-2xl px-4 py-4 flex items-center gap-3 mb-6 cursor-pointer"
      >
        <img src={searchIcon} alt="Search" className="w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search Store" 
          readOnly
          className="bg-transparent outline-none w-full text-darkGray font-medium cursor-pointer pointer-events-none"
        />
      </div>

      {/* Banner */}
      <div className="w-full h-[115px] rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
        <img src={banner} alt="Fresh Vegetables Offer" className="w-full h-full object-cover" />
      </div>

      {/* Exclusive Offer Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-darkGray">Exclusive Offer</h2>
          <button className="text-primary font-semibold text-base hover:opacity-80 transition-opacity">See all</button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {exclusiveOffers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Best Selling Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-darkGray">Best Selling</h2>
          <button className="text-primary font-semibold text-base hover:opacity-80 transition-opacity">See all</button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {bestSelling.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Groceries Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-darkGray">Groceries</h2>
          <button className="text-primary font-semibold text-base hover:opacity-80 transition-opacity">See all</button>
        </div>

        {/* Grocery Category Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-4 no-scrollbar scroll-smooth">
          <div className="flex items-center gap-4 bg-[#F8A44C]/15 rounded-2xl p-4 min-w-[248px]">
            <img src={pulsesImg} alt="Pulses" className="w-16 h-16 object-contain drop-shadow-sm" />
            <span className="text-xl font-semibold text-darkGray">Pulses</span>
          </div>
          <div className="flex items-center gap-4 bg-[#53B175]/15 rounded-2xl p-4 min-w-[248px]">
            <img src={riceImg} alt="Rice" className="w-16 h-16 object-contain drop-shadow-sm" />
            <span className="text-xl font-semibold text-darkGray">Rice</span>
          </div>
        </div>

        {/* Grocery Meat Products */}
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {meatProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}