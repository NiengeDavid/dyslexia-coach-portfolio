import React from "react";
import background from "../Assets/pexels-pixabay-60013.jpg";
import Actor from "../Assets/actor.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:my-[40px] " id="about">
        {/* Title and paragraph */}
        <div className=" mt-[40px] lg:w-1/2  lg:mx-[80px] ">
          <div className="lg:ml-[150px]">
            <div className=" mx-[25px] bg-gradient-to-r from-[#006273] rounded-bl-[15px]
             rounded-tr-[15px] lg:w-[50rem] lg:relative lg:h-[50px]
              lg:rounded-none lg:bg-gradient-to-r from-[#006273] lg:mx-[10px]">
              <h1 className="text-[#5FD5E4] text-2xl leading-loose font-bold py-6 px-5 text-start lg:text-3xl lg:py-[4px]">
                Dyslexia Coach & Founder of Dyslexia Help Africa
              </h1>
            </div>

            <div className="p-8 lg:tracking-wide lg:px-1 ">
              <p className="mb-6 text-[18px] leading-relaxed font-extralight">
                <span className="text-[#006273]"> Blessing Ingyape</span> sit
                amet consectetur adipisicing elit. Velit inventore eligendi, et
                dolorem culpa vitae perferendis vel iste voluptatum incidunt
                molestiae commodi numquam! Dolorem voluptatem, dignissimos quae
                maxime blanditiis aliquid?
              </p>
              <p className="mb-6 text-[18px] leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                accusantium ducimus illo numquam debitis . Non autem velit vel
                error rerum consequatur repudiandae, reprehenderit modi ex
                eveniet sint blanditiis ut. Illo.
              </p>
              <p className="mb-6 text-[18px] leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                accusantium ducimus illo numquam debitis . Non autem velit vel
                error rerum consequatur repudiandae, reprehenderit modi ex
                eveniet sint blanditiis ut. Illo.
              </p>
              <p className="mb-6 text-[18px] leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                accusantium ducimus illo numquam debitis . Non autem velit vel
                error rerum consequatur repudiandae, reprehenderit modi ex
                eveniet sint blanditiis ut. Illo.
              </p>
              <p className="text-[18px] leading-relaxed font-extralight text-[#006273]">
                Blessing's Mantra is that
                <span className="text-[#006273] font-bold">
                  "there are no limits, every child can learn"
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="  mx-[25px]  lg:w-1/2 lg:mt-[40px]  ">
          <img
            src={Actor}
            alt="Actor"
            className=" rounded-[60px] object-cover w-[600px] h-[500px] lg:w-[450px] lg:h-[800px] lg:mr-[60px]"
          />
        </div>
      </div>

      <div className=" hidden lg:flex lg:justify-center lg:mt-[-9rem]  ">
        <svg
          className=""
          width="1200"
          height="68"
          viewBox="0 0 1240 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.48636e-08 40.4089L0 52.0971C260.312 -9.98223 414.463 11.7103 592.288 36.7341C755.117 59.6477 937.794 85.3544 1240 52.0971V40.4089C937.794 73.0141 755.117 47.8114 592.288 25.3472C414.463 0.813957 260.312 -20.4532 4.48636e-08 40.4089Z"
            fill="#5FD5E4"
          />
        </svg>
      </div>
    </>
  );
};

export default About;
