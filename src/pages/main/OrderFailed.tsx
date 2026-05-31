import { useNavigate } from 'react-router-dom';
import failedImg from '../../assets/order-failed.png'; 

export default function OrderFailed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center px-6 relative z-50">
      
      <div className="bg-white rounded-3xl w-full pt-6 pb-8 px-6 flex flex-col items-center relative shadow-2xl">
        
        {/* Close Button */}
        <button onClick={() => navigate(-1)} className="absolute top-6 left-6 p-2 -ml-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="#181725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Image */}
        <div className="mt-8 mb-10 w-[220px] h-[220px] rounded-full bg-[#F2F3F2] flex items-center justify-center">
           <img src={failedImg} alt="Order Failed" className="w-[85%] h-auto object-contain" />
        </div>

        {/* Text */}
        <h2 className="text-[28px] font-bold text-darkGray mb-4">
          Oops! Order Failed
        </h2>
        <p className="text-base text-lightGray mb-12">
          Something went tembly wrong.
        </p>

        {/* Actions */}
        <button 
          onClick={() => navigate(-1)} // Goes back to cart to try again
          className="w-full bg-primary text-white font-semibold py-4 rounded-[19px] hover:bg-green-600 transition-colors shadow-lg mb-6"
        >
          Please Try Again
        </button>

        <button 
          onClick={() => navigate('/home')}
          className="text-[18px] font-bold text-darkGray hover:opacity-70 transition-opacity"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}