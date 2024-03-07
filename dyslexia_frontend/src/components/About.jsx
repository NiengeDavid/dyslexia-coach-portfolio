import React from "react";
import Abstract from "../Assets/abstract.svg";
import Actor from "../Assets/actor.jpg";

const About = () => {
  return (
    <>
      <section className="bg-white" id="About">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="z-10 font-light text-gray-500 sm:text-lg">
                  <div className="mb-4 rounded-t-2xl rounded-br-2xl w-full py-2 px-4 shadow-black shadow-sm bg-[#006273] lg:shadow lg:bg-gradient-to-r lg:from-[#006273] md:to-white/50 lg:bg-opacity-30 lg:rounded-b-none lg:w-fit lg:whitespace-nowrap lg:mt-14">
                    <h2 className="text-4xl tracking-tight font-extrabold text-[#5FD5E4] shadow-black drop-shadow-lg">Dyslexia Coach & Founder of Dyslexia Help Africa</h2>
                  </div>
                  <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                  <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                  <p className="mb-6 leading-relaxed font-extralight">
                    <span className="text-[#006273]"> Blessing Ingyape</span> sit
                    amet consectetur adipisicing elit. Velit inventore eligendi, et
                    dolorem culpa vitae perferendis vel iste voluptatum incidunt
                    molestiae commodi numquam! Dolorem voluptatem, dignissimos quae
                    maxime blanditiis aliquid?
                  </p>
                  <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-1.5">
                  <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                  <img className="mt-4 w-full lg:mt-10 rounded-lg" src={Actor} alt="office content 2" />
              </div>
          </div>

          <div className="hidden -mt-20 lg:flex lg:justify-center lg:items-end">
            <img src={Abstract} alt="Abstract line" />
          </div>
      </section>
    </>
  );
};

export default About;
