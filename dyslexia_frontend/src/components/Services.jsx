import React from "react";
import adhd from '../Assets/ADHD.jpg';
import ellispegray from '../Assets/Ellipse 1.jpg';
import ellispegreen from '../Assets/Ellipse 3.jpg';

const Services = () => {
    const Index = 6
  return (
    <>
      <div className="flex flex-col">
        <div className="text-center px-[50px] lg: ">
          <h1 className="text-[#006273] font-extrabold text-4xl lg:text-5xl">
            Services I offer
          </h1>

          <p className="pt-[45px]  text-[#73A4A0] leading-loose text-[18px] lg:pt-[25px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
            facilis aliquam alias accusamus ad fugiat sequi non cupiditate, a
            nulla officiis.
          </p>
        </div>

        {/* Card */}
        <div className=" mx-[1rem] my-[3rem] lg:grid lg:grid-cols-3 lg:gap-4 lg:my-[4.5rem]">
            {[...Array(6).keys()].map((index) => (

           
          <div className="max-w-md  mb-[2.5rem] mx-[1rem]  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <a href="#">
                <img
                className="object-fit rounded-t-lg max-h-[19rem] w-[28rem]  "
                src={adhd}
                alt=""
               />
              </a>

              <div className="p-5 ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 Creating Dyslexia Awareness
                  </h5>
                </a>
                <p className="mb-4 font-normal leading-7 text-gray-700 dark:text-gray-400">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium tenetur vero quo.
                  Assumenda quibusdam, voluptate,
                   quis unde in ipsa voluptates dicta quidem totam quod est eligendi nisi accusamus animi.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-[#006273] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 <span className=""> Access Here</span>
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                </a>
              </div>
            </div>
             ))}
        </div>
      </div>
    </>
  );
};

export default Services;