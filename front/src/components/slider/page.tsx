"use client";
import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full ">
      <div className="relative">
        <div className="-ml-1 overflow-hidden relative h-[550px]">
          <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${currentIndex === 0 ? 'block' : 'hidden'}`}>
            <img
              src="https://pbs.twimg.com/media/GPG0m4eXYAAzHbC?format=jpg&name=4096x4096"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="Slide 1"
            />
          </div>
          <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${currentIndex === 1 ? 'block' : 'hidden'}`}>
            <img
              src="https://pbs.twimg.com/media/GPG1U3iWMAAu0W2?format=jpg&name=4096x4096"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="Slide 2"
            />
          </div>
          <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${currentIndex === 2 ? 'block' : 'hidden'}`}>
            <img
              src="https://pbs.twimg.com/media/GPG4kf4XUAACEjh?format=jpg&name=4096x4096"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center h-full w-14 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex justify-center items-center w-full h-full hover:bg-white/20 transition-all duration-500 ease-in-out">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center h-full w-14 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex justify-center items-center w-full h-full hover:bg-white/20 transition-all duration-500 ease-in-out">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
