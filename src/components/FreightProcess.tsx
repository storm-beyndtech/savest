import React, { useEffect } from 'react';
import processBg from '../assets/img/background/working-process-v1-bg.jpg';
import shape1 from '../assets/img/shape/working-process-v1-shape1.png';
import { steps } from '@/lib/utils';

const FreightProcess: React.FC = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      // Handle animation logic if required
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section className="working-process-one">
      <div
        className="working-process-one__bg"
        style={{ backgroundImage: `url(${processBg})` }}
      ></div>
      <div className="max-ctn overflow-hidden">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>
              <span className="icon-right-arrow-1"></span> Check our steps
            </h5>
          </div>
          <h2 className='max-sm:!text-lg'>Our Freight Working Process</h2>
        </div>
        <div className="flex flex-1 flex-wrap gap-12 items-center justify-between px-4">
          {steps.map((step, index) => (
            <div
              className=''
              key={index}
            >
              <div className="working-process-one__single">
                <div className="shape1">
                  <img src={shape1} alt="Shape" />
                </div>
                <div className="working-process-one__single-top">
                  <div className="icon">
                    <img src={step.icon} alt={step.title} />
                  </div>
                  <div className="text">
                    <h2>{step.title}</h2>
                  </div>
                </div>
                <div className="working-process-one__single-content">
                  <h2>
                    <a href="#">{step.subtitle}</a>
                  </h2>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreightProcess;
