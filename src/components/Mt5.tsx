import React from 'react';
import phone from '../assets/handWithPhone.png';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Mt5: React.FC = () => {
  return (
    <section>
      <div className="max-ctn py-10 sm:px-6 sm:py-32 lg:px-8">
        <div className="bg-black px-6 py-16 shadow-xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex sm:gap-y-14 lg:py-[100px] justify-evenly items-center">
          <div className="w-full max-w-100">
            <img className="w-full" src={phone} alt="trade" />
          </div>

          <div className="w-full max-w-lg">
            <h2 className="hd-text max-md:!text-2xl md:!text-5xl font-['Palanquin']  text-gray-100 mb-5">
              Metatrader 5 for mobile
            </h2>
            <p className="desc text-gray-400 mb-4 md:mb-10 lg:mb-12 max-md:!text-base">
              Online trading with Forex & Stock quotes, charts, technical
              analysis and news. Forex & Stock brokers offer traders investing
              in shares and currency trading via MetaTrader 5. Your MT5 features
              real-time quotes, financial news, FX & stock charts, technical
              analysis and online trading. Free demo accounts are available.
            </p>

            <div className="flex gap-5">
              <a
                href="https://download.mql5.com/cdn/mobile/mt5/android?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes"
                className="primaryBtn flex gap-4 items-center py-1"
              >
                <FaApple className="text-2xl" />
                <div className="mb-1">
                  <p className="font-extralight text-[10px] text-gray-400">
                    Download From
                  </p>
                  <p className="text-xs">Play Store</p>
                </div>
              </a>

              <a
                href="https://download.mql5.com/cdn/mobile/mt5/ios?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes"
                className="primaryBtn flex gap-4 items-center py-1"
              >
                <FaGooglePlay className="text-2xl" />
                <div className="mb-1">
                  <p className="font-extralight text-[10px] text-gray-400">
                    Download From
                  </p>
                  <p className="text-xs">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mt5;
