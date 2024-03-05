import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";
import { Each } from './Each';

const Carousel = ({ slides, autoSlide = true, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const slideWidth = `${100 / slides.length}%`;

  const dataArray = Object.values(slides);

  return (
    <div className='relative overflow-hidden'>
      <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {dataArray.map((slide, index) => (
          <div key={index} className="w-full h-96" style={{ width: slideWidth }}>
            <Each of={slide} render={(item, index) =>
              <div className="w-full h-96">
                <img src={item.image.asset.url} alt={item.alt} className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-gray-900 bg-opacity-50">
                  <h2 className="text-center">{item.hint}</h2>
                  <h3 className="text-center">{item.alt}</h3>
                  <p className="text-center">{item.solution}</p>
                </div>
              </div>
            } />
            
          </div>
          
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronLeft />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronRight />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {dataArray.map((_, index) => (
            <div key={index} className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${curr === index ? "p-0.5" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
