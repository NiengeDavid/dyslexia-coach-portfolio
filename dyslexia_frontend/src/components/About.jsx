import React from "react";
import Abstract from "../Assets/abstract.svg";

const About = ( { aboutdata, aboutfeed } ) => {
  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      //console.error("An error occurred while mapping data:", error);
      return [];
    }
  }

  const dataFeed = mapDataToArray(aboutdata);
  const bioFeed = mapDataToArray(aboutfeed);

  return (
    <>
      <section className="bg-white" id="About">
        {dataFeed.map((item, index) => (
          <div key={index} className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="z-10 pb-6 font-light text-gray-500 sm:text-lg">
                <div className="mb-4 rounded-t-2xl rounded-br-2xl w-full py-2 px-4 shadow-black shadow-sm bg-[#006273] lg:shadow lg:bg-gradient-to-r lg:from-[#006273] md:to-white/50 lg:bg-opacity-30 lg:rounded-b-none lg:w-fit lg:whitespace-nowrap lg:mt-14">
                  <h2 className="text-4xl tracking-tight font-extrabold text-[#5FD5E4] shadow-black drop-shadow-lg">{item.heading}</h2>
                </div>
                <p className="mb-4 leading-relaxed font-extralight">
                  <span className="text-[#006273] pr-1">{item.xlug}</span>
                  {item.p1}
                </p>
                {bioFeed.map((item, index) => (
                  <div key={index} className="w-full">
                    <p className="mb-4">{item.content}</p>
                  </div>
                ))}
                <p className="leading-relaxed font-semibold text-[#006273]">
                  {item.mantra}
                </p>
              </div>
            
                
              <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-1.5">
                  <img className="w-full rounded-lg" src={item.image1.asset.url} alt={item.alt1} />
                  <img className="mt-4 w-full lg:mt-10 rounded-lg" src={item.image2.asset.url} alt={item.alt2} />
              </div>
            </div>
        ))}

        <div className="hidden -mt-20 lg:flex lg:justify-center lg:items-end">
          <img src={Abstract} alt="Abstract line" />
        </div>
      </section>
    </>
  );
};

export default About;
