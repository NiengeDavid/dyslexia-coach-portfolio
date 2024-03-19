'use client';

import React from 'react';
import { Carousel } from 'flowbite-react';

const customTheme = {
  "root": {
    "base": "relative h-full w-full",
    "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  "indicators": {
    "active": {
      "off": "bg-white hover:bg-white/50 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      "on": "bg-[#5FD5E4] dark:bg-gray-800"
    },
    "base": "h-1 w-4 ",
    "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  "item": {
    "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    "wrapper": {
      "off": "w-full flex-shrink-0 transform cursor-default snap-center",
      "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  },
  "control": {
    "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
  "scrollContainer": {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    "snap": "snap-x"
  }
}


const Slider = ({ slides }) => {

  return (
    <div className="h-96 sm:h-64 xl:h-[659px] 2xl:h-[659px]">
      <Carousel slideInterval={5000} theme={customTheme}>
      {slides.map((slide, index) => (
        <div key={index} className="w-full h-96 md:h-full">
            <img src={slide.image.asset.url} alt={slide.alt} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-2 text-white bg-gray-900 bg-opacity-50 md:pt-5 lg:pt-0">
              <h2 className="text-center font-light text-white md:text-lg">{slide.hint}</h2>
              <h3 className="text-center text-2xl font-bold px-4 md:text-3xl lg:text-5xl">{slide.alt}</h3>
              <p className="pt-3 text-center font-bold text-[#5FD5E4] md:text-lg lg:pt-5">{slide.solution}</p>
            </div>
        </div>
      ))}
      </Carousel>
    </div>
  );
};

export default Slider;
