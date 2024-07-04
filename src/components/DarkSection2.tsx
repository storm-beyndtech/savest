import React from 'react';
import cart from '../assets/blackCart.jpg'
import { Link } from 'react-router-dom';

const DarkSection2: React.FC = () => {
  return (
  <section>
    <div className="max-ctn sm:px-6 sm:py-32 lg:px-8">
      <div className="bg-black px-6 py-20 shadow-xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex sm:gap-y-14 lg:py-[100px] justify-evenly items-center">
        <div className="w-full max-w-lg">
          <h2 className="hd-text max-md:!text-2xl  text-gray-100 mb-5">Why Choose Us</h2>
          <p className="desc text-gray-400 mb-4 md:mb-10 lg:mb-12 max-md:!text-base !leading-8">
            We excel in providing swift shipment services that prioritize speed, reliability, and customer satisfaction. Our advanced logistics network ensures your packages are processed and delivered promptly, with real-time tracking for complete visibility. Our exceptional customer service make us the top choice for all your shipping needs.
          </p>
          <Link to="/track" className="primaryBtn">Track Your Products</Link>
        </div>

        <div className="w-full max-w-100">
          <img className='w-full' src={cart} alt='trade'/>
        </div>
      </div>
    </div>
  </section>
  );
};

export default DarkSection2;
