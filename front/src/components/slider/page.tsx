'use client';
import React, { useRef } from 'react';

const images = [
  "https://fastly.picsum.photos/id/846/800/400.jpg?hmac=YjmJaGReBkLBK-i2mjZYVQrv2Titn1m6X8ZpBMsLb6Y",
  "https://fastly.picsum.photos/id/837/800/400.jpg?hmac=VVbJsYBLp7Nz0o1Kx9uD3DEHL7HZFZ4R0iTzjaJlby0",
  "https://fastly.picsum.photos/id/868/800/400.jpg?hmac=txs01wsc-ThOSg5oUMgU3nagmPcm3DkqZkjcdn-qoCU",
  "https://fastly.picsum.photos/id/588/800/400.jpg?hmac=XOOsTzsgxiQ5xzPw-YQNT8Efk9foe2quVI-m-0pODaY",
  "https://fastly.picsum.photos/id/483/800/400.jpg?hmac=VyQ5toRxJGpXGvw1H_zZ8ut1PVW5D2tJcSuWvWbdLos"
];

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      const firstElement = sliderRef.current.children[0];
      sliderRef.current.style.transition = 'margin-left 1s';
      sliderRef.current.style.marginLeft = '-230%';
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.appendChild(firstElement);
          sliderRef.current.style.marginLeft = '-152%';
        }
      }, 1000);
    }
  };
  
  const handlePrev = () => {
    if (sliderRef.current) {
      const lastElement = sliderRef.current.children[sliderRef.current.children.length - 1];
      sliderRef.current.style.transition = 'margin-left 1s';
      sliderRef.current.style.marginLeft = '-70%';
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.insertBefore(lastElement, sliderRef.current.firstChild);
          sliderRef.current.style.marginLeft = '-152%';
        }
      }, 1000);
    }
  };
  

  return (
    <div className="relative overflow-hidden w-full mx-auto">
      <div ref={sliderRef} className="flex w-[400%] h-[400px] ml-[-152%]">
        {images.map((src, index) => (
          <div key={index} className="w-[1200px] ml-[50px]">
            <img
              className="w-full h-full block rounded-[15px] object-cover"
              src={src}
              alt={`image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute w-[40px] h-[40px] border-none text-[20px] font-semibold font-mono bg-white rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer right-[200px]"
        onClick={handleNext}
      >
        &#62;
      </button>
      <button
        className="absolute w-[40px] h-[40px] border-none text-[20px] font-semibold font-mono bg-white rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer left-[200px]"
        onClick={handlePrev}
      >
        &#60;
      </button>
    </div>
  );
};

export default Slider;
