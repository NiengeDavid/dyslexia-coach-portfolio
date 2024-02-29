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
                <div key={index} className="w-full h-full absolute top-0 left-0" style={{ transform: `translateX(${index * 100}%)` }}>
                    <img src={actor} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
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
