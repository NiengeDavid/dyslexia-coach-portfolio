import React from "react";
import children from "../Assets/children-1.jpg";
import teacher from "../Assets/teacher.jpg";

const Courses = () => {
  return (
    <>
      <div className="flex flex-col mb-[5rem] ">
        <div className="lg:flex">
          <div className="px-[2rem] ">
            <div className="md:px-[2rem] lg:w-[40rem] lg:pl-[6rem]">
              <h1
                className="text-[#184348] text-2xl font-extrabold leading-loose
             lg:text-3xl lg:mt-[1rem] "
              >
                Take a short free course on "What is Dyslexia?"
              </h1>

              <p className="leading-loose py-[1.5rem]  text-[18px] lg:pr-[3rem] lg:pl-[1rem]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus commodi, fugiat eos in incidunt nemo beatae aliquam,
              </p>
            </div>

            <div className="px-[8rem] md:px-[15rem] lg:px-[7rem]">
              <a
                href="#"
                className="inline-flex items-center w-[15rem]  px-8 py-4 text-sm font-medium text-center text-white bg-gradient-to-r from-regalGreen from-30% via-gris via-40% to-green to-81%  rounded-[15px] shadow-2xl lg:pl-[-5rem]"
              >
                <span className="tracking-loose"> Take Course Free Here</span>
                <svg
                  className="rtl:rotate-180 w-5 h-5 ms-2"
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

          <div className="flex justify-center mt-[4.5rem] lg:order-first lg:mt-0 lg:ml-[6rem] ">
            <img
              src={children}
              alt=" children"
              className="w-[30rem] h-[20rem] md:w-[40rem] lg:w-[65rem] lg:h-[22rem]"
            />
          </div>
        </div>

        {/* Second Picture*/}
        <div className="lg:flex lg:my-[7rem]">
          <div className=" px-[2rem] py-[3rem] ">
            <div className=" md:px-[2rem] lg:w-[40rem] lg:pl-[6rem]">
              <h1
                className="text-[#184348] text-2xl font-extrabold leading-loose
                lg:text-3xl lg:mt-[1rem] "
              >
                Become a certified dyslexia teacher
              </h1>

              <p className="leading-loose py-[1.5rem]  text-[18px] lg:pr-[3rem] lg:pl-[0.5rem]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus commodi, fugiat eos in incidunt nemo beatae aliquam,
              </p>
            </div>

            <div className="pr-[2rem] mt-4 pl-[0.3rem] md:px-[140px] lg:pl-[102.4px]">
              <a
                href="#"
                className="inline-flex items-center w-[12rem] mr-[2rem]  px-9 py-4 text-sm font-medium text-center text-white bg-gradient-to-r from-regalGreen from-30% via-gris via-40% to-green to-81%  rounded-[15px] shadow-2xl"
              >
                <span className="tracking-loose text-[17px]"> Get Started</span>
                <svg
                  className="rtl:rotate-180 w-5 h-5 ms-2"
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

              <a
                href="#"
                className="items-center w-[12rem]  px-5 py-4 text-sm font-medium text-center  text-black bg-white border   rounded-[15px] shadow-2xl"
              >
                <span className="text-[17px]">Speak to Sales</span>
              </a>
          </div>
          </div>

          <div className="flex justify-center mt-[2rem] lg:order-last lg:mt-0 lg:ml-[3rem] lg:mr-[5rem] ">
            <img
              src={teacher}
              alt=" teacher"
              className="w-[30rem] h-[20rem] md:w-[40rem] lg:w-[68rem] lg:h-[22rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
