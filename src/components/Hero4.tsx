import { Link } from 'react-router-dom';
import yatch from '../assets/Yacht-bro.svg';
import phoneBg from '../assets/phoneBg.png';
import ChartSlide from './ChartSlide';

export default function Hero4() {
  return (
    <section className="relative bg-no-repeat bg-center" id="heroSection">
      <div className="max-ctn px-5 pt-10 max-sm:pt-40 flex max-lg:flex-wrap items-center gap-7 sm:gap-20">
        <div className="w-full max-w-lg">
          <h2 className="text-white text-[5rem] max-md:text-[2.8rem] font-bold mb-6">
            Swift <span className="text-[#00F0FF]">Cargo </span>
            Shipment
          </h2>
          <p className="text-[#636262] my-5 text-lg">
            Your Trusted Partner in Global Logistics
          </p>
          <Link to="/track" className="primaryBtn mb-6">
            Track Your Products <span className="ml-3">&rarr;</span>
          </Link>
        </div>

        <div
          className="w-full flex flex-1 max-w-xl bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${phoneBg})` }}
        >
          <img src={yatch} alt="copy trade" className="h-full w-auto" />
        </div>
      </div>

      <ChartSlide />
    </section>
  );
}
