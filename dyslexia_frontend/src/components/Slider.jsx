import React, { useState, useEffect } from 'react';
import actor from '../Assets/pexels-pixabay-60013.jpg';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Change 5 to the total number of slides
    }, 2000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-[304px] overflow-hidden md:h-[680px]">
          <div className="duration-700 ease-in-out" data-carousel-item>
            {[...Array(5).keys()].map((index) => (
                <div key={index} className="w-full h-full absolute top-0 left-0 bg-center bg-no-repeat" style={{ transform: `translateX(${index * 100}%)`, backgroundImage: `url(${actor})`, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Get started
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                Learn more
                            </a>  
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
        <div className="absolute z-30 pl-5 flex flex-col top-1/2 -translate-y-1/2 left-0 space-y-3 rtl:space-y-reverse md:pl-32">
          {[...Array(5).keys()].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-1 h-3  ${currentSlide === index ? 'bg-[#5FD5E4]' : 'bg-[#E5E6E8]'}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
